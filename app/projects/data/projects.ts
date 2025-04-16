export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Aero Landing page design",
    description: "This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.",
    image: "/images/slide1.webp",
    tags: ["Next.js", "React"],
    link: "https://example.com/project-one",
    github: "https://github.com/temiladeoladipupo/project-one"
  },
  {
    id: "project-two",
    title: "Dreamland App Concept",
    description: "A dreamy mobile app prototype designs for mindfulness and relaxation.",
    image: "/images/slide2.webp",
    tags: ["TypeScript", "API"],
    link: "https://example.com/project-two",
    github: "https://github.com/temiladeoladipupo/project-two"
  },
  // Add more projects as needed
];