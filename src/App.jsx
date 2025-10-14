import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Industries from "./components/Industries/Industries";
import ProjectsPage from "./pages/Projects";
import ProjectsSection from "./components/Projects/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Process from "./components/Process/Process";
import ServiceTemplate from "./pages/ServiceTemplate";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import AIDevelopment from "./pages/AIDevelopment";
import ScrollToTop from "./components/ScrollToTop";
import Solutions from "./pages/Solutions";
import SolutionTemplate from "./pages/solutions/SolutionTemplate";
import Chatbot from "./components/Chatbot/Chatbot";
import {
  staffAugmentationData,
  webAppData,
  aiInfusionData,
  blockchainData,
  iosDevelopmentData,
  androidDevelopmentData,
  visionProData,
} from "./data/serviceData";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from './pages/AboutUs';
import Footer from "./components/Footer/Footer";
import IndustryTemplate from "./pages/industries/IndustryTemplate";
import FAQ from "./components/FAQ/FAQ";

const HomePage = () => (
  <>
    <div className="pt-20">
      <Hero />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="industries">
      <Industries />
    </div>
    <div id="projects">
      <ProjectsSection />
    </div>
    <div id="testimonials">
      <Testimonials />
    </div>
    <div id="technologies">
      <Technologies />
    </div>
    <div id="process">
      <Process />
    </div>
    <div id="faq">
      <section className="section-padding bg-dark-900/50">
        <div className="container">
          <div className="text-left mb-16" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              </div>
              <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
              <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
            </div>
            <h2 className="heading-2 mb-4">
              <span className="text-gradient">FAQs</span>
            </h2>
            <p className="body-text-lg">
              Get answers to common questions about our development services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={[
              {
                question: "What types of applications do you develop?",
                answer: "We develop mobile apps for iOS and Android, responsive web applications, and custom software solutions. Our expertise includes React Native for cross-platform mobile apps, modern web frameworks like React and Vue.js, and enterprise-grade custom software tailored to your business needs."
              },
              {
                question: "How long does it take to develop a mobile or web app?",
                answer: "The timeline varies depending on the complexity and features required. A simple mobile app typically takes 1-2 months, while complex applications with advanced features may take 2-4 months or more. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you develop apps for both iOS and Android?",
                answer: "Yes, we develop native apps for both iOS and Android, as well as cross-platform solutions using React Native and Flutter. We'll help you choose the best approach based on your requirements, timeline, and budget."
              },
              {
                question: "What is your approach to app security and data privacy?",
                answer: "We prioritize security throughout the development process, implementing industry-standard encryption, secure authentication, and data protection measures. We ensure compliance with GDPR, HIPAA, and other relevant regulations based on your industry."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive post-launch support and maintenance services, including bug fixes, performance optimization, feature updates, and ensuring compatibility with the latest OS versions and devices."
              }
            ]} />
          </div>
        </div>
      </section>
    </div>
    <div id="contact">
      <Contact />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </>
);

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 0,
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="overflow-hidden dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:solutionId" element={<SolutionTemplate />} />
            <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/staff-augmentation" element={<ServiceTemplate serviceData={staffAugmentationData} />} />
            <Route path="/services/web-app-development" element={<ServiceTemplate serviceData={webAppData} />} />
            <Route path="/services/ai-infusion" element={<ServiceTemplate serviceData={aiInfusionData} />} />
            <Route path="/services/ai-development" element={<AIDevelopment />} />
            <Route path="/services/blockchain" element={<ServiceTemplate serviceData={blockchainData} />} />
            <Route path="/services/ios-development" element={<ServiceTemplate serviceData={iosDevelopmentData} />} />
            <Route path="/services/android-development" element={<ServiceTemplate serviceData={androidDevelopmentData} />} />
            <Route path="/services/vision-pro-development" element={<ServiceTemplate serviceData={visionProData} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/industries/:industry" element={<IndustryTemplate />} />
          </Routes>
        </div>
        <Chatbot />
      </Router>
    </LanguageProvider>
  );
};

export default App;
