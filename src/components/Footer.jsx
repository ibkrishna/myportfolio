import React,{useEffect} from 'react';
import { useTheme } from '../context/ThemeContext';
import { AiOutlineInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { IoIosArrowRoundForward } from "react-icons/io";
import { slideIn } from "../utils/motion";
import { useNavigate } from 'react-router-dom';
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoReddit } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ContactFooter = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

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
    <footer
      className={`flex flex-col items-center justify-center py-10 px-6 mt-24 ${isDarkMode ? 'bg-[#FFFFFF26] text-white' : 'bg-[#14213D] text-white'
        }`}
    >
      <div className="md:hidden pb-4 ">
        <motion.div
        className='h-[230px] w-[230px]'
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <EarthCanvas/>
        </motion.div>
      </div>
      <div className="w-full max-w-8xl flex items-center justify-center md:justify-between ">
        <div className="text-center md:text-left lg:mx-10" data-aos="fade-right">
          <div className="flex flex-col mb-6">
            <h2 className={`md:text-2xl lg:text-5xl mb-2 ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`}>
              Want to know more?
            </h2>
            <p
              className={`lg:mt-8 text-center md:text-start text-md w-[250px] translate-x-3 md:translate-x-0 md:text-lg lg:w-[400px] mb-6 flex items-center justify-center rounded-sm md:py-2 mt-4 cursor-pointer 
                ${isDarkMode ? 'border-[#E9E1B4] text-white bg-[#A0A08338]' : 'border-[#434D61] bg-[#434D61] text-[#FFFCF2]'}`} onClick={() => navigate('/contact')}
            >
              Let’s Discuss The Project!
              <IoIosArrowRoundForward className='h-8 w-8' />
            </p>
            <hr className={`lg:w-[600px] w-full my-6 ${isDarkMode ? 'border-[#E9E1B4]' : 'border-[#FFFCF2]'} mx-auto`} />
          </div>
          <div className="flex justify-between items-center w-full max-w-[600px] mx-auto mt-4">
            {/* Navigation Links */}
            <div className={`flex gap-2 lg:mt-6 lg:gap-6 ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`}>
              <label className="text-xs lg:text-2xl cursor-pointer hover:underline" onClick={() => navigate('/')}>Home |  </label>
              <label className="text-xs lg:text-2xl cursor-pointer hover:underline" onClick={() => navigate('/contact')}>Contact |</label>
              <label className="text-xs lg:text-2xl cursor-pointer hover:underline" onClick={() => navigate('/projects')}>Project | </label>
              <label className="text-xs lg:text-2xl cursor-pointer hover:underline" onClick={() => navigate('/blog')}>Blog | </label>
              <div className="flex lg:gap-4 gap-2 md:flex md:items-center">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <AiOutlineInstagram className="text-xl lg:text-3xl hover:text-[#E9E1B4]" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <MdFacebook className="text-xl lg:text-3xl hover:text-[#E9E1B4]" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <RiTwitterXFill className="text-xl lg:text-3xl hover:text-[#E9E1B4]" />
                </a><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <IoLogoReddit className="text-xl lg:text-3xl hover:text-[#E9E1B4]" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-start mt-6 lg:mt-14">
            <p className={`text-sm text-center lg:text-xl md:text-start ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`}>
              Created by Shivaraj | All Reserved!
            </p>
          </div>
        </div>
        <div className="hidden md:block pb-4" data-aos="fade-left">
          <motion.div
            className='h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]'
            variants={slideIn("right", "tween", 0.2, 1)}
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </footer>

  );
};

export default ContactFooter;
