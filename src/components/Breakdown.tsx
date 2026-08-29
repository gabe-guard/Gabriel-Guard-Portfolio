import { FadeUp, Parallax } from "@/components/Parallax";
import type { Breakdown as BreakdownData } from "@/data/projects";

/**
 * Breakdown section.
 * - Hero card: two text blocks on the left, a transparent render on the right that
 *   overflows the bottom border of the card but is clipped on the sides.
 *   Fine-tune placement with `hero.image.style` (any CSS position/scale values).
 * - Two cards below: transparent images clipped inside their own containers.
 * - Line-art drawing fading into the next section.
 */
export function Breakdown({ data }: { data: BreakdownData }) {
  return (
    <section className="container-wide py-10 border-t border-border">
      <FadeUp>
        <p className="eyebrow">Breakdown</p>
        <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight">
          How it <span className="italic text-primary">works.</span>
        </h2>
      </FadeUp>

      {/* Hero card */}
      <FadeUp delay={0.05}>
        <div className="mt-10 relative rounded-xl border border-border bg-card overflow-x-clip">
<div className="grid gap-8 md:grid-cols-2 p-8 md:p-10">
            <div className="space-y-8">
              {data.hero.blocks.map((b) => (
                <div key={b.heading}>
                  <h3 className="font-display text-2xl font-bold">{b.heading}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{b.body}</p>
                </div>
              ))}
              {data.hero.underText && (
                <figure className="rounded-lg overflow-hidden border border-border bg-surface">
                  <img
                    src={data.hero.underText.src}
                    alt={data.hero.underText.alt}
                    loading="lazy"
                    className="w-full object-contain"
                  />
                  <figcaption className="p-3 text-sm text-muted-foreground border-t border-border bg-card">
                    {data.hero.underText.caption}
                  </figcaption>
                </figure>
              )}
            </div>
            {data.stack && data.stack.length > 0 ? (
              /* Vertically stacked captioned images on the right */
              <div className="space-y-6">
                {data.stack.map((img, i) => (
                  <figure key={img.src + i} className="rounded-lg overflow-hidden border border-border bg-surface">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full object-contain"
                    />
                    <figcaption className="p-3 text-sm text-muted-foreground border-t border-border bg-card">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              /* spacer for the image column on desktop */
              <div className="hidden md:block min-h-[260px]" />
            )}
          </div>

          {!data.stack?.length && data.hero.image && (
            <img
              src={data.hero.image.src}
              alt={data.hero.image.alt}
              loading="lazy"
              /* Adjust placement here (or per-project via image.style) */
              style={{
                position: "absolute",
                right: "-2%",
                bottom: "-14%",
                width: "52%",
                ...data.hero.image.style,
              }}
              className="hidden md:block pointer-events-none select-none drop-shadow-xl"
            />
          )}
        </div>
      </FadeUp>

      {/* Two cards */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {data.cards.map((c, i) => (
          <FadeUp key={c.heading} delay={0.05 * i}>
            <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold">{c.heading}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
              {c.image && (
                <div className="mt-6 -mb-8 -mr-8 flex justify-end">
                  <img
                    src={c.image.src}
                    alt={c.image.alt}
                    loading="lazy"
                    style={c.image.style}
                    className="w-[80%] max-w-sm object-contain pointer-events-none select-none"
                  />
                </div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Line art fading into next section */}
      {data.lineArt && (
        <div className="relative mt-12 h-[280px] md:h-[380px] overflow-hidden">
          <Parallax offset={40} className="absolute inset-0 flex items-start justify-center">
            <img
              src={data.lineArt.src}
              alt={data.lineArt.alt}
              loading="lazy"
              style={data.lineArt.style}
              className="w-[70%] max-w-3xl object-contain opacity-70"
            />
          </Parallax>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
        </div>
      )}
    </section>
  );
}
