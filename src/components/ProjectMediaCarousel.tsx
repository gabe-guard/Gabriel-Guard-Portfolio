import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { CadGalleryModel } from "@/components/CadGalleryModel";

export function ProjectMediaCarousel({ project }: { project: Project }) {
  const slides = [
    ...(project.galleryModel ? [{ ...project.galleryModel, model: true }] : []),
    { src: project.cover, caption: `${project.title} — project cover` },
    ...project.gallery.filter((image) => image.src !== project.cover),
    ...(project.cad ?? []).map((image) => ({ src: image.src, caption: `CAD · ${image.label}` })),
  ];
  const [active, setActive] = useState(0);
  const lightbox = useRef<HTMLDialogElement>(null);
  const show = (index: number) => setActive((index + slides.length) % slides.length);
  const slide = slides[active];
  const isModel = "model" in slide;

  return (
    <section className="project-overview-media" aria-label={`${project.title} project gallery`}>
      <div className="project-pane-bar project-pane-label">
        <span>{project.title}</span>
        <span aria-label={`Slide ${active + 1} of ${slides.length}`}>
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      <div className="project-media-stage">
        {isModel
          ? <CadGalleryModel src={slide.src} label={slide.caption} isolation={slide.isolation} />
          : (
            <button className="project-media-image" type="button" aria-label={`Enlarge ${slide.caption}`}
              onClick={() => lightbox.current?.showModal()}>
              <img src={slide.src} alt={slide.caption} />
              <Maximize2 size={17} aria-hidden="true" />
            </button>
          )}
        {slides.length > 1 && (
          <>
            <button type="button" onClick={() => show(active - 1)} className="project-media-control project-media-prev" aria-label="Previous slide"><ChevronLeft size={19} /></button>
            <button type="button" onClick={() => show(active + 1)} className="project-media-control project-media-next" aria-label="Next slide"><ChevronRight size={19} /></button>
          </>
        )}
      </div>
      <div className="project-media-caption project-pane-label">
        <div className="project-media-dots" aria-label="Choose slide">
          {slides.map((item, index) => (
            <button key={`${item.src}-${index}`} type="button" onClick={() => show(index)} aria-label={`Show ${item.caption}`} aria-current={active === index ? "true" : undefined} />
          ))}
        </div>
        <span aria-live="polite">{slide.caption}</span>
      </div>
      {!isModel && (
        <dialog ref={lightbox} className="project-media-lightbox" aria-label={slide.caption}>
          <div className="project-pane-bar project-pane-label">
            <span>{slide.caption}</span>
            <form method="dialog">
              <button className="project-summary-close" aria-label="Close enlarged image"><X size={16} /></button>
            </form>
          </div>
          <img src={slide.src} alt={slide.caption} />
        </dialog>
      )}
    </section>
  );
}
