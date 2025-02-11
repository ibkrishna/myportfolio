import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import AOS from "aos";
import { Github } from "lucide-react";

const getRandomColor = () => {
  const colors = [
    "text-[#FF6347]",
    "text-[#32CD32]",
    "text-[#1E90FF]",
    "text-[#FFD700]",
    "text-[#8A2BE2]",
    "text-[#FF69B4]",
    "text-[#40E0D0]",
    "text-[#F4A300]",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ProjectCard = ({ project, index }) => {
  const { isDarkMode } = useTheme();

  const tags = project.tags.split(",");

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
    <div
      className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
        isDarkMode
          ? "border border-[#E9E1B4] bg-[#FFFFFF26]"
          : "border border-[#14213d] bg-[#f7f7f7] text-[#14213d]"
      }`}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={`${index * 100}`}
    >
      <div
        className={`relative overflow-hidden aspect-video p-2 animate-slide-right`}
      >
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github
            className={` ${
              isDarkMode
                ? "bg-black rounded-full p-2"
                : "bg-[#f7f7f7] text-[#14213d] rounded-full border-[#e9e1b4]"
            } absolute top-10 right-10  z-10 h-10 w-10 p-2 cursor-pointer`}
          />
        </a>
        <img
          src={isDarkMode ? project.imageDark : project.imageLight}
          alt={project.title}
          className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-110 transform scale-95 rounded-md"
        />
      </div>

      <div className={`bottom-0 left-0 right-0 p-6 md:mb-2`}>
        <div className="flex items-center justify-between">
          <h3 className={`text-xl ${isDarkMode ? "text-white" : "text-[#14213d]"}`}>
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            <ExternalLink
              className={`w-5 h-5 ${
                isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
              }`}
            />
          </a>
        </div>
        <p
          className={`mt-2 text-md line-clamp-2 ${
            isDarkMode ? "text-white" : ""
          }`}
        >
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-sm font-medium py-1 px-3 rounded-full ${getRandomColor()}`}
            >
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
