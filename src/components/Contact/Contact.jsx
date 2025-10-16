import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaSpinner, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { emailCredentials } from '../../config/emailCredentials';

const Contact = ({ selectedProject = null }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    project: selectedProject || ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Update project in formData when selectedProject changes
  useEffect(() => {
    if (selectedProject) {
      setFormData(prev => ({
        ...prev,
        project: selectedProject
      }));
    }
  }, [selectedProject]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d\s\-\(\)]{7,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // EmailJS configuration
      const { serviceId, templateId, publicKey } = emailCredentials;
      
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        project: formData.project || 'General Inquiry',
        to_name: 'Norasoft Team',
        reply_to: formData.email,
        to_email: 'asrorsardorugli@mail.com',
        company_name: 'Norasoft',
        website: 'https://norasoft.com',
        current_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      
      // Send email using EmailJS with error handling
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', result);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        project: selectedProject || ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark-800/50 scroll-mt-20">
      <div className="container">
        <div className="text-left mb-16" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <h2 className="heading-2 mb-4">Get in <span className="text-gradient">Touch</span></h2>
          <p className="body-text-lg">We'd love to hear from you and discuss your project</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-start gap-4 group">
              <div className="bg-primary-500/20 p-3 rounded-full group-hover:bg-primary-500/30 transition-colors duration-300">
                <FaEnvelope className="text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">Email Us</h3>
                <p className="body-text">asrorodilov@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="bg-accent-500/20 p-3 rounded-full group-hover:bg-accent-500/30 transition-colors duration-300">
                <FaPhone className="text-accent-400 text-xl" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">Call Us</h3>
                <p className="body-text">+48668334362</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Reference */}
              {selectedProject && (
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                  <p className="text-primary-400 text-sm font-medium">Interested in:</p>
                  <p className="text-white text-lg font-semibold mt-1">{selectedProject}</p>
                </div>
              )}
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center space-x-3">
                  <FaCheck className="text-green-400 text-lg" />
                  <p className="text-green-400">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center space-x-3">
                  <FaExclamationTriangle className="text-red-400 text-lg" />
                  <p className="text-red-400">Failed to send message. Please try again later.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-neutral-100 placeholder-neutral-400 transition-all duration-300 ${
                      errors.firstName 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-dark-600 focus:border-primary-500'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-neutral-100 placeholder-neutral-400 transition-all duration-300 ${
                      errors.lastName 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-dark-600 focus:border-primary-500'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-neutral-100 placeholder-neutral-400 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-dark-600 focus:border-primary-500'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-neutral-100 placeholder-neutral-400 transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-dark-600 focus:border-primary-500'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-neutral-300 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-neutral-100 placeholder-neutral-400 h-32 resize-none transition-all duration-300 ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-dark-600 focus:border-primary-500'
                  }`}
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full primary-btn glow flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 