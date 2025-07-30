import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobile,
  FaUsers,
  FaGlobe,
  FaRobot,
  FaBrain,
  FaCubes,
  FaApple,
  FaAndroid,
  FaVrCardboard,
  FaComments,
  FaLaptopCode,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    title: "Custom Software Development",
    description: "Transform your business with tailored software solutions designed to meet your unique needs.",
    link: "/services/custom-software-development"
  },
  {
    icon: <FaMobile className="text-4xl text-primary" />,
    title: "Mobile App Development",
    description: "Create innovative and user-friendly mobile applications for your business.",
    link: "/services/mobile-app-development"
  },
  {
    icon: <FaGlobe className="text-4xl text-primary" />,
    title: "Web App Development",
    description: "Build powerful, scalable, and user-friendly web applications.",
    link: "/services/web-app-development"
  },
  {
    icon: <FaBrain className="text-4xl text-primary" />,
    title: "AI Development",
    description: "Harness the power of artificial intelligence for your business.",
    link: "/services/ai-development"
  },
  {
    icon: <FaApple className="text-4xl text-primary" />,
    title: "iOS Development",
    description: "Create exceptional iOS applications with latest technologies.",
    link: "/services/ios-development"
  },
  {
    icon: <FaAndroid className="text-4xl text-primary" />,
    title: "Android Development",
    description: "Build powerful Android applications for global reach.",
    link: "/services/android-development"
  },
  {
    icon: <FaComments className="text-4xl text-primary" />,
    title: "AI Chatbot Development",
    description: "Develop intelligent conversational interfaces for better engagement.",
    link: "/services/ai-chatbot-development"
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleServiceClick = (e, link) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(link);
  };

  const handleToggle = () => {
    setShowAll(!showAll);
    if (!showAll) {
      // Only scroll when expanding
      const servicesSection = document.getElementById('services-grid');
      if (servicesSection) {
        const yOffset = -100;
        const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-500">Comprehensive technology solutions for your business needs</p>
        </div>
        <div 
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              onClick={(e) => handleServiceClick(e, service.link)}
              className={`block transform transition-all duration-500 ${
                index >= 3 && !showAll
                  ? 'opacity-0 h-0 md:scale-75 pointer-events-none m-0'
                  : 'opacity-100 h-auto md:scale-100'
              }`}
            >
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-[270px] w-full flex flex-col"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 line-clamp-4">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <button
            onClick={handleToggle}
            className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'View More Services'}
            {showAll ? (
              <FaChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            ) : (
              <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 