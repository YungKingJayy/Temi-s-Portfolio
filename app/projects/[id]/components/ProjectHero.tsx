"use client";

import { TextGenerateEffect } from "@/app/components/ui/TextGenerateEffect";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Project } from "../../data/projects";

type ProjectHeroProps = {
  project: Project; // Use the imported Project type
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="max-w-[510px] mx-auto">
      <button
        className="flex items-center gap-2 mb-6 text-[#666666] hover:text-black transition-colors duration-200 ease-in-out text-sm tracking-[-0.03em] leading-[1.3em] font-normal cursor-pointer"
        onClick={handleGoBack}
      >
        <ArrowLeft className="text-sm" />
        <p>Go back</p>
      </button>
      <div className="w-full items-end justify-between gap-4 flex">
        <TextGenerateEffect
          words={project.title}
          className="font-semibold tracking-[-0.03em] leading-[110%]"
          fontSize="32px"
        />
        <Link
          href={project.link || "#"}
          target="_blank"
          className="flex items-center gap-3.5 px-6 py-3.5 rounded-[100px] border border-black/10"
        >
          <p className="text-nowrap font-medium text-base text-black leading-[1.2em] tracking-[-0.02em]">
            Live Website
          </p>
          <Image
            src="/icons/link.svg"
            width={14}
            height={14}
            alt="Live site"
            className="mr-3"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectHero;
