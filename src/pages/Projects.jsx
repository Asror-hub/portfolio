import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
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
import lCard1 from "../assets/l_card_1.png";
import lCard2 from "../assets/l_card_2.png";
import lCard3 from "../assets/l_card_3.png";
import mCard1 from "../assets/m_card_1.png";
import mCard2 from "../assets/m_card_2.png";
import mCard3 from "../assets/m_card_3.png";

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
  'k': [kCard1, kCard2, kCard3],
  'l': [lCard1, lCard2, lCard3],
  'm': [mCard1, mCard2, mCard3]
};

const projects = [
  {
    title: "Food Delivery Mobile App",
    category: "Food & Delivery",
    imageSet: 'a',
    description: "Complete pizza ordering and restaurant delivery app with menu browsing, customization options, and seamless checkout experience.",
  },
  {
    title: "Healthy Meal Planner App", 
    category: "Food & Health",
    imageSet: 'b',
    description: "Meal customization platform for creating perfect salads with favorite toppings and dressings tailored to your preferences.",
  },
  {
    title: "Real Estate Property Search",
    category: "Real Estate",
    imageSet: 'c',
    description: "Advanced property finder app with location-based search, interactive maps, and personalized home recommendations.",
  },
  {
    title: "Fitness Tracking App",
    category: "Health & Fitness",
    imageSet: 'd',
    description: "Comprehensive workout tracking app with personalized exercise routines, progress monitoring, video demonstrations, and daily fitness goals.",
  },
  {
    title: "Furniture Shopping Platform",
    category: "E-commerce",
    imageSet: 'e',
    description: "Premium furniture shopping app featuring modern designs, room transformations, and curated collections for home decor.",
  },
  {
    title: "AR Furniture Visualizer",
    category: "Technology",
    imageSet: 'f',
    description: "Augmented reality furniture visualization app allowing users to see furniture in their space before purchasing.",
  },
  {
    title: "Pizza Ordering Platform",
    category: "Food & Delivery",
    imageSet: 'g',
    description: "Specialized pizza ordering app with detailed menu, size selection, custom toppings, and real-time order tracking.",
  },
  {
    title: "Fast Food Delivery App",
    category: "Food & Delivery",
    imageSet: 'h',
    description: "Quick burger and fast food delivery platform promising 15-30 minute delivery with fresh ingredients and quality service.",
  },
  {
    title: "Grocery Shopping App",
    category: "E-commerce",
    imageSet: 'i',
    description: "Modern grocery shopping platform featuring fresh produce, real-time inventory, promotions, and intuitive cart management for convenient online shopping.",
  },
  {
    title: "Fashion E-commerce App",
    category: "Fashion & Retail",
    imageSet: 'j',
    description: "Clothing and fashion shopping platform with detailed product views, color/size selection, reviews, and seamless checkout.",
  },
  {
    title: "Car Rental Booking App",
    category: "Transportation",
    imageSet: 'k',
    description: "Premium car rental service with simple booking process, instant confirmation, and luxury vehicle selection for travelers.",
  },
  {
    title: "Banking & Finance App",
    category: "FinTech",
    imageSet: 'l',
    description: "Secure mobile banking solution with account management, money transfers, bill payments, and real-time transaction monitoring for modern financial needs.",
  },
  {
    title: "Social Media Platform",
    category: "Social Networking",
    imageSet: 'm',
    description: "Engaging social media app with photo sharing, messaging, stories, and community features designed for seamless user interaction and content discovery.",
  },
];

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const scrollToContact = (projectTitle) => {
    setSelectedProject(projectTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section - Matching Main Page Design */}
      <div className="w-full h-screen relative bg-dark-gradient overflow-hidden flex items-center justify-center">
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
          <h1 className="text-6xl sm:text-8xl md:text-[150px] lg:text-[240px] xl:text-[320px] 2xl:text-[400px] text-center font-bold uppercase subtle-bg-text whitespace-nowrap select-none">
            Norasoft
          </h1>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8" data-aos="fade-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-100 leading-tight">
                  Our <span className="text-gradient">Portfolio</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  Discover our cutting-edge projects that transform ideas into reality across diverse industries
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
                  <button 
                    onClick={() => {
                      const nextSection = document.querySelector('section');
                      if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="primary-btn group flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg glow px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    View Projects
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                  {/* Learn More button disabled */}
                  {/* <button 
                    onClick={() => {
                      const nextSection = document.querySelector('section');
                      if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="secondary-btn flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Learn More
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
                  </button> */}
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
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">10+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Industries</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">100%</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Success Rate</div>
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

        {/* Scroll Down Arrow - Matching Main Page Design */}
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
                  <FaArrowDown className="text-xl text-primary-400 group-hover:text-primary-300" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="section-padding bg-dark-800/30">
        <div className="w-full max-w-[93%] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card overflow-visible group hover:scale-105 transition-all duration-500 cursor-pointer sm:cursor-default hover:shadow-primary-500/20"
                onClick={() => handleCardClick(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative flex items-center justify-center py-8 sm:py-12">
                  {/* First phone - left, behind */}
                  <div 
                    className="relative transition-transform duration-300 phone-left"
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
                      src={imageSets[project.imageSet][0]}
                      alt={`${project.title} App`}
                      className="w-48 h-auto sm:w-80 sm:h-80 object-contain rounded-2xl sm:rounded-3xl"
                      style={{
                        minHeight: '192px'
                      }}
                    />
                  </div>
                  
                  {/* Second phone - center, on top */}
                  <div 
                    className="relative transition-transform duration-300 phone-center"
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
                      src={imageSets[project.imageSet][1]}
                      alt={`${project.title} App`}
                      className="w-48 h-auto sm:w-80 sm:h-80 object-contain rounded-2xl sm:rounded-3xl"
                      style={{
                        minHeight: '192px'
                      }}
                    />
                  </div>
                  
                  {/* Third phone - right, behind */}
                  <div 
                    className="relative transition-transform duration-300 phone-right"
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
                      src={imageSets[project.imageSet][2]}
                      alt={`${project.title} App`}
                      className="w-48 h-auto sm:w-80 sm:h-80 object-contain rounded-2xl sm:rounded-3xl"
                      style={{
                        minHeight: '192px'
                      }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary-400 font-medium bg-primary-500/20 px-3 py-1 rounded-full group-hover:bg-primary-500/30 transition-colors duration-300">{project.category}</span>
                  <h3 className="text-xl font-semibold text-neutral-100 mt-3 mb-3 group-hover:text-primary-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4 group-hover:text-neutral-200 transition-colors duration-300">{project.description}</p>
                  <button
                    onClick={() => scrollToContact(project.title)}
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

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact selectedProject={selectedProject} />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Projects; 