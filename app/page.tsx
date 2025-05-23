import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="max-w-[1080px] w-[95%] mx-auto border-l border-r border-[#E6E6E6] flex flex-col justify-center items-center relative">
      {/* First section */}
      <div className="px-6">
        <Hero />
      </div>

      {/* Carousel section - note this remains inside the bordered container */}
      <div className="w-full mt-20 mb-16">
        {/* This is the trick - content overflows the container but container maintains borders */}
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 h-[333px]">
          <Carousel />
        </div>
      </div>

      {/* Additional content section */}
      <div className="px-6">
        {/* Additional content goes here */}
        <About />
        <Projects />
        <WorkExperience />
        <Services />
      </div>

      {/* Testimonials Carousel Section */}
      <div className="w-full mt-20 mb-16">
        {/* This is the trick - content overflows the container but container maintains borders */}
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 min-h-[300px] sm:min-h-[333px]">
          <Testimonials />
        </div>
      </div>
    </main>
  );
}
