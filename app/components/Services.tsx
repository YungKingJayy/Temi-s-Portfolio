import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Web Development",
    image1: "/images/web/slide1.webp",
    image2: "/images/web/slide2.webp",
  },
  {
    title: "Creative Design",
    image1: "/images/creative/slide1.webp",
    image2: "/images/creative/slide2.webp",
  },
  {
    title: "Branding",
    image1: "/images/branding/slide1.webp",
    image2: "/images/branding/slide2.webp",
  },
  {
    title: "Product Design",
    image1: "/images/product/slide1.webp",
    image2: "/images/product/slide2.webp",
  },
];

const Services = () => {
  return (
    <section className="max-w-[510px] py-20">
      <h2 className="text-[1.625rem] sm:text-[2rem] font-semibold leading-[110%] tracking-[-0.03em] text-center">
        How Can I Help?
      </h2>
      <p className="font-normal text-primary text-sm sm:text-base tracking-[0.01em] leading-[1.4em] mt-4 mb-8 text-center">
        Let’s turn your vision into something amazing.
      </p>
      <div className="grid grid-cols-2 gap-[10px]">
        {services.map((service, index) => (
          <div
            className="w-full rounded-[15px] bg-[#fafafa] border border-[#f2f2f2] relative overflow-hidden before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-16 before:bg-[linear-gradient(to_bottom,#fafafa_40%,rgba(250,250,250,0)_100%)] before:z-10 before:pointer-events-none"
            key={index}
            style={{
              boxShadow: "rgb(255, 255, 255) 0px 3px 0px 0px inset",
              transform: "none",
            }}
          >
            <div className="relative z-0 p-5">
              <div className="h-24 mb-4 flex items-center justify-center text-gray-400"></div>
              <h3 className="font-medium text-base text-black leading-[1.2em] tracking-[-0.02em]">
                {service.title || `Service ${index + 1}`}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
