import { projects } from "../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectHero from "./components/ProjectHero";
import { Metadata } from "next"; // Import Metadata if you plan to use generateMetadata

// Define the expected props type for a Next.js page component
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Destructure both params and searchParams to match the Props type
export default function ProjectDetailPage({ params, searchParams }: Props) {
  // Use the defined Props type
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  // You can optionally use searchParams now or later
  // console.log(searchParams);

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

// Optional: Add generateMetadata function if needed
// Ensure it uses the same Props definition or compatible inline types.
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const project = projects.find((p) => p.id === params.id);
//   if (!project) return { title: "Project Not Found" };
//   return {
//     title: `${project.title} | Project Details`,
//     description: project.description,
//   };
// }
