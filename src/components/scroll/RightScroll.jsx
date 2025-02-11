import React, { useState, useEffect } from "react";
import {
    FaWhatsapp,
    FaTimesCircle,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useTheme } from '../../context/ThemeContext';


function RightScroll() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    const { isDarkMode } = useTheme();


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleIconClick = (type) => {
        if (type === "whatsapp") {
            window.open("https://wa.me/", "_blank");
        } else if (type === "phone") {
            window.location.href = "tel:+";
        } else {
            setPopupContent(type);
            setShowPopup(true);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className={`fixed right-0 top-2/3 h-[80px] w-[35px] flex flex-col items-center justify-center space-y-4 z-50 ${isDarkMode ? 'bg-[#ffffff53]' : 'bg-[#14213D]'} rounded-full h-[120px] w-[50px] md:h-[150px] md:w-[65px]`}>
                <div
                    className={`p-2 h-10 w-10 md:h-14 md:w-14 rounded-full ${isDarkMode ? 'bg-[#E9E1B4]' : 'bg-[#FFFCF2]'} hover:bg-gray-200 cursor-pointer shadow-[inset_0px_1px_9px_1px_#0B294599] flex items-center justify-center`}
                    onClick={() => handleIconClick("phone")}
                >
                    <FaPhone className="text-blue-400 h-6 w-6 md:h-10 md:w-10 p-1" />
                </div>
                <div
                    className={`p-2 h-10 w-10 md:h-14 md:w-14 rounded-full ${isDarkMode ? 'bg-[#E9E1B4]' : 'bg-[#FFFCF2]'} hover:bg-gray-200 cursor-pointer shadow-[inset_0px_1px_9px_1px_#0B294599] flex items-center justify-center`}
                    onClick={() => handleIconClick("whatsapp")}
                >
                    <FaWhatsapp className="text-green-500 h-6 w-6 md:h-10 md:w-10 p-1" />
                </div>
            </div>


            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-300 p-6 rounded-lg shadow-lg relative max-w-md md:h-[30vh] w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={handleClosePopup}
                        >
                            <FaTimesCircle
                                className="text-gray-600 hover:text-gray-900"
                                size={20}
                            />
                        </button>
                        <h2 className="text-lg font-bold mb-4">
                            {popupContent === "phone"
                                ? "Innowide Technologies"
                                : "Innowide Technologies"}
                        </h2>
                        <p>
                            {popupContent === "phone"
                                ? "Contact us on "
                                : "You can message us on WhatsApp at "}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default RightScroll;
