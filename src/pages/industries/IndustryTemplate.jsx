import React from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const industryData = {
  healthcare: {
    title: "Healthcare Software Solutions",
    description: "Transform healthcare delivery with innovative software solutions",
    challenges: [
      "Patient data management and security",
      "Regulatory compliance (HIPAA, GDPR)",
      "Interoperability between systems",
      "Telemedicine and remote care",
      "Clinical workflow optimization"
    ],
    solutions: [
      "Electronic Health Records (EHR) systems",
      "Telemedicine platforms",
      "Medical billing and coding software",
      "Patient portal development",
      "Healthcare analytics solutions"
    ],
    benefits: [
      "Improved patient care and outcomes",
      "Enhanced operational efficiency",
      "Better data security and compliance",
      "Streamlined administrative processes",
      "Cost reduction and revenue optimization"
    ]
  },
  finance: {
    title: "Financial Technology Solutions",
    description: "Empower financial institutions with cutting-edge technology",
    challenges: [
      "Regulatory compliance and reporting",
      "Fraud detection and prevention",
      "Real-time transaction processing",
      "Data security and privacy",
      "Customer experience enhancement"
    ],
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Investment management software",
      "Risk assessment tools",
      "Financial analytics solutions"
    ],
    benefits: [
      "Enhanced security and compliance",
      "Improved operational efficiency",
      "Better customer experience",
      "Reduced operational costs",
      "Increased revenue opportunities"
    ]
  },
  education: {
    title: "Education Technology Solutions",
    description: "Revolutionize learning with innovative edtech solutions",
    challenges: [
      "Remote learning management",
      "Student engagement and retention",
      "Learning analytics and assessment",
      "Content management and delivery",
      "Institutional administration"
    ],
    solutions: [
      "Learning Management Systems (LMS)",
      "Virtual classroom platforms",
      "Student information systems",
      "Educational mobile apps",
      "Assessment and testing platforms"
    ],
    benefits: [
      "Enhanced learning outcomes",
      "Improved student engagement",
      "Streamlined administrative processes",
      "Better resource management",
      "Expanded educational reach"
    ]
  },
  retail: {
    title: "Retail Technology Solutions",
    description: "Transform retail operations with digital innovation",
    challenges: [
      "Omnichannel integration",
      "Inventory management",
      "Customer experience personalization",
      "Supply chain optimization",
      "Data-driven decision making"
    ],
    solutions: [
      "E-commerce platforms",
      "Point of Sale (POS) systems",
      "Inventory management software",
      "Customer relationship management",
      "Retail analytics solutions"
    ],
    benefits: [
      "Enhanced customer experience",
      "Improved operational efficiency",
      "Better inventory management",
      "Increased sales and revenue",
      "Data-driven decision making"
    ]
  },
  manufacturing: {
    title: "Manufacturing Technology Solutions",
    description: "Optimize manufacturing processes with smart technology",
    challenges: [
      "Production efficiency",
      "Quality control",
      "Supply chain management",
      "Equipment maintenance",
      "Resource optimization"
    ],
    solutions: [
      "Manufacturing Execution Systems (MES)",
      "Quality Management Systems (QMS)",
      "Supply chain management software",
      "Predictive maintenance solutions",
      "Industrial IoT platforms"
    ],
    benefits: [
      "Increased production efficiency",
      "Improved product quality",
      "Reduced operational costs",
      "Better resource utilization",
      "Enhanced supply chain visibility"
    ]
  },
  "real-estate": {
    title: "Real Estate Technology Solutions",
    description: "Transform real estate operations with digital solutions",
    challenges: [
      "Property management",
      "Tenant communication",
      "Document management",
      "Market analysis",
      "Transaction processing"
    ],
    solutions: [
      "Property management systems",
      "Real estate CRM platforms",
      "Virtual tour and visualization tools",
      "Document management systems",
      "Real estate analytics solutions"
    ],
    benefits: [
      "Improved property management",
      "Enhanced tenant experience",
      "Streamlined operations",
      "Better market insights",
      "Increased efficiency and profitability"
    ]
  }
};

const IndustryTemplate = () => {
  const { industry } = useParams();
  const data = industryData[industry];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Industry Not Found</h2>
          <p className="text-gray-600">The requested industry page does not exist.</p>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12" data-aos="fade-up" data-aos-delay="100">
              {data.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <button
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="mailto:info@doraemon.com"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
              Industry Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-xl" />
                    </div>
                    <p className="text-gray-600 text-lg">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-xl" />
                    </div>
                    <p className="text-gray-600 text-lg">{solution}</p>
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
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-xl" />
                    </div>
                    <p className="text-gray-600 text-lg">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
              
              {/* Animated Circles */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                  Don't See Your Industry?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                  Every industry has unique challenges and opportunities. If your industry isn't listed here, 
                  we'd love to discuss your specific needs and explore how we can help transform your business 
                  with custom software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                  <button
                    onClick={scrollToContact}
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Let's Talk
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <a
                    href="mailto:info@doraemon.com"
                    className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IndustryTemplate; 