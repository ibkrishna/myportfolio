import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import Scroll from '../scroll/RightScroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../../assets/project1.png';
import Ecomdark from '../../assets/ecomdark.jpg';
import Ecomlight from '../../assets/ecomlight.jpg';
import shippingdark from '../../assets/shippingdark.jpg';
import shippinglight from '../../assets/shippinglight.jpg';
import sabjidark from '../../assets/sabjidark.jpg';
import sabjilight from '../../assets/sabjilight.jpg';
import Jobdark from '../../assets/jobdark.jpg';
import Joblight from '../../assets/joblight.jpg';



const projectsData = [
  {
    id: 1,
    title: 'Ecommerce ',
    description: 'Built a fully-responsive e-commerce website with advanced product filtering and dynamic cart features.',
    imageDark: Ecomdark,
    imageLight: Ecomlight,
    category: 'Website',
    link: '#',
    github: "https://github.com/username/portfolio",
    tags: 'React.js, MongoDb, Redux, Node.js, Express.js'
  },
  {
    id: 2,
    title: 'Shipping ',
    description: 'Conducted an SEO audit for a financial blog, boosting rankings for key terms and improving page load speed.',
    imageDark: shippingdark,
    imageLight: shippinglight,
    category: 'Website',
    link: '#',
    github: "https://github.com/username/portfolio",
    tags: 'Next.js,Mongodb, Node.js, Express.js, Redux, Responsive'
  },
  {
    id: 3,
    title: 'SabjiMandi ',
    description: 'Created a wellness app with a user-friendly design, integrating interactive features for tracking fitness goals and progress.',
    imageDark: sabjidark,
    imageLight: sabjilight,
    category: 'Website',
    link: '#',
    github: "https://github.com/username/portfolio",
    tags: 'HTMX,Mongodb, Node.js, Express.js, Redux, Responsive'
  },
  {
    id: 4,
    title: 'Job Portal ',
    description: 'Automated the deployment process for a large-scale web application using Jenkins and Docker, improving development efficiency.',
    imageDark: Jobdark,
    imageLight: Joblight,
    category: 'Website',
    link: '#',
    github: "https://github.com/username/portfolio",
    tags: 'Flutter,Mongodb, Node.js, Express.js, Redux, Responsive'
  }
];

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [showProjectList, setShowProjectList] = useState(false);

  const projectListRef = useRef(null);

  const filteredProjects = projectsData.filter(project =>
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
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
        threshold: 0.2
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

  return (
    <section className="min-h-screen py-10 overflow-x-hidden md:overflow-x-visible">
      <div className="max-w-7xl mx-auto px-4">
        <div>
        <h2
          className={`text-4xl md:text-5xl text-center font-medium mb-10 ${isDarkMode ? 'text-[#E3D5A7]' : 'text-[#14213D]'}`}
          style={{ fontFamily: 'Inria Sans' }}
          data-aos="fade-right" 
        >
          My Projects
        </h2>
        <h2 className={`text-center max-w-3xl mx-auto ${isDarkMode ? 'text-[#E3D5A7]' : 'text-[#14213D]'}`} style={{fontFamily:'Inria Sans'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid error, laudantium itaque voluptas harum libero suscipit repudiandae aut esse eius!</h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-7xl mx-auto">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      <div>
        <ProjectList/>
      </div>
      </div>
      <div>
        <Scroll />
      </div>
    </section>
  );
};

export default Projects;
