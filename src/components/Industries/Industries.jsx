import React from "react";
import { FaShoppingBag, FaBuilding, FaBook, FaCreditCard, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: <FaShoppingBag className="text-4xl text-primary-500" />,
    title: "E-commerce",
    description: "Advanced online retail and marketplace solutions",
  },
  {
    icon: <FaBuilding className="text-4xl text-accent-500" />,
    title: "Real Estate",
    description: "Custom property listing platforms and real estate management apps",
  },
  {
    icon: <FaBook className="text-4xl text-warning-500" />,
    title: "Education",
    description: "EdTech platforms and learning management systems",
  },
  {
    icon: <FaCreditCard className="text-4xl text-primary-500" />,
    title: "Finance",
    description: "Fintech applications and blockchain solutions",
  },
];

const Industries = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="container">
        <div className="text-left mb-16" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <h2 className="heading-2 mb-4">Industries We <span className="text-gradient">Transform</span></h2>
          <p className="body-text-lg">Delivering cutting-edge solutions across diverse sectors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card"
            >
              {/* Glass reflection sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
              
              <div className="relative z-10">
                <div className="mb-6">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-white/95 mb-3 group-hover:text-white transition-colors duration-400">{industry.title}</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-400">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div className="mt-20 relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/8 hover:border-white/20 transition-all duration-500 authentic-glass-card" data-aos="fade-up">
          {/* Glass reflection sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white/95 mb-4 group-hover:text-white transition-colors duration-400">Don't See Your <span className="text-gradient">Industry?</span></h3>
              <p className="text-white/80 leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-400">
                Every industry has unique challenges and opportunities. If your industry isn't listed here, 
                we'd love to discuss your specific needs and explore how we can help transform your business 
                with custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="group primary-btn glow flex items-center justify-center gap-2"
                >
                  Let's Talk
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            <div className="bg-primary-gradient/10 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                  <FaArrowRight className="text-3xl text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-white/95 mb-2 group-hover:text-white transition-colors duration-400">Custom Solutions</h4>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-400">
                  Tailored to your specific industry needs and challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 