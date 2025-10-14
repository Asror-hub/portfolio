import React from "react";
import { FaMobile, FaLaptopCode } from "react-icons/fa";
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

        {/* Background Codvex Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full overflow-hidden">
          <h1 className="text-6xl sm:text-8xl md:text-[150px] lg:text-[240px] xl:text-[320px] 2xl:text-[400px] text-center font-bold uppercase subtle-bg-text whitespace-nowrap select-none">
            Codvex
          </h1>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8" data-aos="fade-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-100 leading-tight">
                  Transforming Business with{" "}
                  <span className="text-gradient">Innovation</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  Expert mobile and web app development, delivering custom software solutions that transform your business vision into reality
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
                  <button 
                    onClick={scrollToContact}
                    className="primary-btn group flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg glow px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Get Started
                    <span>
                      <FaMobile className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                  <button 
                    onClick={playCompanyVideo}
                    className="secondary-btn flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Learn More
                    <span>
                      <FaLaptopCode className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto w-full px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">50+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Projects</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">30+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Happy Clients</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">15+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Developers</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">24/7</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Support</div>
                  </div>
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
