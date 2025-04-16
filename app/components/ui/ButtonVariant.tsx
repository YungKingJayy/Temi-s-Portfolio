"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

interface AnimatedButtonProps {
  href: string;
  label: string;
  target?: string;
  className?: string;
  icon?: React.ReactNode;
  prefetch?: boolean;
}

const ButtonVariant = ({
  href,
  label,
  target = "_blank",
  className = "",
  icon = <ChevronRight size={16} />,
  prefetch = true,
}: AnimatedButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  // Handle navigation without triggering loading states for internal links
  const handleClick = (e: React.MouseEvent) => {
    if (target === "_self" && !href.startsWith("http")) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <MotionLink
      href={href}
      target={target}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      prefetch={prefetch && target === "_self" ? true : false}
      animate={{
        paddingRight: isHovering ? 28 : 24, // expands on hover
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex items-center bg-[#f2f2f2] hover:bg-[#d1d1d1] rounded-[14px] ps-6 py-4 text-base leading-[1.2em] font-medium text-black overflow-hidden transition-colors duration-300 gap-1 ${className}`}
    >
      <span className="whitespace-nowrap">{label}</span>

      <motion.span
        className="ml-1"
        animate={{ x: isHovering ? 7 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        }}
      >
        {icon}
      </motion.span>
    </MotionLink>
  );
};

export default ButtonVariant;
