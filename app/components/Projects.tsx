import Image from "next/image";
import React from "react";
import ButtonVariant from "./ui/ButtonVariant";
import { projects } from "../projects/data/projects";

const Projects = () => {
  return (
    <section className="mt-28 max-w-[510px] flex flex-col items-center">
      <h2 className="text-[2rem] font-semibold leading-[110%] tracking-[-0.03em] text-center">
        Here&apos;s What I&apos;ve been Up To.
      </h2>
      <div className="flex flex-col gap-7 mt-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full p-4 pb-8 flex flex-col gap-6 overflow-hidden rounded-[25px] border border-black/10"
          >
            <div className="w-full rounded-[20px] overflow-hidden">
              <Image
                src={project.image || "/placeholder-image.jpg"}
                alt={project.title}
                className="rounded-[20px] w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="flex flex-col gap-4 px-5">
              <p className="font-semibold text-2xl leading-[110%] tracking-[-0.03em]">
                {project.title}
              </p>
              <p className="text-primary text-base tracking-[0.01em] leading-[1.4em]">
                {project.description}
              </p>
              <ButtonVariant
                href={`/projects/${project.id}`}
                label="View Project"
                className="self-start"
                target="_self"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
