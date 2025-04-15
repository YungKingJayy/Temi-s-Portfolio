"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedButtonProps {
  href?: string;
  label: string;
  target?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "link" | "button";
  buttonType?: "button" | "submit" | "reset";
}

const AnimatedButton = ({
  href = "",
  label,
  target = "_blank",
  className = "",
  icon = <ChevronRight size={16} />,
  onClick,
  type = "link",
  buttonType = "button",
}: AnimatedButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const commonProps = {
    className: `relative flex items-center bg-secondary hover:bg-secondary/85 rounded-[14px] ps-6 pe-[18px] py-3 text-base leading-[1.2em] font-medium text-white transition-all duration-300 ease-in-out overflow-hidden gap-2 ${className}`,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };

  const content = (
    <>
      <span className="whitespace-nowrap">{label}</span>
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
                transition: { duration: 0.3 },
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
                    x: { duration: 0.3 },
                  },
                }}
                transition={{
                  y: { duration: 0.3 },
                  x: { duration: 0.3 },
                }}
              >
                {icon}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );

  if (type === "button" || onClick) {
    return (
      <button type={buttonType} onClick={onClick} {...commonProps}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} target={target} {...commonProps}>
      {content}
    </Link>
  );
};

export default AnimatedButton;
