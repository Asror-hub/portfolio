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
    icon: <FaMobile className="text-4xl text-primary-500" />,
    title: "Mobile App Development",
    description: "Create innovative and user-friendly mobile applications for your business.",
    link: "/services/mobile-app-development"
  },
  {
    icon: <FaGlobe className="text-4xl text-primary-500" />,
    title: "Web App Development",
    description: "Build powerful, scalable, and user-friendly web applications.",
    link: "/services/web-app-development"
  },
  {
    icon: <FaLaptopCode className="text-4xl text-primary-500" />,
    title: "Custom Software Development",
    description: "Transform your business with tailored software solutions designed to meet your unique needs.",
    link: "/services/custom-software-development"
  },
  {
    icon: <FaBrain className="text-4xl text-primary-500" />,
    title: "AI Development",
    description: "Harness the power of artificial intelligence for your business.",
    link: "/services/ai-development"
  },
  {
    icon: <FaApple className="text-4xl text-primary-500" />,
    title: "iOS Development",
    description: "Create exceptional iOS applications with latest technologies.",
    link: "/services/ios-development"
  },
  {
    icon: <FaAndroid className="text-4xl text-primary-500" />,
    title: "Android Development",
    description: "Build powerful Android applications for global reach.",
    link: "/services/android-development"
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
    <section className="section-padding bg-dark-900/30" id="services">
      <div className="container">
        <div className="text-left mb-20" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="heading-2 mb-6">Our <span className="text-gradient">Services</span></h2>
          <p className="body-text-lg max-w-2xl">Comprehensive technology solutions for your business needs</p>
        </div>
        <div 
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mb-16"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index >= 3 && !showAll
                  ? 'hidden'
                  : 'block'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <Link
                to={service.link}
                onClick={(e) => handleServiceClick(e, service.link)}
                className="block"
              >
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 h-[300px] w-full flex flex-col group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  {/* Icon with glass container */}
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl flex items-center justify-center">
                      <div className="text-2xl text-white/90">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white/95 mb-3 group-hover:text-white transition-colors duration-400">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-400 flex-1 text-sm">
                      {service.description}
                    </p>
                    
                    {/* Glass bottom accent */}
                    <div className="mt-6 pt-4 border-t border-white/8 group-hover:border-white/15 transition-colors duration-400">
                      <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white/95 transition-colors duration-400">
                        Learn More
                        <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glass edge glow */}
                  <div className="absolute inset-0 rounded-2xl shadow-inner shadow-white/5"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-left mt-8" data-aos="fade-up" data-aos-delay="600">
          <button
            onClick={handleToggle}
            className="primary-btn group inline-flex items-center gap-3 glow px-8 py-4 text-lg"
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