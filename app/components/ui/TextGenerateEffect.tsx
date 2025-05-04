"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
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
  // const wordsArray = words.split(" ");
  const [currentFontSize, setCurrentFontSize] = useState<string>("2.625rem");

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
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    // Split the entire text by periods first
    const sentences = words.split(".").filter(Boolean);

    return (
      <motion.div ref={scope} className="flex flex-col">
        {sentences.map((sentence, sentenceIdx) => {
          // Split each sentence into words
          const sentenceWords = sentence.trim().split(" ").filter(Boolean);

          return (
            <div key={`sentence-${sentenceIdx}`} className="text-nowrap">
              {sentenceWords.map((word, wordIdx) => {
                return (
                  <motion.span
                    key={`${sentenceIdx}-${word}-${wordIdx}`}
                    className="text-black opacity-0"
                    style={{
                      filter: filter ? "blur(10px)" : "none",
                      y: "10px", // Initial position (offset down)
                      display: "inline-block", // Ensures the transform works correctly
                      marginRight: "0.15em", // Add space between words
                    }}
                  >
                    {word}
                    {/* Add period back at the end of non-empty words if it's not the last sentence */}
                    {wordIdx === sentenceWords.length - 1 &&
                    sentenceIdx < sentences.length - 1
                      ? "."
                      : ""}
                  </motion.span>
                );
              })}
            </div>
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
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
