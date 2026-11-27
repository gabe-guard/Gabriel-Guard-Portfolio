import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ProjectMediaCarousel } from "@/components/ProjectMediaCarousel";
import { ProjectBlog } from "@/components/ProjectBlog";
import { projects, type Project } from "@/data/projects";

export function ProjectBrowser({ project }: { project?: Project }) {
  const index = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = index.current;
    const active = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!list || !active || !list.clientHeight) return;
    const listBounds = list.getBoundingClientRect();
    const itemBounds = active.getBoundingClientRect();
    if (itemBounds.bottom > listBounds.bottom) list.scrollTop += itemBounds.bottom - listBounds.bottom;
    if (itemBounds.top < listBounds.top) list.scrollTop -= listBounds.top - itemBounds.top;
  }, [project?.slug]);

  return (
    <div className={`project-browser${project ? " has-project" : ""}`}>
      <header className="project-browser-heading project-pane-label">
        <Link to="/projects" className="project-mobile-back"><ArrowLeft size={15} /> Projects</Link>
        {project
          ? <span className="project-browser-title">Engineering Projects</span>
          : <h1 className="project-browser-title">Engineering Projects</h1>}
        <span>{projects.length} projects</span>
      </header>

      <div className="project-browser-grid">
        <nav className="project-browser-index" aria-label="Project index">
          <div className="project-pane-bar project-pane-label">Index</div>
          <ul ref={index} className="project-browser-list">
            {projects.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: item.slug }}
                  className="project-browser-item"
                  aria-current={project?.slug === item.slug ? "page" : undefined}
                >
                  <div className="min-w-0">
                    <p className="project-pane-label text-primary">{item.category} · {item.year}</p>
                    <p className="project-browser-item-title">{item.title}</p>
                    <p className="project-browser-item-sub">{item.tagline}</p>
                  </div>
                  <ArrowRight className="project-browser-item-arrow" size={15} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {project ? (
          <>
            <section className="project-browser-summary" aria-labelledby="project-title">
              <div className="project-pane-bar project-pane-label">
                <span>Summary</span>
                <Link to="/projects" className="project-summary-close" aria-label="Close project">
                  <X size={15} aria-hidden="true" />
                </Link>
              </div>
              <div className="project-summary-copy" key={project.slug}>
                <h1 id="project-title" className="project-summary-title font-display">{project.title}</h1>
                <p className="project-pane-label project-summary-category">{project.category} · {project.tagline}</p>
                <p className="project-summary-intro">{project.summary}</p>
                {project.highlights.length > 0 && (
                  <ul className="project-summary-highlights" aria-label="Highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
                <dl className="project-summary-facts">
                  <div><dt className="project-pane-label">Role</dt><dd>{project.role}</dd></div>
                  <div><dt className="project-pane-label">Year</dt><dd>{project.year}</dd></div>
                </dl>
                {project.skills.length > 0 && (
                  <>
                    <h2 className="project-pane-label project-summary-subhead">Skills</h2>
                    <ul className="project-summary-skills">
                      {project.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </>
                )}
                {project.links && project.links.length > 0 && (
                  <>
                    <h2 className="project-pane-label project-summary-subhead">Useful links</h2>
                    <ul className="project-summary-links">
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}<ArrowUpRight size={13} aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </section>
            <ProjectMediaCarousel key={project.slug} project={project} />
          </>
        ) : (
          <p className="project-browser-idle project-pane-label">Select a project</p>
        )}
      </div>

      {project && (
        <details key={project.slug} className="project-blog">
          <summary className="project-blog-toggle project-pane-label">
            Project blog <ChevronDown size={20} aria-hidden="true" />
          </summary>
          <ProjectBlog project={project} />
        </details>
      )}
    </div>
  );
}
