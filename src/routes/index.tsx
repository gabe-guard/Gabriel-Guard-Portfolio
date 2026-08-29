import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Parallax, FadeUp } from "@/components/Parallax";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { MouseBlob, HoverDrift, CursorDot } from "@/components/MouseAmbient";
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

      <CursorDot className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-accent/70" strength={26} />
      <CursorDot className="absolute left-1/2 top-1/3 h-1.5 w-1.5 rounded-full bg-primary/60" strength={40} />

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
            Designer, driver, and founder building precise mechanical things.
            Currently studying Mechanical Engineering at{" "}
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
  const items = ["Onshape", "Fusion 360", "FRC Team 6800", "CNC", "Figma", "Patent Pending", "Raspberry Pi", "Onshape Pro", "Driver"];
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
          I turn ideas into things you can <span className="italic text-primary">hold, drive, and ship.</span>
        </h2>
      </FadeUp>

      <div className="mt-12 grid gap-12 md:grid-cols-12 items-start">
        <FadeUp delay={0.05} className="md:col-span-7 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Engineering has always been the way I turn ideas into something real. I enjoy solving problems through CAD, machining, and rapid prototyping, then seeing those designs come together into a finished product. As an incoming <span className="text-foreground font-semibold">Mechanical Engineering</span> student with a <span className="text-foreground font-semibold">Robotics minor</span>, I want to continue designing machines that are simple, reliable, and built with purpose.
          </p>
          <p>
            Outside of robotics, I spend my time designing and printing projects, cooking, and bouldering. I enjoy learning new manufacturing methods and finding better ways to build things. Whether I am leading a robot design, organizing an engineering competition, or developing a product, I enjoy creating work that people can use and improve on.
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
