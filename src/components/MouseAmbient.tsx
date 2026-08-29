import { useRef } from "react";
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

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = ref.current?.parentElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    x.set(nx * strength);
    y.set(ny * strength);
  };

  return (
    <div
      onMouseMove={onMove}
      className="absolute inset-0 pointer-events-none"
      // capture moves at the section level without blocking content
      style={{ pointerEvents: "none" }}
    >
      <motion.div ref={ref} style={{ x: sx, y: sy }} className={className} />
    </div>
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
