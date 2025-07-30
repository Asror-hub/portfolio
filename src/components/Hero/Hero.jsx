import React from "react";
import { FaRobot, FaBrain } from "react-icons/fa";
import HeroBottom from "./HeroBottom";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const playCompanyVideo = () => {
    window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank');
  };

  return (
    <>
      <div className="w-full h-[92vh] relative bg-white overflow-hidden flex items-center justify-center">
        {/* Background SOLVIX Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full overflow-hidden">
          <h1 className="text-8xl sm:text-[180px] md:text-[350px] text-center font-bold uppercase text-gray-100/60 whitespace-nowrap">
            SOLTECH
          </h1>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto space-y-8" data-aos="fade-up">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  Transforming Business with{" "}
                  <span className="text-primary">AI</span>
                </h1>
                <p className="text-gray-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
                  Pioneering AI solutions that drive innovation and transform businesses through cutting-edge technology
                </p>
                <div className="flex flex-row items-center justify-center gap-4">
                  <button 
                    onClick={scrollToContact}
                    className="w-[200px] h-[60px] primary-btn flex items-center justify-center gap-2 text-lg rounded-lg hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                    <span>
                      <FaRobot className="text-2xl" />
                    </span>
                  </button>
                  <button 
                    onClick={playCompanyVideo}
                    className="w-[200px] h-[60px] bg-white border-2 border-primary text-primary flex items-center justify-center gap-2 text-lg rounded-lg hover:scale-105 hover:bg-primary/10 transition-all duration-300"
                  >
                    Learn More
                    <span>
                      <FaBrain className="text-2xl" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">120+</div>
                  <div className="text-gray-600">AI Experts</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Clients</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <HeroBottom />
      </div>
    </>
  );
};

export default Hero;
