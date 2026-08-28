import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/Parallax";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title: "Projects — Gabriel Guard" },
      { name: "description", content: "Robotics, product, research, and software projects by Gabriel Guard." },
      { property: "og:title", content: "Projects — Gabriel Guard" },
      { property: "og:description", content: "Robotics, product, research, and software projects." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsIndex() {
  return (
    <section className="container-wide pt-20 pb-24">
      <FadeUp>
        <p className="eyebrow">Index · Projects</p>
        <h1 className="mt-3 font-display text-6xl sm:text-7xl font-extrabold tracking-tight">
          Things I've <span className="italic text-primary">built.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A gallery of robotics subsystems, products, events, and research. Click in to see the goal, the process, and the result.
        </p>
      </FadeUp>

      <div className="mt-16 grid gap-8 md:grid-cols-6">
        {projects.map((p, i) => {
const span =
            i % 6 === 0 ? "md:col-span-4" :
            i % 6 === 1 ? "md:col-span-2" :
            i % 6 === 2 ? "md:col-span-3" :
            i % 6 === 3 ? "md:col-span-3" :
            i % 6 === 4 ? "md:col-span-3" : "md:col-span-3";
          return (
            <FadeUp key={p.slug} delay={i * 0.06} className={span}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-3xl overflow-hidden bg-card border border-border hover-lift h-full"
              >
                <div className="aspect-[5/3] overflow-hidden bg-surface">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                      {p.category} · {p.year}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.tagline}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary mt-1 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
