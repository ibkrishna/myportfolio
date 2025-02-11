import React, { useEffect, useState } from 'react';
import { Github, FileCode, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Hero from '../../assets/hero.png';
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { SiGeeksforgeeks } from "react-icons/si";

const RotatingIcons = () => {
  const { isDarkMode } = useTheme();
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const iconSize = "h-8 w-8";
  const iconColor = isDarkMode ? 'text-white' : 'text-[#ffffff]';

  useEffect(() => {
    let interval;
    if (isHovered === null) { 
      interval = setInterval(() => {
        setRotation(prev => (prev + 0.5) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const calculatePosition = (index, totalIcons) => {
    const angle = (index * (360 / totalIcons) + rotation) * (Math.PI / 180);
    const radius = window.innerWidth <= 640 ? 140 : 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const icons = [
    { Icon: Github, name: 'GitHub', link: "https://github.com" },
    { Icon: FileCode, name: 'Resume', link: "/resume" },
    { Icon: SiCodechef, name: 'CodeChef', link: "/tech" },
    { Icon: SiLeetcode, name: 'LeetCode', link: "/database" },
    { Icon: LiaHackerrank, name: 'HackerRank', link: "/hackerrank" },
    { Icon: SiGeeksforgeeks, name: 'GeeksforGeeks', link: "/hackerrank" },
    { Icon: Linkedin, name: 'LinkedIn', link: "https://www.linkedin.com" },
    { Icon: Mail, name: 'Contact', link: "mailto:stackmastry@gmail.com" },
  ];

  return (
    <div className="hidden md:block relative  md:-translate-x-12 lg:-translate-x-0 w-[400px] h-[400px] lg:mx-10 lg:-mt-6">
      <div className="absolute inset-0">
        {icons.map(({ Icon, name, link }, index) => {
          const { x, y } = calculatePosition(index, icons.length);
          const isLeft = x < 0; // Determine if the icon is on the left side

          return (
            <div
              key={index}
              className="absolute p-2 transition-all duration-300 ease-in-out"
              style={{
                transform: `translate(${x + 200}px, ${y + 200}px)`,
                left: 0,
                top: 0,
              }}
              onMouseEnter={() => setIsHovered(index)} 
              onMouseLeave={() => setIsHovered(null)} 
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <div className={`${isDarkMode ? 'bg-[#000000] border border-[#e9e1b4]' : 'bg-[#14213d] border-[#e9e1b4]'} p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <Icon className={`${iconSize} ${iconColor}`} />
                </div>
              </a>
              {isHovered === index && (
                <div 
                  className={`absolute top-0 left-0 mt-10 text-center p-1 ${isDarkMode ? 'text-[#FFFCF2]' :'text-[#ffffff]'} text-md`}
                  style={{
                    left: isLeft ? '-100%' : '100%', // Position the name to the left or right
                    transform: isLeft ? 'translateX(-10px)' : 'translateX(10px)',
                    textAlign: isLeft ? 'right' : 'left', // Align text accordingly
                  }}
                >
                  {name} 
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute top-3/2 left-3/2 transform translate-x-40 translate-y-40">
        <div>
          <img
            src={Hero}
            alt="Hero"
            className="w-20 h-20 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingIcons;
