import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type View = { label: string; src: string };

export function CadToggle({ views }: { views: View[] }) {
  const [active, setActive] = useState(0);
  const current = views[active];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[7/5] rounded-3xl overflow-hidden bg-surface border border-border">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.label}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
          />
        </AnimatePresence>
      </div>
      <div className="mt-6 inline-flex rounded-full bg-secondary p-1.5 border border-border">
        {views.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
              i === active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
