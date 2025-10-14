import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaArrowDown, FaShoppingBag, FaBuilding, FaBook, FaCreditCard, FaRocket, FaShieldAlt, FaChartLine, FaUsers, FaCog, FaLightbulb, FaTrophy, FaClock, FaHandshake, FaChevronDown } from 'react-icons/fa';
import { 
  SiSwift, 
  SiKotlin, 
  SiFlutter, 
  SiPython, 
  SiPhp, 
  SiFigma,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiDjango,
  SiLaravel,
  SiDotnet,
  SiCplusplus,
  SiRuby,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonaws
} from 'react-icons/si';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Projects from '../../components/Projects/Projects';

const industryData = {
  "e-commerce": {
    title: "E-commerce Technology Solutions",
    description: "Transform your online retail business with cutting-edge e-commerce platforms, seamless payment processing, and intelligent inventory management systems that drive sales and enhance customer experience.",
    icon: FaShoppingBag,
    stats: {
      projects: "150+",
      clients: "200+",
      revenue: "300%",
      satisfaction: "98%"
    },
    challenges: [
      {
        title: "Omnichannel Integration",
        description: "Seamlessly connect online and offline channels for unified customer experience",
        icon: FaCog
      },
      {
        title: "Inventory Management",
        description: "Real-time stock tracking and automated reorder systems",
        icon: FaChartLine
      },
      {
        title: "Customer Personalization",
        description: "AI-powered recommendations and personalized shopping experiences",
        icon: FaUsers
      },
      {
        title: "Payment Security",
        description: "Secure payment processing with fraud detection and PCI compliance",
        icon: FaShieldAlt
      },
      {
        title: "Data Analytics",
        description: "Advanced analytics for customer behavior and sales optimization",
        icon: FaChartLine
      },
      {
        title: "Mobile Optimization",
        description: "Responsive design and mobile-first shopping experiences",
        icon: FaRocket
      }
    ],
    solutions: [
      {
        title: "Custom E-commerce Platforms",
        description: "Scalable, feature-rich online stores built with modern technologies",
        icon: FaRocket
      },
      {
        title: "Payment Gateway Integration",
        description: "Secure, multi-currency payment processing with fraud protection",
        icon: FaCreditCard
      },
      {
        title: "Inventory Management Systems",
        description: "Real-time stock tracking and automated supply chain management",
        icon: FaCog
      },
      {
        title: "Customer Relationship Management",
        description: "Comprehensive CRM for customer lifecycle management",
        icon: FaUsers
      },
      {
        title: "Analytics & Reporting",
        description: "Advanced business intelligence and performance analytics",
        icon: FaChartLine
      },
      {
        title: "Mobile Commerce Apps",
        description: "Native mobile applications for seamless shopping experiences",
        icon: FaRocket
      },
      {
        title: "AI-Powered Recommendations",
        description: "Machine learning algorithms for personalized product suggestions",
        icon: FaLightbulb
      }
    ],
    benefits: [
      {
        title: "Enhanced Customer Experience",
        description: "Intuitive interfaces and personalized shopping journeys",
        icon: FaTrophy
      },
      {
        title: "Operational Efficiency",
        description: "Automated processes and streamlined workflows",
        icon: FaCog
      },
      {
        title: "Revenue Growth",
        description: "Data-driven strategies that increase sales and customer lifetime value",
        icon: FaChartLine
      },
      {
        title: "Scalable Infrastructure",
        description: "Cloud-based solutions that grow with your business",
        icon: FaRocket
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock technical support and maintenance",
        icon: FaClock
      },
      {
        title: "Mobile-First Design",
        description: "Optimized mobile experiences that drive higher conversion rates",
        icon: FaRocket
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Frontend Development",
        description: "Modern frontend technologies for creating engaging user interfaces and seamless user experiences.",
        stack: [
          { name: "React", icon: "SiReact" },
          { name: "Vue.js", icon: "SiVuedotjs" },
          { name: "Angular", icon: "SiAngular" },
          { name: "Figma", icon: "SiFigma" }
        ]
      },
      {
        id: 2,
        title: "Backend Development",
        description: "Robust backend solutions with scalable architecture and high performance.",
        stack: [
          { name: "Node.js", icon: "SiNodedotjs" },
          { name: "Python", icon: "SiPython" },
          { name: "Django", icon: "SiDjango" },
          { name: "Laravel", icon: "SiLaravel" }
        ]
      },
      {
        id: 3,
        title: "Database & Cloud",
        description: "Reliable data storage and cloud infrastructure for scalable applications.",
        stack: [
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "PostgreSQL", icon: "SiPostgresql" },
          { name: "AWS", icon: "SiAmazonaws" },
          { name: "Docker", icon: "SiDocker" }
        ]
      }
    ],
    process: [
      "Discovery & Analysis",
      "UI/UX Design",
      "Development & Testing",
      "Deployment & Launch",
      "Maintenance & Support"
    ]
  },
  "real-estate": {
    title: "Real Estate Technology Solutions",
    description: "Revolutionize property management and real estate operations with comprehensive digital platforms, virtual tour technologies, and intelligent market analysis tools that streamline transactions and enhance client experiences.",
    icon: FaBuilding,
    stats: {
      projects: "120+",
      clients: "180+",
      efficiency: "250%",
      satisfaction: "96%"
    },
    challenges: [
      {
        title: "Property Management",
        description: "Centralized management of multiple properties and tenant relationships",
        icon: FaCog
      },
      {
        title: "Tenant Communication",
        description: "Streamlined communication channels and service request management",
        icon: FaUsers
      },
      {
        title: "Document Management",
        description: "Secure storage and easy access to property documents and contracts",
        icon: FaShieldAlt
      },
      {
        title: "Market Analysis",
        description: "Real-time market data and property valuation insights",
        icon: FaChartLine
      },
      {
        title: "Transaction Processing",
        description: "Digital transaction management and automated workflows",
        icon: FaHandshake
      },
      {
        title: "Virtual Tours",
        description: "Immersive 360° property viewing and virtual reality experiences",
        icon: FaRocket
      }
    ],
    solutions: [
      {
        title: "Property Management Systems",
        description: "Comprehensive platforms for managing properties, tenants, and maintenance",
        icon: FaBuilding
      },
      {
        title: "Real Estate CRM",
        description: "Customer relationship management tailored for real estate professionals",
        icon: FaUsers
      },
      {
        title: "Virtual Tour Technology",
        description: "Immersive 3D property tours and virtual staging solutions",
        icon: FaRocket
      },
      {
        title: "Document Management",
        description: "Secure cloud-based document storage and collaboration tools",
        icon: FaShieldAlt
      },
      {
        title: "Market Analytics",
        description: "Advanced analytics for property valuation and market trends",
        icon: FaChartLine
      },
      {
        title: "Lead Generation Tools",
        description: "Automated lead capture and nurturing systems for real estate agents",
        icon: FaUsers
      },
      {
        title: "Transaction Management",
        description: "Streamlined workflow tools for managing real estate transactions",
        icon: FaHandshake
      }
    ],
    benefits: [
      {
        title: "Streamlined Operations",
        description: "Automated workflows and centralized property management",
        icon: FaCog
      },
      {
        title: "Enhanced Client Experience",
        description: "Virtual tours and digital tools that impress clients",
        icon: FaTrophy
      },
      {
        title: "Data-Driven Insights",
        description: "Market analytics and performance metrics for better decisions",
        icon: FaChartLine
      },
      {
        title: "Increased Efficiency",
        description: "Reduced manual work and faster transaction processing",
        icon: FaRocket
      },
      {
        title: "Cost Savings",
        description: "Reduced operational costs through automation and digitalization",
        icon: FaLightbulb
      },
      {
        title: "Virtual Property Tours",
        description: "Immersive 360° experiences that showcase properties effectively",
        icon: FaRocket
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Frontend Development",
        description: "Interactive user interfaces and immersive virtual experiences for real estate applications.",
        stack: [
          { name: "React", icon: "SiReact" },
          { name: "Three.js", icon: "SiReact" },
          { name: "Figma", icon: "SiFigma" }
        ]
      },
      {
        id: 2,
        title: "Backend Development",
        description: "Scalable backend systems for property management and data processing.",
        stack: [
          { name: "Python", icon: "SiPython" },
          { name: "Django", icon: "SiDjango" },
          { name: "Node.js", icon: "SiNodedotjs" }
        ]
      },
      {
        id: 3,
        title: "Database & Cloud",
        description: "Secure data storage and cloud infrastructure for real estate platforms.",
        stack: [
          { name: "PostgreSQL", icon: "SiPostgresql" },
          { name: "AWS", icon: "SiAmazonaws" },
          { name: "Docker", icon: "SiDocker" }
        ]
      }
    ],
    process: [
      "Requirements Analysis",
      "System Architecture",
      "Development & Integration",
      "Testing & Deployment",
      "Training & Support"
    ]
  },
  education: {
    title: "Education Technology Solutions",
    description: "Transform educational institutions with comprehensive learning management systems, virtual classroom platforms, and intelligent assessment tools that enhance student engagement and improve learning outcomes.",
    icon: FaBook,
    stats: {
      projects: "200+",
      students: "50K+",
      engagement: "85%",
      satisfaction: "94%"
    },
    challenges: [
      {
        title: "Remote Learning Management",
        description: "Seamless online learning experiences and course delivery",
        icon: FaRocket
      },
      {
        title: "Student Engagement",
        description: "Interactive tools and gamification to boost student participation",
        icon: FaUsers
      },
      {
        title: "Learning Analytics",
        description: "Data-driven insights into student progress and performance",
        icon: FaChartLine
      },
      {
        title: "Content Management",
        description: "Centralized content creation, storage, and distribution",
        icon: FaCog
      },
      {
        title: "Administrative Efficiency",
        description: "Streamlined enrollment, grading, and reporting processes",
        icon: FaShieldAlt
      },
      {
        title: "Accessibility",
        description: "Inclusive learning experiences for students with diverse needs",
        icon: FaUsers
      }
    ],
    solutions: [
      {
        title: "Learning Management Systems",
        description: "Comprehensive platforms for course delivery and student management",
        icon: FaBook
      },
      {
        title: "Virtual Classroom Platforms",
        description: "Interactive online classrooms with video, chat, and collaboration tools",
        icon: FaRocket
      },
      {
        title: "Student Information Systems",
        description: "Complete student lifecycle management and administrative tools",
        icon: FaUsers
      },
      {
        title: "Educational Mobile Apps",
        description: "Native mobile applications for learning on-the-go",
        icon: FaCog
      },
      {
        title: "Assessment Platforms",
        description: "Advanced testing and evaluation systems with analytics",
        icon: FaChartLine
      },
      {
        title: "Content Management Systems",
        description: "Tools for creating, organizing, and delivering educational content",
        icon: FaCog
      },
      {
        title: "Gamification Features",
        description: "Interactive learning elements to boost student engagement",
        icon: FaTrophy
      }
    ],
    benefits: [
      {
        title: "Enhanced Learning Outcomes",
        description: "Personalized learning paths and adaptive content delivery",
        icon: FaTrophy
      },
      {
        title: "Improved Engagement",
        description: "Interactive tools and gamification that motivate students",
        icon: FaUsers
      },
      {
        title: "Administrative Efficiency",
        description: "Automated processes and streamlined workflows",
        icon: FaCog
      },
      {
        title: "Data-Driven Insights",
        description: "Analytics for curriculum optimization and student success",
        icon: FaChartLine
      },
      {
        title: "Scalable Solutions",
        description: "Platforms that grow with your institution's needs",
        icon: FaRocket
      },
      {
        title: "Accessibility Features",
        description: "Inclusive design that supports diverse learning needs",
        icon: FaUsers
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Learning Platforms",
        description: "Modern educational technologies for interactive learning experiences.",
        stack: [
          { name: "React", icon: "SiReact" },
          { name: "WebRTC", icon: "SiReact" },
          { name: "Figma", icon: "SiFigma" }
        ]
      },
      {
        id: 2,
        title: "Backend Development",
        description: "Scalable backend systems for educational content management and user tracking.",
        stack: [
          { name: "Node.js", icon: "SiNodedotjs" },
          { name: "Python", icon: "SiPython" },
          { name: "Django", icon: "SiDjango" }
        ]
      },
      {
        id: 3,
        title: "Database & Cloud",
        description: "Reliable data storage and cloud infrastructure for educational platforms.",
        stack: [
          { name: "MongoDB", icon: "SiMongodb" },
          { name: "AWS", icon: "SiAmazonaws" },
          { name: "Docker", icon: "SiDocker" }
        ]
      }
    ],
    process: [
      "Needs Assessment",
      "Platform Design",
      "Development & Testing",
      "Pilot Implementation",
      "Full Deployment & Training"
    ]
  },
  finance: {
    title: "Financial Technology Solutions",
    description: "Empower financial institutions with secure, compliant, and innovative technology solutions including digital banking platforms, advanced fraud detection, and real-time transaction processing that enhance customer experience and operational efficiency.",
    icon: FaCreditCard,
    stats: {
      projects: "100+",
      clients: "150+",
      security: "99.9%",
      compliance: "100%"
    },
    challenges: [
      {
        title: "Regulatory Compliance",
        description: "Meeting strict financial regulations and reporting requirements",
        icon: FaShieldAlt
      },
      {
        title: "Fraud Detection",
        description: "Advanced AI-powered fraud prevention and risk management",
        icon: FaChartLine
      },
      {
        title: "Real-time Processing",
        description: "High-speed transaction processing and instant settlements",
        icon: FaRocket
      },
      {
        title: "Data Security",
        description: "Bank-grade security and privacy protection for sensitive data",
        icon: FaShieldAlt
      },
      {
        title: "Customer Experience",
        description: "Intuitive digital interfaces and seamless user journeys",
        icon: FaUsers
      },
      {
        title: "API Integration",
        description: "Seamless integration with third-party financial services and fintech",
        icon: FaCog
      }
    ],
    solutions: [
      {
        title: "Digital Banking Platforms",
        description: "Comprehensive online and mobile banking solutions",
        icon: FaCreditCard
      },
      {
        title: "Payment Processing Systems",
        description: "Secure, high-speed payment processing and settlement",
        icon: FaRocket
      },
      {
        title: "Investment Management Software",
        description: "Portfolio management and investment tracking tools",
        icon: FaChartLine
      },
      {
        title: "Risk Assessment Tools",
        description: "AI-powered risk analysis and compliance monitoring",
        icon: FaShieldAlt
      },
      {
        title: "Financial Analytics",
        description: "Advanced business intelligence and reporting solutions",
        icon: FaChartLine
      },
      {
        title: "Blockchain Integration",
        description: "Secure cryptocurrency and blockchain-based financial services",
        icon: FaShieldAlt
      },
      {
        title: "Regulatory Compliance Tools",
        description: "Automated compliance monitoring and reporting systems",
        icon: FaCog
      }
    ],
    benefits: [
      {
        title: "Enhanced Security",
        description: "Bank-grade security with advanced encryption and monitoring",
        icon: FaShieldAlt
      },
      {
        title: "Regulatory Compliance",
        description: "Automated compliance monitoring and reporting",
        icon: FaCog
      },
      {
        title: "Operational Efficiency",
        description: "Streamlined processes and reduced manual work",
        icon: FaRocket
      },
      {
        title: "Customer Satisfaction",
        description: "Intuitive interfaces and faster service delivery",
        icon: FaTrophy
      },
      {
        title: "Cost Reduction",
        description: "Lower operational costs through automation and digitalization",
        icon: FaLightbulb
      },
      {
        title: "Real-time Processing",
        description: "Instant transaction processing and real-time financial insights",
        icon: FaRocket
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Frontend Development",
        description: "Secure and intuitive interfaces for financial applications and banking platforms.",
        stack: [
          { name: "React", icon: "SiReact" },
          { name: "Angular", icon: "SiAngular" },
          { name: "Figma", icon: "SiFigma" }
        ]
      },
      {
        id: 2,
        title: "Backend Development",
        description: "High-security backend systems for financial transactions and data processing.",
        stack: [
          { name: "Python", icon: "SiPython" },
          { name: "Node.js", icon: "SiNodedotjs" },
          { name: "Django", icon: "SiDjango" }
        ]
      },
      {
        id: 3,
        title: "Database & Cloud",
        description: "Secure data storage and cloud infrastructure for financial applications.",
        stack: [
          { name: "PostgreSQL", icon: "SiPostgresql" },
          { name: "AWS", icon: "SiAmazonaws" },
          { name: "Kubernetes", icon: "SiKubernetes" }
        ]
      }
    ],
    process: [
      "Compliance Analysis",
      "Security Architecture",
      "Development & Testing",
      "Security Audit",
      "Deployment & Monitoring"
    ]
  }
};

// Function to get the appropriate icon component
const getIconComponent = (iconName) => {
  const iconMap = {
    SiSwift,
    SiKotlin,
    SiFlutter,
    SiPython,
    SiPhp,
    SiFigma,
    SiReact,
    SiVuedotjs,
    SiAngular,
    SiNodedotjs,
    SiDjango,
    SiLaravel,
    SiDotnet,
    SiCplusplus,
    SiRuby,
    SiGo,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiAmazonaws
  };
  return iconMap[iconName] || null;
};

// SolutionsTimeline Component
const SolutionsTimeline = ({ solutions }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const elements = solutions.map((_, index) => 
        document.getElementById(`solution-${index}`)
      );
      
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;

      elements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
            setActiveStep(index);
            // Mark all previous steps as completed
            const newCompletedSteps = new Set();
            for (let i = 0; i < index; i++) {
              newCompletedSteps.add(i);
            }
            setCompletedSteps(newCompletedSteps);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [solutions]);

  return (
    <div className="relative flex">
      {/* Vertical line */}
      <div className="w-px bg-dark-600 absolute left-[28px] top-0 bottom-0 z-10">
        {/* Progress line that fills as steps are completed */}
        <div
          className="w-px bg-primary-gradient absolute top-0 transition-all duration-1000 ease-out"
          style={{ 
            height: `${(completedSteps.size / (solutions.length - 1)) * 100}%`,
            background: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%)'
          }}
        />
      </div>

      {/* Moving dot that travels along the timeline */}
      <div
        className="absolute left-[20px] z-30 transition-all duration-1000 ease-out"
        style={{ 
          top: `${(activeStep / (solutions.length - 1)) * 100}%`,
          transform: 'translateY(-50%)'
        }}
      >
        <div className="w-4 h-4 bg-primary-gradient rounded-full shadow-lg shadow-primary-500/50 animate-pulse">
          <div className="w-full h-full bg-primary-gradient rounded-full animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Individual dots for each solution */}
      {solutions.map((_, index) => (
        <div
          key={`dot-${index}`}
          className="absolute left-[20px] z-20 transition-all duration-700 ease-out"
          style={{ 
            top: `${(index / (solutions.length - 1)) * 100}%`,
            transform: 'translateY(-50%)'
          }}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all duration-700 ease-out ${
              completedSteps.has(index) 
                ? 'bg-primary-gradient shadow-lg shadow-primary-500/50 scale-110' 
                : 'bg-dark-600 border-2 border-dark-500'
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: activeStep === index ? 'kickDot 0.6s ease-out' : 'none'
            }}
          />
        </div>
      ))}

      {/* Solutions */}
      <div className="space-y-12 lg:space-y-24 w-full pl-16">
        {solutions.map((solution, index) => (
          <div
            key={index}
            id={`solution-${index}`}
            className={`transition-all duration-700 ease-out ${
              completedSteps.has(index) 
                ? 'opacity-100 scale-100' 
                : activeStep === index
                ? 'opacity-100 scale-100'
                : 'opacity-50 scale-95'
            }`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex items-start gap-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                completedSteps.has(index)
                  ? 'bg-accent-gradient shadow-lg shadow-accent-500/30'
                  : 'bg-accent-500/20'
              }`}>
                <solution.icon className={`text-xl transition-colors duration-500 ${
                  completedSteps.has(index)
                    ? 'text-white'
                    : 'text-accent-400'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                  completedSteps.has(index)
                    ? 'text-neutral-100'
                    : 'text-neutral-400'
                }`}>
                  {solution.title}
                </h3>
                <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                  completedSteps.has(index)
                    ? 'text-neutral-300'
                    : 'text-neutral-500'
                }`}>
                  {solution.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryTemplate = () => {
  const { industry } = useParams();
  const data = industryData[industry];
  const [activeTechId, setActiveTechId] = useState(1);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Industry Not Found</h2>
          <p className="text-gray-600">The requested industry page does not exist.</p>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section - Matching Main Page Design */}
      <div className="w-full h-screen relative bg-dark-gradient overflow-hidden flex items-center justify-center">
        {/* Modern Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Round gradient orbs with glowing effects */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-primary-500/30" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent-500/18 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-accent-500/25" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-primary-400/25 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-primary-400/35" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-accent-400/15 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-accent-400/20" style={{animationDelay: '1s'}}></div>
          
          {/* Additional round shapes with glow */}
          <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-primary-300/25 rounded-full animate-modern-pulse shadow-lg shadow-primary-300/40" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-accent-300/30 rounded-full animate-modern-pulse shadow-lg shadow-accent-300/35" style={{animationDelay: '1.5s'}}></div>
          
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Background Codvex Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full overflow-hidden">
          <h1 className="text-6xl sm:text-8xl md:text-[150px] lg:text-[240px] xl:text-[320px] 2xl:text-[400px] text-center font-bold uppercase subtle-bg-text whitespace-nowrap select-none">
            Codvex
          </h1>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8" data-aos="fade-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-100 leading-tight">
              {data.title}
            </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              {data.description}
            </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
              <button
                onClick={scrollToContact}
                    className="primary-btn group flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg glow px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
              >
                Get Started
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
              </button>
              <a
                href="mailto:info@soltech.com"
                    className="secondary-btn flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
              >
                Contact Sales
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto w-full px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{data.stats.projects}</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Projects</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{data.stats.clients}</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Clients</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{data.stats.satisfaction || data.stats.security || data.stats.engagement || data.stats.efficiency}</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Success Rate</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">24/7</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow - Matching Main Page Design */}
        <div className="absolute bottom-16 sm:bottom-8 left-0 right-0">
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="0"
            className="flex flex-col items-center gap-4"
          >
            {/* Company Info - Hidden on mobile */}
            <div className="text-center hidden sm:block">
              <p className="text-neutral-300 font-medium">Global AI Solutions</p>
            </div>

            {/* Scroll Button */}
            <button 
              onClick={() => {
                const nextSection = document.querySelector('section');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:scale-110 transition-transform duration-300 p-2 group"
              aria-label="Scroll to next section"
            >
              <div className="animate-bounce">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <FaArrowDown className="text-xl text-primary-400 group-hover:text-primary-300" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <section className="section-padding bg-dark-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 border border-accent-500/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
                <div className="w-40 h-px bg-gradient-to-r from-accent-500 to-primary-500 ml-3"></div>
                <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
                Industry <span className="text-gradient">Challenges</span>
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
                Every industry faces unique challenges. We understand these pain points and provide targeted solutions to help you overcome them.
              </p>
            </div>
            
            {/* Challenges Grid - 2 columns, 3 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm hover:from-white/8 hover:to-white/4 transition-all duration-500 hover:scale-[1.02]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/30 to-accent-600/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-accent-500/20">
                    <challenge.icon className="text-lg text-accent-300 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-200 transition-colors duration-500 mb-1">
                      {challenge.title}
                    </h3>
                    <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 transition-all duration-500 rounded-full"></div>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-dark-900/50" id="solutions">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 border border-accent-500/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
                <div className="w-40 h-px bg-gradient-to-r from-accent-500 to-primary-500 ml-3"></div>
                <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
                Our <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
                We provide comprehensive technology solutions tailored to address your industry's specific challenges and drive business growth.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SolutionsTimeline solutions={data.solutions} />
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects Section */}
      <Projects />

      {/* Benefits Section */}
      <section className="section-padding bg-dark-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 border border-accent-500/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
                <div className="w-40 h-px bg-gradient-to-r from-accent-500 to-primary-500 ml-3"></div>
                <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
                Key <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
                Experience measurable improvements in efficiency, productivity, and business outcomes with our industry-specific solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                  <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-warning-500/20 flex items-center justify-center text-warning-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <benefit.icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-400">
                          {benefit.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
                <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
                <span className="text-gradient">Technologies</span> we use
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
                We leverage cutting-edge technologies and modern frameworks to build robust, scalable solutions that drive your business forward.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {data.technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`relative overflow-hidden transition-all duration-500 group ${
                    activeTechId === tech.id ? 'scale-105' : 'scale-100'
                  } bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:bg-white/8 hover:border-white/20 authentic-glass-card`}
                  style={{ zIndex: activeTechId === tech.id ? 10 : 1 }}
                >
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>

                  <button
                    className="w-full py-4 px-6 flex items-center justify-between relative z-10 group-hover:bg-white/5 transition-colors duration-300"
                    onClick={() => setActiveTechId(activeTechId === tech.id ? null : tech.id)}
                  >
                    <h3 className="text-lg font-semibold text-white/95 text-left group-hover:text-white transition-colors duration-400">{tech.title}</h3>
                    <FaChevronDown
                      className={`text-primary-500 transition-all duration-300 group-hover:text-primary-400 ${
                        activeTechId === tech.id ? "rotate-180 scale-110" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      activeTechId === tech.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 pt-0 relative z-10">
                      <p className="text-sm text-neutral-300 leading-relaxed mb-6 group-hover:text-neutral-200 transition-colors duration-300">{tech.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {tech.stack.map((item, index) => {
                          const IconComponent = getIconComponent(item.icon);
                          return (
                            <div
                              key={index}
                              className="group/tech flex flex-col items-center gap-2 bg-dark-700/50 p-4 rounded-xl border border-dark-600/50 hover:border-primary-500/30 hover:bg-dark-700/70 transition-all duration-300 hover:scale-105"
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center border border-primary-500/30 group-hover/tech:border-primary-500/50 transition-all duration-300">
                                {IconComponent ? (
                                  <IconComponent className="text-primary-400 text-xl group-hover/tech:text-primary-300 transition-colors duration-300" />
                                ) : (
                                  <span className="text-primary-400 font-bold text-sm group-hover/tech:text-primary-300 transition-colors duration-300">{item.name.charAt(0)}</span>
                                )}
                              </div>
                              <span className="text-xs text-neutral-300 group-hover/tech:text-neutral-200 transition-colors duration-300 font-medium">{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="section-padding bg-dark-gradient text-neutral-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Content Section - Left Side */}
              <div className="lg:w-1/2" data-aos="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 border border-accent-500/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  </div>
                  <div className="w-40 h-px bg-gradient-to-r from-accent-500 to-primary-500"></div>
                  <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
                  Don't See Your <span className="text-gradient">Industry?</span>
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  Every industry has unique challenges and opportunities. If your industry isn't listed here, 
                  we'd love to discuss your specific needs and explore how we can help transform your business 
                  with custom software solutions.
                </p>
                <div className="flex justify-start" data-aos="fade-up" data-aos-delay="200">
                  <button
                    onClick={scrollToContact}
                    className="group primary-btn glow px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Let's Talk
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              
              {/* Visual Section - Right Side */}
              <div className="lg:w-1/2 relative hidden lg:block" data-aos="fade-left" data-aos-delay="300">
                <div className="relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]" />
                  
                  {/* Animated Circles */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                  </div>
                  
                  {/* Floating Cards */}
                  <div className="relative z-10 space-y-6">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-500 hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                          <FaRocket className="text-xl text-primary-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Custom Solutions</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        Tailored software solutions designed specifically for your industry's unique requirements.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-500 hover:scale-105 ml-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 flex items-center justify-center">
                          <FaCog className="text-xl text-accent-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Expert Consultation</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        Industry experts ready to analyze your challenges and propose innovative solutions.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-500 hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                          <FaHandshake className="text-xl text-primary-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Partnership Approach</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        Long-term partnership focused on your success and continuous improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IndustryTemplate; 