import React from "react";

const WorkExperience = () => {
  const workExperience = [
    {
      company: "Aura",
      position: "Lead Designer at",
      duration: "2024 - Present",
      logo: "/icons/aura.svg",
      textColor: "#0C5BD3",
      backgroundColor: "#E2EDFF",
    },
    {
      company: "Apple",
      position: "Senior UI/UX Designer at",
      duration: "2022 - 2024",
      logo: "/icons/apple.svg",
      textColor: "#000000",
      backgroundColor: "#EFEFEF",
    },
    {
      company: "Shopify",
      position: "Product Designer at",
      duration: "2020 - 2022",
      logo: "/icons/shopify.svg",
      textColor: "#5F8E3E",
      backgroundColor: "#EEFFE2",
    },
  ];

  return (
    <section className="max-w-[510px] py-20 border-b border-black/10">
      <h2 className="font-semibold text-black text-xl sm:text-2xl leading-[110%] tracking-[-0.03em]">
        Work Experience
      </h2>
      <div className="flex flex-col gap-[1.125rem] mt-[44px] max-w-[90%]">
        {workExperience.map((experience, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
            key={index}
          >
            <p className="col-span-1 text-[#B3B3B3] font-medium text-sm sm:text-base tracking-[-0.02em] leading-[1.2em]">
              {experience.duration}
            </p>
            <div className="flex gap-3 items-center col-span-2">
              <p className="text-nowrap text-[#5A5A5A] font-medium text-sm sm:text-base tracking-[-0.02em] leading-[1.2em]">
                {experience.position}
              </p>
              <div
                className="flex items-center gap-1.5 py-2 px-2.5 rounded-[10px] border border-black/10"
                style={{
                  backgroundColor: experience.backgroundColor,
                  color: experience.textColor,
                }}
              >
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="object-cover"
                />
                <p className="text-nowrap font-medium text-sm sm:text-base tracking-[-0.03em] leading-[110%]">
                  {experience.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
