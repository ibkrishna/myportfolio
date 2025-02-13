import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import PortOverview from "../assets/portoverview.png";
import { Plus, Minus } from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Overview() {
  const { isDarkMode } = useTheme();
  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: `What's our mission ?`,
      description:
        "With experience in building dynamic, responsive web applications using React, Node.js and JavaScript, I specialize in delivering seamless digital experiences.",
    },
    {
      id: 2,
      title: "Our culture & our studio",
      description:
        "Comprehensive digital marketing solutions including SEO, social media management, and content strategy to boost your online presence.",
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <>
      <section className={`mt-14 py-10`}>
        <div
          className={`mx-4 md:mx-6 lg:mx-24 p-6 rounded-2xl lg:min-h-[90vh] ${
            isDarkMode ? "bg-[#FFFFFF26] " : "bg-[#f7f7f7]"
          }`}
        >
          <div className="md:flex items-center justify-center lg:min-h-[90vh]">
          <div className="flex justify-center items-center md:w-1/2 relative">
  <img src={PortOverview} alt="PortOverview" className="max-w-full h-auto" />
  
  {/* Button on the right bottom */}
  <div className="absolute md:bottom-2 bottom-0 right-2 md:right-10 lg:-translate-x-20 flex items-center space-x-2">
    <button
      className={`p-1 md:p-4 cursor-pointer flex items-center justify-around ${
        isDarkMode ? "bg-[#e9e1b4] lg:w-[160px] rounded-xl md:rounded-2xl text-black" : ""
      }`}
    >
      <span className="text-lg">4+</span>
<span className="text-xs text-left ml-2">
  Years <br /> Of Experience
</span>
    </button>
  </div>

  {/* Button on the left center */}
  <div className="absolute -left-4 md:left-12 md:top-1/2 transform md:-translate-y-1/2 flex items-center space-x-2">
  <button
      className={`p-2 md:p-4 cursor-pointer flex items-center justify-around ${
        isDarkMode ? "bg-[#e9e1b4] h-16 w-16 md:h-24 md:w-24 rounded-full text-black" : ""
      }`}
      onClick={() => navigate("/contact")}
    >
      <span className="text-xs">Contact Us</span>
      <MdOutlineArrowOutward className={`${isDarkMode ? "text-black" : ""}`} />
    </button>
  </div>
</div>


            <div className="md:pl-6 mt-4 md:mt-0 md:w-1/2">
              <h1
                className={`text-3xl md:text-4xl font-medium ${
                  isDarkMode ? "text-[#e9e1b4]" : "text-[#14213d]"
                }`}
                style={{ fontFamily: "Inria Sans" }}
              >
                About Me
              </h1>
              <h2 className="text-lg md:text-2xl lg:text-3xl">
                Elevating brands globally with innovative strategies and
                visionary design
              </h2>
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 md:py-10 md:w-3/2 lg:py-16 border-b ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h2
                      className={`font-medium ${
                        isDarkMode ? "text-[#e9e1b4]" : "text-[#14213d]"
                      } font-medium text-xs md:text-3xl`}
                      style={{ fontFamily: "Inria Sans" }}
                    >
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-6 lg:gap-10">
                      <button
                        onClick={() => toggleService(service.id)}
                        className={`p-2 rounded-full ${
                          isDarkMode
                            ? "bg-black"
                            : "text-[#14213d] border-[#191A23] bg-[#ffffff]"
                        }`}
                      >
                        {expandedService === service.id ? (
                          <Minus size={24} />
                        ) : (
                          <Plus size={24} />
                        )}
                      </button>
                    </div>
                  </div>
                  {expandedService === service.id && (
                    <div className="mt-4 text-sm opacity-80 ">
                      <div
                        className={`my-6 ${
                          isDarkMode ? "" : "border-[#14213d]"
                        }`}
                      ></div>
                      <span
                        className={`text-lg lg:text-xl ${
                          isDarkMode ? "text-[#ffffff]" : "text-[#14213d]"
                        }`}
                        style={{ fontFamily: "Inria Sans" }}
                      >
                        {" "}
                        {service.description}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
