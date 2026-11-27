import { createFileRoute } from "@tanstack/react-router";
import { ProjectBrowser } from "@/components/ProjectBrowser";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title: "Projects — Gabriel Guard" },
      { name: "description", content: "Robotics, product, research, and software projects by Gabriel Guard." },
      { property: "og:title", content: "Projects — Gabriel Guard" },
      { property: "og:description", content: "Robotics, product, research, and software projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsIndex() {
  return <ProjectBrowser />;
}
