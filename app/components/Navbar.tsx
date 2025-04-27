"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedButton from "./ui/AnimatedButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./ui/Modal";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { NavTextGenerate } from "./ui/NavTextGenerate";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
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
            ease: [0.34, 1.56, 0.64, 1],
          },
        }}
        style={{ transformOrigin: "top center" }}
        className="fixed top-9 left-0 right-0 w-min mx-auto flex items-center p-[0.3rem] rounded-[20px] gap-3.5 justify-between z-50 backdrop-blur-md bg-white/80 border border-[#E6E6E6] max-md:hidden"
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

      {/* Mobile Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 flex flex-col border-b border-[#E6E6E6] md:hidden overflow-hidden ${
          isMobileMenuOpen ? "shadow-lg" : ""
        }`}
        animate={{
          height: isMobileMenuOpen ? "auto" : "64px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/#hero">
            <Image src="/icons/home.svg" alt="Home" width={28} height={28} />
          </Link>
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-full bg-[#F3F3F3] p-3 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <div className="w-[22px] h-[22px] relative">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 9 : 4,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute bg-[#222] h-[2px] w-full rounded-full"
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 9 : 14,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute bg-[#222] h-[2px] w-full rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav Items */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 px-6 py-8"
            >
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-3 text-lg font-medium text-[#222] hover:bg-[#F3F3F3] rounded-xl px-3 py-2 transition"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                <NavTextGenerate
                  words="Instagram"
                  className="text-lg font-medium"
                  fontSize={{ mobile: "1.125rem", default: "1.125rem" }}
                  duration={0.3}
                />
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-3 text-lg font-medium text-[#222] hover:bg-[#F3F3F3] rounded-xl px-3 py-2 transition"
              >
                <Image
                  src="/icons/note.svg"
                  alt="Read my CV"
                  width={24}
                  height={24}
                />
                <TextGenerateEffect
                  words="Read my CV"
                  className="text-lg font-medium"
                  fontSize={{ mobile: "1.125rem", default: "1.125rem" }}
                  duration={0.3}
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="flex items-center gap-3 text-lg font-medium text-[#222] hover:bg-[#F3F3F3] rounded-xl px-3 py-2 transition"
              >
                <Image
                  src="/icons/x.svg"
                  alt="X (Twitter)"
                  width={24}
                  height={24}
                />
                <TextGenerateEffect
                  words="X (Twitter)"
                  className="text-lg font-medium"
                  fontSize={{ mobile: "1.125rem", default: "1.125rem" }}
                  duration={0.3}
                />
              </Link>
              <AnimatedButton
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookCallOpen(true);
                }}
                label="Book a Call"
                className="mt-2 w-full justify-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <Modal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)}>
        <div className="pt-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Book a Call
          </h2>
          <div className="custom-scrollbar rounded-lg overflow-auto h-[60vh] max-h-[600px] scrollbar-thumb-[#000] scrollbar-w-1 scrollbar !scrollbar-thumb-rounded-full !scrollbar-track-rounded-full">
            <iframe
              src="https://cal.com/temilade-oladipupo-aeo0wi/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg"
              allow="camera; microphone; fullscreen; display-capture"
              title="Book a 30-minute call with Temilade Oladipupo"
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
