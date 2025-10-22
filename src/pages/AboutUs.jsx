import React, { useState, useEffect } from 'react';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaArrowRight, FaPlay, FaArrowDown, FaBuilding, FaCode, FaGlobe } from 'react-icons/fa';
import Layout from '../components/Layout/Layout';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Company story timeline data
  const storyTimeline = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Soltech was founded with a vision to revolutionize digital solutions. We started as a small team of passionate developers with big dreams.",
      visual: "startup",
      icon: FaBuilding
    },
    {
      year: "2023", 
      title: "First Major Success",
      description: "We delivered our first enterprise-level project, establishing ourselves as a reliable partner for complex software development needs.",
      visual: "growth",
      icon: FaCode
    },
    {
      year: "2024",
      title: "Technology Innovation",
      description: "We expanded our expertise into AI and machine learning, becoming pioneers in cutting-edge technology solutions for modern businesses.",
      visual: "innovation",
      icon: FaRocket
    },
    {
      year: "2025",
      title: "Present Excellence", 
      description: "Today, we stand as a leading technology company, delivering innovative solutions across the globe with our expert team and cutting-edge expertise in AI, web, and mobile development.",
      visual: "present",
      icon: FaUsers
    }
  ];

  const values = [
    {
      icon: <FaRocket className="text-4xl text-primary-500" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <FaUsers className="text-4xl text-accent-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared success."
    },
    {
      icon: <FaLightbulb className="text-4xl text-warning-500" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary-500" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings."
    }
  ];

  // Timeline component with moving dot animation
  const StoryTimeline = ({ timeline }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());

    useEffect(() => {
      const handleScroll = () => {
        const elements = timeline.map((_, index) => 
          document.getElementById(`story-${index}`)
        );
        
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.6;

        elements.forEach((element, index) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
              setActiveStep(index);
              const newCompletedSteps = new Set();
              for (let i = 0; i < index; i++) {
                newCompletedSteps.add(i);
              }
              setCompletedSteps(newCompletedSteps);
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
    }, [timeline]);

    return (
      <div className="relative">
        {/* Vertical line - left on mobile, centered on desktop */}
        <div className="w-px bg-dark-600 absolute left-6 lg:left-1/2 top-0 bottom-0 z-10 lg:transform lg:-translate-x-1/2">
          {/* Progress line that fills as steps are completed */}
          <div
            className="w-px bg-primary-gradient absolute top-0 transition-all duration-1000 ease-out"
            style={{ 
              height: `${(completedSteps.size / (timeline.length - 1)) * 100}%`,
              background: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%)'
            }}
          />
        </div>

        {/* Moving dot that travels along the timeline */}
        <div
          className="absolute left-6 lg:left-1/2 z-30 transition-all duration-1000 ease-out lg:transform lg:-translate-x-1/2"
          style={{ 
            top: `${(activeStep / (timeline.length - 1)) * 100}%`,
            transform: 'translateX(-50%) translateY(-50%)'
          }}
        >
          <div className="w-4 h-4 bg-primary-gradient rounded-full shadow-lg shadow-primary-500/50 animate-pulse">
            <div className="w-full h-full bg-primary-gradient rounded-full animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Individual dots for each story point */}
        {timeline.map((_, index) => (
          <div
            key={`dot-${index}`}
            className="absolute left-6 lg:left-1/2 z-20 transition-all duration-700 ease-out lg:transform lg:-translate-x-1/2"
            style={{ 
              top: `${(index / (timeline.length - 1)) * 100}%`,
              transform: 'translateX(-50%) translateY(-50%)'
            }}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-700 ease-out ${
                completedSteps.has(index) 
                  ? 'bg-primary-gradient shadow-lg shadow-primary-500/50 scale-110' 
                  : 'bg-dark-600 border-2 border-dark-500'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: activeStep === index ? 'kickDot 0.6s ease-out' : 'none'
              }}
            />
          </div>
        ))}

        {/* Story content */}
        <div className="space-y-32 w-full pl-16 lg:pl-0">
          {timeline.map((story, index) => (
            <div
              key={index}
              id={`story-${index}`}
              className={`transition-all duration-700 ease-out ${
                completedSteps.has(index) 
                  ? 'opacity-100 scale-100' 
                  : activeStep === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-50 scale-95'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                        completedSteps.has(index)
                          ? 'bg-accent-gradient shadow-lg shadow-accent-500/30'
                          : 'bg-accent-500/20'
                      }`}>
                        <story.icon className={`text-xl transition-colors duration-500 ${
                          completedSteps.has(index)
                            ? 'text-white'
                            : 'text-accent-400'
                        }`} />
                      </div>
                      <div>
                        <div className={`text-4xl font-bold transition-colors duration-500 ${
                          completedSteps.has(index)
                            ? 'text-primary-400'
                            : 'text-neutral-400'
                        }`}>
                          {story.year}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                      completedSteps.has(index)
                        ? 'text-neutral-100'
                        : 'text-neutral-400'
                    }`}>
                      {story.title}
                    </h3>
                    
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      completedSteps.has(index)
                        ? 'text-neutral-300'
                        : 'text-neutral-500'
                    }`}>
                      {story.description}
                    </p>
                  </div>
                </div>

                {/* Visual content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-2`}>
                  <div className="relative">
                    {story.visual === 'startup' && (
                      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 authentic-glass-card">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="text-neutral-400 text-sm ml-4">Soltech Startup</div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">Web Development</span>
                            </div>
                            <div className="h-8 bg-primary-gradient rounded-lg flex items-center px-4">
                              <span className="text-sm text-white">Mobile Development</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {story.visual === 'growth' && (
                      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 authentic-glass-card">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="text-neutral-400 text-sm ml-4">Team Dashboard</div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">Project Management</span>
                            </div>
                            <div className="h-8 bg-primary-gradient rounded-lg flex items-center px-4">
                              <span className="text-sm text-white">Team Collaboration</span>
                            </div>
                            <div className="h-8 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">Client Success</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {story.visual === 'innovation' && (
                      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 authentic-glass-card">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="text-neutral-400 text-sm ml-4">AI Platform</div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-8 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">Machine Learning</span>
                            </div>
                            <div className="h-8 bg-accent-gradient rounded-lg flex items-center px-4">
                              <span className="text-sm text-white">AI Development</span>
                            </div>
                            <div className="h-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">Data Analytics</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {story.visual === 'global' && (
                      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 authentic-glass-card">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="text-neutral-400 text-sm ml-4">Global Network</div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">International Clients</span>
                            </div>
                            <div className="h-8 bg-primary-gradient rounded-lg flex items-center px-4">
                              <span className="text-sm text-white">Worldwide Services</span>
                            </div>
                            <div className="h-8 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-lg flex items-center px-4">
                              <span className="text-sm text-neutral-300">24/7 Support</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {story.visual === 'present' && (
                      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card h-64 flex items-center justify-center">
                        {/* Glass reflection sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                        
                        <div className="relative z-10 text-center">
                          <div className="text-6xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                            Norasoft
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
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
                  Building the Future of{" "}
                  <span className="text-gradient">Digital Innovation</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences that transform businesses and delight users.
                </p>
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

      {/* Our Story Timeline Section */}
      <section className="section-padding relative bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold">
                Our Journey
              </span>
            </div>
            <h2 className="heading-2 mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="body-text-lg max-w-3xl mx-auto">
              From humble beginnings to global expansion, discover the milestones that shaped our company's journey.
            </p>
          </div>
          
          <StoryTimeline timeline={storyTimeline} />
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold">
                Our Values
              </span>
            </div>
            <h2 className="heading-2 mb-6">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="body-text-lg max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card"
              >
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white/95 mb-4 group-hover:text-white transition-colors duration-400">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
    </Layout>
  );
};

export default AboutUs; 