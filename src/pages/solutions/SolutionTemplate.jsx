import React from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const solutions = {
  'digital-transformation': {
    title: "Digital Transformation",
    description: "Accelerate your business growth with our comprehensive digital transformation solutions.",
    features: [
      "Process automation",
      "Cloud migration",
      "Legacy system modernization",
      "Digital workflow optimization"
    ],
    benefits: [
      "Increased operational efficiency",
      "Reduced manual processes",
      "Improved customer experience",
      "Enhanced data security",
      "Scalable infrastructure"
    ],
    icon: "FaRocket"
  },
  'business-intelligence': {
    title: "Business Intelligence",
    description: "Turn your data into actionable insights with our advanced analytics solutions.",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Real-time reporting",
      "Custom dashboards"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved forecasting accuracy",
      "Enhanced business insights",
      "Real-time performance monitoring",
      "Customizable reporting"
    ],
    icon: "FaChartLine"
  },
  'enterprise-solutions': {
    title: "Enterprise Solutions",
    description: "Streamline your operations with our scalable enterprise-grade solutions.",
    features: [
      "ERP integration",
      "Supply chain management",
      "Inventory control",
      "Resource planning"
    ],
    benefits: [
      "Streamlined operations",
      "Improved resource allocation",
      "Enhanced supply chain visibility",
      "Better inventory management",
      "Integrated business processes"
    ],
    icon: "FaCogs"
  },
  'security-solutions': {
    title: "Security Solutions",
    description: "Protect your digital assets with our comprehensive security solutions.",
    features: [
      "Cybersecurity",
      "Data encryption",
      "Access control",
      "Compliance management"
    ],
    benefits: [
      "Enhanced data protection",
      "Regulatory compliance",
      "Reduced security risks",
      "Secure access management",
      "Continuous monitoring"
    ],
    icon: "FaShieldAlt"
  },
  'mobile-solutions': {
    title: "Mobile Solutions",
    description: "Engage your customers with our innovative mobile solutions.",
    features: [
      "Cross-platform apps",
      "Mobile-first design",
      "Push notifications",
      "Offline capabilities"
    ],
    benefits: [
      "Improved user engagement",
      "Enhanced customer experience",
      "Increased accessibility",
      "Better market reach",
      "Real-time updates"
    ],
    icon: "FaMobile"
  },
  'cloud-solutions': {
    title: "Cloud Solutions",
    description: "Scale your business with our cloud-native solutions.",
    features: [
      "Cloud architecture",
      "Serverless computing",
      "Microservices",
      "Containerization"
    ],
    benefits: [
      "Scalable infrastructure",
      "Reduced operational costs",
      "Improved reliability",
      "Enhanced security",
      "Flexible deployment"
    ],
    icon: "FaCloud"
  },
  'ai-solutions': {
    title: "AI Solutions",
    description: "Leverage the power of AI to transform your business processes.",
    features: [
      "Machine learning",
      "Natural language processing",
      "Computer vision",
      "Predictive modeling"
    ],
    benefits: [
      "Automated processes",
      "Improved decision making",
      "Enhanced customer service",
      "Predictive analytics",
      "Innovative solutions"
    ],
    icon: "FaBrain"
  }
};

const SolutionTemplate = () => {
  const { solutionId } = useParams();
  const solution = solutions[solutionId];

  if (!solution) {
    return <div>Solution not found</div>;
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              {solution.title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solution.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4">
                    <FaArrowRight className="text-primary text-xl" />
                    <h3 className="text-xl font-semibold">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
              Business Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solution.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4">
                    <FaArrowRight className="text-primary text-xl" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Let's discuss how our {solution.title.toLowerCase()} can help transform your business.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionTemplate; 