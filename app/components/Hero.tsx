"use client";

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section
      className="pt-[190px] max-w-[510px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Image
          src="/images/avatar.jpg"
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
        Bringing brands to life with bold visuals & seamless experiences. Creative strategist & aspiring innovator, always pushing boundaries.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-5 flex gap-3 items-center"
      >
        <Link
          href="/"
          target="_blank"
          className="relative flex items-center bg-secondary hover:bg-secondary/50 rounded-[14px] px-5 py-3 text-base leading-[1.2em] font-medium text-white transition-all duration-300 ease-in-out overflow-hidden gap-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="whitespace-nowrap">Book a Call</span>
          <div className="flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              {isHovering && (
                <motion.div
                  className="overflow-hidden flex items-center justify-center ml-1"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "16px", opacity: 1 }}
                  exit={{
                    width: 0,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 15, x: -30 }}
                    animate={{ y: 0, x: 0 }}
                    exit={{
                      y: 20,
                      x: -5,
                      transition: {
                        y: { duration: 0.3 },
                        x: { duration: 0.3 }
                      }
                    }}
                    transition={{
                      y: { duration: 0.3 },
                      x: { duration: 0.3 }
                    }}
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
        <div className="flex items-center gap-2 px-5 py-3 bg-[#E1F9DC] rounded-[100px]">
          <div className="w-2 h-2 rounded-full bg-[#178D00]" />
          <p className="text-[#178D00] text-base leading-[1.2em] font-medium">Available for new projects</p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero;
