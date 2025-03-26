
import React from 'react';
import './certificates.css';
import { useTheme } from '../../context/ThemeContext';

function CertificateBadge({ title, issuedBy, year }) {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center text-center h-[200px] w-[200px] md:h-[300px] md:w-[300px]">
      <div
        id="burst-12"
        className={`z-40 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        <div className="mt-4">
          <h3 className={`${isDarkMode ? 'text-[#14213D]' : 'text-[#fffcf2]'} text-lg font-bold mb-2`}>{title}</h3>
          <p className={`${isDarkMode ? 'text-[#14213D]' : 'text-[#fffcf2]'} text-xs mb-1`}>Issued by</p>
          <p className={`${isDarkMode ? 'text-[#14213D]' : 'text-[#fffcf2]'} text-sm mb-3 font-semibold`}>{issuedBy}</p>
          <p className={`${isDarkMode ? 'text-[#14213D]' : 'text-[#fffcf2]'} text-lg font-semibold`}>{year}</p>
        </div> 
      </div>
    </div>
  );
}

export default CertificateBadge;
