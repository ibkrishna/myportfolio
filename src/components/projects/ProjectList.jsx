import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectList = () => {
  const { isDarkMode } = useTheme();

  const projectData = [
    {
      title: "Personal Portfolio ",
      description:
        "Built a sleek and interactive portfolio to showcase skills, projects, and achievements. Features a minimalist design, smooth animations, and a dark mode toggle for an enhanced user experience.",
      technologies: [ "JSX","React.js",  "Redux","Tailwind CSS", "Node.js"],
      link: "https://ibkrishna.in",
      github: "https://github.com/ibkrishna/myportfolio",
    },
    {
      title: "Innowide Technologies",
      description:
       "The Innowide Technologies Website showcases the company's cutting-edge IT solutions, specializing in software development, cloud integration, and data management. Built with React, Redux, Firebase, Tailwind CSS, and Node.js, the site provides a highly interactive and responsive experience, offering seamless navigation and real-time data updates for clients.",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"," Node.js"],
      link: "https://innowidetechnologies.com",
      github: "https://github.com/ibkrishna/Innowide",
    },
    {
      title: "Cateyesentertainment ",
      description:
       "The Katieentertainment Website is a vibrant platform showcasing the creativity and projects of a dynamic production house. It integrates OpenAPI for seamless content updates, along with Redux for efficient state management. The site utilizes HTML, CSS, Tailwind CSS, and JavaScript for a responsive, interactive user experience, bringing entertainment content to life.",
      technologies: ["OpenAPI", "Redux", "HTML","CSS", "Tailwind Css","Javascript"],
      link: "https://cateyesentertainment.in",
      github: "https://github.com/ibkrishna/Cateyesentertainment",
    },
    {
      title: "Katieentertainment ",
      description:
        "Built a sleek and interactive portfolio to showcase skills, projects, and achievements. Features a minimalist design, smooth animations, and a dark mode toggle for an enhanced user experience.",
      technologies: ["HTML","Tailwind CSS","JavaScript"],
      link: "https://katieentertainment.com",
      github: "https://github.com/ibkrishna/Katieentertainment",
    },
    {
      title: "Corplyx Technologies",
      description:
        "The Corplyx Website is a modern IT platform offering innovative solutions in software development, cloud services, and IT consulting. Built with React, Redux, Tailwind CSS, SCSS, Bootstrap, Node.js, and MongoDB, the website features a dynamic, responsive design, ensuring seamless user interaction and a high-performance backend for optimized services.",
      technologies: ["React", "Redux", "Tailwind CSS","SCSS","Bootstrap","Node.js","Mongodb"],
      link: "https://corplyxtechnology.com/",
      github: "https://github.com/ibkrishna/Corplyx",
    },
    {
      title: "Epitozainfotech",
      description:
        "The Epitozainfotech  showcases the IT services offered by Epitozainfotech, including web development, IT consulting, and cloud solutions. The site features a modern, responsive design built with HTML, CSS, JavaScript, and Tailwind CSS, providing an engaging user experience and reflecting the company’s innovative approach to IT services.",
      technologies: ["HTML","CSS","Javascript","Tailwind CSS"],
      link: "https://epitozainfotech.com",
      github: "https://github.com/ibkrishna/Epitozainfotech",
    },
    {
      title: "Playscapeshippers ",
      description:
       "he Playscapeshippers  is designed for a logistics company, providing seamless access to services such as shipping, freight management, and supply chain solutions. Built with HTML, CSS, JavaScript, and Tailwind CSS, the website ensures a responsive, user-friendly interface, offering clients a smooth experience when tracking shipments and services.",
      technologies: ["HTML","CSS", "Tailwind CSS", "Javascript", " UI tech"],
      link: "https://playscapeshippers.com",
      github: "https://github.com/ibkrishna/Playscapeshippers",
    },
    {
      title: "Shivdharalogistics",
      description:
        "The Shivdharalogistic  delivers a seamless digital experience for logistics management, offering comprehensive solutions for freight, transportation, and warehousing. With an emphasis on reliability and efficiency, the site integrates easy navigation and modern design using HTML, CSS, JavaScript, and Tailwind CSS, ensuring smooth operations for businesses and customers alike.",
      technologies: ["HTML","CSS", "Tailwind CSS", "Javascript", " UI tech"],
      link: "https://shivdharalogistic.in",
      github: "https://github.com/ibkrishna/Shivdharalogistic",
    },
    {
      title: "Marinashipping",
      description:
       "The Marinashipping  is designed to streamline the maritime logistics process, offering a range of services such as shipping, port management, and cargo tracking. Built with HTML, CSS, JavaScript, and Tailwind CSS, the site ensures smooth user interactions and easy access to real-time shipping information for global clients.",
      technologies: ["HTML","CSS", "Tailwind CSS", "Javascript", " UI tech"," Firebase"],
      link: "https://marinashipping.in",
      github: "https://github.com/ibkrishna/Marinashipping",
    },
    {
      title: "Maxdigitalsolution ",
      description:
       "The Maxdigitalsolution  is a cutting-edge platform dedicated to transforming education through digital solutions. Offering a range of e-learning tools, online courses, and interactive resources, the website provides an intuitive experience for students and educators. Built with HTML, CSS, JavaScript, and Tailwind CSS, it ensures accessibility and smooth navigation",
      technologies: ["HTML","CSS", "Tailwind CSS", "Javascript", " UI tech"," Firebase"],
      link: "https://maxdigitalsolution.com/",
      github: "https://github.com/ibkrishna/Maxdigitalsolution",
    },
    {
      title: "Ratnabanlogistics ",
      description:
        "The Ratnabanlogistics  offers a robust platform for managing logistics and supply chain services, including transportation, warehousing, and freight solutions. Designed for efficiency, the site features a user-friendly interface built with HTML, CSS, JavaScript, and Tailwind CSS, enabling clients to easily track shipments and access services in real-time.",
      technologies: ["HTML","CSS", "Tailwind CSS", "Javascript", " UI tech"," Firebase"],
      link: "https://ratnabanlogistics.com",
      github: "https://github.com/ibkrishna/Ratnabanlogistics",
    },
    {
      title: "cloudaxis ",
      description:
        "The Cloudaxis  serves as a gateway to cutting-edge cloud solutions, offering services like cloud migration, infrastructure management, and IT consulting. Built with HTML, CSS, JavaScript, and Tailwind CSS, the website ensures a sleek, responsive design, providing users with an intuitive experience and seamless access to advanced cloud technologies.",
      technologies: ["HTML","CSS", "Tailwind CSS", "Javascript", " UI tech"," Firebase"],
      link: "https://cloudaxis.in",
      github: "https://github.com/ibkrishna/cloudaxis",
    },
    
  ];

  // Technology color mapping
  const techColors = {
    React: "text-blue-500",
    "Tailwind CSS": "text-teal-500",
    "Node.js": "text-green-500",
    Redux: "text-purple-500",
    Firebase: "text-orange-500",
    OpenAPI: "text-red-500",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 md:mx-2">
      <div className={`lg:mx-14 px-4`} style={{ fontFamily: "Inria Sans" }}>
        <h2
          data-aos="fade-right"
          className={`text-4xl md:py-10 md:text-5xl font-medium text-center mb-16 ${
            isDarkMode ? "text-[#E3D5A7]" : "text-[#14213D]"
          }`}
        >
          A Curated List of Our Impactful Projects
        </h2>
        <div className={`space-y-6`}>
          {projectData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              // data-aos-delay={index * 500}
              className={`p-6 rounded-lg transition-all duration-300 border  ${
                isDarkMode
                  ? "bg-[#FFFFFF15] border border-[#E9E1B4]"
                  : "bg-[#f7f7f7] border-[#14213d] hover:bg-gray-50"
              }`}
            >
              <div className="flex md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3
                    className={`text-sm md:text-xl lg:text-2xl font-medium ${
                      isDarkMode ? "text-[#E9E1B4]" : "text-[#14213D]"
                    }`}
                    style={{ fontFamily: "Inria Sans" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:gap-10">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="p-3 md:p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink
                      className={`w-4 h-4 md:h-6 md:w-6 ${
                        isDarkMode ? "text-[#E9E1B4]" : "text-[#14213D]"
                      }`}
                    />
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-transform hover:scale-110 ${
                      isDarkMode
                        ? "border border-[#E9E1B4] p-2 rounded-full"
                        : "bg-[#14213D] p-2 rounded-full"
                    }`}
                  >
                    <Github
                      className={`w-5 h-5 ${
                        isDarkMode ? "text-white" : "text-white"
                      }`}
                    />
                  </a>
                </div>
              </div>
              <p
                className={`mt-4 max-w-6xl text-xs md:text-lg ${
                  isDarkMode ? "text-white" : "text-[#14213D]"
                }`}
                style={{ fontFamily: "Inria Sans" }}
              >
                {expandedIndex === index
                  ? item.description
                  : `${item.description.substring(0, 100)}...`}
              </p>
              <div className="mt-2">
                {item.description.length > 100 && (
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`text-sm font-medium py-1 px-3 rounded-full ${
                      techColors[tech] || "text-gray-500"
                    }`}
                    style={{ fontFamily: "Inria Sans" }}
                  >
                    # {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
