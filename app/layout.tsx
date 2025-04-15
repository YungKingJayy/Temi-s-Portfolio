import type { Metadata } from "next";
import { Suspense } from "react";
import { Zeyada } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AppLoaderWrapper from "./components/ui/AppLoaderWrapper";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

// Load Zeyada font from Google
const zeyada = Zeyada({
  weight: ["400"], // Zeyada only has 400 weight
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zeyada",
});

const switzerRegular = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

export const metadata: Metadata = {
  title: "Temi's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzerRegular.className} ${zeyada.variable} antialiased overflow-x-hidden`}
      >
        <AppLoaderWrapper />
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
        {/* Additional content section */}
        <div className="px-4 max-w-[1080px] w-[95%] mx-auto flex flex-col justify-center items-center">
          {/* Additional content goes here */}
          <GetInTouch />
          <Footer />
        </div>
      </body>
    </html>
  );
}
