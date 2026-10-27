import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Parallax, FadeUp } from "@/components/Parallax";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { MouseBlob, HoverDrift } from "@/components/MouseAmbient";
import { CourseworkSection, SkillsSection } from "@/components/CourseworkSkills";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ConnectSection } from "@/components/ConnectSection";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gabriel Guard — Mechanical Engineering Portfolio" },
      { name: "description", content: "UT Austin mechanical engineering student. FRC design lead, founder, and competition driver." },
      { property: "og:title", content: "Gabriel Guard — Portfolio" },
      { property: "og:description", content: "Designer, driver, founder. Living, interactive portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <CourseworkSection />
      <SkillsSection />
      <CertificationsSection />
      <ConnectSection />
      <FeaturedProjects />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-16 pb-28 sm:pt-20 sm:pb-36">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
      <Parallax offset={50} className="absolute -top-32 -right-40 h-[520px] w-[520px] pointer-events-none">
        <MouseBlob strength={70} className="h-full w-full rounded-full bg-accent/30 blur-3xl" />
      </Parallax>
<Parallax offset={-40} className="absolute top-1/2 -left-32 h-[420px] w-[420px] pointer-events-none">
        <MouseBlob strength={-45} className="h-full w-full rounded-full bg-primary/10 blur-3xl" />
      </Parallax>

<div className="container-wide relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Portfolio · Vol. 01 · 2026
        </motion.p>

<motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 font-display font-extrabold leading-[0.92] tracking-tight text-[clamp(3rem,10.5vw,9rem)]"
        >
          Gabriel
          <br />
          <span className="italic text-primary">Guard.</span>
        </motion.h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
Designer, maker, and founder who loves turning ideas into reality.
            Currently studying <span className="text-foreground font-semibold">Mechanical Engineering</span> at{" "}
            <span className="text-foreground font-semibold">The University of Texas at Austin</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="md:col-span-5 flex flex-wrap gap-3 md:justify-end"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="/GabrielGuardResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-primary transition-all"
            >
              View resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Mechanical Design", "Competitive Robotics", "CAD & Fabrication", "Rapid Prototyping", "Design for Manufacturing", "Mechanical Systems", "Robotics Engineering", "From CAD to Reality", "Build. Test. Improve.", "Engineering That Competes"];
  return (
    <div className="border-y border-border bg-surface overflow-hidden">
      <motion.div
        className="flex gap-12 py-5 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold flex items-center gap-12">
            {t}
            <span className="text-accent">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section className="container-wide py-24">
<FadeUp>
        <p className="eyebrow">About · 01</p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">
          A little about <span className="italic text-primary">the person behind the projects</span>
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-12 md:grid-cols-12 items-start">
        <FadeUp delay={0.05} className="md:col-span-7 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I got into engineering through four years of FRC, where I learned that I enjoy building things most when there is a real problem to solve and something on the line. I have spent those years designing robots, machining parts, and taking mechanisms from CAD to the field. I am now attending UT Austin to study <span className="text-foreground font-semibold">Mechanical Engineering</span> with a <span className="text-foreground font-semibold">Robotics minor</span>, where I hope to keep building on that experience and work on the kinds of systems that first got me excited about engineering.
          </p>
          <p>
            Outside of engineering, I spend a lot of my time outdoors. I enjoy bouldering, climbing, hiking, and finding new places to explore. I also love cooking, especially experimenting with new dishes and learning how to make things from scratch. These are the things I tend to come back to when I am not working on a robot or a project.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="md:col-span-5">
          <PhotoCarousel className="h-[280px] sm:h-[320px]" />
        </FadeUp>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="container-wide py-24">
      <FadeUp>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow">Selected work · 06</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-extrabold">A few favorites.</h2>
          </div>
          <Link to="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </FadeUp>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <FadeUp key={p.slug} delay={i * 0.08}>
            <HoverDrift>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift"
            >
              <div className="aspect-[5/4] overflow-hidden bg-surface">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{p.category}</p>
                <h3 className="mt-1.5 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
              </div>
            </Link>
            </HoverDrift>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
