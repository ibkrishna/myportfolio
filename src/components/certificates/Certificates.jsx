import React, { useEffect, useState } from 'react';
import CertificateBadge from './CertificateBadge';
import { useTheme } from '../../context/ThemeContext';

const certificates = [
  { id: 1, title: "Project Management Professional", year: "2022", issuedBy: "Microsoft" },
  { id: 2, title: "Agile Scrum Master", year: "2022", issuedBy: "Azure" },
  { id: 3, title: "AWS Solutions Architect", year: "2022", issuedBy: "Google" },
  { id: 4, title: "Google Cloud Professional", year: "2022", issuedBy: "Google" },
  { id: 5, title: "Azure DevOps Engineer", year: "2022", issuedBy: "Azure" },
  { id: 6, title: "Digital Marketing", year: "2022", issuedBy: "Google" }
];

const Certificates = () => {
  const { isDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const certificatesPerPage = 3;

  // Calculate certificates per row based on screen size (for display purposes only)
  const getDisplayMode = () => {
    if (window.innerWidth >= 1024) return 3; // Desktop
    if (window.innerWidth >= 768) return 2;  // Tablet
    return 1; // Mobile
  };

  const [displayMode, setDisplayMode] = useState(getDisplayMode());

  // Update display mode on window resize
  useEffect(() => {
    const handleResize = () => {
      setDisplayMode(getDisplayMode());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-flip functionality
  useEffect(() => {
    const totalPages = Math.ceil(certificates.length / certificatesPerPage);
    
    const interval = setInterval(() => {
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setIsFlipping(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get current certificates to display (always 3 per page)
  const getCurrentCertificates = () => {
    const startIndex = currentPage * certificatesPerPage;
    return certificates.slice(startIndex, startIndex + certificatesPerPage);
  };

  // Get justify class based on display mode
  const getJustifyClass = () => {
    if (displayMode === 1) return 'justify-start pl-4';
    if (displayMode === 2) return 'justify-between px-4';
    return 'justify-evenly';
  };

  const currentCertificates = getCurrentCertificates();
  const justifyClass = getJustifyClass();

  return (
    <div className="mt-14 py-10 mx-4 md:mx-6 lg:mx-20">
      <h1
        data-aos="fade-right"
        className={`text-3xl font-medium ${isDarkMode ? 'text-[#e9e1b4]' : ''}`}
        style={{ fontFamily: 'Inria Sans' }}
      >
        Certificates
      </h1>
      <div className="relative mt-10">
        <div className={`certificates-wrapper ${isFlipping ? 'flipped' : ''}`}>
          <div
            data-aos="fade-left"
            className={`flex ${justifyClass} items-center min-h-[450px] w-full transition-all duration-500 ease-in-out`}
          >
            {currentCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`certificate-container ${
                  index === 1 && displayMode === 3 ? 'certificate-middle' : ''
                }`}
              >
                <CertificateBadge
                  title={cert.title}
                  year={cert.year}
                  issuedBy={cert.issuedBy}
                  isDarkMode={isDarkMode}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Page indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(certificates.length / certificatesPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentPage === index 
                ? `${isDarkMode ? 'bg-[#e9e1b4]' : 'bg-[#14213d]'} w-4` 
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;