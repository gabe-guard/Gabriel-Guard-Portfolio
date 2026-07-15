import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

  const go = useCallback((dir: number) => {
    setActive((i) => (i + dir + n) % n);
  }, [n]);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActive((i) => (i + 1) % n), 4500);
    return () => clearInterval(id);
  }, [n, reduced]);

  // relative offset (-2..2)
  const rel = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto h-[540px] sm:h-[620px] w-full max-w-4xl overflow-hidden [perspective:1200px]">
        {photos.map((p, i) => {
          const d = rel(i);
          const abs = Math.abs(d);
          if (abs > 2) return null;
          const x = d * 190; // px offset
          const scale = 1 - abs * 0.18;
          const blur = abs === 0 ? 0 : abs === 1 ? 6 : 12;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;
          const zIndex = 10 - abs;
          return (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.alt}`}
              className="absolute left-1/2 top-1/2 aspect-[9/19.5] h-[92%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-border bg-surface shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              animate={{
                x: `calc(-50% + ${x}px)`,
                scale,
                opacity,
                filter: `blur(${blur}px)`,
              }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ zIndex }}
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
                i === active ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
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
      <AnimatePresence>{null}</AnimatePresence>
    </div>
  );
}
