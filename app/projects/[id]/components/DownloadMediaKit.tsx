"use client";

import React from "react";

type DownloadMediaKitProps = {
  className?: string;
};

const DownloadMediaKit: React.FC<DownloadMediaKitProps> = ({ className }) => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Media kit download functionality will be implemented soon!");
  };

  return (
    <a
      href="#"
      className={`inline-block mt-3 text-primary underline font-medium ${
        className || ""
      }`}
      onClick={handleDownload}
    >
      Download Media Kit
    </a>
  );
};

export default DownloadMediaKit;
