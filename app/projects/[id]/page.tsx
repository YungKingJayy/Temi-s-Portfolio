import { projects } from "../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectHero from "./components/ProjectHero";
// import Link from "next/link";
import DownloadMediaKit from "./components/DownloadMediaKit";
import SocialShareButtons from "./components/SocialShareButtons";

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
    <section className="max-w-[510px] px-6 md:px-0 w-[95%] mx-auto flex flex-col justify-center items-center">
      <div className="pt-[110px] md:pt-[190px] flex flex-col gap-[40px] md:gap-[70px]">
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

        {/* Project Overview */}
        <div className="space-y-4">
          <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
            Project Overview
          </h2>
          <p className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]">
            {project.description}
          </p>
        </div>

        {/* Business Goals and KPIs */}
        {(project.businessGoals || project.kpis) && (
          <div className="space-y-4">
            <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
              Project Goals & KPIs
            </h2>
            {project.businessGoals && (
              <div className="mt-4">
                <h3 className="font-semibold text-black text-base sm:text-lg leading-[110%] tracking-[-0.02em] mb-3">
                  Business Goals
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.businessGoals.map((goal, index) => (
                    <li
                      key={index}
                      className="text-primary font-normal sm:text-base leading-[1.4em] text-sm tracking-[0.01em]"
                    >
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.kpis && (
              <div className="mt-4">
                <h3 className="font-semibold text-black text-base sm:text-lg leading-[110%] tracking-[-0.02em] mb-3">
                  Key Performance Indicators
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.kpis.map((kpi, index) => (
                    <li
                      key={index}
                      className="text-primary font-normal sm:text-base leading-[1.4em] text-sm tracking-[0.01em]"
                    >
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Target Audience */}
        {project.targetAudience && (
          <div className="space-y-4">
            <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
              Target Audience
            </h2>
            <p className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]">
              {project.targetAudience}
            </p>
          </div>
        )}

        {/* Your Role & Tools */}
        {(project.role || project.tools) && (
          <div className="space-y-4">
            <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
              My Contribution
            </h2>
            {project.role && (
              <div className="mt-3">
                <h3 className="font-semibold text-black text-base sm:text-lg leading-[110%] tracking-[-0.02em] mb-2">
                  My Role
                </h3>
                <p className="text-primary font-normal sm:text-base leading-[1.4em] text-sm tracking-[0.01em]">
                  {project.role}
                </p>
              </div>
            )}
            {project.tools && (
              <div className="mt-5">
                <h3 className="font-semibold text-black text-base sm:text-lg leading-[110%] tracking-[-0.02em] mb-3">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

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

        {/* Solution */}
        <div className="space-y-4">
          <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
            Solution
          </h2>
          <p className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]">
            {project.description}
          </p>
        </div>

        {/* Before/After Comparison */}
        {project.beforeAfterImages && (
          <div className="space-y-4">
            <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
              Before & After
            </h2>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex-1">
                <p className="text-sm text-primary mb-2 font-medium">Before</p>
                <Image
                  src={project.beforeAfterImages.before}
                  alt="Before"
                  width={600}
                  height={340}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary mb-2 font-medium">After</p>
                <Image
                  src={project.beforeAfterImages.after}
                  alt="After"
                  width={600}
                  height={340}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Social Media Assets */}
        {project.socialMediaAssets && project.socialMediaAssets.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
              Social Media Assets
            </h2>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {project.socialMediaAssets.map((asset, index) => (
                <div
                  key={index}
                  className="aspect-[9/16] relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={asset}
                    alt={`Social media asset ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <DownloadMediaKit />
          </div>
        )}

        {/* Client Testimonial */}
        {project.clientTestimonial && (
          <div className="space-y-4">
            <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
              Client Testimonial
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
              <p className="text-primary font-normal italic sm:text-base leading-[1.6em] text-sm tracking-[0.01em]">
                &quot;{project.clientTestimonial.quote}&quot;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div>
                  <p className="font-medium text-black">
                    {project.clientTestimonial.name}
                  </p>
                  <p className="text-sm text-primary">
                    {project.clientTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Share CTA */}
        <div className="space-y-4 border-t border-gray-200 pt-8">
          <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
            Share This Project
          </h2>
          <p className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]">
            Loved this project? Share it on social media.
          </p>
          <SocialShareButtons title={project.title} />
        </div>
      </div>
    </section>
  );
}
