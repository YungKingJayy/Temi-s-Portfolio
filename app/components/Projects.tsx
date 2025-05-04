import Image from "next/image";
import React from "react";
import ButtonVariant from "./ui/ButtonVariant";
import { projects } from "../projects/data/projects";
import InfiniteIconCarousel from "./ui/InfiniteIconCarousel";

const Projects = () => {
  const icons = [
    "/icons/linkedin-grey.png",
    "/icons/facebook-grey.png",
    "/icons/instagram-grey.png",
    "/icons/twitter-grey.png",
    "/icons/tiktok-grey.png",
  ];

  return (
    <section className="mt-28 max-w-[510px] flex flex-col items-center">
      <div className="w-full mb-8">
        <InfiniteIconCarousel icons={icons} />
      </div>
      <h2 className="text-xl sm:text-[2rem] font-semibold leading-[110%] tracking-[-0.03em] text-center">
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
                src={project.image || "/placeholder-image.webp"}
                alt={project.title}
                className="rounded-[20px] w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="flex flex-col gap-4 px-5">
              <p className="font-semibold text-lg sm:text-2xl leading-[110%] tracking-[-0.03em]">
                {project.title}
              </p>
              <p className="text-primary text-sm sm:text-base tracking-[0.01em] leading-[1.4em]">
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
