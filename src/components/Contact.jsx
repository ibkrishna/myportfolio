import React, { useState, useEffect } from "react";
import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [contactMethod, setContactMethod] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "",
  });

  const contactMethods = [
    {
      id: "whatsapp",
      label: "Whatsapp",
      icon: <FaWhatsapp className="w-5 h-5" />,
    },
    {
      id: "telegram",
      label: "Telegram",
      icon: <FaTelegram className="w-5 h-5" />,
    },
    {
      id: "email",
      label: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let validationErrors = {};
    let formIsValid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = `${key.replace("_", " ")} is required`;
        formIsValid = false;
      }
    });
    if (!contactMethod) {
      validationErrors.contactMethod = "Please select a contact method";
      formIsValid = false;
    }

    setErrors(validationErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    let contactMessage = `Hello, ShivRaj I'm ${formData.first_name} ${formData.last_name}\n\n ${formData.message} and these are my details to contact me.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n Best Regards,\n ${formData.first_name}.`;

    switch (contactMethod) {
      case "whatsapp":
        window.open(
          `https://wa.me/+9391137088?text=${encodeURIComponent(
            contactMessage
          )}`,
          "_blank"
        );
        break;
      case "telegram":
        window.open(
          `https://t.me/+9391137088?text=${encodeURIComponent(contactMessage)}`,
          "_blank"
        );
        break;
      case "email":
        window.location.href = `mailto:stackmastry@gmail.com?subject=Contact Form - ${
          formData.first_name
        } ${formData.last_name}&body=${encodeURIComponent(contactMessage)}`;
        break;
      default:
        alert("Please select a contact method");
    }

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });
    setContactMethod("");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "" : ""
      } mt-14 px-4 sm:px-6 lg:px-8 overflow-x-hidden md:overflow-x-visible`}
    >
      <div className="">
        <h2
          className={`text-4xl md:text-5xl text-center font-medium mb-10 ${
            isDarkMode ? "text-[#E3D5A7]" : "text-[#14213D]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
          data-aos="fade-right"
        >
          Contact
        </h2>
        <h2
          className={`text-center max-w-3xl mx-auto ${
            isDarkMode ? "text-white" : "text-[#14213d]"
          }`}
          style={{ fontFamily: "Inria Sans" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          non.
        </h2>
      </div>

      <div
        className={`max-w-5xl md:min-h-[600px] mx-auto mt-14 ${
          isDarkMode
            ? "bg-[#FFFFFF15] opacity-15 border border-[#e9e1b4]"
            : "bg-[#f7f7f7]"
        } rounded-2xl p-6 sm:p-10 relative flex flex-col justify-center items-center`}
        data-aos="zoom-in-up"
      >
        <div
          className={`absolute -top-6 -left-4 h-10 w-10 md:w-20 md:h-20 ${
            isDarkMode ? "bg-white opacity-15" : "bg-[#14213D] opacity-15"
          }  rounded-full sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 lg:-top-10 lg:-left-10`}
        ></div>
        <div
          className={`absolute -top-4 left-0 w-12 h-12 ${
            isDarkMode ? "bg-white opacity-15 " : "bg-[#14213D] opacity-15"
          } rounded-full sm:top-0 sm:left-0 md:top-0 md:left-0 lg:top-0 lg:left-0`}
        ></div>
        <div
          className={`absolute -bottom-2 right-0 w-10 h-10 md:w-20 md:h-20 ${
            isDarkMode ? "bg-white opacity-15" : "bg-[#14213D] opacity-15"
          } rounded-full sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-10`}
        ></div>
        <div
          className={`absolute -bottom-6 -right-2 w-12 h-12 ${
            isDarkMode ? "bg-white opacity-15" : "bg-[#14213D] opacity-15"
          } rounded-full sm:bottom-0 sm:right-0 md:bottom-1 md:right-4 lg:bottom-0 lg:right-4`}
        ></div>

        <div className="grid md:flex gap-8 md:flex-row-reverse">
          <div className="md:col-span-3 space-y-6">
            {/* Form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className={`block ${
                    isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
                  }`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className={`w-full  bg-transparent p-1 border-b ${
                    isDarkMode
                      ? "border-[#E9E1B4] text-white"
                      : "text-[#14213d] border-[#14213d]"
                  } focus:outline-none transition-colors`}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs">{errors.first_name}</p>
                )}
              </div>
              <div>
                <label
                  className={`block ${
                    isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
                  }`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className={`w-full  bg-transparent p-1 border-b ${
                    isDarkMode
                      ? "border-[#E9E1B4] text-white"
                      : "text-[#14213d] border-[#14213d]"
                  } focus:outline-none transition-colors`}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs">{errors.last_name}</p>
                )}
              </div>
            </div>

            {/* More form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className={`block ${
                    isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full  bg-transparent p-1 border-b ${
                    isDarkMode
                      ? "border-[#E9E1B4] text-white"
                      : "text-[#14213d] border-[#14213d]"
                  } focus:outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  className={`block ${
                    isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
                  }`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full  bg-transparent p-1 border-b ${
                    isDarkMode
                      ? "border-[#E9E1B4] text-white"
                      : "text-[#14213d] border-[#14213d]"
                  } focus:outline-none transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                className={`block ${
                  isDarkMode ? "text-[#E9E1B4]" : "text-[#14213d]"
                } mb-2`}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full text-white bg-transparent p-1 border rounded-lg ${
                  isDarkMode
                    ? "border-[#E9E1B4]"
                    : "text-[#14213d] border-[#14213d]"
                } focus:outline-none transition-colors`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <div className="hidden md:block">
              <button
                onClick={handleSubmit}
                className={`mt-8 w-full bg-transparent border ${
                  isDarkMode
                    ? "border-[#E9E1B4] text-white "
                    : "border-[#14213d] text-[#14213d]"
                } py-4 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors`}
              >
                Discuss the project
                <IoIosSend className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Methods Section */}
          <div
            className={`md:col-span-2 rounded-xl p-6 md:w-[400px] mx-auto ${
              isDarkMode ? "bg-[#FFFFFF15]" : "bg-[#14213d]"
            }`}
          >
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#ffffff]"
              } text-lg text-center mb-6 lg:mt-6`}
              style={{ fontFamily: "Inria Sans" }}
            >
              Choose a contact method
            </h3>
            <div className="space-y-6 md:mt-8">
              {contactMethods.map(({ id, label, icon }, index) => {
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setContactMethod(id)}
                    className={`w-full flex items-center gap-6 p-3 md:py-5 rounded-full transition-colors ${
                      isDarkMode
                        ? contactMethod === id
                          ? "bg-[#7c7d80]"
                          : "bg-[#484a4f]"
                        : contactMethod === id
                        ? "bg-[#e1e1e1]"
                        : "bg-[#f7f7f7]"
                    }`}
                  >
                    <span className={`ml-6 lg:ml-20 md:ml-12 md:mr-2 `}>
                      {icon}
                    </span>
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
            {errors.contactMethod && (
              <p className="text-red-500 text-xs text-center">
                {errors.contactMethod}
              </p>
            )}
          </div>

          {/* Submit button for mobile view */}
          <button
            onClick={handleSubmit}
            className={`mt-8 w-full md:hidden bg-transparent  border ${
              isDarkMode
                ? "border-[#E3D5A7] text-white hover:bg-[#c3c0b1]"
                : " border-[#14213d] text-[#14213d] hover:bg-[#c6c2b5]"
            } py-4 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors`}
          >
            Discuss the project
            <IoIosSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
