import { projects } from "../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectHero from "./components/ProjectHero";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <section className="max-w-[510px] w-full mx-auto flex flex-col justify-center items-center">
      <div className="pt-[190px] flex flex-col gap-[40px] md:gap-[70px]">
        <div className="space-y-4">
          <div className="flex flex-col gap-[40px] md:gap-[70px]">
            <ProjectHero project={project} />
            {project.image && (
              <div className="">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            {project.tags && (
              <div className="flex flex-wrap gap-2">
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
            <div className="flex gap-4">
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
              {/* {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline font-medium"
            >
              GitHub
            </a>
          )} */}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
            Project Overview
          </h2>
          <p className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]">
            {project.description}
          </p>
        </div>
        {project.image && (
          <div className="">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="rounded-xl w-full object-cover"
            />
          </div>
        )}
        <div className="space-y-4">
          <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
            Solution
          </h2>
          <p className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]">
            {project.description}
          </p>
        </div>
        {project.image && (
          <div className="">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="rounded-xl w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
