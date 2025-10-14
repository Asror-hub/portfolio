import React, { useEffect } from 'react';
import { FaMobile, FaCode, FaRocket, FaShieldAlt, FaUsers, FaApple, FaAndroid } from 'react-icons/fa';
import ServiceTemplate from './ServiceTemplate';
import mobImage from '../assets/mob.png';

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const serviceData = {
    title: "Mobile App Development",
    subtitle: "Create Exceptional Mobile Experiences",
    description: "Build high-performance mobile applications that engage users and drive business growth across iOS and Android platforms.",
    highlightText: "We create mobile apps that users love to use, with intuitive interfaces and seamless performance.",
    approach: "Our mobile development approach focuses on creating apps that are not just functional, but delightful to use.",
    approachImage: mobImage,
    approachPoints: [
      {
        icon: <FaMobile className="text-4xl text-primary" />,
        title: "Cross-Platform Development",
        description: "We build apps that work seamlessly across iOS and Android platforms."
      },
      {
        icon: <FaCode className="text-4xl text-primary" />,
        title: "Native Performance",
        description: "Our apps deliver native-like performance and user experience."
      },
      {
        icon: <FaRocket className="text-4xl text-primary" />,
        title: "Fast Development",
        description: "Efficient development process using modern tools and frameworks."
      },
      {
        icon: <FaShieldAlt className="text-4xl text-primary" />,
        title: "Security & Privacy",
        description: "We prioritize user data security and privacy in all our mobile applications."
      }
    ],
    technologies: [
      {
        id: 1,
        title: "iOS Development",
        description: "Native iOS app development with Swift and modern iOS frameworks.",
        stack: [
          { name: "Swift" },
          { name: "SwiftUI" },
          { name: "UIKit" },
          { name: "Core Data" }
        ]
      },
      {
        id: 2,
        title: "Android Development",
        description: "Native Android app development with Kotlin and modern Android frameworks.",
        stack: [
          { name: "Kotlin" },
          { name: "Jetpack" },
          { name: "Room" },
          { name: "Coroutines" }
        ]
      },
      {
        id: 3,
        title: "Cross-Platform",
        description: "Cross-platform development frameworks for efficient app building.",
        stack: [
          { name: "React Native" },
          { name: "Flutter" },
          { name: "Xamarin" },
          { name: "Ionic" }
        ]
      },
      {
        id: 4,
        title: "Backend Integration",
        description: "Tools and services for backend integration and data management.",
        stack: [
          { name: "Firebase" },
          { name: "REST APIs" },
          { name: "GraphQL" },
          { name: "WebSockets" }
        ]
      }
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "Understanding requirements and planning the app architecture"
      },
      {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces"
      },
      {
        title: "Development",
        description: "Building the app with clean, maintainable code"
      },
      {
        title: "Testing",
        description: "Rigorous testing across devices and platforms"
      },
      {
        title: "Deployment & Support",
        description: "App store submission and ongoing maintenance"
      }
    ],
    projects: [
      {
        title: "Food Delivery Mobile App",
        category: "Food & Delivery",
        imageSet: 'a',
        description: "Complete pizza ordering and restaurant delivery app with menu browsing, customization options, and seamless checkout experience."
      },
      {
        title: "Grocery Shopping App",
        category: "E-commerce",
        imageSet: 'i',
        description: "Modern grocery shopping platform featuring fresh produce, real-time inventory, promotions, and intuitive cart management for convenient online shopping."
      },
      {
        title: "Fitness Tracking App",
        category: "Health & Fitness",
        imageSet: 'd',
        description: "Comprehensive workout tracking app with personalized exercise routines, progress monitoring, video demonstrations, and daily fitness goals."
      }
    ],
    faqs: [
      {
        question: "Do you develop native or cross-platform apps?",
        answer: "We develop both native and cross-platform apps, choosing the approach that best suits your project requirements, budget, and timeline."
      },
      {
        question: "How do you ensure app performance?",
        answer: "We optimize app performance through efficient coding practices, proper memory management, and thorough testing across different devices and network conditions."
      },
      {
        question: "What is your app store submission process?",
        answer: "We handle the entire app store submission process, including preparing necessary assets, following guidelines, and managing the review process for both Apple App Store and Google Play Store."
      }
    ]
  };

  return <ServiceTemplate serviceData={serviceData} />;
};

export default MobileAppDevelopment; 