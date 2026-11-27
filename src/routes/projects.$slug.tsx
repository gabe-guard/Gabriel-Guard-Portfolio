import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectBrowser } from "@/components/ProjectBrowser";
import { getProject } from "@/data/projects";

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
      { property: "og:title", content: `${loaderData?.project.title ?? "Project"} — Gabriel Guard` },
      { property: "og:description", content: loaderData?.project.tagline ?? "" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return <ProjectBrowser project={project} />;
}
