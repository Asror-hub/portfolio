import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const ServiceLinks = [
  {
    name: "Custom Software Development",
    link: "/services/custom-software-development",
  },
  {
    name: "Mobile App Development",
    link: "/services/mobile-app-development",
  },
  {
    name: "Web App Development",
    link: "/services/web-app-development",
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
  {
    name: "AI Chatbot Development",
    link: "/services/ai-chatbot-development",
  },
];

const IndustryLinks = [
  {
    name: "Healthcare",
    link: "/industries/healthcare",
  },
  {
    name: "Finance",
    link: "/industries/finance",
  },
  {
    name: "Education",
    link: "/industries/education",
  },
  {
    name: "Retail",
    link: "/industries/retail",
  },
  {
    name: "Manufacturing",
    link: "/industries/manufacturing",
  },
  {
    name: "Real Estate",
    link: "/industries/real-estate",
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
  {
    name: "Solutions",
    link: "/solutions",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileIndustries, setShowMobileIndustries] = useState(false);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''}`}>
      <div data-aos="fade-down" className="px-4 md:px-8 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link to="/" className="flex items-center gap-3">
            <GiAtomicSlashes className="text-5xl text-primary" />
            <div className="flex flex-col text-xl font-bold text-gray-600 leading-5">
              <span>SOLTECH</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="center">
              {/* Services Dropdown */}
              <li className="relative">
                <button
                  className="navlink text-gray-600 text-base hover:text-primary transition-colors duration-300 flex items-center"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  {t('services')}
                  <MdArrowDropDown className="text-lg text-primary" />
                </button>
                {showServicesDropdown && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    {ServiceLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-300"
                      >
                        {t(service.name.toLowerCase().replace(/\s+/g, ''))}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Industries Dropdown */}
              <li className="relative">
                <button
                  className="navlink text-gray-600 text-base hover:text-primary transition-colors duration-300 flex items-center"
                  onMouseEnter={() => setShowIndustriesDropdown(true)}
                  onMouseLeave={() => setShowIndustriesDropdown(false)}
                >
                  {t('industries')}
                  <MdArrowDropDown className="text-lg text-primary" />
                </button>
                {showIndustriesDropdown && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px]"
                    onMouseEnter={() => setShowIndustriesDropdown(true)}
                    onMouseLeave={() => setShowIndustriesDropdown(false)}
                  >
                    {IndustryLinks.map((industry, index) => (
                      <Link
                        key={index}
                        to={industry.link}
                        className="block px-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-300"
                      >
                        {t(industry.name.toLowerCase())}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Other Menu Links */}
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <Link
                    className="navlink text-gray-600 text-base hover:text-primary transition-colors duration-300"
                    to={data.link}
                    onClick={(e) => handleScroll(e, data.link)}
                  >
                    {t(data.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section with language and contact */}
          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              onClick={(e) => handleScroll(e, "/#contact")}
              className="hidden sm:block primary-btn text-base px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300"
            >
              {t('contact')}
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                className="hidden sm:flex center navlink cursor-pointer text-gray-600 text-base"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                {language === 'en' ? 'Eng' : 'Рус'}
                <MdArrowDropDown className="text-lg text-primary" />
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[100px]">
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-300"
                    onClick={() => {
                      changeLanguage('en');
                      setShowLanguageDropdown(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-300"
                    onClick={() => {
                      changeLanguage('ru');
                      setShowLanguageDropdown(false);
                    }}
                  >
                    Русский
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl text-primary transition-transform duration-300" />
              ) : (
                <FaBars className="text-2xl text-primary transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[60] ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed right-0 top-0 h-screen w-[300px] bg-white transform transition-transform duration-300 ease-out shadow-xl ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 overflow-y-auto h-full">
              {/* Close button at the top */}
              <button
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="text-2xl text-primary" />
              </button>

              {/* Add some top padding to account for close button */}
              <div className="pt-8">
                {/* Mobile Services Dropdown */}
                <div className="mb-4">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-primary transition-colors duration-300"
                    onClick={() => setShowMobileServices(!showMobileServices)}
                  >
                    <span>{t('services')}</span>
                    <MdArrowDropDown
                      className={`text-xl text-primary transform transition-transform duration-300 ${
                        showMobileServices ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      showMobileServices ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    {ServiceLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="block px-8 py-2 text-base text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {t(service.name.toLowerCase().replace(/\s+/g, ''))}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Industries Dropdown */}
                <div className="mb-4">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-primary transition-colors duration-300"
                    onClick={() => setShowMobileIndustries(!showMobileIndustries)}
                  >
                    <span>{t('industries')}</span>
                    <MdArrowDropDown
                      className={`text-xl text-primary transform transition-transform duration-300 ${
                        showMobileIndustries ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      showMobileIndustries ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    {IndustryLinks.map((industry, index) => (
                      <Link
                        key={index}
                        to={industry.link}
                        className="block px-8 py-2 text-base text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {t(industry.name.toLowerCase())}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Links */}
                {MenuLinks.map((data, index) => (
                  <Link
                    key={index}
                    to={data.link}
                    onClick={(e) => handleScroll(e, data.link)}
                    className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {t(data.name.toLowerCase())}
                  </Link>
                ))}

                {/* Contact Button in Mobile Menu */}
                <Link
                  to="/#contact"
                  onClick={(e) => handleScroll(e, "/#contact")}
                  className="block mt-4 px-4 py-2 primary-btn text-center"
                >
                  {t('contact')}
                </Link>

                {/* Mobile Language Selector */}
                <div className="mt-4 px-4 py-2">
                  <span className="text-gray-600">{t('language')}:</span>
                  <div className="flex gap-2 mt-2">
                    <button
                      className={`px-3 py-1 rounded ${
                        language === 'en' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </button>
                    <button
                      className={`px-3 py-1 rounded ${
                        language === 'ru' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                      onClick={() => changeLanguage('ru')}
                    >
                      Русский
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
