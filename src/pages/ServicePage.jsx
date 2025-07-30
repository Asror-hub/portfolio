import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import ProcessTimeline from '../components/ProcessTimeline/ProcessTimeline';
import FAQ from '../components/FAQ/FAQ';

const ServicePage = ({ service }) => {
  const [activeTechId, setActiveTechId] = useState(null);

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
              {service.title}
            </h1>
            {service.subtitle && (
              <h2 className="text-2xl text-primary font-semibold mb-6" data-aos="fade-up" data-aos-delay="50">
                {service.subtitle}
              </h2>
            )}
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              {service.description}
            </p>
            {service.highlightText && (
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mb-8" data-aos="fade-up" data-aos-delay="150">
                <p className="text-lg text-gray-700 italic">{service.highlightText}</p>
              </div>
            )}
            <button
              onClick={scrollToContact}
              className="primary-btn text-lg px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get Started
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
              <p className="text-gray-600 mb-8">{service.approach}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.approachPoints && service.approachPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {point.icon}
                      <h3 className="text-xl font-bold text-gray-800">{point.title}</h3>
                    </div>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img
                src={service.approachImage}
                alt="Approach"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Technologies We Use
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {service.technologies && service.technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border"
                data-aos="fade-up"
                data-aos-delay={tech.id * 100}
              >
                <button
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setActiveTechId(activeTechId === tech.id ? null : tech.id)}
                >
                  <h3 className="text-xl font-bold text-left">{tech.title}</h3>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-300 ${
                      activeTechId === tech.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeTechId === tech.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 mb-6">{tech.description}</p>
                    <div className="flex flex-wrap gap-8">
                      {tech.stack && tech.stack.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold">{item.name.charAt(0)}</span>
                          </div>
                          <span className="text-sm text-gray-600">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {service.process && <ProcessTimeline steps={service.process} />}
          </div>
        </div>
      </section>

      {/* Example Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Example Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.projects && service.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {service.faqs && <FAQ faqs={service.faqs} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage; 