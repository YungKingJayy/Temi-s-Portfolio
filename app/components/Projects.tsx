import Image from 'next/image';
import React from 'react';
import ButtonVariant from './ui/ButtonVariant';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Aero Landing page design',
      description: 'This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.',
      imageUrl: '/images/slide1.png'
    },
    {
      id: 2,
      title: 'Dreamland App Concept',
      description: "A dreamy mobile app prototype designed for mindfullness and relaxation.",
      imageUrl: '/images/slide2.png'
    },
    // {
    //   id: 3,
    //   title: 'Project 3',
    //   description: 'Description of Project 3',
    //   imageUrl: '/images/slide3.png'
    // }
  ];

  return (
    <section className="mt-28 max-w-[510px] flex flex-col items-center">
      <h2 className="text-[2rem] font-semibold leading-[110%] tracking-[-0.03em] text-center">Here&apos;s What I&apos;ve been Up To.</h2>
      <div className="flex flex-col gap-7 mt-8 w-full">
        {projects.map((project) => (
          <div key={project.id} className="w-full p-4 pb-8 flex flex-col gap-6 overflow-hidden rounded-[25px] border border-black/10">
            <div className="w-full rounded-[20px] overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-[20px] w-full h-auto object-cover"
                width={800} // or whatever the image's original width is
                height={600}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-2xl leading-[110%] tracking-[-0.03em]">{project.title}</p>
              <p className="text-primary text-base tracking-[0.01em] leading-[1.4em]">{project.description}</p>
              <ButtonVariant href="#" label="View Project" className="self-start" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
