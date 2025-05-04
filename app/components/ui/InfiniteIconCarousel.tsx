"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface InfiniteIconCarouselProps {
  icons: string[];
  speed?: number;
}

const InfiniteIconCarousel = ({
  icons,
  speed = 20,
}: InfiniteIconCarouselProps) => {
  // Duplicate the icons array to create the illusion of infinite scrolling
  const duplicatedIcons = [...icons, ...icons, ...icons];
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationId = requestAnimationFrame(scroll);

    function scroll() {
      if (containerRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + (speed / 100);

          // Reset position when we've scrolled through one set of icons
          if (newPosition >= icons.length * 36) {
            // Assuming each icon + gap takes about 40px
            return 0;
          }

          return newPosition;
        });

        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
        }
      }

      animationId = requestAnimationFrame(scroll);
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [icons.length, scrollPosition, speed]);

  return (
    <div className="relative w-[170px] mx-auto overflow-hidden opacity-70">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      <div
        ref={containerRef}
        className="flex gap-3 items-center"
        style={{ willChange: "transform" }}
      >
        {duplicatedIcons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt="social media icon"
            className="w-6 h-6 object-cover"
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteIconCarousel;
