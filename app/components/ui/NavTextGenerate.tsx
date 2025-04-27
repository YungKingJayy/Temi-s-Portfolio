"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const NavTextGenerate = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  fontSize = { mobile: "2rem", default: "2.625rem" },
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  fontSize?: string | { mobile?: string; default?: string };
}) => {
  const [scope, animate] = useAnimate();
  const [currentFontSize, setCurrentFontSize] = useState<string>("2.625rem");

  // Split into individual characters instead of words
  const characters = words.split("");

  // Handle responsive font size
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      if (typeof fontSize === "string") {
        setCurrentFontSize(fontSize);
      } else {
        const mobileFontSize = fontSize.mobile || "2rem";
        const defaultFontSize = fontSize.default || "2.625rem";
        setCurrentFontSize(isMobile ? mobileFontSize : defaultFontSize);
      }
    };

    // Initial setting
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [fontSize]);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        y: 0, // End position (no offset)
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.03), // Reduced stagger time for letter-by-letter effect
      }
    );
  }, [scope.current, animate, filter, duration]);

  const renderCharacters = () => {
    return (
      <motion.div ref={scope} className="inline-flex flex-wrap">
        {characters.map((char, idx) => {
          // For spaces, use a non-breaking space
          const displayChar = char === " " ? "\u00A0" : char;

          return (
            <motion.span
              key={`char-${idx}`}
              className="text-black opacity-0"
              style={{
                filter: filter ? "blur(8px)" : "none",
                y: "10px", // Initial position (offset down)
                display: "inline-block", // Ensures the transform works correctly
                // Remove margin for better character spacing
              }}
            >
              {displayChar}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-0">
        <div
          className="text-black"
          style={{ fontSize: currentFontSize, lineHeight: "110%" }}
        >
          {renderCharacters()}
        </div>
      </div>
    </div>
  );
};
