"use client";

import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

type SocialShareButtonsProps = {
  title: string;
};

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ title }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="flex gap-4 mt-4">
      <Link
        href={`https://twitter.com/intent/tweet?text=Check out this amazing project: ${title}&url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2]/20 transition-colors"
      >
        <Twitter size={18} />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-[#0A66C2]/10 text-[#0A66C2] rounded-full hover:bg-[#0A66C2]/20 transition-colors"
      >
        <Linkedin size={18} />
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-[#1877F2]/10 text-[#1877F2] rounded-full hover:bg-[#1877F2]/20 transition-colors"
      >
        <Facebook size={18} />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center bg-[#E4405F]/10 text-[#E4405F] rounded-full hover:bg-[#E4405F]/20 transition-colors"
      >
        <Instagram size={18} />
      </Link>
    </div>
  );
};

export default SocialShareButtons;
