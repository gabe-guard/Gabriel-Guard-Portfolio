import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/photos/photo-1.svg", alt: "Placeholder 1" },
  { src: "/photos/photo-2.svg", alt: "Placeholder 2" },
  { src: "/photos/photo-3.svg", alt: "Placeholder 3" },
  { src: "/photos/photo-4.svg", alt: "Placeholder 4" },
  { src: "/photos/photo-5.svg", alt: "Placeholder 5" },
];

export function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const n = photos.length;

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + n) % n),
    [n],
  );

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActive((i) => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [n, reduced]);

  // signed shortest distance from active
  const rel = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div className="relative w-full select-none">
      <div
        className="relative mx-auto h-[560px] sm:h-[640px] w-full overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {photos.map((p, i) => {
          const d = rel(i);
          const abs = Math.abs(d);
          const visible = abs <= 2;

          // coverflow transforms
          const x = d * 42; // percent — sides tuck partly behind center
          const rotateY = d * -28; // tilt away from viewer
          const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.6;
          const blur = abs === 0 ? 0 : abs === 1 ? 5 : 10;
          const opacity = !visible ? 0 : abs === 0 ? 1 : abs === 1 ? 0.7 : 0.35;
          const zIndex = 20 - abs;
          const brightness = abs === 0 ? 1 : 0.75;

          return (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.alt}`}
              className="absolute left-1/2 top-1/2 aspect-[9/19.5] h-[90%] overflow-hidden rounded-md border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              initial={false}
              animate={{
                x: `calc(-50% + ${x}%)`,
                y: "-50%",
                rotateY,
                scale,
                opacity,
                filter: `blur(${blur}px) brightness(${brightness})`,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 0.9, 0.25, 1],
              }}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
                pointerEvents: abs > 1 ? "none" : "auto",
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next photo"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-primary transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
