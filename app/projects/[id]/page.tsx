import { projects } from "../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectHero from "./components/ProjectHero";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <section className="max-w-[1080px] w-[95%] mx-auto flex flex-col justify-center items-center">
      <div className="px-4 pt-[190px]">
        <ProjectHero project={project} />
        {project.image && (
          <div className="mb-6">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="rounded-xl w-full object-cover"
            />
          </div>
        )}
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        {project.tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-4 mt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-medium"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
