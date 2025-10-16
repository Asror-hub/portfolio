import React from "react";
import { FaMobile, FaLaptopCode, FaArrowRight } from "react-icons/fa";
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
      <div className="w-full h-[92vh] relative bg-dark-gradient overflow-hidden flex items-center justify-center">
        {/* Modern Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Round gradient orbs with glowing effects */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-primary-500/30" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent-500/18 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-accent-500/25" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-primary-400/25 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-primary-400/35" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-accent-400/15 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-accent-400/20" style={{animationDelay: '1s'}}></div>
          
          {/* Additional round shapes with glow */}
          <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-primary-300/25 rounded-full animate-modern-pulse shadow-lg shadow-primary-300/40" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-accent-300/30 rounded-full animate-modern-pulse shadow-lg shadow-accent-300/35" style={{animationDelay: '1.5s'}}></div>
          
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Background Norasoft Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full overflow-hidden">
          <h1 className="text-4xl sm:text-6xl md:text-[120px] lg:text-[180px] xl:text-[240px] 2xl:text-[300px] text-center font-bold uppercase subtle-bg-text whitespace-nowrap select-none">
            Norasoft
          </h1>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8" data-aos="fade-up">
                <h1 className="font-bold leading-tight max-w-5xl mx-auto px-4 sm:px-0 -mt-24">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-2 sm:mb-4 whitespace-nowrap">
                    <span className="text-primary-500">Mobile</span>
                    <span className="text-neutral-100"> & </span>
                    <span className="text-primary-500">Web</span>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-100 whitespace-nowrap mb-2 sm:mb-4">
                    application development
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-100 whitespace-nowrap">
                    company
                  </div>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0 mt-12 sm:mt-16">
                  Transform your ideas into powerful mobile and web applications with our expert development team.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto mt-16 sm:mt-24">
                  {/* Primary Button with Glassy Effect */}
                  <button 
                    onClick={scrollToContact}
                    className="primary-btn glow px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Let's discuss your project
                    <FaArrowRight className="text-white text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
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





