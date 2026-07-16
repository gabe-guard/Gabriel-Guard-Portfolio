import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Parallax } from "@/components/Parallax";
import { CadToggle } from "@/components/CadToggle";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} — Gabriel Guard` },
      { name: "description", content: loaderData?.project.tagline ?? "" },
      { property: "og:title", content: loaderData?.project.title ?? "" },
      { property: "og:description", content: loaderData?.project.tagline ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      {/* Header */}
      <header className="container-wide pt-12 pb-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <FadeUp className="md:col-span-8">
            <p className="eyebrow">{project.category} · {project.year}</p>
            <h1 className="mt-3 font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,6rem)]">
              {project.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">{project.tagline}</p>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-4 md:pt-2">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Role</dt>
                <dd className="mt-1 text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Year</dt>
                <dd className="mt-1 text-foreground">{project.year}</dd>
              </div>
            </dl>
          </FadeUp>
        </div>
      </header>

      {/* Hero image with parallax */}
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface h-[60vh] min-h-[420px] relative">
          <Parallax offset={70} className="absolute inset-0">
            <img
              src={project.cover}
              alt={project.title}
              className="h-[120%] w-full object-cover"
            />
          </Parallax>
        </div>
      </div>

      {/* Summary + highlights */}
      <section className="container-wide grid gap-14 md:grid-cols-12 py-12">
        <FadeUp className="md:col-span-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="eyebrow">Summary</p>
          <p className="text-foreground text-2xl font-display font-semibold leading-snug tracking-tight">
            {project.summary}
          </p>
          {project.details && project.details.length > 0 && (
            <p className="text-base md:text-lg font-normal text-muted-foreground leading-relaxed">
              {project.details.map((seg, i) =>
                typeof seg === "string" ? (
                  <span key={i}>{seg}</span>
                ) : (
                  <a
                    key={i}
                    href={seg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors"
                  >
                    {seg.text}
                  </a>
                )
              )}
            </p>
          )}
        </FadeUp>
        <FadeUp delay={0.1} className="md:col-span-5">
          <p className="eyebrow mb-4">Highlights</p>
          <ul className="border-t border-border">
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 py-4 border-b border-border"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm leading-relaxed">{h}</span>
              </motion.li>
            ))}
          </ul>
        </FadeUp>
      </section>
      {/* Contribution / Accomplishments / Feature */}
      {(project.contribution || project.accomplishments || project.feature) && (
        <section className="container-wide py-10 border-t border-border grid gap-14 md:grid-cols-12">
          {project.contribution && (
            <FadeUp className="md:col-span-6 space-y-4">
              <p className="eyebrow">My Contribution</p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{project.contribution}</p>
            </FadeUp>
          )}
          {project.accomplishments && (
            <FadeUp delay={0.05} className="md:col-span-6 space-y-4">
              <p className="eyebrow">Accomplishments</p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{project.accomplishments}</p>
            </FadeUp>
          )}
          {project.feature && (
            <FadeUp delay={0.1} className="md:col-span-12 space-y-4">
              <p className="eyebrow">{project.feature.title}</p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{project.feature.body}</p>
            </FadeUp>
          )}
        </section>
      )}


      {/* CAD interactive */}
      {project.cad && project.cad.length > 0 && (
        <section className="container-wide py-10 border-t border-border">
          <FadeUp>
            <p className="eyebrow">Interactive · CAD</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight">
              Toggle the <span className="italic text-primary">views.</span>
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-10 md:grid-cols-12 items-center">
            <FadeUp className="md:col-span-4">
              <p className="text-muted-foreground leading-relaxed">
                Switch between an isolated frame view and the full powertrain to see how the mechanism comes together.
              </p>
            </FadeUp>
            <div className="md:col-span-8">
              <CadToggle views={project.cad} />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="container-wide py-10 border-t border-border">
        <FadeUp>
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight">Inside the build.</h2>
        </FadeUp>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6">
          {project.gallery.map((g) => (
            <figure
              key={g.src + g.caption}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[48%] rounded-3xl overflow-hidden border border-border bg-card"
            >
              <div className="aspect-[4/3] bg-surface overflow-hidden">
                <img src={g.src} alt={g.caption} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-5 text-sm text-muted-foreground">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container-wide py-10 border-t border-border">
        <FadeUp>
          <p className="eyebrow">Skills Gained</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight">What I sharpened.</h2>
        </FadeUp>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.skills.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Useful Links */}
      {project.links && project.links.length > 0 && (
        <section className="container-wide py-10 border-t border-border">
          <FadeUp>
            <p className="eyebrow">Useful Links</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold tracking-tight">Dig <span className="italic text-primary">deeper.</span></h2>
          </FadeUp>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.links.map((l) => (
              <li key={l.href + l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 hover-lift"
                >
                  <span className="font-display font-semibold text-base">{l.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}



      {/* Next */}
      <section className="container-wide py-10 border-t border-border">
        <p className="eyebrow mb-8">Keep going</p>
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-3xl overflow-hidden bg-card border border-border hover-lift"
            >
              <div className="aspect-[5/3] overflow-hidden bg-surface">
                <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{p.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
