import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogImg1 from '../../assets/blogimg1.png';
import BlogImg2 from '../../assets/blogimg2.jpg';
import BlogImg3 from '../../assets/blogimg3.jpg';
import BlogImg4 from '../../assets/blogimg4.jpg';
import { useTheme } from '../../context/ThemeContext';


const blogPosts = [
  { title: "UI Interactions of the week", date: "12 Feb 2019", image: BlogImg1, content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit" },
  { title: "UI Interactions of the week", date: "12 Feb 2019", image: BlogImg2, content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit" },
  { title: "UI Interactions of the week", date: "12 Feb 2019", image: BlogImg3, content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit" },
  { title: "UI Interactions of the week", date: "12 Feb 2019", image: BlogImg4, content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit" }
];

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const { isDarkMode } = useTheme();


  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

  const toggleReadMore = (index) => {
    setExpandedPosts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen py-10">
       <h2
          className={`text-4xl md:text-5xl text-center font-medium mb-16 ${isDarkMode ? 'text-[#E3D5A7]' : 'text-[#14213D]'}`}
          style={{ fontFamily: 'Inria Sans' }}
          data-aos="fade-right" 
        >
          My Blogs
        </h2>
      <div className="max-w-5xl mx-auto space-y-8 px-4">
        {blogPosts.map((post, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center p-5 border rounded-2xl ${isDarkMode ? 'border-[#e9e1b4] bg-[#FFFFFF15]' : 'border-[#14213d] bg-[#f7f7f7]'}`} data-aos="fade-up">
            <div className={`flex-1`}>
              <h3 className={`text-xl md:text-2xl ${isDarkMode ? 'text-[#E3D5A7]' : 'text-[#14213d]'} font-medium`}>{post.title}</h3>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-white' :'text-[#14213d]'} mb-2 py-2`} style={{fontFamily:'Inria Sans'}}>{post.date}</p>
              <p className={`${isDarkMode ? 'text-white' : ''}`} style={{fontFamily:'Inria Sans'}}>{expandedPosts[index] ? post.content : post.content.split(' ').slice(0, 50).join(' ') + '...'}</p>
              <button onClick={() => toggleReadMore(index)} className={`${isDarkMode ? 'text-[#e9e1b4]' :'text-[#14213d]'} mt-2 inline-block`}>
                {expandedPosts[index] ? 'SHOW LESS' : 'READ MORE →'}
              </button>
            </div>
            <img src={post.image} alt={post.title} className="w-full md:w-40 h-40 object-cover rounded-md md:ml-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
