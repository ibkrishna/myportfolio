import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import RotatingIcons from "../components/RotatingIcons/RotatingIcons";
import Expertise from "./Expertise";
import Experience from "./Experience";
import Education from "./Education";
import Testimonials from "./testimonals/Testimonials";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import AnimatedSection from "./Animated";
import MobileRotatingIcons from "./RotatingIcons/MobileRotatingIcons";
import RotatingText from "../components/RotatingIcons/RotatingText";
import Specialization from "./Specialization";
import Scroll from "./scroll/RightScroll";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedButton from "./AnimatedButton";
import Certificates from "./certificates/Certificates";
import Overview from "./Overview";
import { FaLocationArrow } from "react-icons/fa6";

const Home = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const projects = [
    "LiveScar",
    "CareerLoom",
    "SuperCard",
    "ProjectX",
    "DevFlow",
    "CodeCraft",
    "WebMaster",
  ];

  const text = "Shiva Raj";
  const [currentText, setCurrentText] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      if (isAdding) {
        setCurrentText((prevText) => {
          const newText = text.slice(0, prevText.length + 1);
          if (newText.length === text.length) {
            setIsAdding(false);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 500);
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
    }, 200);

    return () => clearInterval(intervalRef.current);
  }, [isAdding, isPaused]);

  const stats = [
    { value: "25+", label: "Clients" },
    { value: "4+", label: "Years of Experience" },
  ];

  return (
    <>
      <div className="overflow-x-hidden md:overflow-x-visible">
        <section className="py-10 lg:mx-14 md:mx-4 lg:min-h-screen">
          <div className="lg:px-10 px-4">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div
                className="w-full md:w-1/2 text-center md:text-left"
                style={{ fontFamily: "Inria Sans" }}
                data-aos="fade-left"
              >
                <h2
                  data-aos="fade-up"
                  className={`text-2xl mb-2 ${
                    isDarkMode ? "text-[#E9E1B4]" : "text-[#14213D]"
                  } `}
                >
                  Hi,
                </h2>
                <h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-[#14213D] dark:text-[#E9E1B4]"
                  data-aos="fade-up"
                >
                  {"I'm"}{" "}
                  <span className="text-[#14213D] dark:text-[#E9E1B4]">
                    {currentText}
                  </span>
                  <RotatingText />
                </h1>
                <p
                  className={`text-xl mb-8 ${
                    isDarkMode ? "text-[#FFFFFF]" : "text-[#14213D]"
                  }`}
                  style={{ fontFamily: "Inria Sans" }}
                  data-aos="zoom-in"
                >
                  a passionate Web Developer focused on creating innovative
                  solutions and transforming creative concepts into reality.
                  Explore my world of design, development, and problem-solving!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <motion.button
                    className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full ${
                      isDarkMode
                        ? "bg-[#E9E1B4] text-black hover:bg-gray-200"
                        : "bg-[#14213D] text-white hover:bg-gray-800"
                    } transition-colors duration-200`}
                    onClick={() => navigate("/contact")}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Hire Me</span>
                  </motion.button>

                  <motion.button
                    className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full border-2 ${
                      isDarkMode
                        ? "border-[#E9E1B4] text-white hover:bg-gray-800"
                        : "border-[#14213D] text-[#14213D] hover:bg-gray-100"
                    } transition-colors duration-200`}
                    onClick={() => navigate("/projects")}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>My Works</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:flex md:justify-center items-center md:p-8 md:-translate-x-0">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <RotatingIcons />
                  <MobileRotatingIcons />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Overview />
        </section>
        <section>
          <Specialization />
        </section>
        <section>
          <Expertise />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Education />
        </section>
        <section>{/* <Certificates /> */}</section>
        {/* <section className={`mt-14 py-10 ${isDarkMode ? "" : ""} lg:h-[430px] md:h-[230px]`}>
        <div className="px-4 translate-y-6 lg:mx-20">
            <AnimatedButton>
              <div  className="flex justify-center">
                <div
                  className={`flex justify-center items-center text-center p-2 lg:min-w-full md:h-[100px] lg:min-h-[270px] cursor-pointer ${
                    isDarkMode
                      ? "bg-[#FFFFFF26] w-full hover:text-black"
                      : "text-[#14213D] hover:text-[#14213d] "
                  }`}
                  onClick={() => navigate("/projects")}
                >
                  <h1
                    className="text-lg md:text-xl lg:text-3xl md:mx-10 mx-6"
                    data-aos="fade-right"
                    style={{
                      "-webkit-text-fill-color": "transparent",
                      "-webkit-text-stroke-width": "1px",
                    }}
                  >
                    Explore My Projects
                  </h1>
                  <FaLocationArrow className="md:h-[30px] md:w-[50px]"/>
                </div>
              </div>
            </AnimatedButton>
          </div>
        </section> */}

        <section
          className={`md:mt-14 py-10 ${
            isDarkMode ? "" : ""
          } lg:h-[430px] md:h-[230px]`}
        >
          <div className="px-4 translate-y-6 lg:mx-20">
            <AnimatedButton>
              <div className="flex justify-center">
                <div
                  className={`flex justify-center items-center text-center p-2 h-[150px] lg:min-w-full md:h-[155px] lg:min-h-[270px] cursor-pointer ${
                    isDarkMode
                      ? "bg-[#FFFFFF26] w-full hover:text-black"
                      : "text-[#14213D] hover:text-[#14213d] "
                  }`}
                  onClick={() => navigate("/projects")}
                >
                  {/* Title and Arrow Container */}
                  <div className="absolute lg:top-4 lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-4">
                    <h1
                      className="text-lg md:text-xl lg:text-3xl"
                      style={{
                        WebkitTextFillColor: "transparent",
                        WebkitTextStrokeWidth: "1px",
                      }}
                    >
                      Explore My Projects
                    </h1>
                    <FaLocationArrow className="md:h-[30px] md:w-[50px]" />
                  </div>

                  {/* Falling Project Cards */}
                  {projects.map((project) => (
                    <div
                      key={project}
                      className={`project-card hidden lg:block px-6 py-3 rounded-xl transform transition-transform hover:scale-105
                    ${
                      isDarkMode
                        ? "bg-[#FFFFFF26] font-thin border border-[#e9e1b4]"
                        : "bg-white text-[#14213D] border border-gray-200"
                    }`}
                    style={{
                      WebkitTextFillColor: "transparent",
                      WebkitTextStrokeWidth: "1px",
                    }}
                    >
                      <span className="text-lg md:text-xl font-bold">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedButton>
          </div>
        </section>
        <section>
          <AnimatedSection delay={0.5}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Testimonials />
            </motion.div>
          </AnimatedSection>
        </section>
        <div>
          <Scroll />
        </div>
      </div>
    </>
  );
};

export default Home;
