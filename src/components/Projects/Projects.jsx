import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import aCard1 from "../../assets/a_card_1.png";
import aCard2 from "../../assets/a_card_2.png";
import aCard3 from "../../assets/a_card_3.png";
import iCard1 from "../../assets/i_card_1.png";
import iCard2 from "../../assets/icard_2.png";
import iCard3 from "../../assets/i_card_3.png";
import dCard1 from "../../assets/d_card1.png";
import dCard2 from "../../assets/d_card_2.png";
import dCard3 from "../../assets/d_card3.png";
import lCard1 from "../../assets/l_card_1.png";
import lCard2 from "../../assets/l_card_2.png";
import lCard3 from "../../assets/l_card_3.png";
import mCard1 from "../../assets/m_card_1.png";
import mCard2 from "../../assets/m_card_2.png";
import mCard3 from "../../assets/m_card_3.png";

// Dynamic image sets - each set contains 3 images for the phone stack
const imageSets = {
  'a': [aCard1, aCard2, aCard3],
  'i': [iCard1, iCard2, iCard3],
  'd': [dCard1, dCard2, dCard3],
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
    title: "Grocery Shopping App",
    category: "E-commerce",
    imageSet: 'i',
    description: "Modern grocery shopping platform featuring fresh produce, real-time inventory, promotions, and intuitive cart management for convenient online shopping.",
  },
  {
    title: "Fitness Tracking App",
    category: "Health & Fitness",
    imageSet: 'd',
    description: "Comprehensive workout tracking app with personalized exercise routines, progress monitoring, video demonstrations, and daily fitness goals.",
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

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-dark-800/20 w-full" id="projects">
      <div className="w-full max-w-[93%] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-left mb-16" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="heading-2 mb-6">Example <span className="text-gradient">Projects</span></h2>
          <p className="body-text-lg max-w-2xl">Discover our latest works and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card overflow-visible group hover:scale-105 transition-all duration-500 cursor-pointer sm:cursor-default hover:shadow-primary-500/20"
              onClick={() => handleCardClick(index)}
              data-aos="fade-up"
              data-aos-delay={index * 200}
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
                    onError={(e) => {
                      console.error(`Error loading image for project ${index}:`, project.title, 'imageSet:', project.imageSet, 'image:', imageSets[project.imageSet][2]);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary-400 font-medium bg-primary-500/20 px-3 py-1 rounded-full group-hover:bg-primary-500/30 transition-colors duration-300">{project.category}</span>
                <h3 className="text-xl font-semibold text-neutral-100 mt-3 mb-3 group-hover:text-primary-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4 group-hover:text-neutral-200 transition-colors duration-300">{project.description}</p>
                <button
                  onClick={scrollToContact}
                  className="w-full primary-btn glow px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 group/btn hover:scale-105 transition-all duration-300"
                >
                  Order the Same or Similar App
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-left mt-16" data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/projects"
            className="primary-btn group glow inline-flex items-center gap-3 px-8 py-4 text-lg"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 