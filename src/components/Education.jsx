import React, { useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  const { isDarkMode } = useTheme();

  const educationData = [
    {
      degree: "MSc in Computer Science, University College London",
      college: "University College London",
    },
    {
      degree: "BSc Maths and Physics, Imperial College London",
      college: "Imperial College London",
    },
    {
      degree: "MSc in Computer Science, University College London",
      college: "University College London",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className={`mt-14 py-10 ${isDarkMode ? "bg-[#FFFFFF26]" : "bg-[#f7f7f7]"}`}>
      <div className="" style={{ fontFamily: "Inria Sans" }}>
        <h1
          className={`mx-4 md:mx-14 lg:mx-20 text-3xl md:text-4xl font-medium mb-6 ${
            isDarkMode ? "text-[#e9e1b4]" : "text-[#14213d]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
        >
          Education
        </h1>
        <div className="space-y-6 py-10 mx-4 md:mx-14 lg:mx-20">
          {educationData.map((item, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay={`${index * 200}`}
              className={`flex justify-between items-center border-b ${
                isDarkMode ? "border-[#FFFADF]" : "border-[#14213d]"
              } pb-4`}
            >
              <div className="flex items-center space-x-4">
                <GraduationCap
                  className={`h-6 w-6 md:h-10 md:w-10 lg:w-14 mx-10 lg:h-14 ${
                    isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
                  }`}
                />
              </div>
              <div className="flex-grow text-center">
                <span
                  className={`text-xs md:text-md lg:text-xl ${
                    isDarkMode ? "text-white" : "text-[#14213d]"
                  }`}
                >
                  {item.degree}
                </span>
              </div>
              <div className="flex justify-end">
                <span
                  className={`text-xs md:text-md lg:text-xl ${
                    isDarkMode ? "text-[#CACACA]" : "text-[#14213d]"
                  }`}
                >
                  {item.college}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
