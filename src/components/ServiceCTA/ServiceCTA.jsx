import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@doraemon.com"
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              Get a Quote
            </a>
          </div>
          <p className="mt-6 text-gray-600">
            Have questions? Call us at{" "}
            <a href="tel:+1234567890" className="text-primary hover:underline">
              123-456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA; 