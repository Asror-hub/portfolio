import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient">Norasoft</h3>
            <p className="body-text">
              Building the future of digital innovation through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="body-text hover:text-primary-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="body-text hover:text-primary-400 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/#services" className="body-text hover:text-primary-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="body-text hover:text-primary-400 transition-colors duration-300">Projects</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3 mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-app-development" className="body-text hover:text-primary-400 transition-colors duration-300">Web Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="body-text hover:text-primary-400 transition-colors duration-300">Mobile Apps</Link>
              </li>
              <li>
                <Link to="/services/ai-development" className="body-text hover:text-primary-400 transition-colors duration-300">AI Development</Link>
              </li>
              <li>
                <Link to="/services/custom-software-development" className="body-text hover:text-primary-400 transition-colors duration-300">Custom Software</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3 mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-500 mt-1" />
                <span className="body-text">info@norasoft.tech</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-500 mt-1" />
                <span className="body-text">support@norasoft.tech</span>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 mt-12 pt-8 text-center">
          <p className="body-text">&copy; {new Date().getFullYear()} Norasoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 