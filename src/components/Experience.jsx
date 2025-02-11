import React from "react";
import { useTheme } from "../context/ThemeContext";
import Amazon from "../assets/amazon.png";
import Flipkart from "../assets/flipkart.png";
import Microsoft1 from "../assets/microsoft1.jpg";

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      year: "2023-Present",
      title: [
        "Senior Frontend Developer",
        // "Technical Lead"
      ],
      company: "Microsoft",
      description: [
        "Led the redesign of enterprise applications, enhancing performance by 30%. Focused on React.js and TypeScript to create scalable, high-performance user interfaces.",
        "Implemented CI/CD pipelines reducing deployment time by 40%.",
        "Mentored junior developers and conducted code reviews to maintain code quality.",
      ],
      logo: Amazon,
    },
    {
      year: "2019-2022",
      title: [
        "UX Researcher",
        // "Design System Lead"
      ],
      company: "Amazon",
      description: [
        "Conducted user research to refine the shopping experience. Focused on improving usability by analyzing user behavior and providing insights to optimize designs.",
        "Increased user engagement by 25% through data-driven UX improvements.",
        "Led a team of 5 researchers in conducting usability studies.",
      ],
      logo: Flipkart,
    },
    {
      year: "2018-2019",
      title: [
        "Full Stack Developer",
        // "Backend Specialist"
      ],
      company: "Flipkart",
      description: [
        "Designed and launched e-commerce platforms utilizing Node.js and React for seamless functionality and user experience.",
        "Focused on performance optimization and security enhancements to ensure a seamless user experience.",
        "Reduced page load time by 45% through optimization techniques.",
      ],
      logo: Microsoft1,
    },
  ];

  const experienceVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  return (
    <section className="mt-14 py-10 mx-4 md:mx-14 lg:mx-20">
      <div className="">
        <h2
          className={`text-3xl md:text-4xl font-medium mb-16 ${
            isDarkMode ? "text-[#E3D5A7]" : "text-[#14213D]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
        >
          Experience
        </h2>
        <div
          className="relative transform lg:translate-x-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div
            className={`absolute left-0 h-full w-0.5 translate-x-4 opacity-60 lg:translate-x-24 ${
              isDarkMode ? "bg-white" : "bg-[#14213d]"
            }`}
          />
          <div className="space-y-24 lg:px-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                data-aos="slide-up"
                variants={experienceVariants}
              >
                <div className="absolute transform -translate-x-[5.5rem] lg:-translate-x-32 top-0">
                  <div
                    className={`hidden lg:block xl:inline-block px-2 py-1 rounded-tr-lg rounded-bl-lg 
                    ${
                      isDarkMode
                        ? "bg-[#E9E1B4] text-black"
                        : "bg-[#14213D] text-[#ffffff]"
                    }
                    shadow-md border border-gray-200 w-[130px] break-words text-center`}
                  >
                    {exp.year}
                  </div>
                </div>
                <div className="absolute left-0 transform lg:translate-x-8">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      isDarkMode
                        ? "bg-[#FFFFFF26] border-[#E9E1B4]"
                        : "bg-[#14213DCC]"
                    } shadow-lg flex items-center justify-center border`}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="-translate-y-6 translate-x-4 md:-translate-y-6 lg:translate-x-12">
                  <div className={`p-6 md:max-w-4xl`}>
                    <div className="space-y-1 mb-1">
                      {Array.isArray(exp.title) ? (
                        exp.title.map((titleLine, idx) => (
                          <h3
                            key={idx}
                            className={`text-xl font-medium ${
                              isDarkMode ? "text-white" : "text-[#14213D]"
                            }`}
                          >
                            {titleLine}
                          </h3>
                        ))
                      ) : (
                        <h3
                          className={`text-xl font-medium ${
                            isDarkMode ? "text-white" : "text-[#14213D]"
                          }`}
                        >
                          {exp.title}
                        </h3>
                      )}
                    </div>
                    <p
                      className={`font-semibold mb-4 ${
                        isDarkMode ? "text-[#E9E1B4]" : "text-[#14213D]"
                      }`}
                    >
                      {exp.company}{" "}
                      <span
                        className={`lg:hidden px-1 rounded-tr-lg rounded-bl-lg ${
                          isDarkMode
                            ? "bg-[#E9E1B4] text-black"
                            : "bg-[#14213D] text-[#FFFCF2]"
                        } shadow-md border border-gray-200`}
                      >
                        {exp.year}
                      </span>
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((point, idx) => (
                          <li key={idx}>
                            <p
                              className={`${
                                isDarkMode ? "text-white" : "text-[#14213D]"
                              }`}
                            >
                              {point}
                            </p>
                          </li>
                        ))
                      ) : (
                        <li>
                          <p
                            className={`${
                              isDarkMode ? "text-white" : "text-[#14213D]"
                            }`}
                          >
                            {exp.description}
                          </p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
