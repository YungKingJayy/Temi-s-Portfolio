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
        className="font-semibold text-black text-2xl leading-[110%]"
        variants={itemVariants}
      >
        About
      </motion.h2>

      <motion.p
        className="text-primary font-normal text-base leading-[1.4em] mt-3"
        variants={itemVariants}
      >
        I&apos;m Temilade Oladipupo, a social media manager passionate about
        crafting engaging content and building strong digital communities. I
        specialize in creating impactful campaigns, optimizing reach, and
        driving brand growth through strategic storytelling.<br></br>
        <br></br>With a keen eye for trends and audience behavior, I develop
        content that resonates and sparks engagement. My focus is on maximizing
        visibility, fostering connections, and ensuring brands stand out in the
        ever-evolving social landscape.
      </motion.p>

      <PolaroidGallery />
    </motion.section>
  );
};

export default About;
