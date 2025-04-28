import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Web Development",
    image1: "/images/web/slide1.webp", // Assign the image that should be behind
    image2: "/images/web/slide2.webp", // Assign the image that should be in front
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
    // Added mx-auto for centering and px-4 for horizontal padding on smaller screens
    <section className="max-w-[510px] py-20 mx-auto">
      <h2 className="text-[1.625rem] sm:text-[2rem] font-semibold leading-[110%] tracking-[-0.03em] text-center">
        How Can I Help?
      </h2>
      <p className="font-normal text-primary text-sm sm:text-base tracking-[0.01em] leading-[1.4em] mt-4 mb-8 text-center">
        Let&apos;s turn your vision into something amazing.
      </p>
      <div className="grid grid-cols-2 gap-[10px]">
        {services.map((service, index) => (
          <div
            className="w-full rounded-[15px] bg-[#fafafa] border border-[#f2f2f2] relative overflow-hidden before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-16 before:bg-[linear-gradient(to_bottom,#fafafa_40%,rgba(250,250,250,0)_100%)] before:z-10 before:pointer-events-none"
            key={index}
            // Kept your inline styles
            style={{
              boxShadow: "rgb(255, 255, 255) 0px 3px 0px 0px inset",
              transform: "none",
            }}
          >
            {/* Main content container with z-0, below the ::before fade */}
            <div className="relative z-0 p-5">
              <div className="relative h-[110px] mb-4">
                {/* Back image (positioned slightly to the left) */}
                <div className="absolute transform -rotate-6 -left-4 top-2 w-[100px] h-[80px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image1}
                    alt={`${service.title} example 1`}
                    width={100}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Front image (positioned slightly to the right) */}
                <div className="absolute transform rotate-3 right-0 top-0 w-[110px] h-[85px] rounded-lg overflow-hidden shadow-md z-[1]">
                  <Image
                    src={service.image2}
                    alt={`${service.title} example 2`}
                    width={110}
                    height={85}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Service Title - Centered and added some top padding */}
              <h3 className="font-medium text-base text-black leading-[1.2em] tracking-[-0.02em] pt-2">
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
