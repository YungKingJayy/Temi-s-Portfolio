"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AnimatedButton from "./ui/AnimatedButton";
import Modal from "./ui/Modal";

const Hero = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="pt-[190px] max-w-[510px]"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Image
          src="/images/avatar.webp"
          alt="Temi Oladipupo"
          width={100}
          height={100}
          className="rounded-full w-[100px] h-[100px] object-cover mb-5"
          priority
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextGenerateEffect words="Hey, I'm Temilade. Dreamer & Strategist" />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-4 text-base leading-[1.4em] font-normal text-primary"
      >
        Bringing brands to life with bold visuals & seamless experiences.
        Creative strategist & aspiring innovator, always pushing boundaries.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-5 flex gap-3 items-center"
      >
        <AnimatedButton
          type="button"
          onClick={() => setIsBookCallOpen(true)}
          label="Book a Call"
          className="py-3.5"
        />

        <div className="flex items-center gap-2 px-5 py-3.5 bg-[#E1F9DC] rounded-[100px]">
          <div className="w-2 h-2 rounded-full bg-[#178D00]" />
          <p className="text-[#178D00] text-base leading-[1.2em] font-medium">
            Available for new projects
          </p>
        </div>
      </motion.div>
      <Modal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)}>
        <div className="pt-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Book a Call
          </h2>
          <div className="custom-scrollbar rounded-lg overflow-auto h-[600px] scrollbar-thumb-[#000] scrollbar-w-1 scrollbar !scrollbar-thumb-rounded-full !scrollbar-track-rounded-full custom-scrollbar">
            <iframe
              src="https://cal.com/temilade-oladipupo-aeo0wi/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg"
              allow="camera; microphone; fullscreen; display-capture"
            ></iframe>
          </div>
        </div>
      </Modal>
    </motion.section>
  );
};

export default Hero;
