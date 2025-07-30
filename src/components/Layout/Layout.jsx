import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Layout; 