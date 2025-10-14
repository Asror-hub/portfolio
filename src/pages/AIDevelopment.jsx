import React, { useEffect } from 'react';
import { FaCode, FaRocket, FaShieldAlt, FaUsers, FaBrain, FaLanguage, FaEye, FaNetworkWired } from 'react-icons/fa';
import ServiceTemplate from './ServiceTemplate';
import aiImage from '../assets/AI.png';

const AIDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const serviceData = {
    title: "AI Development",
    subtitle: "Transform Your Business with AI",
    description: "Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent systems that drive business growth.",
    highlightText: "We don't just build AI solutions, we create intelligent systems that learn, adapt, and evolve with your business needs.",
    approach: "Our AI development approach combines cutting-edge technology with industry expertise to deliver solutions that drive real business value.",
    approachImage: aiImage,
    approachPoints: [
      {
        icon: <FaCode className="text-4xl text-primary-500" />,
        title: "Custom AI Models",
        description: "We develop tailored AI models that address your specific business challenges and requirements."
      },
      {
        icon: <FaRocket className="text-4xl text-accent-500" />,
        title: "Data-Driven Solutions",
        description: "Our AI solutions are built on robust data pipelines and advanced analytics to deliver actionable insights."
      },
      {
        icon: <FaShieldAlt className="text-4xl text-warning-500" />,
        title: "Ethical AI",
        description: "We ensure our AI systems are transparent, fair, and aligned with ethical guidelines and industry standards."
      },
      {
        icon: <FaUsers className="text-4xl text-primary-500" />,
        title: "Human-Centric Design",
        description: "Our AI solutions are designed to enhance human capabilities and improve user experiences."
      }
    ],
    technologies: [
      {
        id: 1,
        title: "Machine Learning",
        description: "Advanced algorithms and models for predictive analytics and pattern recognition.",
        stack: [
          { name: "TensorFlow" },
          { name: "PyTorch" },
          { name: "Scikit-learn" },
          { name: "Keras" }
        ]
      },
      {
        id: 2,
        title: "Natural Language Processing",
        description: "Text analysis, sentiment analysis, and language understanding capabilities.",
        stack: [
          { name: "NLTK" },
          { name: "SpaCy" },
          { name: "BERT" },
          { name: "GPT" }
        ]
      },
      {
        id: 3,
        title: "Computer Vision",
        description: "Image and video processing for object detection and recognition.",
        stack: [
          { name: "OpenCV" },
          { name: "YOLO" },
          { name: "ResNet" },
          { name: "MobileNet" }
        ]
      },
      {
        id: 4,
        title: "Deep Learning",
        description: "Neural networks and deep learning architectures for complex problem-solving.",
        stack: [
          { name: "Neural Networks" },
          { name: "CNNs" },
          { name: "RNNs" },
          { name: "GANs" }
        ]
      }
    ],
    process: [
      {
        title: "Data Collection & Analysis",
        description: "Gathering and processing relevant data for model training"
      },
      {
        title: "Model Development & Training",
        description: "Building and training AI models with your data"
      },
      {
        title: "Testing & Validation",
        description: "Rigorous testing to ensure model accuracy and reliability"
      },
      {
        title: "Deployment & Integration",
        description: "Seamless integration with your existing systems"
      },
      {
        title: "Monitoring & Optimization",
        description: "Continuous monitoring and improvement of AI systems"
      }
    ],
    projects: [
      {
        title: "Healthy Meal Planner App",
        category: "Food & Health",
        imageSet: 'b',
        description: "Meal customization platform for creating perfect salads with favorite toppings and dressings tailored to your preferences."
      },
      {
        title: "Pizza Ordering Platform",
        category: "Food & Delivery",
        imageSet: 'g',
        description: "Specialized pizza ordering app with detailed menu, size selection, custom toppings, and real-time order tracking."
      },
      {
        title: "Fast Food Delivery App",
        category: "Food & Delivery",
        imageSet: 'h',
        description: "Quick burger and fast food delivery platform promising 15-30 minute delivery with fresh ingredients and quality service."
      }
    ],
    faqs: [
      {
        question: "What types of AI solutions do you develop?",
        answer: "We develop a wide range of AI solutions including machine learning models, natural language processing systems, computer vision applications, and deep learning architectures tailored to your specific business needs."
      },
      {
        question: "How do you ensure the quality of AI models?",
        answer: "We follow rigorous testing and validation processes, including data quality checks, model performance evaluation, and continuous monitoring to ensure our AI solutions meet the highest standards."
      },
      {
        question: "What is your approach to data privacy in AI development?",
        answer: "We prioritize data privacy and security throughout the AI development process, implementing strict data protection measures and ensuring compliance with relevant regulations."
      }
    ]
  };

  return <ServiceTemplate serviceData={serviceData} />;
};

export default AIDevelopment; 