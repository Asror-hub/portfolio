import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaArrowRight, FaCode, FaMobile, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { 
  SiSwift, 
  SiKotlin, 
  SiFlutter, 
  SiPython, 
  SiPhp, 
  SiFigma,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiDjango,
  SiLaravel,
  SiDotnet,
  SiCplusplus,
  SiRuby,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonaws
} from 'react-icons/si';
import ProcessTimeline from '../components/ProcessTimeline/ProcessTimeline';
import FAQ from '../components/FAQ/FAQ';
import aCard1 from "../assets/a_card_1.png";
import aCard2 from "../assets/a_card_2.png";
import aCard3 from "../assets/a_card_3.png";
import bCard1 from "../assets/b_card_1.png";
import bCard2 from "../assets/b_card_2.png";
import bCard3 from "../assets/b_card_3.png";
import cCard1 from "../assets/c_card_1.png";
import cCard2 from "../assets/c_card_2.png";
import cCard3 from "../assets/c_card_3.png";
import dCard1 from "../assets/d_card1.png";
import dCard2 from "../assets/d_card_2.png";
import dCard3 from "../assets/d_card3.png";
import eCard1 from "../assets/e_card_1.png";
import eCard2 from "../assets/e_card_2.png";
import eCard3 from "../assets/e_card_3.png";
import fCard1 from "../assets/f_card_1.png";
import fCard2 from "../assets/f_card_2.png";
import fCard3 from "../assets/f_card_3.png";
import gCard1 from "../assets/g_card_1.png";
import gCard2 from "../assets/g_card_2.png";
import gCard3 from "../assets/g_card_3.png";
import hCard1 from "../assets/h_card_1.png";
import hCard2 from "../assets/h_card_2.png";
import hCard3 from "../assets/h_card_3.png";
import iCard1 from "../assets/i_card_1.png";
import iCard2 from "../assets/icard_2.png";
import iCard3 from "../assets/i_card_3.png";
import jCard1 from "../assets/j_card_1.png";
import jCard2 from "../assets/j_card_2.png";
import jCard3 from "../assets/j_card_3.png";
import kCard1 from "../assets/k_card_1.png";
import kCard2 from "../assets/k_card_2.png";
import kCard3 from "../assets/k_card_3.png";

// Dynamic image sets - each set contains 3 images for the phone stack
const imageSets = {
  'a': [aCard1, aCard2, aCard3],
  'b': [bCard1, bCard2, bCard3],
  'c': [cCard1, cCard2, cCard3],
  'd': [dCard1, dCard2, dCard3],
  'e': [eCard1, eCard2, eCard3],
  'f': [fCard1, fCard2, fCard3],
  'g': [gCard1, gCard2, gCard3],
  'h': [hCard1, hCard2, hCard3],
  'i': [iCard1, iCard2, iCard3],
  'j': [jCard1, jCard2, jCard3],
  'k': [kCard1, kCard2, kCard3]
};

// Icon mapping function
const getIconComponent = (iconName) => {
  const iconMap = {
    SiSwift,
    SiKotlin,
    SiFlutter,
    SiPython,
    SiPhp,
    SiFigma,
    SiReact,
    SiVuedotjs,
    SiAngular,
    SiNodedotjs,
    SiDjango,
    SiLaravel,
    SiDotnet,
    SiCplusplus,
    SiRuby,
    SiGo,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiAmazonaws
  };
  return iconMap[iconName] || null;
};

const ServicePage = ({ service }) => {
  const [activeTechId, setActiveTechId] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 100; // Adjust this value to account for any fixed headers
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Check if the URL has a hash for contact
    if (window.location.hash === '#contact') {
      // Small delay to ensure the page is fully loaded
      setTimeout(scrollToContact, 100);
    }
  }, []);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section - Matching Main Page Design */}
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
        
        {/* Background Company Name Text */}
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
                  {service.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  {service.description}
                </p>
                {service.highlightText && (
                  <p className="text-lg text-neutral-300 italic max-w-3xl mx-auto px-4 sm:px-0">
                    {service.highlightText}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
                  <button 
                    onClick={scrollToContact}
                    className="primary-btn group flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg glow px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Get Started
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                  <button 
                    onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
                    className="secondary-btn flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Watch Demo
                    <span>
                      <FaRocket className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Service Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto w-full px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">5+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Years Experience</div>
                  </div>
            </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">50+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Projects Delivered</div>
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
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">99%</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            
        {/* Scroll Down Arrow - Matching Main Page Design */}
        <div className="absolute bottom-16 sm:bottom-8 left-0 right-0">
          <div className="flex flex-col items-center gap-4">
            {/* Scroll Button */}
            <button
              onClick={() => {
                const nextSection = document.querySelector('section');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:scale-110 transition-transform duration-300 p-2 group"
              aria-label="Scroll to next section"
            >
              <div className="animate-bounce">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <FaChevronDown className="text-xl text-primary-400 group-hover:text-primary-300" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Approach Section - Matching Main Page Design */}
      <section className="section-padding bg-dark-800/30">
        <div className="container">
          <div className="text-left mb-16" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </div>
              <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
              <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              {service.approach}
            </p>
          </div>
          
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-12 items-start">
            {/* Approach Cards - Vertical Stack */}
            <div className="space-y-4 order-2 xl:order-1">
              {service.approachPoints && service.approachPoints.map((point, index) => (
                <div
                  key={index}
                  className="group relative bg-transparent rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] h-[120px] flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {point.icon || (
                          index === 0 ? <FaCode className="text-xl text-primary-400" /> :
                          index === 1 ? <FaMobile className="text-xl text-primary-400" /> :
                          index === 2 ? <FaRocket className="text-xl text-primary-400" /> :
                          <FaShieldAlt className="text-xl text-primary-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-500">
                        {point.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                        {point.description}
                      </p>
                      <div className="mt-3 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Image Display - Top on Mobile, Right on Desktop */}
            <div data-aos="fade-left" data-aos-delay="300" className="relative group xl:ml-16 xl:mt-8 order-1 xl:order-2 flex justify-center items-center ml-10 xl:ml-16">
              {service.approachImage ? (
                <div className="relative w-full max-w-xs xl:max-w-none">
                  {/* Image Container */}
                  <div className="relative rounded-3xl overflow-hidden" style={{minHeight: '200px'}}>
                    <img
                      src={service.approachImage}
                      alt="Web App Development Approach"
                      className="w-full h-full object-cover rounded-2xl animate-float"
                    />
                    
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <FaCode className="text-xl text-primary-400" />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      <FaRocket className="text-xl text-accent-400" />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500 delay-200"></div>
                </div>
              ) : (
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-800/80 border border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105" style={{minHeight: '280px'}}>
                  
                  {/* Subtle background pattern with animation */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700" style={{
                      backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
                      `
                    }}></div>
                  </div>
                  
                  {/* Header with subtle animations */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full group-hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}></div>
                      <span className="text-slate-300 font-mono text-sm ml-4 font-medium group-hover:text-slate-200 transition-colors duration-300">web-dev.soltech</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform duration-300 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium group-hover:text-green-300 transition-colors duration-300">Live</span>
                    </div>
                  </div>
                  
                  {/* Main content area */}
                  <div className="absolute inset-x-6 top-16 bottom-20">
                    <div className="space-y-6">
                      {/* File tabs with hover effects */}
                      <div className="flex space-x-1">
                        <div className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-t-lg border-b-2 border-blue-500 group-hover:bg-blue-500/30 transition-colors duration-300">
                          App.jsx
                        </div>
                        <div className="px-4 py-2 text-slate-500 text-sm font-medium rounded-t-lg hover:text-slate-300 hover:bg-slate-700/30 transition-all duration-300 cursor-pointer">
                          Components.jsx
                        </div>
                        <div className="px-4 py-2 text-slate-500 text-sm font-medium rounded-t-lg hover:text-slate-300 hover:bg-slate-700/30 transition-all duration-300 cursor-pointer">
                          Styles.css
                        </div>
                      </div>
                      
                      {/* Code editor with subtle animations */}
                      <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-700/50 group-hover:bg-slate-900/70 transition-colors duration-300">
                        <div className="space-y-3">
                          <div className="flex">
                            <div className="text-slate-500 font-mono text-sm mr-4 space-y-3">
                              <div className="group-hover:text-slate-400 transition-colors duration-300">1</div>
                              <div className="group-hover:text-slate-400 transition-colors duration-300" style={{animationDelay: '0.1s'}}>2</div>
                              <div className="group-hover:text-slate-400 transition-colors duration-300" style={{animationDelay: '0.2s'}}>3</div>
                              <div className="group-hover:text-slate-400 transition-colors duration-300" style={{animationDelay: '0.3s'}}>4</div>
                              <div className="group-hover:text-slate-400 transition-colors duration-300" style={{animationDelay: '0.4s'}}>5</div>
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                                <span className="text-blue-400 font-mono text-sm group-hover:text-blue-300 transition-colors duration-300">import</span>
                                <span className="text-white font-mono text-sm group-hover:text-slate-100 transition-colors duration-300">React</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">from</span>
                                <span className="text-yellow-400 font-mono text-sm group-hover:text-yellow-300 transition-colors duration-300">'react'</span>
                              </div>
                              <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
                                <span className="text-blue-400 font-mono text-sm group-hover:text-blue-300 transition-colors duration-300">const</span>
                                <span className="text-purple-400 font-mono text-sm group-hover:text-purple-300 transition-colors duration-300">WebApp</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">=</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">()</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">=&gt;</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">{'{'}</span>
                              </div>
                              <div className="flex items-center space-x-2 ml-4 group-hover:translate-x-1 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                                <span className="text-blue-400 font-mono text-sm group-hover:text-blue-300 transition-colors duration-300">return</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">(</span>
                              </div>
                              <div className="flex items-center space-x-2 ml-8 group-hover:translate-x-1 transition-transform duration-300" style={{animationDelay: '0.3s'}}>
                                <span className="text-green-400 font-mono text-sm group-hover:text-green-300 transition-colors duration-300">&lt;div</span>
                                <span className="text-orange-400 font-mono text-sm group-hover:text-orange-300 transition-colors duration-300">className</span>
                                <span className="text-slate-400 font-mono text-sm group-hover:text-slate-300 transition-colors duration-300">=</span>
                                <span className="text-yellow-400 font-mono text-sm group-hover:text-yellow-300 transition-colors duration-300">"app"</span>
                                <span className="text-green-400 font-mono text-sm group-hover:text-green-300 transition-colors duration-300">&gt;</span>
                              </div>
                              <div className="flex items-center space-x-2 ml-8 group-hover:translate-x-1 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
                                <span className="text-green-400 font-mono text-sm group-hover:text-green-300 transition-colors duration-300">&lt;/div&gt;</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech stack with floating animations */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '0s', animationDuration: '3s'}}>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-2 border border-blue-500/30 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                            <span className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">R</span>
                          </div>
                          <div className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors duration-300">React</div>
                        </div>
                        <div className="text-center group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}>
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-2 border border-yellow-500/30 group-hover:border-yellow-500/50 group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300">
                            <span className="text-yellow-400 font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300">JS</span>
                          </div>
                          <div className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors duration-300">JavaScript</div>
                        </div>
                        <div className="text-center group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1s', animationDuration: '4s'}}>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl flex items-center justify-center mb-2 border border-blue-600/30 group-hover:border-blue-600/50 group-hover:shadow-lg group-hover:shadow-blue-600/20 transition-all duration-300">
                            <span className="text-blue-300 font-bold text-lg group-hover:text-blue-200 transition-colors duration-300">TS</span>
                          </div>
                          <div className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors duration-300">TypeScript</div>
                        </div>
                        <div className="text-center group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}>
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-2 border border-cyan-500/30 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                            <span className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">N</span>
                          </div>
                          <div className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Next.js</div>
                        </div>
                      </div>
                      
                      <div className="text-right group-hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">99.9%</div>
                        <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects Section - Matching Main Page Design */}
      <section className="section-padding bg-dark-800/30">
        <div className="w-[91%] mx-auto px-6">
          <div className="text-left mb-16" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </div>
              <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
              <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
              Example <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Real-world examples of our successful implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {service.projects && service.projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-visible group hover:scale-105 transition-all duration-500 cursor-pointer sm:cursor-default card"
                onClick={() => handleCardClick(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="relative flex items-center justify-center py-8 sm:py-12 z-10">
                  {/* First phone - left, behind */}
                  <div 
                    className="relative transition-all duration-500 phone-left group-hover:scale-105"
                    style={{
                      zIndex: 1,
                      top: '0',
                      transform: activeCard === index 
                        ? 'translateX(-2.5rem) rotate(0deg) scale(1.1)' 
                        : 'translateX(1.25rem) rotate(-12deg) scale(1)',
                      transformOrigin: 'center center'
                    }}
                  >
                    <img
                      src={project.imageSet ? imageSets[project.imageSet][0] : ex1}
                      alt={`${project.title} App`}
                      className="w-48 h-auto sm:w-80 sm:h-80 object-contain rounded-2xl sm:rounded-3xl"
                      style={{
                        minHeight: '192px'
                      }}
                    />
                  </div>
                  
                  {/* Second phone - center, on top */}
                  <div 
                    className="relative transition-all duration-500 phone-center group-hover:scale-110"
                    style={{
                      zIndex: 3,
                      top: '0',
                      transform: activeCard === index 
                        ? 'translateX(0) rotate(0deg) scale(1.25)' 
                        : 'translateX(0) rotate(0deg) scale(1.1)',
                      transformOrigin: 'center center'
                    }}
                  >
                    <img
                      src={project.imageSet ? imageSets[project.imageSet][1] : ex2}
                      alt={`${project.title} App`}
                      className="w-48 h-auto sm:w-80 sm:h-80 object-contain rounded-2xl sm:rounded-3xl"
                      style={{
                        minHeight: '192px'
                      }}
                    />
                  </div>
                  
                  {/* Third phone - right, behind */}
                  <div 
                    className="relative transition-all duration-500 phone-right group-hover:scale-105"
                    style={{
                      zIndex: 2,
                      top: '0',
                      transform: activeCard === index 
                        ? 'translateX(2.5rem) rotate(0deg) scale(1.1)' 
                        : 'translateX(-1.25rem) rotate(12deg) scale(1)',
                      transformOrigin: 'center center'
                    }}
                  >
                    <img
                      src={project.imageSet ? imageSets[project.imageSet][2] : ex3}
                      alt={`${project.title} App`}
                      className="w-48 h-auto sm:w-80 sm:h-80 object-contain rounded-2xl sm:rounded-3xl"
                      style={{
                        minHeight: '192px'
                      }}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary-400 font-medium bg-primary-500/20 px-3 py-1 rounded-full group-hover:bg-primary-500/30 transition-colors duration-300">{project.category || 'Project'}</span>
                  <h3 className="text-lg font-semibold text-neutral-100 mt-3 mb-2 group-hover:text-primary-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4 group-hover:text-neutral-200 transition-colors duration-300">{project.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full primary-btn glow px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 group/btn hover:scale-105 transition-all duration-300"
                  >
                    Order the Same or Similar App
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Matching Main Page Design */}
      <section className="section-padding bg-dark-800/30">
        <div className="container">
          <div className="text-left mb-16" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </div>
              <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
              <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
              <span className="text-gradient">Technologies</span> we use
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              We leverage cutting-edge AI technologies and modern frameworks to build robust, scalable solutions that drive your business forward.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {service.technologies && service.technologies.map((tech) => (
              <div
                key={tech.id}
                className={`relative overflow-hidden transition-all duration-500 group ${
                  activeTechId === tech.id ? 'scale-105' : 'scale-100'
                } bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:bg-white/8 hover:border-white/20 authentic-glass-card`}
                style={{ zIndex: activeTechId === tech.id ? 10 : 1 }}
              >
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                <button
                  className="w-full py-4 px-6 flex items-center justify-between relative z-10 group-hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setActiveTechId(activeTechId === tech.id ? null : tech.id)}
                >
                  <h3 className="text-lg font-semibold text-white/95 text-left group-hover:text-white transition-colors duration-400">{tech.title}</h3>
                  <FaChevronDown
                    className={`text-primary-500 transition-all duration-300 group-hover:text-primary-400 ${
                      activeTechId === tech.id ? "rotate-180 scale-110" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    activeTechId === tech.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0 relative z-10">
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6 group-hover:text-neutral-200 transition-colors duration-300">{tech.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {tech.stack && tech.stack.map((item, index) => {
                        const IconComponent = getIconComponent(item.icon);
                        return (
                          <div
                            key={index}
                            className="group/tech flex flex-col items-center gap-2 bg-dark-700/50 p-4 rounded-xl border border-dark-600/50 hover:border-primary-500/30 hover:bg-dark-700/70 transition-all duration-300 hover:scale-105"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center border border-primary-500/30 group-hover/tech:border-primary-500/50 transition-all duration-300">
                              {IconComponent ? (
                                <IconComponent className="text-primary-400 text-xl group-hover/tech:text-primary-300 transition-colors duration-300" />
                              ) : (
                                <span className="text-primary-400 font-bold text-sm group-hover/tech:text-primary-300 transition-colors duration-300">{item.name.charAt(0)}</span>
                              )}
                            </div>
                            <span className="text-xs text-neutral-300 group-hover/tech:text-neutral-200 transition-colors duration-300 font-medium">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Matching Main Page Design */}
      <section className="section-padding bg-dark-800/30">
        <div className="container">
          <div className="text-left mb-16" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </div>
              <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
              <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              A proven methodology for successful project delivery
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {service.process && <ProcessTimeline steps={service.process} />}
          </div>
        </div>
      </section>

      {/* FAQ Section - Matching Main Page Design */}
      <section className="section-padding bg-dark-800/30">
        <div className="container">
          <div className="text-left mb-16" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </div>
              <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
              <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Common questions about our services and process
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {service.faqs && <FAQ faqs={service.faqs} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage; 