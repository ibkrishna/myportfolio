import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";
import Scroll from "../scroll/RightScroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Ecomlight from "../../assets/ecomlight1.png";
import Ecomdark from '../../assets/Ecommerce.png';
import Careerloom from '../../assets/carrerloom.png';
import LivesCarelight from '../../assets/livescaredark.png';
import LivesCareDark from '../../assets/livescaredark.png';
import Eshikshamitra from '../../assets/Eshikshamitra.png';


const projectsData = [
  {
    id: 1,
    title: "Eshikshamitra ",
    description:
      "Shikshamitra is a comprehensive school portal website that enables multiple schools to register and manage various stakeholders like, admins, teachers, parents, and students.The platform offers a range of features, including: -Customized dashboards for each user role ",
    imageDark: Eshikshamitra,
    imageLight: Eshikshamitra,
    category: "Website",
    link: "https://shikshamitra-i.web.app/",
    github: "https://github.com/ibkrishna/Eshikashamitra",
    tags: "  React.js , Tailwind, Node.js,Express.js, Mongodb,  Redux, Responsive, Auth , Payment",
  },
  {
    id: 2,
    title: "Docmind ",
    description:
      "Architected a full RAG pipeline with PDF ingestion, chunking, OpenAI embeddings, and FAISS vector storage, achieving 92% answer relevance; deployed a serverless AWS Lambda API with Redis caching, delivering sub-2-second responses for concurrent users.",
    imageDark: Ecomdark,
    imageLight: Ecomdark,
    category: "Website",
    link: "https://dockmind-6a72a.web.app/",
    github: "https://github.com/ibkrishna/Docmind",
    tags: " HTML, CSS, Tailwind,React.js ,  Next.js,Mongodb, Node.js, Express.js, Redux, Responsive, Auth , Payment",
  },
  // {
  //   id: 3,
  //   title: "Careerloom ",
  //   description:
  //     "Designed and developed a user-friendly mobile and web application for a job portal, enabling employers to post jobs, manage applications, and track candidates while allowing job seekers to apply and receive real-time updates.",
  //   imageDark: Careerloom,
  //   imageLight: Careerloom,
  //   category: "Website",
  //   link: "https://careerloom-i.web.app",
  //   github: "https://github.com/ibkrishna/careerloom",
  //   tags: "HTML, React.js, CSS, Tailwind CSS, Mongodb, Node.js, Express.js, Redux, Responsive , Auth , JWT Token",
  // },
  {
    id: 3,
    title: "Apna Labour ",
    description:
      "Engineered a multi-role service marketplace with real-time worker tracking, instant booking, Razorpay payments, JWT authentication, and Redis-backed reservations, reducing confirmation time by 35%, improving uptime by 28%, and increasing user retention by 20%.",
    imageDark: LivesCareDark,
    imageLight: LivesCarelight,
    category: "Website",
    link: "https://apnalabor.web.app/",
    github: "https://github.com/ibkrishna/Apnalanour",
    tags: " JSX, CSS, Tailwind CSS, React.js, MongoDb, Redux, Node.js, Express.js, Payment, Vite",
  },

];

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const [showProjectList, setShowProjectList] = useState(false);
  const projectListRef = useRef(null);

  const filteredProjects = projectsData.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  const text = "See How We've Transformed Ideas into Reality";
  const [currentText, setCurrentText] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      if (isAdding) {
        setCurrentText((prevText) => {
          const newText = text.slice(0, prevText.length + 1);
          if (newText.length === text.length) {
            setIsAdding(false);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 500); // Pause after complete text
          }
          return newText;
        });
      } else {
        setCurrentText((prevText) => {
          const newText = prevText.slice(0, -1);
          if (newText.length === 0) {
            setIsAdding(true);
          }
          return newText;
        });
      }
    }, 200); // Speed of the typing effect

    return () => clearInterval(intervalRef.current);
  }, [isAdding, isPaused]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjectList(true);
        } else {
          setShowProjectList(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (projectListRef.current) {
      observer.observe(projectListRef.current);
    }

    return () => {
      if (projectListRef.current) {
        observer.unobserve(projectListRef.current);
      }
    };
  }, []);

  // const animatedText = `Let's Explore My Crafting Excellence`;

  return (
    <section className="min-h-screen py-10 overflow-x-hidden md:overflow-x-visible">
      <div className="px-4">
        <div>
          <h2
            className={`text-2xl md:text-5xl text-center font-medium mb-10 ${isDarkMode ? "text-[#E3D5A7]" : "text-[#14213D]"
              }`}
            style={{ fontFamily: "Inria Sans", minHeight: "65px" }}
          // data-aos="fade-right"
          >
            {currentText}
          </h2>
          <h2
            className={`text-justify md:text-2xl md:font-medium max-w-7xl mx-auto ${isDarkMode ? "text-[#E3D5A7]" : "text-[#14213D]"
              }`}
            // style={{ fontFamily: "Charm" }}
            style={{ fontFamily: "Inria Sans" }}
          >
            A diverse range of impactful digital projects showcases innovation
            and creativity. These initiatives leverage cutting-edge technology
            to solve real-world problems, enhance user experiences, and drive
            positive change. From interactive apps to transformative websites
            and digital campaigns, these projects highlight the power of design,
            functionality, and purpose-driven development.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 mt-14 gap-4 md:gap-0 lg:mx-14">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div>
          <ProjectList />
        </div>
      </div>
      <div>
        <Scroll />
      </div>
    </section>
  );
};

export default Projects;
