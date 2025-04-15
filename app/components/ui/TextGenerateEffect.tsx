"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  fontSize = "2.625rem",
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  fontSize?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
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
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
                y: "10px", // Initial position (offset down)
                display: "inline-block", // Ensures the transform works correctly
                marginRight: "0.15em", // Add space between words
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-0">
        <div className="text-black" style={{ fontSize, lineHeight: "110%" }}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
