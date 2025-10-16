import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  return (
    <div className="section-padding bg-dark-800/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-left">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <h2 className="heading-2 mb-8">Ready to Get <span className="text-gradient">Started?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              to="/#contact"
              className="primary-btn glow px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@norasoft.com"
              className="secondary-btn px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
          <p className="mt-6 body-text">
            Have questions? Call us at{" "}
            <a href="tel:+1234567890" className="text-primary-400 hover:text-primary-300 hover:underline">
              123-456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA; 