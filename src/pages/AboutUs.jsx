import React from 'react';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaArrowRight, FaPlay } from 'react-icons/fa';
import Team from '../components/Team/Team';
import Layout from '../components/Layout/Layout';

const AboutUs = () => {
  const values = [
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared success."
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium tracking-wide">
                WELCOME TO DORAEMON
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 max-w-4xl">
              Building the Future of <span className="text-primary">Digital Innovation</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
              We are a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences that transform businesses and delight users.
            </p>
            <a 
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
            >
              <span>Watch Our Story</span>
              <FaPlay className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 2024, Doraemon started with a simple mission: to help businesses transform their digital presence through innovative technology solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  What began as a small team of passionate developers has grown into a full-service digital agency, serving clients across various industries with custom software solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we continue to push the boundaries of what's possible in web and mobile development, always staying ahead of the curve in technology and design.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Learn More
                <FaArrowRight className="text-sm" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="../assets/dora-about.png"
                  alt="Our Team"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-primary">Stand For</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-4">50+</div>
              <div className="text-xl text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-4">30+</div>
              <div className="text-xl text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-4">15+</div>
              <div className="text-xl text-gray-600">Team Members</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-4">5+</div>
              <div className="text-xl text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs; 