import React, { useEffect } from 'react';
import { FaCode, FaMobile, FaServer, FaShieldAlt, FaRocket, FaUsers } from 'react-icons/fa';
import ServiceTemplate from './ServiceTemplate';

const WebAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const serviceData = {
    title: "Web App Development",
    subtitle: "Build Powerful Web Solutions",
    description: "Create modern, scalable, and secure web applications that deliver exceptional user experiences and drive business growth.",
    highlightText: "We build web applications that are not just functional, but transformative for your business.",
    approach: "Our web development approach combines cutting-edge technology with user-centric design to create applications that exceed expectations.",
    approachImage: "/web_1.png",
    approachPoints: [
      {
        icon: <FaCode className="text-4xl text-primary" />,
        title: "Modern Architecture",
        description: "We build applications using the latest technologies and architectural patterns for scalability and maintainability."
      },
      {
        icon: <FaMobile className="text-4xl text-primary" />,
        title: "Responsive Design",
        description: "Our applications work seamlessly across all devices and screen sizes."
      },
      {
        icon: <FaServer className="text-4xl text-primary" />,
        title: "Robust Backend",
        description: "Secure and scalable backend systems that handle complex business logic and data processing."
      },
      {
        icon: <FaShieldAlt className="text-4xl text-primary" />,
        title: "Security First",
        description: "We implement industry-standard security practices to protect your data and users."
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Frontend Development",
        description: "Modern frameworks and libraries for building responsive and interactive user interfaces.",
        stack: [
          { name: "React" },
          { name: "Next.js" },
          { name: "Vue.js" },
          { name: "Angular" }
        ]
      },
      {
        id: 2,
        title: "Backend Development",
        description: "Powerful server-side technologies for building robust APIs and business logic.",
        stack: [
          { name: "Node.js" },
          { name: "Python" },
          { name: "Java" },
          { name: "PHP" }
        ]
      },
      {
        id: 3,
        title: "Database",
        description: "Reliable and scalable database solutions for data storage and management.",
        stack: [
          { name: "MongoDB" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "Redis" }
        ]
      },
      {
        id: 4,
        title: "DevOps",
        description: "Tools and practices for efficient development, deployment, and monitoring.",
        stack: [
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "AWS" },
          { name: "CI/CD" }
        ]
      }
    ],
    process: [
      {
        title: "Planning & Analysis",
        description: "Understanding requirements and defining project scope"
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes and UI/UX designs"
      },
      {
        title: "Development",
        description: "Building the application with clean, maintainable code"
      },
      {
        title: "Testing & Quality Assurance",
        description: "Ensuring the application meets quality standards"
      },
      {
        title: "Deployment & Maintenance",
        description: "Launching the application and providing ongoing support"
      }
    ],
    projects: [
      {
        title: "Furniture Shopping Platform",
        category: "E-commerce",
        imageSet: 'e',
        description: "Premium furniture shopping app featuring modern designs, room transformations, and curated collections for home decor."
      },
      {
        title: "AR Furniture Visualizer",
        category: "Technology",
        imageSet: 'f',
        description: "Augmented reality furniture visualization app allowing users to see furniture in their space before purchasing."
      },
      {
        title: "Fashion E-commerce App",
        category: "Fashion & Retail",
        imageSet: 'j',
        description: "Clothing and fashion shopping platform with detailed product views, color/size selection, reviews, and seamless checkout."
      }
    ],
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies like React, Next.js, Node.js, and various databases depending on project requirements. Our tech stack is always evolving to incorporate the latest advancements."
      },
      {
        question: "How do you ensure web application security?",
        answer: "We implement multiple security layers including HTTPS, data encryption, secure authentication, and regular security audits to protect your application and user data."
      },
      {
        question: "What is your approach to responsive design?",
        answer: "We follow a mobile-first approach, ensuring that our web applications provide optimal user experience across all devices and screen sizes."
      }
    ]
  };

  return <ServiceTemplate serviceData={serviceData} />;
};

export default WebAppDevelopment; 