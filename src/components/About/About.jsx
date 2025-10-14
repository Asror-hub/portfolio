import React from "react";
import { FaHistory, FaUsers, FaLightbulb, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import TechAnimation from "./TechAnimation";

const About = () => {
  return (
    <section className="section-padding bg-dark-800/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating square shapes with modern animations */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-primary-500/15 rounded-lg animate-modern-float animate-pulse-glow shadow-lg"></div>
        <div className="absolute top-40 left-10 w-12 h-12 bg-accent-500/15 rounded-lg animate-modern-float animate-pulse-glow shadow-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-primary-400/20 rounded-lg animate-modern-float animate-pulse-glow shadow-lg" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-14 h-14 bg-accent-400/15 rounded-lg animate-modern-float animate-pulse-glow shadow-lg" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-warning-500/15 rounded-lg animate-modern-float animate-pulse-glow shadow-lg" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-20 w-10 h-10 bg-primary-500/12 rounded-lg animate-modern-float animate-pulse-glow shadow-lg" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Content Section - order-2 on mobile to show description first */}
          <div className="space-y-8 order-2 lg:order-2" data-aos="fade-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">About <span className="text-gradient">Soltech</span></h2>
              <p className="text-base text-neutral-300 leading-relaxed mb-6">
                Soltech is a leading software development company specializing in mobile and web applications, and custom software solutions. We transform businesses through innovative technology, expert engineering, and user-centric design.
              </p>
            </div>

            {/* Animation between description and cards on mobile only */}
            <div className="lg:hidden relative" data-aos="fade-up">
              <TechAnimation />
            </div>

            <div className="space-y-6">
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card" data-aos="fade-up" data-aos-delay="100">
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl flex items-center justify-center">
                    <FaHistory className="text-primary-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/95 mb-2 group-hover:text-white transition-colors duration-400">Our History</h3>
                    <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-400">
                      Founded to revolutionize technology through innovative solutions and expert engineering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card" data-aos="fade-up" data-aos-delay="200">
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl flex items-center justify-center">
                    <FaUsers className="text-accent-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/95 mb-2 group-hover:text-white transition-colors duration-400">Our Mission</h3>
                    <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-400">
                      Empowering businesses with mobile and web applications that drive growth and digital transformation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card" data-aos="fade-up" data-aos-delay="300">
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl flex items-center justify-center">
                    <FaLightbulb className="text-warning-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/95 mb-2 group-hover:text-white transition-colors duration-400">Our Vision</h3>
                    <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-400">
                      Being the trusted partner for exceptional mobile and web solutions that shape digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/about"
                className="primary-btn group glow inline-flex items-center gap-3 px-6 py-3 text-base"
              >
                Read More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* 3D Animation Section - Desktop only on left, order-1 */}
          <div className="hidden lg:block relative order-1" data-aos="fade-right">
            <div className="relative min-h-[600px] flex items-center mt-16">
              <TechAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 