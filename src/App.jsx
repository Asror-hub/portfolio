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
import Team from "./components/Team/Team";
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
import {
  staffAugmentationData,
  webAppData,
  aiInfusionData,
  blockchainData,
  iosDevelopmentData,
  androidDevelopmentData,
  visionProData,
  aiChatbotData,
} from "./data/serviceData";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutUs from './pages/AboutUs';
import Footer from "./components/Footer/Footer";
import IndustryTemplate from "./pages/industries/IndustryTemplate";

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
    <div id="team">
      <Team />
    </div>
    <div id="technologies">
      <Technologies />
    </div>
    <div id="process">
      <Process />
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
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="overflow-hidden">
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
            <Route path="/services/ai-chatbot-development" element={<ServiceTemplate serviceData={aiChatbotData} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/industries/:industry" element={<IndustryTemplate />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
