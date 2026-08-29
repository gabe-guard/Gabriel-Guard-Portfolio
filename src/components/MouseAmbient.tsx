import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * A decorative blob that gently drifts toward the cursor within its section.
 * Non-intrusive: spring-damped, pointer-events-none, disabled for reduced motion.
 */
export function MouseBlob({
  className = "",
  strength = 40,
}: {
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 40, damping: 18, mass: 0.9 });
  const sy = useSpring(y, { stiffness: 40, damping: 18, mass: 0.9 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current?.closest("section") ?? ref.current?.parentElement;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // only respond while the cursor is near the section
      if (e.clientY < r.top - 200 || e.clientY > r.bottom + 200) return;
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      x.set(nx * strength);
      y.set(ny * strength);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, strength, x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ x: sx, y: sy }}
      className={`pointer-events-none ${className}`}
    />
  );
}

/**
 * Wrapper that nudges its children a few px toward the cursor on hover.
 * Very subtle — max `max` px of drift, spring eased.
 */
export function HoverDrift({
  children,
  className = "",
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * max);
    y.set(((e.clientY - r.top) / r.height - 0.5) * max);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
{children}
    </motion.div>
  );
}
