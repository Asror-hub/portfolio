import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroBottom = () => {
  const scrollToNextSection = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* bottom section */}
      <div className="absolute bottom-16 sm:bottom-8 left-0 right-0">
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="0"
          className="flex flex-col items-center gap-4"
        >
          {/* Company Info - Hidden on mobile */}
          <div className="text-center hidden sm:block">
            <p className="text-neutral-300 font-medium">Custom Software Development</p>
          </div>

          {/* Scroll Button */}
          <button 
            onClick={scrollToNextSection}
            className="hover:scale-110 transition-transform duration-300 p-2 group"
            aria-label="Scroll to next section"
          >
            <div className="animate-bounce">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                <FaArrowDown className="text-xl text-primary-400 group-hover:text-primary-300" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
