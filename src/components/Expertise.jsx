import React from "react";
import { useTheme } from "../context/ThemeContext";
import HTML from "../assets/tech/html.png";
import CSS from "../assets/tech/css.png";
import JavaScript from "../assets/tech/javascript.png";
import Reactjs from "../assets/tech/reactjs.png";
import Redux from "../assets/tech/redux.png";
import Tailwind from "../assets/tech/tailwind.png";
import Nodejs from "../assets/tech/nodejs.png";
import Mongodb from "../assets/tech/mongodb.png";
import SEO from "../assets/tech/seo.png";
import SocialMedia from "../assets/tech/socialmedia.png";
import Analytics from "../assets/tech/analytics.png";
import Content from "../assets/tech/content.png";
import Email from "../assets/tech/email.png";
import PPC from "../assets/tech/ppc.png";
import Strategy from "../assets/tech/strategy.png";
import Figma from "../assets/tech/figma.png";
import Photoshop from "../assets/tech/photoshop.png";
import Adobe from "../assets/tech/adobe.png";

function ExpertiseIcon({ icon: Icon, color, name, progress, img }) {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${
          isDarkMode ? "bg-[#ffffff26]" : "bg-[#FFFFFF26]"
        } p-2 rounded-full`}
      >
        <div className="relative w-24 h-24">
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="48"
              cy="48"
              r="44"
              strokeWidth="6"
              fill="none"
              stroke="#e9e1b4"
            />
            <circle
              cx="48"
              cy="48"
              r="44"
              strokeWidth="6"
              fill="none"
              className={`${color} opacity-80`}
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
              stroke="currentColor"
              strokeLinecap="round"
              transform="rotate(-90 48 48)"
            />
          </svg>

          {/* Inner circle with icon or image */}
          <div className="absolute inset-4 rounded-full flex items-center justify-center">
            {img ? (
              <img src={img} alt={name} className="w-10 h-10 object-contain" />
            ) : (
              <Icon className={`w-10 h-10 ${color}`} />
            )}
          </div>
        </div>
      </div>
      <span
        className={`text-sm md:text-lg mt-2 text-center ${
          isDarkMode ? "" : "text-[#14213d]"
        }`}
        style={{ fontFamily: "Inria Sans" }}
      >
        {name}
      </span>
    </div>
  );
}

function ExpertiseSection({ title, icons }) {
  const { isDarkMode } = useTheme();

  return (
    <div className="mb-16 mt-6">
      <h2
        className={`text-xl mb-8 ${
          isDarkMode ? "text-[#ffffff]" : "text-[#14213d]"
        }`}
        style={{ fontFamily: "Inria Sans" }}
      >
        {title}
      </h2>
      <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8`}>
        {icons.map((icon, index) => (
          <ExpertiseIcon key={index} {...icon} />
        ))}
      </div>
    </div>
  );
}

function Expertise() {
  const { isDarkMode } = useTheme();

  const webDevelopment = [
    { img: HTML, color: "text-orange-400", name: "Html", progress: 90 },
    { img: CSS, color: "text-blue-600", name: "Css", progress: 90 },
    {
      img: JavaScript,
      color: "text-yellow-400",
      name: "JavaScript",
      progress: 90,
    },
    { img: Reactjs, color: "text-cyan-400", name: "React.js", progress: 85 },
    { img: Nodejs, color: "text-green-700", name: "Node.js", progress: 80 },
    { img: Mongodb, color: "text-green-400", name: "MongoDB", progress: 75 },
    {
      img: Tailwind,
      color: "text-cyan-500",
      name: "Tailwind Css",
      progress: 85,
    },
    { img: Redux, color: "text-purple-600", name: "Next.js", progress: 70 },
  ];

  const digitalMarketing = [
    { img: SEO, color: "text-yellow-400", name: "SEO", progress: 85 },
    {
      img: SocialMedia,
      color: "text-blue-400",
      name: "Social Media",
      progress: 80,
    },
    {
      img: Analytics,
      color: "text-green-400",
      name: "Analytics",
      progress: 75,
    },
    { img: Content, color: "text-[#e9e1b4]", name: "Content", progress: 90 },
    {
      img: Email,
      color: "text-yellow-400",
      name: "Email Marketing",
      progress: 70,
    },
    { img: PPC, color: "text-blue-400", name: "PPC", progress: 65 },
    { img: Strategy, color: "text-green-400", name: "Strategy", progress: 85 },
  ];

  const uiUxDevelopment = [
    {
      img: Photoshop,
      color: "text-yellow-400",
      name: "UI Design",
      progress: 90,
    },
    { img: Figma, color: "text-blue-400", name: "Figma", progress: 85 },
    {
      img: Adobe,
      color: "text-green-400",
      name: "Wireframing",
      progress: 80,
    },
  ];

  const digitalMarketing1 = [
    { img: SEO, color: "text-yellow-400", name: "SEO", progress: 85 },
    {
      img: SocialMedia,
      color: "text-blue-400",
      name: "Social Media",
      progress: 80,
    },
    {
      img: Analytics,
      color: "text-green-400",
      name: "Analytics",
      progress: 75,
    },
  ];

  return (
    <section className={`mt-14 py-10 `}>
      <div
        className={`mx-4 md:mx-6 lg:mx-24 p-6 rounded-2xl ${
          isDarkMode ? "bg-[#FFFFFF26]" : "bg-[#f7f7f7]"
        }`}
      >
        <h1
          className={`text-3xl md:text-4xl font-medium ${
            isDarkMode ? "text-[#e9e1b4]" : "text-[#14213d]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
        >
          Expertise
        </h1>
        <div className="space-y-16">
          <ExpertiseSection
            title="Web Development Expertise"
            icons={webDevelopment}
          />

          <ExpertiseSection
            title="Digital Marketing Expertise"
            icons={digitalMarketing}
          />

          <div
            className={`${isDarkMode ? "" : ""} p-6 rounded-2xl`}
          >
            <ExpertiseSection
              title="UI/UX Development Expertise"
              icons={uiUxDevelopment}
            />

            <ExpertiseSection
              title="Digital Marketing Expertise"
              icons={digitalMarketing1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
