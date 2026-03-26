import projects from "@/data/projects.json";
import ProjectClientPage from "./ProjectClientPage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project: any) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectClientPage project={project} />;
}