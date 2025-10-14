import React, { useEffect } from 'react';
import { FaRocket, FaChartLine, FaCogs, FaShieldAlt, FaMobile, FaCloud, FaBrain, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { useLanguage } from '../context/LanguageContext';

const solutions = [
  {
    id: 'digital-transformation',
    icon: <FaRocket className="text-4xl text-primary-500" />,
    title: "Digital Transformation",
    description: "Accelerate growth with comprehensive digital transformation solutions.",
    features: [
      "Process automation",
      "Cloud migration",
      "Legacy system modernization",
      "Digital workflow optimization"
    ]
  },
  {
    id: 'business-intelligence',
    icon: <FaChartLine className="text-4xl text-accent-500" />,
    title: "Business Intelligence",
    description: "Transform data into actionable insights with advanced analytics.",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Real-time reporting",
      "Custom dashboards"
    ]
  },
  {
    id: 'enterprise-solutions',
    icon: <FaCogs className="text-4xl text-warning-500" />,
    title: "Enterprise Solutions",
    description: "Streamline operations with scalable enterprise-grade solutions.",
    features: [
      "ERP integration",
      "Supply chain management",
      "Inventory control",
      "Resource planning"
    ]
  },
  {
    id: 'security-solutions',
    icon: <FaShieldAlt className="text-4xl text-primary-500" />,
    title: "Security Solutions",
    description: "Protect digital assets with comprehensive security solutions.",
    features: [
      "Cybersecurity",
      "Data encryption",
      "Access control",
      "Compliance management"
    ]
  },
  {
    id: 'mobile-solutions',
    icon: <FaMobile className="text-4xl text-primary" />,
    title: "Mobile Solutions",
    description: "Engage customers with innovative mobile solutions.",
    features: [
      "Cross-platform apps",
      "Mobile-first design",
      "Push notifications",
      "Offline capabilities"
    ]
  },
  {
    id: 'cloud-solutions',
    icon: <FaCloud className="text-4xl text-primary" />,
    title: "Cloud Solutions",
    description: "Scale your business with cloud-native solutions.",
    features: [
      "Cloud architecture",
      "Serverless computing",
      "Microservices",
      "Containerization"
    ]
  },
  {
    id: 'ai-solutions',
    icon: <FaBrain className="text-4xl text-primary" />,
    title: "AI Solutions",
    description: "Leverage AI power to transform business processes.",
    features: [
      "Machine learning",
      "Natural language processing",
      "Computer vision",
      "Predictive modeling"
    ]
  }
];

const Solutions = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const scrollToContact = () => {
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
                  {t('innovativeSolutionsFor')}{" "}
                  <span className="text-gradient">{t('modernBusinesses')}</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  {t('discoverSolutions')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
                  <button 
                    onClick={scrollToContact}
                    className="primary-btn group flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg glow px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    {t('findSolution')}
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                  <button 
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
                      <FaRocket className="text-lg sm:text-2xl" />
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
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">7+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Solutions</div>
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
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">30+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Happy Clients</div>
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
              <p className="text-neutral-300 font-medium">Global AI Solutions</p>
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

      {/* Solutions Grid */}
      <section className="section-padding bg-dark-800/30" id="solutions">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">{solution.icon}</div>
                  <h3 className="text-lg font-semibold text-white/95 mb-4 group-hover:text-white transition-colors duration-400">{t(solution.title.toLowerCase().replace(/\s+/g, ''))}</h3>
                  <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-400">{t(solution.description.toLowerCase().replace(/\s+/g, ''))}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/70 group-hover:text-white/80 transition-colors duration-400">
                        <FaArrowRight className="text-primary-400 mr-2" />
                        {t(feature.toLowerCase().replace(/\s+/g, ''))}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className="group primary-btn glow px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full"
                  >
                    {t('findSolution')}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Solutions; 