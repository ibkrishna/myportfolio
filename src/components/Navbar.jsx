import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, User, Sun, Moon, Code, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { MdArrowOutward } from "react-icons/md";



const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Services', path: '/services' },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('hi')
  }


  return (
    <>
      <nav className={`fixed top-0 z-40 w-full opacity-100 ${isDarkMode ? 'bg-[#FFFFFF26]' : 'bg-[#14213d] text-[#fffcf2]'} shadow-lg  backdrop-blur-lg h-20`} style={{fontFamily:'Inria Sans'}}>
        <div className="px-4 ">
          <div className="flex items-center justify-between h-16">
            {/* Left - Menu Button (Mobile) and Logo */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 mr-2"
                aria-label="Toggle menu"
              >
                <Menu className={`h-6 w-6 ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`} />
              </button>
              <Link to="/" className="flex items-center space-x-3 md:space-y-4">
                <Code className={`hidden h-8 w-8 ${isDarkMode ? 'text-[#E9E1B4]' : 'text-white'}`} />
                <span className={`font-medium hidden md:block text-2xl ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`}>
                  Portfolio
                </span>
              </Link>
            </div>
            {/* Center - Name */}
            <span className={`font-bold md:hidden block text-xl ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`}>
              Portfolio
            </span>
            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center justify-center space-x-8 md:p-3 md:mt-4 `}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`${location.pathname === item.path
                      ? isDarkMode
                        ? 'text-[#587b9b] font-medium'
                        : 'text-[#D4A373] font-medium'
                      : isDarkMode
                        ? 'text-[#E9E1B4] hover:text-white'
                        : 'text-[#FFFCF2] hover:text-white'
                    } transition-colors duration-200 lg:text-xl md:text-lg`}
                >
                  {item.label}
                </Link>
              ))}
              {/* <button className={`border p-1 rounded-md lg:min-w-[100px]`}>Blog</button> */}
            </div>
            {/* Right - User Profile & Theme Toggle */}
            <div className="flex items-center space-x-4 md:mt-4 gap-4 lg:gap-6">
              <MdArrowOutward className={`h-4 w-4 ml-2 md:hidden ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`} onClick={() => navigate('/contact')} />
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? ' hover:bg-gray-800' : 'hover:bg-[#E9EDC9]'
                  } transition-colors duration-200`}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-[#E9E1B4]" />
                ) : (
                  <Moon className="h-5 w-5 text-white" />
                )}
              </button>
              <User className={`h-5 w-5 hidden md:block cursor-pointer ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`} onClick={() => navigate('/login')} />
              <button className={`hidden md:flex items-center md:text-lg lg:py-3 sm:block md:p-3 ${isDarkMode ? 'text-[#0B2945] bg-[#E9E1B4]' : 'text-[#0B2945] bg-[#FFFCF2]'} rounded-full cursor-pointer text-xs`} onClick={() => navigate('/contact')}>
                <h1 className='text-sm'>Book a Demo</h1>
                <MdArrowOutward className='ml-2' />
              </button>
            </div>
          </div>
          {/* Mobile Menu - Slide from left */}
          <div
            className={`fixed inset-y-0 left-0 h-96 rounded-rb-md transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              } md:hidden w-64 ${isDarkMode
                ? 'bg-black bg-opacity-90 backdrop-blur-lg z-100 border border-[#E9EDC9]'
                : 'bg-[#14213D]'
              } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="p-6">
              <div className="flex justify-end items-center mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg"
                >
                  <X className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-[#FFFCF2]'}`} />
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block py-2 px-4 rounded-lg ${location.pathname === item.path
                        ? isDarkMode
                          ? 'bg-[#FFFFFF26] text-white'
                          : 'bg-[#CCD5AE] text-black'
                        : isDarkMode
                          ? 'text-white hover:bg-gray-800'
                          : 'text-[#FFFCF2] hover:bg-[#CCD5AE]'
                      } transition-colors duration-200`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className={`flex md:hidden justify-start py-2 rounded-md px-4 backdrop-blur-lg gap-2 ${isDarkMode ? 'bg-[#FFFFFF26]' : 'bg-[#FFFFFF26]'}`} onClick={()=>{ navigate('/login'); setIsMenuOpen(false);}}>
                  <p className={`${isDarkMode ? '' : 'text-[#FFFCF2] '}`}>Login</p>
                  <User className={`h-5 w-5 cursor-pointer ${isDarkMode ? 'text-[#E9E1B4]' : 'text-[#FFFCF2]'}`}    />
                </div> 
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;