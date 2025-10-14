import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const ServiceLinks = [
  {
    name: "Mobile App Development",
    link: "/services/mobile-app-development",
  },
  {
    name: "Web App Development",
    link: "/services/web-app-development",
  },
  {
    name: "Custom Software Development",
    link: "/services/custom-software-development",
  },
  {
    name: "AI Development",
    link: "/services/ai-development",
  },
  {
    name: "iOS Development",
    link: "/services/ios-development",
  },
  {
    name: "Android Development",
    link: "/services/android-development",
  },
];

const IndustryLinks = [
  {
    name: "E-commerce",
    link: "/industries/e-commerce",
  },
  {
    name: "Real Estate",
    link: "/industries/real-estate",
  },
  {
    name: "Education",
    link: "/industries/education",
  },
  {
    name: "Finance",
    link: "/industries/finance",
  },
];

const MenuLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  // {
  //   name: "Solutions",
  //   link: "/solutions",
  // },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileIndustries, setShowMobileIndustries] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [industriesTimeout, setIndustriesTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowMobileServices(false);
    setShowMobileIndustries(false);
  }, [location]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeout) clearTimeout(servicesTimeout);
      if (industriesTimeout) clearTimeout(industriesTimeout);
    };
  }, [servicesTimeout, industriesTimeout]);

  const handleServicesMouseEnter = () => {
    // Clear any existing timeouts
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    if (industriesTimeout) {
      clearTimeout(industriesTimeout);
      setIndustriesTimeout(null);
    }
    // Close other dropdown immediately
    setShowIndustriesDropdown(false);
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 150);
    setServicesTimeout(timeout);
  };

  const handleIndustriesMouseEnter = () => {
    // Clear any existing timeouts
    if (industriesTimeout) {
      clearTimeout(industriesTimeout);
      setIndustriesTimeout(null);
    }
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    // Close other dropdown immediately
    setShowServicesDropdown(false);
    setShowIndustriesDropdown(true);
  };

  const handleIndustriesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowIndustriesDropdown(false);
    }, 150);
    setIndustriesTimeout(timeout);
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100; // Adjust this value to account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = (e, link) => {
    if (link.startsWith("/#")) {
      e.preventDefault();
      const elementId = link.substring(2); // Remove "/#"
      scrollToElement(elementId);
    } else if (link === "/#contact") {
      e.preventDefault();
      if (window.location.pathname.startsWith('/industries/')) {
        // If we're on an industry page, scroll to the contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For other pages, use the regular scroll behavior
        scrollToElement("contact");
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Handle contact hash on page load
  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(() => scrollToElement("contact"), 100);
    }
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary-500/5' : 'bg-dark-900/70 backdrop-blur-lg border-b border-white/5'}`}>
      <div data-aos="fade-down" className="px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link to="/" className="group relative flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-black tracking-wider">
              <span className="text-primary-500 group-hover:text-primary-400 transition-colors duration-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.05em' }}>Cod</span>
              <span className="text-white/90 group-hover:text-white transition-colors duration-300 font-extralight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.15em' }}>vex</span>
            </h1>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-500 group-hover:scale-125 transition-transform duration-300"></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-20">
              {/* Services Dropdown */}
              <li className="relative group/nav">
                <button
                  className="text-neutral-300 text-base font-medium hover:text-white transition-all duration-300 flex items-center gap-1 py-2 relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <span className="relative">{t('services')}</span>
                  <MdArrowDropDown className="text-xl text-primary-500 group-hover/nav:text-primary-400 transition-all duration-300 group-hover/nav:translate-y-0.5" />
                  {/* Underline animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover/nav:w-full transition-all duration-300"></div>
                </button>
                {showServicesDropdown && (
                  <>
                    {/* Invisible bridge to prevent accidental closure */}
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                    <div
                      className="absolute top-full left-0 mt-2 bg-dark-900/98 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 rounded-2xl py-2 min-w-[340px] animate-in slide-in-from-top-2 duration-300 overflow-hidden"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none"></div>
                    
                    {/* Header */}
                    <div className="px-5 py-3 border-b border-white/5 mb-1 relative">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
                        <h3 className="text-xs font-bold text-primary-400 uppercase tracking-widest">
                          Our Services
                        </h3>
                      </div>
                    </div>
                    
                    {/* Service Links */}
                    <div className="py-1">
                      {ServiceLinks.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="group flex items-center px-5 py-3 text-sm text-neutral-300 hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-transparent hover:text-white transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute left-0 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                            {t(service.name.toLowerCase().replace(/\s+/g, ''))}
                          </span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                            <svg className="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                    </div>
                  </>
                )}
              </li>

              {/* Industries Dropdown */}
              <li className="relative group/nav">
                <button
                  className="text-neutral-300 text-base font-medium hover:text-white transition-all duration-300 flex items-center gap-1 py-2 relative"
                  onMouseEnter={handleIndustriesMouseEnter}
                  onMouseLeave={handleIndustriesMouseLeave}
                >
                  <span className="relative">{t('industries')}</span>
                  <MdArrowDropDown className="text-xl text-accent-500 group-hover/nav:text-accent-400 transition-all duration-300 group-hover/nav:translate-y-0.5" />
                  {/* Underline animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 group-hover/nav:w-full transition-all duration-300"></div>
                </button>
                {showIndustriesDropdown && (
                  <>
                    {/* Invisible bridge to prevent accidental closure */}
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                    <div
                      className="absolute top-full left-0 mt-2 bg-dark-900/98 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 rounded-2xl py-2 min-w-[340px] animate-in slide-in-from-top-2 duration-300 overflow-hidden"
                      onMouseEnter={handleIndustriesMouseEnter}
                      onMouseLeave={handleIndustriesMouseLeave}
                    >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5 pointer-events-none"></div>
                    
                    {/* Header */}
                    <div className="px-5 py-3 border-b border-white/5 mb-1 relative">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse"></div>
                        <h3 className="text-xs font-bold text-accent-400 uppercase tracking-widest">
                          Industries
                        </h3>
                      </div>
                    </div>
                    
                    {/* Industry Links */}
                    <div className="py-1">
                      {IndustryLinks.map((industry, index) => (
                        <Link
                          key={index}
                          to={industry.link}
                          className="group flex items-center px-5 py-3 text-sm text-neutral-300 hover:bg-gradient-to-r hover:from-accent-500/10 hover:to-transparent hover:text-white transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute left-0 w-0.5 h-full bg-gradient-to-b from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                            {t(industry.name.toLowerCase())}
                          </span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                            <svg className="w-3.5 h-3.5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                    </div>
                  </>
                )}
              </li>

              {/* Other Menu Links */}
              {MenuLinks.map((data, index) => (
                <li key={index} className="relative group/nav">
                  <Link
                    className="text-neutral-300 text-base font-medium hover:text-white transition-all duration-300 py-2 relative inline-block"
                    to={data.link}
                    onClick={(e) => handleScroll(e, data.link)}
                  >
                    <span>{t(data.name.toLowerCase())}</span>
                    {/* Underline animation */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover/nav:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section with contact */}
          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              onClick={(e) => handleScroll(e, "/#contact")}
              className="hidden sm:flex items-center gap-2 primary-btn text-sm font-semibold px-6 py-2.5 rounded-xl glow group relative overflow-hidden"
            >
              <span className="relative z-10">{t('contact')}</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl text-primary-500 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <FaBars className="text-2xl text-primary-500 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-[60] ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed right-0 top-0 h-screen w-[320px] bg-dark-900/98 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-300 ease-out shadow-2xl ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none"></div>
            
            <div className="relative p-6 overflow-y-auto h-full">
              {/* Close button at the top */}
              <button
                className="absolute top-4 right-4 p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <FaTimes className="text-2xl text-primary-500 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Add some top padding to account for close button */}
              <div className="pt-10">
                {/* Mobile Services Dropdown */}
                <div className="mb-4">
                  <button
                    className="flex items-center justify-between w-full px-5 py-3.5 bg-white/5 backdrop-blur-sm rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-primary-500/30 relative overflow-hidden"
                    onClick={() => setShowMobileServices(!showMobileServices)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center relative z-10">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                      <span className="font-semibold">{t('services')}</span>
                    </div>
                    <MdArrowDropDown
                      className={`text-xl text-primary-500 group-hover:text-primary-400 relative z-10 transform transition-transform duration-300 ${
                        showMobileServices ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showMobileServices ? 'max-h-[500px] mt-2' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 space-y-1 border border-white/5">
                      {ServiceLinks.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="group flex items-center px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute left-0 w-1 h-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                            {t(service.name.toLowerCase().replace(/\s+/g, ''))}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Industries Dropdown */}
                <div className="mb-4">
                  <button
                    className="flex items-center justify-between w-full px-5 py-3.5 bg-white/5 backdrop-blur-sm rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-accent-500/30 relative overflow-hidden"
                    onClick={() => setShowMobileIndustries(!showMobileIndustries)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center relative z-10">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                      <span className="font-semibold">{t('industries')}</span>
                    </div>
                    <MdArrowDropDown
                      className={`text-xl text-accent-500 group-hover:text-accent-400 relative z-10 transform transition-transform duration-300 ${
                        showMobileIndustries ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showMobileIndustries ? 'max-h-[500px] mt-2' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 space-y-1 border border-white/5">
                      {IndustryLinks.map((industry, index) => (
                        <Link
                          key={index}
                          to={industry.link}
                          className="group flex items-center px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-accent-500/10 rounded-lg transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute left-0 w-1 h-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                            {t(industry.name.toLowerCase())}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Links */}
                <div className="space-y-2 mb-6">
                  {MenuLinks.map((data, index) => (
                    <Link
                      key={index}
                      to={data.link}
                      onClick={(e) => handleScroll(e, data.link)}
                      className="group flex items-center px-5 py-3.5 bg-white/5 backdrop-blur-sm rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary-500/20 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute left-0 w-1 h-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold relative z-10">
                        {t(data.name.toLowerCase())}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Contact Button in Mobile Menu */}
                <Link
                  to="/#contact"
                  onClick={(e) => handleScroll(e, "/#contact")}
                  className="flex items-center justify-center gap-2 mt-4 px-6 py-3.5 primary-btn text-center glow rounded-xl font-semibold group relative overflow-hidden"
                >
                  <span className="relative z-10">{t('contact')}</span>
                  <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
