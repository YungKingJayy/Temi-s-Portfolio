"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedButton from "./ui/AnimatedButton";
import Image from "next/image";
import { motion, AnimatePresence, delay } from "framer-motion";
import Modal from "./ui/Modal";

type NavItemProps = {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
};

const NavItem = ({ href, icon, label, external = false }: NavItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative">
      <Link
        href={href}
        target={external ? "_blank" : "_self"}
        className="flex items-center justify-center h-full py-3.5 w-[52px] hover:w-[60px] hover:bg-[#E6E6E6] rounded-[15px] transition-all duration-300 ease-in-out"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
          priority
        />
      </Link>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <motion.div
              initial={{ filter: "blur(8px)" }}
              animate={{ filter: "blur(0px)" }}
              exit={{ filter: "blur(8px)" }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
              className="bg-[#2A2A2A]/90 text-white text-[15px] font-medium py-1.5 px-2.5 rounded-[10px]"
            >
              {label}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -30, scale: 0.7, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1],
          scale: {
            delay: 0.8,
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1], // Bouncy elastic effect for scale
          },
        }}
        style={{
          transformOrigin: "top center", // Ensures scaling happens from the top center
        }}
        className="fixed top-9 left-0 right-0 w-min mx-auto flex items-center p-[0.3rem] rounded-[20px] gap-3.5 justify-between z-50 
      backdrop-blur-md bg-white/80 border border-[#E6E6E6]"
      >
        <NavItem href="/#hero" icon="/icons/home.svg" label="Home" />

        <div className="w-[1px] h-[20px] bg-[#000000]/10 rounded-[10px]" />

        <div className="flex items-center h-full gap-0">
          <NavItem
            href="https://twitter.com"
            icon="/icons/x.svg"
            label="X(Twitter)"
            external
          />

          <NavItem
            href="https://instagram.com"
            icon="/icons/instagram.svg"
            label="Instagram"
            external
          />

          <NavItem href="/blog" icon="/icons/note.svg" label="My CV" />
        </div>

        <div className="w-[1px] h-[20px] bg-[#000000]/10 rounded-[10px]" />

        <div className="h-full flex items-center">
          <AnimatedButton
            type="button"
            onClick={() => setIsBookCallOpen(true)}
            label="Book a Call"
            className="h-full py-3.5"
          />
        </div>
      </motion.nav>
      <Modal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)}>
        <div className="pt-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Book a Call
          </h2>
          <div className="custom-scrollbar rounded-lg overflow-auto h-[600px] scrollbar-thumb-[#000] scrollbar-w-1 scrollbar !scrollbar-thumb-rounded-full !scrollbar-track-rounded-full custom-scrollbar">
            <iframe
              src="https://cal.com/mcjethro-kalu/15min"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg"
              allow="camera; microphone; fullscreen; display-capture"
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
