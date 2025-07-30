import React from "react";
import { FaFilm, FaGamepad, FaBook, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: <FaFilm className="text-4xl text-primary" />,
    title: "Animation & Film",
    description: "Producing high-quality animated content and movies",
  },
  {
    icon: <FaGamepad className="text-4xl text-primary" />,
    title: "Gaming",
    description: "Developing interactive games and mobile applications",
  },
  {
    icon: <FaBook className="text-4xl text-primary" />,
    title: "Publishing",
    description: "Creating manga, novels, and educational materials",
  },
  {
    icon: <FaShoppingBag className="text-4xl text-primary" />,
    title: "Merchandising",
    description: "Designing and distributing official merchandise",
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
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Industries We're Involved In</h2>
          <p className="text-gray-500">Exploring various creative domains</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{industry.icon}</div>
              <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
              <p className="text-gray-500">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12">
              <h3 className="text-3xl font-bold mb-4">Don't See Your Industry?</h3>
              <p className="text-gray-600 mb-8">
                Every industry has unique challenges and opportunities. If your industry isn't listed here, 
                we'd love to discuss your specific needs and explore how we can help transform your business 
                with custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Let's Talk
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <Link
                  to="/#contact"
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <FaArrowRight className="text-3xl text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Custom Solutions</h4>
                <p className="text-gray-600">
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