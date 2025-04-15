"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AppLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // This effect runs when route changes (either pathname or search params)
  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    const startLoading = () => {
      setIsLoading(true);
      setProgress(0);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 80) {
            return Math.min(prev + (3 + Math.random() * 7), 80);
          } else if (prev < 98) {
            return Math.min(prev + (0.2 + Math.random() * 0.8), 98);
          }
          return prev;
        });
      }, 100);
    };

    const completeLoading = () => {
      clearInterval(progressInterval);
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300); // Short delay to show completed state before hiding
    };

    startLoading();

    // Use a timeout to simulate page load completion for initial load
    // In real navigation, this will be triggered by the next useEffect
    const timeout = setTimeout(completeLoading, 800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
      // Complete loading when effect cleanup runs (which happens on route change)
      completeLoading();
    };
  }, [pathname, searchParams]); // Listen to both pathname and search params changes

  if (!isLoading && progress === 0) return null;

  return (
    <div
      className={`fixed top-0 left-0 h-[3px] bg-secondary z-[9999] transition-all duration-300 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
      style={{
        width: `${progress}%`,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
}
