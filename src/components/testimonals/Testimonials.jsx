import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const testimonials = [
  {
    id: 1,
    content:
      "The insights provided by shiva have been invaluable. Our conversion rates have improved dramatically since we started using it. The team is knowledgeable and genuinely cares about our success.",
    author: "Riya Sharma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Working with this platform has transformed our business approach. The analytical tools and insights have helped us make data-driven decisions with confidence.",
    author: "Alex Chen",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The customer support team is exceptional. They've helped us navigate complex challenges and optimize our strategy for maximum impact.",
    author: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 4,
    content:
      "I'm impressed by the depth of analysis and actionable insights. This tool has become an essential part of our daily operations.",
    author: "Michael Rodriguez",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 5,
    content:
      "The platform's intuitive interface and comprehensive reporting have made it easy for our entire team to stay aligned and make informed decisions.",
    author: "Emily Zhang",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 6,
    content:
      "We've seen a significant improvement in our performance metrics since implementing this solution. The ROI has exceeded our expectations.",
    author: "David Kumar",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
];

function TestimonialCards() {
  const [currentPage, setCurrentPage] = useState(0);
  const { isDarkMode } = useTheme();
  
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section className={`mt-14 py-10 ${isDarkMode ? "bg-[#FFFFFF26]" : "bg-[#f7f7f7]"}`}>
      <div className="" style={{ fontFamily: "Inria Sans" }}>
        <h1
          className={`mx-4 md:mx-14 lg:mx-20 text-3xl md:text-4xl font-medium mb-6 ${
            isDarkMode ? "text-[#e9e1b4]" : "text-[#14213d]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
        >
          Testimonials
        </h1>
        <div className="max-w-7xl lg:mx-auto lg:py-10 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${
                  isDarkMode ? "bg-[#141411]" : "bg-[#ffffff]"
                } backdrop-blur-sm rounded-md flex flex-col overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className="p-6 flex-grow">
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-[#14213d]"
                    } mb-6 text-center`}
                    style={{fontFamily:'Inria Sans'}}
                  >
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="-mt-2 -mb-2 z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full border-2 border-yellow-500"
                    />
                  </div>
                  <div
                    className={`${
                      isDarkMode ? "bg-[#292922]" : "bg-[#A0A08326]"
                    } w-full flex flex-col items-center`}
                  >
                    <div className={`flex gap-1 mb-2 mt-4`}>
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    className={`${
                      isDarkMode ? "bg-[#292922]" : "bg-[#A0A08326]"
                    } w-full flex flex-col items-center py-2`}
                    style={{fontFamily:'Inria Sans'}}
                  >
                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-[#14213d]"}`}>
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index ? "bg-yellow-400 w-4" : "bg-gray-600"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCards;