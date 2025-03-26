import React from "react";
import { useTheme } from "../context/ThemeContext";
import corplyx from "../assets/corplyx.png";
import alias from "../assets/Alias.jpg";
import innowide from "../assets/innowide.png";

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      year: "August 2024 - Present",
      title: [
        "Software Development Engineer",
      ],
      company: "Innowide Technologies Pvt. Ltd.",
      description: [
        "Spearheaded the development of 5+ full-stack web applications using MERN stack (React.js, Node.js, MongoDB), increasing application deployment efficiency by 30% Spearheaded the development of 5+ full-stack web applications using MERN stack (React.js, Node.js, MongoDB), increasing application deployment efficiency by 30%",
        "Collaborated with UI/UX designers, product managers, and developers to deliver scalable software solutions, leading to a 15% reduction in project delivery time",
        "Designed and implemented responsive UIs, improving mobile user satisfaction by 20% and reducing load time across devices by 10%",
        "Conducted 50+ code reviews, resulting in a 25% reduction in code defects and enhanced team collaboration",
      ],
      logo:innowide,
    },
    {
      year: "June 2023 - July 2024",
      title: [
        "Software Developer",
      ],
      company: "Corplyx Technologies Pvt. Ltd.",
      description: [
        "Assembled and maintained 10+ React.js web applications, reducing development bugs by 30% through code optimization.",
        "Integrated Material-UI and React Bootstrap to enhance the visual appeal and responsiveness of web designs, increasing customer engagement by 18%",
        "Managed state efficiently using React Redux and Redux Toolkit in complex applications, enhancing app performance by 20%.",
        "Optimized responsive design and cross-browser compatibility, improving user satisfaction by 15% and reducing bounce rates.",
      ],
      logo: corplyx,
    },
    {
      year: "March 2023 - May 2023",
      title: [
        "Software Engineer Intern"
      ],
      company: "Alias Tech Solutions ",
      description: [
        "Produced React.js applications, improving code quality and scalability, and reducing maintenance costs by 12%.",
        "Collaborated with design and development teams, delivering user-centered products that increased client satisfaction by20%",
        " Integrated user authentication and real-time notifications using Socket.io, reducing user sign-up time by 25%",
      ],
      logo:alias,
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
    <section className="mt-14 py-10 mx-4 md:mx-6 lg:mx-20">
      <div className="">
        <h2
          className={`text-3xl md:text-4xl font-medium mb-16 mx-6 ${
            isDarkMode ? "text-[#E3D5A7]" : "text-[#14213D]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
        >
          Experience
        </h2>
        <div className="space-y-24 relative ml-8">
          {/* Single continuous vertical line */}
          <div
            className={`absolute left-0 lg:left-[200px] lg:ml-14 w-0.5 h-[calc(100%-2rem)] opacity-60 ${
              isDarkMode ? "bg-white" : "bg-[#14213d]"
            }`}
          />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative grid lg:grid-cols-[225px_1fr] gap-8"
              data-aos="slide-up"
              variants={experienceVariants}
            >
              {/* Year label */}
              <div className="hidden lg:block">
                <div
                  className={`px-2 text-sm py-2 rounded-tr-lg rounded-bl-lg whitespace-nowrap text-center
                  ${
                    isDarkMode
                      ? "bg-[#E9E1B4] text-black"
                      : "bg-[#14213D] text-[#ffffff]"
                  }
                  shadow-md border border-gray-200`}
                >
                  {exp.year}
                </div>
              </div>

              {/* Experience content */}
              <div className="relative pl-6 lg:pl-12">
                {/* Logo circle */}
                <div className="absolute left-0 -translate-x-1/2">
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

                {/* Content */}
                <div className="space-y-4">
                  <div className="space-y-1">
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
                    className={`font-semibold grid md:flex ${
                      isDarkMode ? "text-[#E9E1B4]" : "text-[#14213D]"
                    }`}
                  >
                    {exp.company}{" "}
                    <span
                      className={`lg:hidden text-xs mt-2 md:mt-0  md:ml-4 text-center py-1 rounded-tr-lg rounded-bl-lg ${
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
    </section>
  );
};

export default Experience;