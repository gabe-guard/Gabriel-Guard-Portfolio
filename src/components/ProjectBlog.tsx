import { ArrowUpRight } from "lucide-react";
import { Breakdown } from "@/components/Breakdown";
import type { Project } from "@/data/projects";

export function ProjectBlog({ project }: { project: Project }) {
  const photos = Array.from(new Map(
    [...project.gallery, ...(project.processShots ?? [])].map((photo) => [photo.src, photo]),
  ).values());

  return (
    <article className="project-blog-content">
      <div className="container-wide">
        <div className="project-blog-prose">
          <h2 className="font-display">{project.title}</h2>
          <p>{project.summary}</p>
          {project.details && project.details.length > 0 && (
            <p>
              {project.details.map((segment, index) =>
                typeof segment === "string" ? segment : (
                  <a key={index} href={segment.href} target="_blank" rel="noopener noreferrer">{segment.text}</a>
                ),
              )}
            </p>
          )}
          {project.feature && (
            <section>
              <h3 className="font-display">{project.feature.title}</h3>
              {project.feature.body.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
          )}
        </div>

        {(project.processVideo || project.media) && (
          <section className="project-blog-section">
            <h3 className="project-pane-label">Videos</h3>
            <div className="project-blog-media">
              {project.processVideo && (
                <video src={project.processVideo} controls loop muted playsInline preload="none"
                  aria-label={`${project.title} process video`} />
              )}
              {project.media && (
                <iframe src={project.media.videoUrl} title={`${project.title} video`}
                  loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen />
              )}
            </div>
            {project.media && (
              <a className="project-blog-resource" href={project.media.pdf.src} target="_blank" rel="noopener noreferrer">
                {project.media.pdf.label} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </section>
        )}

        {photos.length > 0 && (
          <section className="project-blog-section">
            <h3 className="project-pane-label">Photos</h3>
            <div className="project-blog-media">
              {photos.map((photo) => (
                <figure key={photo.src}>
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
      {project.breakdown && <Breakdown data={project.breakdown} />}
    </article>
  );
}
