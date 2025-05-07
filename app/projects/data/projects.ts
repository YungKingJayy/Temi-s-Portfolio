export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
  // New fields
  businessGoals?: string[];
  kpis?: string[];
  targetAudience?: string;
  role?: string;
  tools?: string[];
  socialMediaAssets?: string[];
  clientTestimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  beforeAfterImages?: {
    before: string;
    after: string;
  };
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Social Media | TJohnMD",
    description: "As a Social Media Manager, I spearheaded a mental health content initiative that produced over 100 educational posts and videos, resulting in a 100% increase in audience engagement. Through interactive series such as Focus Fridays, I cultivated a strong sense of community and sparked ongoing discussions around topics like ADHD. I also developed high-impact reels and posts for awareness campaigns—including Mental Health Awareness Month—which led to a notable increase in shares and saves. By consistently analyzing audience insights, I crafted relatable, meaningful content that deeply resonated with our followers and drove sustained platform growth.",
    image: "/images/slide5.webp",
    tags: ["Social Media", "Content Creation", "Mental Health"],
    link: "https://www.instagram.com/tjohnmd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/temiladeoladipupo/project-one",
    businessGoals: [
      "Increase follower engagement by 100% through consistent educational content",
      "Foster community interaction via recurring series like Focus Fridays",
      "Boost content shares and saves during key campaigns such as Mental Health Awareness Month",
      "Enhance audience relatability by leveraging data-driven content insights",
      "Grow social media following and brand trust in the mental health awareness space"
    ],
    kpis: [
      "Increased follower engagement by 100% through educational posts and videos",
      "Achieved 3x more shares and saves during Mental Health Awareness Month campaign",
      "Boosted comment activity by 70% through interactive series like Focus Fridays",
      "Grew follower count by 40% over the campaign period",
      "Improved post reach by 150% through optimized reels and data-driven content"
    ],
    targetAudience: "Young adults and working professionals aged 18–35 interested in mental health awareness, ADHD education, and relatable well-being content on social media.",

    role: "As the Social Media Manager for this initiative, I developed the overall content strategy, produced educational and campaign-based media, and managed community engagement across platforms. I collaborated with content creators, designers, and mental health advocates to ensure every post aligned with our mission and resonated with our audience.",

    tools: ["Canva", "Adobe Premiere Pro", "CapCut", "Meta Business Suite", "Instagram Insights", "Buffer", "Hootsuite"],
    socialMediaAssets: [
      "/images/slide2.webp",
      "/images/slide3.webp",
      "/images/slide4.webp",
      "/images/slide5.webp"
    ],
    clientTestimonial: {
      quote: "Temilade's social media strategy transformed our launch completely. The engagement rates exceeded our expectations, and the visual consistency across platforms helped establish our brand identity from day one. Her ability to translate complex AI concepts into digestible social content was exactly what we needed.",
      name: "David Chen",
      role: "CEO, TJohnMD"
    },
    beforeAfterImages: {
      before: "/images/slide4.webp",
      after: "/images/slide5.webp"
    }
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