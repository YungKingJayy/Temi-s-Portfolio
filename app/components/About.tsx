"use client";

import React from "react";
import PolaroidGallery from "./ui/PolaroidGallery";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for container and content
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  // Variant for the heading and paragraph
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="max-w-[510px] pt-4.5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]"
        variants={itemVariants}
      >
        About
      </motion.h2>

      <motion.p
        className="text-primary font-normal sm:text-base leading-[1.4em] mt-3 text-sm tracking-[0.01em]"
        variants={itemVariants}
      >
        Hello! I&apos;m Temi, a freelance social media specialist focused on
        driving organic growth for brands, businesses, and individuals. With
        over three years of hands-on experience, I help clients boost their
        online presence through customized strategies designed for platforms
        like Instagram, TikTok, LinkedIn, Facebook, and more. I&apos;ve had the
        pleasure of working with diverse clients across the globe, including
        mental health professionals, restaurants, tech startups, beauty
        businesses, artists, and financial literacy influencers.
        <br />
        <br />
        My goal is to deliver tangible results, increasing engagement, building
        communities, and ultimately growing your audience. I achieve this by
        developing comprehensive social media plans, creating compelling content
        (including stunning graphics, videos, and data-backed posts), writing
        attractive copy with targeted keywords, managing online communities, and
        optimizing pages. Building a consistent brand identity and utilizing SEO
        techniques are also key parts of my service.
        <br />
        <br />
        You can count on me to be reliable and proactive, capable of managing
        your social media effectively with minimal supervision while maintaining
        clear communication. I&apos;m proficient with essential tools like
        Canva, Asana, Meta Business Suite, scheduling platforms, and editing
        software. I&apos;m committed to understanding your unique needs and
        dedicating myself fully to the success of your project. Ready to elevate
        your social media presence? Let&apos;s connect and discuss how I can
        contribute to your success.
      </motion.p>

      <PolaroidGallery />
    </motion.section>
  );
};

export default About;
