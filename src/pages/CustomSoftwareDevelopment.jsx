import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import doraAboutImage from '../assets/dora-about.png';
import { FaCode, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';

const serviceData = {
  title: "Custom Software Development",
  subtitle: "Transform Your Digital Future",
  description: "Transform your business with tailored software solutions designed to meet your unique needs and challenges.",
  highlightText: "We don't just build software, we craft digital experiences that drive growth and innovation.",
  approach: "Our custom software development approach combines cutting-edge technology with industry best practices to deliver scalable, secure, and efficient solutions.",
  approachPoints: [
    {
      icon: <FaCode className="text-2xl text-primary" />,
      title: "Tailored Solutions",
      description: "We develop custom software that perfectly aligns with your business processes and objectives."
    },
    {
      icon: <FaRocket className="text-2xl text-primary" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow with your business."
    },
    {
      icon: <FaShieldAlt className="text-2xl text-primary" />,
      title: "Agile Development",
      description: "Iterative development process with regular feedback and continuous improvement."
    },
    {
      icon: <FaUsers className="text-2xl text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control throughout the development lifecycle."
    }
  ],
  approachImage: doraAboutImage,
  technologies: [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating responsive and intuitive user interfaces.",
      stack: [
        { name: "React" },
        { name: "Angular" },
        { name: "Vue.js" },
        { name: "Next.js" },
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust and scalable server-side solutions.",
      stack: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "Java" },
        { name: "Go" },
      ]
    },
    {
      id: 3,
      title: "Database Solutions",
      description: "Implementing secure and efficient data storage systems.",
      stack: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "Redis" },
      ]
    }
  ],
  process: [
    {
      title: "Requirements Analysis",
      description: "Understanding your business needs and defining project requirements."
    },
    {
      title: "Planning & Design",
      description: "Creating detailed wireframes and technical architecture."
    },
    {
      title: "Development",
      description: "Agile development with regular updates and feature releases."
    },
    {
      title: "Testing",
      description: "Comprehensive testing across different environments and use cases."
    },
    {
      title: "Deployment",
      description: "Secure deployment with zero-downtime updates."
    },
    {
      title: "Maintenance",
      description: "Ongoing support and regular updates to ensure optimal performance."
    }
  ],
  projects: [
    {
      title: "Enterprise Management System",
      description: "Custom enterprise management system for a manufacturing company.",
      image: "/images/project-enterprise.jpg",
      link: "#"
    },
    {
      title: "Healthcare Platform",
      description: "Secure healthcare management platform with HIPAA compliance.",
      image: "/images/project-healthcare.jpg",
      link: "#"
    },
    {
      title: "Financial Analytics Tool",
      description: "Advanced financial analytics platform for investment firms.",
      image: "/images/project-finance.jpg",
      link: "#"
    }
  ],
  faqs: [
    {
      question: "How long does it take to develop custom software?",
      answer: "The timeline varies depending on the complexity and scope of the project. A basic application might take 3-4 months, while complex enterprise solutions can take 6-12 months or more."
    },
    {
      question: "What is your development methodology?",
      answer: "We follow an Agile development methodology with regular sprints, continuous feedback, and iterative improvements."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance services to ensure your software runs smoothly."
    },
    {
      question: "How do you ensure the security of custom software?",
      answer: "We implement industry-standard security practices, regular security audits, and follow OWASP guidelines throughout development."
    },
    {
      question: "Can you scale my existing software?",
      answer: "Yes, we can analyze your existing software and implement scalable solutions to accommodate your growing business needs."
    }
  ]
};

const CustomSoftwareDevelopment = () => {
  return <ServiceTemplate serviceData={serviceData} />;
};

export default CustomSoftwareDevelopment; 