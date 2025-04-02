import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="max-w-[1080px] mx-auto border-l border-r border-[#E6E6E6] px-4 flex flex-col justify-center items-center relative">
      {/* <h1 className="font-semibold text-[2.625rem]">Hey, I’m Mia Carter. Dreamer & Designer</h1> */}
      <Navbar />
      <Hero />
    </main>
  );
}
