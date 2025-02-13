import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './components/projects/Projects';
import Contact from './components/Contact';
import Login from './Auth/Login';
import Blog from './components/blog/Blog';
import './style.css'; 

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js'; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
      <canvas id="canvas" className="absolute inset-0"></canvas> 
      <Router>
        <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white ' : 'bg-white'}`}>
          <Navbar />
          <main className="pt-16 relative"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
