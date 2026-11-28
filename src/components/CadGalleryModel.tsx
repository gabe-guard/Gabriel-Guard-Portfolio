import { useEffect, useRef, useState } from "react";
import type { CadIsolation } from "@/data/projects";

export function CadGalleryModel({ src, label, isolation }: { src: string; label: string; isolation?: CadIsolation }) {
  const viewport = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState("Loading CAD model…");
  const [canIsolate, setCanIsolate] = useState(false);
  const [hasAlternate, setHasAlternate] = useState(false);
  const [isolated, setIsolated] = useState(false);
  const [alternateSelected, setAlternateSelected] = useState(false);
  const selection = useRef({ isolated: false, alternate: false });

  function selectPart(value: boolean) {
    selection.current.isolated = value;
    setIsolated(value);
  }

  function changePose(alternate: boolean) {
    selection.current.alternate = alternate;
    setAlternateSelected(alternate);
  }

  useEffect(() => {
    const host = viewport.current!;
    const abort = new AbortController();
    let cleanup = () => {};

    async function load() {
      const [three, { GLTFLoader }, { OrbitControls }, { MeshoptDecoder }, response] = await Promise.all([
        import("three"),
        import("three/addons/loaders/GLTFLoader.js"),
        import("three/addons/controls/OrbitControls.js"),
        import("three/addons/libs/meshopt_decoder.module.js"),
        fetch(src, { signal: abort.signal }),
      ]);
      if (!response.ok) throw new Error(`CAD request failed (${response.status})`);
      const { scene } = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(await response.arrayBuffer(), "");
      const chassis = scene.getObjectByName("Chassis");
      const subassembly = isolation && scene.getObjectByName(isolation.node);
      const alternate = isolation?.alternate && scene.getObjectByName(isolation.alternate.node);
      const hasIsolation = Boolean(chassis && subassembly);
      const depthMaterial = new three.MeshBasicMaterial({
        colorWrite: false,
        side: three.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 2,
      });
      const geometries = new Set<import("three").BufferGeometry>();
      const materials = new Set<import("three").Material>([depthMaterial]);
      const highlight = new three.LineBasicMaterial({
        color: getComputedStyle(host).getPropertyValue("--accent").trim(),
        toneMapped: false,
      });
      materials.add(highlight);
      scene.traverse((object) => {
        const part = object as import("three").Mesh | import("three").LineSegments;
        if (!part.geometry || !part.material || Array.isArray(part.material)) return;
        geometries.add(part.geometry);
        materials.add(part.material);
        if (part instanceof three.LineSegments) {
          (part.material as import("three").LineBasicMaterial).color.set(0x000000);
          part.renderOrder = 1;
        } else {
          part.material = depthMaterial;
        }
      });
      cleanup = () => {
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
      };
      if (abort.signal.aborted) {
        cleanup();
        return;
      }

      const bounds = new three.Box3().setFromObject(scene);
      const { center, radius } = bounds.getBoundingSphere(new three.Sphere());
      scene.position.sub(center);

      const renderer = new three.WebGLRenderer({ canvas: canvas.current!, antialias: true });
      renderer.setClearColor(0xffffff);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const camera = new three.PerspectiveCamera(38, 1, radius / 100, radius * 40);
      const target = new three.WebGLRenderTarget(1, 1, {
        depthTexture: new three.DepthTexture(1, 1, three.UnsignedIntType),
        samples: Math.min(4, renderer.capabilities.maxSamples),
      });
      const outline = new three.ShaderMaterial({
        depthTest: false,
        depthWrite: false,
        uniforms: {
          image: { value: target.texture },
          depth: { value: target.depthTexture },
          pixel: { value: new three.Vector2() },
          nearPlane: { value: camera.near },
          farPlane: { value: camera.far },
          threshold: { value: radius * 0.008 },
          opacity: { value: 1 },
          overlay: { value: false },
        },
        vertexShader: `
          varying vec2 screenUv;
          void main() {
            screenUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D image;
          uniform sampler2D depth;
          uniform vec2 pixel;
          uniform float nearPlane;
          uniform float farPlane;
          uniform float threshold;
          uniform float opacity;
          uniform bool overlay;
          varying vec2 screenUv;

          float distanceAt(vec2 offset) {
            float z = texture2D(depth, screenUv + offset).r;
            return nearPlane * farPlane / (farPlane - z * (farPlane - nearPlane));
          }

          void main() {
            float center = distanceAt(vec2(0.0));
            vec2 x = vec2(pixel.x, 0.0);
            vec2 y = vec2(0.0, pixel.y);
            // A depth jump on one side marks a contour. Subtract the slope
            // on the opposite side so smooth surfaces stay clean.
            float left = distanceAt(-x) - center;
            float right = distanceAt(x) - center;
            float bottom = distanceAt(-y) - center;
            float top = distanceAt(y) - center;
            float edgeX = max(left, right) + min(0.0, min(left, right));
            float edgeY = max(bottom, top) + min(0.0, min(bottom, top));
            float ink = smoothstep(threshold, threshold * 2.0, max(edgeX, edgeY));
            vec3 color = texture2D(image, screenUv).rgb * (1.0 - ink);
            if (overlay && center > farPlane * 0.99 && color.r > 0.999) discard;
            gl_FragColor = vec4(mix(vec3(1.0), color, opacity), 1.0);
            #include <colorspace_fragment>
          }
        `,
      });
      const screen = new three.Scene();
      const screenGeometry = new three.PlaneGeometry(2, 2);
      const quad = new three.Mesh(screenGeometry, outline);
      quad.frustumCulled = false;
      screen.add(quad);
      const screenCamera = new three.Camera();
      const size = new three.Vector2();
      function renderLayer(opacity: number, overlay: boolean) {
        renderer.autoClear = true;
        renderer.setRenderTarget(target);
        renderer.render(scene, camera);
        renderer.setRenderTarget(null);
        outline.uniforms.opacity.value = opacity;
        outline.uniforms.overlay.value = overlay;
        renderer.autoClear = !overlay;
        renderer.render(screen, screenCamera);
      }
      function renderView() {
        const useAlternate = Boolean(alternate && selection.current.alternate);
        if (subassembly) subassembly.visible = !useAlternate;
        if (alternate) alternate.visible = useAlternate;
        if (!selection.current.isolated || !chassis || !subassembly) {
          renderLayer(1, false);
          return;
        }

        const selected = useAlternate && alternate ? alternate : subassembly;
        selected.visible = false;
        renderLayer(0.25, false);
        chassis.visible = false;
        selected.visible = true;
        renderLayer(1, true);
        chassis.visible = true;
      }
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.autoRotateSpeed = 0.85;
      controls.minDistance = radius * 0.7;
      let interacting = false;
      controls.addEventListener("start", () => {
        interacting = true;
        setHovered(undefined);
      });
      controls.addEventListener("end", () => { interacting = false; });
      const raycaster = new three.Raycaster();
      const pointer = new three.Vector2();
      const pickable = new Map<import("three").Object3D, import("three").Mesh[]>();
      for (const group of [chassis, subassembly, alternate]) {
        if (!group) continue;
        const surfaces: import("three").Mesh[] = [];
        group.traverse((object) => {
          if (object instanceof three.Mesh) surfaces.push(object);
        });
        pickable.set(group, surfaces);
      }
      let hovered: import("three").Object3D | undefined;
      const originalInk = new Map<import("three").LineSegments, import("three").Material>();
      let mouse: { x: number; y: number } | undefined;
      let nextPick = 0;
      let press: { x: number; y: number; id: number } | undefined;

      function setHovered(group: import("three").Object3D | undefined) {
        if (hovered === group) return;
        originalInk.forEach((material, lines) => { lines.material = material; });
        originalInk.clear();
        hovered = group;
        group?.traverse((object) => {
          if (!(object instanceof three.LineSegments) || Array.isArray(object.material)) return;
          originalInk.set(object, object.material);
          object.material = highlight;
        });
        renderer.domElement.style.cursor = group ? "pointer" : "";
      }

      function pickPart(x: number, y: number) {
        if (!chassis || !subassembly || selection.current.isolated) return;
        const rect = renderer.domElement.getBoundingClientRect();
        if (x < rect.left || x >= rect.right || y < rect.top || y >= rect.bottom) return;
        pointer.set(2 * (x - rect.left) / rect.width - 1, 1 - 2 * (y - rect.top) / rect.height);
        raycaster.setFromCamera(pointer, camera);
        const selected = selection.current.alternate && alternate ? alternate : subassembly;
        const selectedSurfaces = pickable.get(selected) ?? [];
        const [hit] = raycaster.intersectObjects([...selectedSurfaces, ...(pickable.get(chassis) ?? [])], false);
        if (hit && selectedSurfaces.some((part) => part === hit.object)) return selected;
      }

      function onPointerMove(event: PointerEvent) {
        if (event.pointerType !== "touch") mouse = { x: event.clientX, y: event.clientY };
        if (press && Math.hypot(event.clientX - press.x, event.clientY - press.y) > 5) press = undefined;
      }
      function onPointerLeave() {
        mouse = undefined;
        nextPick = 0;
        setHovered(undefined);
      }
      function onPointerDown(event: PointerEvent) {
        onPointerMove(event);
        press = event.isPrimary && event.button === 0
          ? { x: event.clientX, y: event.clientY, id: event.pointerId }
          : undefined;
      }
      function onPointerCancel() {
        press = undefined;
        onPointerLeave();
      }
      function onPointerUp(event: PointerEvent) {
        const start = press;
        press = undefined;
        if (!start || start.id !== event.pointerId ||
          Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
        if (pickPart(event.clientX, event.clientY)) {
          setHovered(undefined);
          selectPart(true);
        }
      }
      if (hasIsolation) {
        const options = { signal: abort.signal };
        renderer.domElement.addEventListener("pointerdown", onPointerDown, options);
        renderer.domElement.addEventListener("pointerup", onPointerUp, options);
        renderer.domElement.addEventListener("pointercancel", onPointerCancel, options);
        renderer.domElement.addEventListener("pointerenter", onPointerMove, options);
        renderer.domElement.addEventListener("pointermove", onPointerMove, options);
        renderer.domElement.addEventListener("pointerleave", onPointerLeave, options);
      }

      const direction = new three.Vector3(1, 0.65, 1).normalize();
      let fit = 0;
      function resizeView() {
        const { clientWidth: width, clientHeight: height } = host;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        const halfFov = three.MathUtils.degToRad(camera.fov / 2);
        const narrowFov = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
        const distance = radius / Math.sin(narrowFov);
        if (fit) camera.position.multiplyScalar(distance / fit);
        else camera.position.copy(direction).multiplyScalar(distance);
        fit = distance;
        controls.maxDistance = distance * 2;
        renderer.setSize(width, height, false);
        renderer.getDrawingBufferSize(size);
        target.setSize(size.x, size.y);
        outline.uniforms.pixel.value.set(1 / size.x, 1 / size.y);
        controls.update();
        renderView();
      }
      const resize = new ResizeObserver(resizeView);
      resize.observe(host);

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let lastFrame: number | undefined;
      const visibility = new IntersectionObserver(([entry]) => {
        lastFrame = undefined;
        renderer.setAnimationLoop(entry.isIntersecting ? (now) => {
          const delta = Math.min((now - (lastFrame ?? now)) / 1000, 0.05);
          lastFrame = now;
          controls.autoRotate = !interacting && !reduceMotion.matches;
          controls.update(delta);
          if (selection.current.isolated) setHovered(undefined);
          else if (mouse && !interacting && now >= nextPick) {
            // Refresh under a stationary pointer as the model rotates, without raycasting every frame.
            nextPick = now + 80;
            camera.updateMatrixWorld();
            setHovered(pickPart(mouse.x, mouse.y));
          }
          renderView();
        } : null);
      });
      visibility.observe(host);

      const disposeModel = cleanup;
      cleanup = () => {
        visibility.disconnect();
        resize.disconnect();
        renderer.setAnimationLoop(null);
        controls.dispose();
        setHovered(undefined);
        disposeModel();
        target.dispose();
        screenGeometry.dispose();
        outline.dispose();
        renderer.dispose();
      };
      resizeView();
      setCanIsolate(hasIsolation);
      setHasAlternate(Boolean(alternate));
      setStatus("");
    }

    void load().catch(() => {
      if (!abort.signal.aborted) {
        cleanup();
        setStatus("CAD model unavailable");
      }
    });
    return () => {
      abort.abort();
      cleanup();
    };
  }, [src, isolation]);

  return (
    <div ref={viewport} className="relative h-full w-full bg-white" role="group" aria-label={label}>
      <canvas ref={canvas} className="block h-full w-full cursor-grab active:cursor-grabbing" aria-hidden="true" />
      {status && <span role="status" className="absolute inset-0 grid place-items-center text-sm text-neutral-600">{status}</span>}
      {isolation && !status && (canIsolate || (hasAlternate && isolation.showAlternateInFullView)) && (
        <div className="absolute left-3 top-3 flex flex-wrap gap-1 bg-background/95 p-1 text-xs"
          role="group" aria-label="CAD assembly controls">
          {canIsolate && <button type="button" className="border border-border px-3 py-2 hover:bg-surface"
            aria-pressed={isolated} onClick={() => selectPart(!isolated)}>
            {isolated ? "Show full robot" : `Isolate ${isolation.label}`}
          </button>}
          {(isolated || isolation.showAlternateInFullView) && hasAlternate && isolation.alternate && [isolation.alternate.defaultLabel, isolation.alternate.label].map((value, index) => (
            <button key={value} type="button" aria-pressed={alternateSelected === Boolean(index)}
              className="border border-border px-3 py-2 hover:bg-surface aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
              onClick={() => changePose(Boolean(index))}>
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
