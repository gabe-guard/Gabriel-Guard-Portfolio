import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CourseworkSection, SkillsSection } from "@/components/CourseworkSkills";
import { CertificationsSection } from "@/components/CertificationsSection";
import { projects } from "@/data/projects";
import experience from "@/data/experience.json";
import { startHeroCloud } from "@/lib/hero-cloud.js";
import photoOne from "@/assets/intro1.jpg";
import photoTwo from "@/assets/intro2.jpg";
import photoThree from "@/assets/intro3.jpeg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gabriel Guard — Mechanical Engineering Portfolio" },
      { name: "description", content: "Gabriel Guard. Mechanical engineering at UT Austin, with work in competitive robotics, mechanical systems, and fabrication." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Hero() {
  const hero = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const motion = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hero.current && canvas.current && motion.current) {
      return startHeroCloud(hero.current, canvas.current, motion.current);
    }
  }, []);

  return (
    <section id="hero" ref={hero} aria-labelledby="hero-name">
      <div className="hero-top meta"><span>Mechanical Engineering</span><span>UT Austin</span></div>
      <h1 id="hero-name" className="hero-name"><span>Gabriel</span><span>Guard</span></h1>
      <canvas id="hero-cloud" className="hero-cloud" ref={canvas} aria-hidden="true" />
      <button className="hero-motion" ref={motion} type="button" aria-label="Pause background motion">Pause motion</button>
      <div className="hero-bottom">
        <p className="hero-description">Competitive robotics.<br />Mechanical systems and fabrication.</p>
        <a className="text-link" href="#projects-preview">Explore the work <ArrowDown className="ui-icon" /></a>
      </div>
    </section>
  );
}

function Heading({ id, label, title }: { id: string; label?: string; title: string }) {
  return <div className="section-heading">{label && <p className="meta section-label">{label}</p>}<h2 className="section-title" id={id}>{title}</h2></div>;
}

function Work() {
  const track = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState(0);

  function move(direction: number) {
    const list = track.current;
    if (!list) return;
    const stops = Array.from(list.children, (item) => (item as HTMLElement).offsetLeft);
    const max = list.scrollWidth - list.clientWidth;
    const current = list.scrollLeft;
    const targets = stops.map((stop) => Math.min(max, stop - stops[0]));
    const target = direction > 0
      ? targets.find((stop) => stop > current + 3) ?? 0
      : [...targets].reverse().find((stop) => stop < current - 3) ?? max;
    list.scrollTo({ left: target, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section id="projects-preview" className="section work-section" aria-labelledby="work-heading">
      <Heading id="work-heading" title="Engineering Projects" />
      <div className="work-carousel" aria-label="Engineering projects carousel" role="region">
        <ul className="work-track" ref={track} tabIndex={0} aria-label="Browse projects"
          onScroll={(event) => {
            const list = event.currentTarget;
            const start = (list.firstElementChild as HTMLElement).offsetLeft;
            const cards = Array.from(list.children) as HTMLElement[];
            const index = cards.findIndex((card) => card.offsetLeft - start >= list.scrollLeft - 4);
            setPosition(Math.max(0, index));
          }}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }}>
          {projects.map((project, index) => (
            <li className="work-card" key={project.slug}>
              <Link to="/projects/$slug" params={{ slug: project.slug }}>
                <figure className="work-card-media"><img src={project.cover} alt={project.title} loading="lazy" /></figure>
                <div className="work-card-body">
                  <p className="meta work-card-meta">{String(index + 1).padStart(2, "0")} / {project.category}</p>
                  <div className="work-card-heading"><h3>{project.title}</h3><ArrowUpRight className="ui-icon" /></div>
                  <p className="work-card-caption">{project.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="work-carousel-controls">
          <Link to="/projects" className="text-link">Explore all {projects.length} projects <ArrowUpRight className="ui-icon" /></Link>
          <div className="work-arrows">
            <span className="meta" aria-live="polite">{String(position + 1).padStart(2, "0")} / {projects.length}</span>
            <button className="control-button" type="button" aria-label="Previous projects" onClick={() => move(-1)}><ArrowLeft className="ui-icon" /></button>
            <button className="control-button" type="button" aria-label="Next projects" onClick={() => move(1)}><ArrowRight className="ui-icon" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="portfolio-home">
      <Hero />
      <Work />
      <section id="experience" className="section" aria-labelledby="experience-heading">
        <Heading id="experience-heading" label="Experience" title="Work Experience" />
        <div className="exp-list">
          {experience.map((item) => (
            <article className="exp-item" key={item.company + item.role}>
              <div><p className="meta exp-period">{item.period}</p><h3 className="exp-company">{item.company}</h3></div>
              <div><h4 className="exp-role">{item.role}</h4><ul className="exp-bullets">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul></div>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="section about-section" aria-labelledby="about-heading">
        <Heading id="about-heading" title="About" />
        <div className="about-gallery" role="group" aria-label="Gabriel Guard’s photos">
          {[photoOne, photoTwo, photoThree].map((photo, index) => (
            <figure className="about-shot" key={photo}><img src={photo} alt={`Portfolio photo ${index + 1}`} loading="lazy" /></figure>
          ))}
        </div>
        <div className="about-records">
          <div className="about-record"><h3 className="meta">Engineering</h3><p>I got into engineering through four years of FRC, where I learned that I enjoy building things most when there is a real problem to solve and something on the line. I have spent those years designing robots, machining parts, and taking mechanisms from CAD to the field.</p></div>
          <div className="about-record"><h3 className="meta">Education</h3><p>I am now attending UT Austin to study <strong>Mechanical Engineering</strong> with a <strong>Robotics minor</strong>, where I hope to keep building on that experience and work on the kinds of systems that first got me excited about engineering.</p></div>
          <div className="about-record"><h3 className="meta">Outside engineering</h3><p>Outside of engineering, I spend a lot of my time outdoors. I enjoy bouldering, climbing, hiking, and finding new places to explore. I also love cooking, especially experimenting with new dishes and learning how to make things from scratch. These are the things I tend to come back to when I am not working on a robot or a project.</p></div>
        </div>
        <div className="about-cta"><a className="text-link" href="#contact">Get in touch <ArrowUpRight className="ui-icon" /></a></div>
      </section>
      <CourseworkSection />
      <SkillsSection />
      <CertificationsSection />
      <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
        <p className="meta section-label">Contact</p>
        <h2 className="contact-heading" id="contact-heading">Let’s<br /><span className="gold">Connect.</span></h2>
        <div className="contact-grid">
          <div>
            <p className="contact-sub">Mechanical engineering at UT Austin. Designer, driver, founder.</p>
            <a className="text-link" href="/GabrielGuardResume.pdf" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight className="ui-icon" /></a>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:gcguard1@gmail.com"><span className="meta">Email</span><span>gcguard1@gmail.com</span><ArrowUpRight className="ui-icon" /></a>
            <a className="contact-link" href="https://www.linkedin.com/in/gabriel-guard" target="_blank" rel="noopener noreferrer"><span className="meta">LinkedIn</span><span>linkedin.com/in/gabriel-guard</span><ArrowUpRight className="ui-icon" /></a>
            <a className="contact-link" href="https://github.com/gabe-guard" target="_blank" rel="noopener noreferrer"><span className="meta">GitHub</span><span>github.com/gabe-guard</span><ArrowUpRight className="ui-icon" /></a>
            <div className="contact-link"><span className="meta">Location</span><span>Austin, TX</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
