import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="max-w-[510px] py-9">
      <div className="flex flex-col gap-[30px] items-center">
        <p className="text-primary text-center text-base font-normal leading-[1.4em] tracking-[0.01em]">
          Copyright © 2025 Temilade Oladipupo. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-5">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/temiladeoladipupo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Linkedin />
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/temiladeoladipupo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Image
              src="/icons/x.svg"
              alt="X Logo"
              width={20}
              height={20}
              className="text-primary hover:text-secondary transition-colors"
              priority={true}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/temiladeoladipupo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Logo"
              width={20}
              height={20}
              className="text-primary hover:text-secondary transition-colors"
              priority={true}
            />
          </a>

          {/* Email */}
          <a
            href="mailto:otemilade22@gmail.com"
            aria-label="Email"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Image
              src="/icons/mail.svg"
              alt="Mail"
              width={20}
              height={20}
              className="text-primary hover:text-secondary transition-colors"
              priority={true}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
