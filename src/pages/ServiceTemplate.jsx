import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicePage from './ServicePage';
import Layout from '../components/Layout/Layout';

const ServiceTemplate = ({ serviceData }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (location.hash === '#contact') {
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
    }
  }, [location]);

  return (
    <Layout>
      <div className="pt-20">
        <ServicePage service={serviceData} />
      </div>
    </Layout>
  );
};

export default ServiceTemplate; 