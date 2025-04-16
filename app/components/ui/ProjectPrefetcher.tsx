"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { projects } from "../../projects/data/projects";

export default function ProjectPrefetcher() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch all project detail pages
    projects.forEach((project) => {
      router.prefetch(`/projects/${project.id}`);
    });

  }, [router]);

  // This component doesn't render anything visible
  return null;
}
