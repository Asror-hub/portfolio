import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroBottom = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* bottom section */}
      <div className="absolute bottom-8 left-0 right-0">
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="0"
          className="flex flex-col items-center gap-4"
        >
          {/* Company Info - Hidden on mobile */}
          <div className="text-center hidden sm:block">
            <p className="text-gray-600 font-medium">Global AI Solutions</p>
            <p className="text-sm text-primary">Since 2024</p>
          </div>

          {/* Scroll Button */}
          <button 
            onClick={scrollToServices}
            className="hover:scale-110 transition-transform duration-300 p-2"
            aria-label="Scroll to services section"
          >
            <div className="animate-bounce">
              <FaArrowDown className="text-2xl text-primary" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
