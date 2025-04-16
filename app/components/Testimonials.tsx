"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import styles
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
  const slides = [
    {
      name: "David",
      role: "CEO",
      comment:
        "Temilade has an exceptional ability to transform complex problems into elegant design solutions. She was integral in redesigning our app, improving both its functionality and visual appeal. Temilade’s dedication to understanding the user's needs, combined with her technical expertise, makes her an outstanding designer to work with.",
      image: "/images/david.webp",
    },
    {
      name: "Sarah",
      role: "Head of Design",
      comment:
        "Working with Temilade was an absolute pleasure! Her keen eye for detail and deep understanding of user experience transformed our project from concept to reality. She delivered a design that was not only visually stunning but also highly intuitive for our users. Temilade’s ability to listen to feedback and iterate quickly made her an invaluable member of our team.",
      image: "/images/sarah.webp",
    },
    {
      name: "Tom",
      role: "Product Manager",
      comment:
        "Temilade is a product designer who truly elevates the design process. Her innovative approach and creative solutions helped us rethink the entire user journey. Her work doesn’t just look great—it solves real problems, making it easy for users to engage with our product. I highly recommend Temilade for any design challenges.",
      image: "/images/tom.webp",
    },
    {
      name: "Jessica",
      role: "Marketing Director",
      comment:
        "I’ve had the pleasure of collaborating with Temilade on several projects, and she never fails to impress. Her design aesthetic is both modern and functional, and her communication skills make working with her seamless. Temilade combines creativity with practicality, ensuring that every design choice serves both the brand and the user’s needs.",
      image: "/images/jessica.webp",
    },
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
      <h2 className="font-semibold text-black text-center text-2xl leading-[110%] mb-12">
        Testimonials
      </h2>
      {/* CSS-based continuous slider */}
      <div className="infinite-carousel-container w-full min-h-[333px] overflow-hidden relative">
        <div
          className="infinite-carousel-track flex gap-3.5"
          style={{
            animation: "slideAnimation 20s linear infinite",
            width: `${allSlides.length * 390}px`, // 428px width + 16px gap
          }}
        >
          {allSlides.map((slide, index) => (
            <div
              key={index}
              className="carousel-slide flex-shrink-0 w-[374px] min-h-[305px] overflow-hidden mr-4"
            >
              <div className="relative w-full h-full bg-gray-100 rounded-[20px] border border-gray-200 shadow-inner shadow-white p-6">
                <div className="relative w-full h-full rounded-[10px] overflow-hidden flex flex-col justify-between gap-[26px]">
                  {/* <Image
                    src={slide}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover drop-shadow-md"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority={index < 3}
                  /> */}
                  <p className="text-primary font-normal text-base leading-[1.4em] tracking-[0.01em]">
                    {slide.comment}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={slide.image}
                      alt={`Testimonial from ${slide.name}`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-black font-medium text-lg leading-[1.2em] tracking-[-0.02em]">
                        {slide.name}
                      </p>
                      {slide.role && (
                        <p className="text-primary font-normal text-base leading-[1.4em] tracking-[0.01em]">
                          {slide.role}
                        </p>
                      )}
                    </div>
                  </div>
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

export default Testimonials;
