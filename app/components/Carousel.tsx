"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import styles
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  const slides = [
    "/images/slide1.webp",
    "/images/slide2.webp",
    "/images/slide3.webp",
    "/images/slide4.webp",
  ];

  // Create a larger array with duplicated slides for seamless looping
  const allSlides = [...slides, ...slides, ...slides];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const carouselVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={carouselVariants}
      className="w-full h-full overflow-hidden"
    >
      {/* CSS-based continuous slider */}
      <div className="infinite-carousel-container w-full h-[333px] overflow-hidden relative">
        <div
          className="infinite-carousel-track flex gap-3.5"
          style={{
            animation: "slideAnimation 20s linear infinite",
            width: `${allSlides.length * 444}px`, // 428px width + 16px gap
          }}
        >
          {allSlides.map((slide, index) => (
            <div
              key={index}
              className="carousel-slide flex-shrink-0 w-[428px] h-[333px] overflow-hidden mr-4"
            >
              <div
                className="relative w-full h-full bg-gray-100 rounded-[20px] border border-gray-200 shadow-inner shadow-white p-6"
                style={{
                  boxShadow: "rgb(255, 255, 255) 0px 3px 0px 0px inset",
                  transform: "none",
                }}
              >
                <div className="relative w-full h-full rounded-[10px] shadow-lg shadow-black/25 overflow-hidden">
                  <Image
                    src={slide}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover drop-shadow-md"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority={index < 3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation keyframes */}
      <style jsx global>{`
        @keyframes slideAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -${slides.length * 444}px
            ); /* Move exactly the width of the original slides */
          }
        }

        /* Prevent animation from pausing when tab is inactive */
        .infinite-carousel-track {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </motion.div>
  );
};

export default Carousel;
