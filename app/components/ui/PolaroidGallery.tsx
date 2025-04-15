"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PolaroidGallery = () => {
  // Container scroll animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Polaroid entrance animations
  const polaroid1Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotate: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: -8,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: -12,
      y: -15,
      x: -20,
      transition: {
        duration: 0.3,
        ease: [0.3, 1.5, 0.7, 1],
      },
    },
    // Mirror of hover animation with same duration and ease
    exit: {
      rotate: -8,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.3, 1.5, 0.7, 1],
      },
    },
  };

  const polaroid2Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotate: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 15,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: 19,
      y: -15,
      x: 20,
      transition: {
        duration: 0.3,
        ease: [0.3, 1.5, 0.7, 1],
      },
    },
    // Mirror of hover animation with same duration and ease
    exit: {
      rotate: 15,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.3, 1.5, 0.7, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center bg-transparent w-full h-[202px] mt-24"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      exit="exit"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* First Polaroid */}
      <motion.div
        variants={polaroid1Variants}
        className="absolute w-[178px] h-[202px] bg-white p-2 polaroid left-1/6 shadow-md drop-shadow-lg"
      >
        <div className="w-full h-[161px] relative">
          <Image
            src="/images/photo.jpg"
            alt="Polaroid 1"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-black mt-2 italic font-handwritten text-sm tracking-[-0.05em]">
          Some of my recent photography
        </p>
      </motion.div>

      {/* Second Polaroid */}
      <motion.div
        variants={polaroid2Variants}
        className="absolute w-[178px] h-[202px] bg-white p-2 -top-1/5 left-[40%] polaroid shadow-md drop-shadow-lg"
      >
        <div className="w-full h-[161px] relative">
          <Image
            src="/images/photo.jpg"
            alt="Polaroid 2"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-black mt-2 italic font-handwritten text-sm tracking-[-0.05em]">
          Some of my recent photography
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PolaroidGallery;
