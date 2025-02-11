import React, { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectList = () => {
    const { isDarkMode } = useTheme();

    const projectData = [
        {
            title: "Personal Portfolio Website",
            description: "A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences",
            technologies: ["React", "Tailwind CSS", "Node.js"],
            link: "https://portfolio.example.com",
            github: "https://github.com/username/portfolio"
        },
        {
            title: "E-commerce Platform",
            description: "E-commerce, or electronic commerce, is the buying and selling of goods and services online. It can involve the exchange of products or services between businesses, consumers, or both.",
            technologies: ["React", "Redux", "Firebase"],
            link: "https://ecommerce.example.com",
            github: "https://github.com/username/ecommerce"
        },
        {
            title: "Weather App",
            description: "A weather app is a software application that provides information about the weather in a specific location and time.",
            technologies: ["React", "OpenAPI", "Redux"],
            link: "https://weatherapp.example.com",
            github: "https://github.com/username/weather-app"
        },
    ];

    // Technology color mapping
    const techColors = {
        'React': 'text-blue-500',
        'Tailwind CSS': 'text-teal-500',
        'Node.js': 'text-green-500',
        'Redux': 'text-purple-500',
        'Firebase': 'text-orange-500',
        'OpenAPI': 'text-red-500'
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
        });
        return () => {
            AOS.refreshHard();
        };
    }, []);

    return (
        <section className="py-10">
            <div className={`max-w-7xl mx-auto px-4`} style={{ fontFamily: 'Inria Sans' }}>
                <h2
                    data-aos="fade-right"
                    className={`text-4xl md:py-10 md:text-5xl font-medium text-center mb-16 ${isDarkMode ? 'text-[#E3D5A7]' : 'text-[#14213D]'}`}
                >
                    List Of Projects
                </h2>
                <div className={`space-y-6`}>
                    {projectData.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 500}
                            className={`p-6 rounded-lg transition-all duration-300 border  ${isDarkMode ? 'bg-[#FFFFFF15] border border-[#E9E1B4]' : 'bg-[#f7f7f7] border-[#14213d] hover:bg-gray-50'}`}
                        >
                            <div className="flex md:flex-row gap-4 items-start md:items-center justify-between">
                                {/* Title and Link Section */}
                                <div className="flex items-center gap-3">
                                    <h3 className={`text-xs md:text-xl font-medium ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#14213D]'}`} style={{fontFamily:'Inria Sans'}}>
                                        {item.title}
                                    </h3>
                                </div>
                                {/* GitHub Link */}
                               <div className="flex wwitems-center gap-10">
                               <a 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform hover:scale-110"
                                    >
                                        <ExternalLink className={`w-4 h-4 md:h-6 md:w-6 ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#14213D]'}`} />
                                    </a>
                                    <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-transform hover:scale-110 ${isDarkMode ? 'border border-[#E9E1B4] p-2 rounded-full' : 'bg-[#14213D] p-2 rounded-full'}`}
                                >
                                    <Github className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-white'}`} />
                                </a>
                               </div>
                               
                            </div>
                            <p className={`mt-4 ${isDarkMode ? 'text-white' : 'text-[#14213D]'}`} style={{fontFamily:'Inria Sans'}}>{item.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {item.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`text-sm font-medium py-1 px-3 rounded-full ${techColors[tech] || 'text-gray-500'}`}
                                        style={{fontFamily:'Inria Sans'}}
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
