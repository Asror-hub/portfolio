import React from 'react';
import { FaRocket, FaChartLine, FaCogs, FaShieldAlt, FaMobile, FaCloud, FaBrain, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { useLanguage } from '../context/LanguageContext';

const solutions = [
  {
    id: 'digital-transformation',
    icon: <FaRocket className="text-4xl text-primary" />,
    title: "Digital Transformation",
    description: "Accelerate your business growth with our comprehensive digital transformation solutions.",
    features: [
      "Process automation",
      "Cloud migration",
      "Legacy system modernization",
      "Digital workflow optimization"
    ]
  },
  {
    id: 'business-intelligence',
    icon: <FaChartLine className="text-4xl text-primary" />,
    title: "Business Intelligence",
    description: "Turn your data into actionable insights with our advanced analytics solutions.",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Real-time reporting",
      "Custom dashboards"
    ]
  },
  {
    id: 'enterprise-solutions',
    icon: <FaCogs className="text-4xl text-primary" />,
    title: "Enterprise Solutions",
    description: "Streamline your operations with our scalable enterprise-grade solutions.",
    features: [
      "ERP integration",
      "Supply chain management",
      "Inventory control",
      "Resource planning"
    ]
  },
  {
    id: 'security-solutions',
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: "Security Solutions",
    description: "Protect your digital assets with our comprehensive security solutions.",
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
    description: "Engage your customers with our innovative mobile solutions.",
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
    description: "Scale your business with our cloud-native solutions.",
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
    description: "Leverage the power of AI to transform your business processes.",
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
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70">
            {/* Animated Circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                {t('transformYourBusiness')}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up">
              {t('innovativeSolutionsFor')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                {" "}{t('modernBusinesses')}
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {t('discoverSolutions')}
            </p>
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
              <button
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {t('findSolution')}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20" id="solutions">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{t(solution.title.toLowerCase().replace(/\s+/g, ''))}</h3>
                <p className="text-gray-600 mb-6">{t(solution.description.toLowerCase().replace(/\s+/g, ''))}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <FaArrowRight className="text-primary mr-2" />
                      {t(feature.toLowerCase().replace(/\s+/g, ''))}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group w-full"
                >
                  {t('findSolution')}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
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