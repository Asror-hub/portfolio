import webImage from '../assets/web.png';

// Staff Augmentation Data
export const staffAugmentationData = {
  title: "Staff Augmentation",
  description: "Scale your development team quickly and efficiently with our skilled technology professionals who seamlessly integrate with your existing team.",
  approach: "Our staff augmentation service provides you with experienced developers, designers, and tech experts who work as an extension of your team, following your processes and culture.",
  approachPoints: [
    { title: "Flexible Scaling", description: "Quickly scale your team up or down based on project needs." },
    { title: "Skilled Professionals", description: "Access to a diverse pool of vetted technology experts." },
    { title: "Seamless Integration", description: "Our professionals adapt to your workflow and culture." },
    { title: "Cost-Effective", description: "Reduce hiring costs and overhead while maintaining quality." },
  ],
  approachImage: "/images/staff-augmentation.jpg",
  technologies: [
    {
      id: 1,
      title: "Development Expertise",
      description: "Skilled developers across various technologies.",
      stack: [
        { name: "Full Stack" },
        { name: "Frontend" },
        { name: "Backend" },
        { name: "Mobile" },
      ]
    },
    {
      id: 2,
      title: "Specialized Skills",
      description: "Experts in specific domains and technologies.",
      stack: [
        { name: "DevOps" },
        { name: "Cloud" },
        { name: "AI/ML" },
        { name: "QA" },
      ]
    },
    {
      id: 3,
      title: "Project Management",
      description: "Experienced project managers and tech leads.",
      stack: [
        { name: "Scrum" },
        { name: "Kanban" },
        { name: "Agile" },
        { name: "Waterfall" },
      ]
    }
  ],
  process: [
    {
      title: "Requirements Analysis",
      description: "Understanding your team's needs and skill requirements."
    },
    {
      title: "Candidate Selection",
      description: "Matching the right professionals with your requirements."
    },
    {
      title: "Team Integration",
      description: "Seamless onboarding and integration with your existing team."
    },
    {
      title: "Performance Monitoring",
      description: "Regular performance reviews and feedback sessions."
    },
    {
      title: "Continuous Support",
      description: "Ongoing support and resource optimization."
    },
    {
      title: "Scale Management",
      description: "Flexible scaling based on project demands."
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
      title: "Fitness Tracking App",
      category: "Health & Fitness",
      imageSet: 'd',
      description: "Comprehensive workout tracking app with personalized exercise routines, progress monitoring, video demonstrations, and daily fitness goals."
    },
    {
      title: "Grocery Shopping App",
      category: "E-commerce",
      imageSet: 'i',
      description: "Modern grocery shopping platform featuring fresh produce, real-time inventory, promotions, and intuitive cart management for convenient online shopping."
    }
  ],
  faqs: [
    {
      question: "How quickly can you provide developers?",
      answer: "We can typically provide qualified candidates within 1-2 weeks, depending on the specific requirements and skill set needed."
    },
    {
      question: "What is the minimum contract period?",
      answer: "Our minimum contract period is typically 3 months, but we offer flexible terms based on your project needs."
    },
    {
      question: "How do you ensure quality?",
      answer: "We have a rigorous vetting process including technical assessments, communication skills evaluation, and background checks."
    },
    {
      question: "Can we hire the developers permanently?",
      answer: "Yes, we offer hire-to-permanent options after a specified period, subject to mutual agreement."
    },
    {
      question: "What if the developer doesn't meet our expectations?",
      answer: "We offer a replacement guarantee and will quickly provide an alternative resource if the initial match doesn't meet your requirements."
    }
  ]
};

// Web App Development Data
export const webAppData = {
  title: "Web App Development",
  description: "Create powerful, scalable, and user-friendly web applications that drive your business forward with our expert web development services.",
  approach: "Our web app development approach focuses on creating modern, responsive, and performant applications using the latest technologies and best practices.",
  approachPoints: [
    { title: "Modern Architecture", description: "Building with the latest frameworks and technologies for optimal performance." },
    { title: "Responsive Design", description: "Ensuring perfect functionality across all devices and screen sizes." },
    { title: "Performance Optimization", description: "Implementing best practices for fast loading and smooth user experience." },
    { title: "Security First", description: "Following strict security protocols to protect your application and user data." },
  ],
  approachImage: webImage,
  technologies: [
    {
      id: 1,
      title: "Frontend Technologies",
      description: "Modern frontend frameworks and libraries for dynamic user interfaces.",
      stack: [
        { name: "React", icon: "SiReact" },
        { name: "Next.js", icon: "SiNodedotjs" },
        { name: "TypeScript", icon: "SiNodedotjs" },
        { name: "Tailwind CSS", icon: "SiReact" },
      ]
    },
    {
      id: 2,
      title: "Backend Technologies",
      description: "Robust backend solutions for reliable application performance.",
      stack: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express", icon: "SiNodedotjs" },
        { name: "Django", icon: "SiDjango" },
        { name: "Laravel", icon: "SiLaravel" },
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      description: "Modern cloud infrastructure and deployment solutions.",
      stack: [
        { name: "AWS", icon: "SiAmazonaws" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Kubernetes", icon: "SiKubernetes" },
        { name: "CI/CD", icon: "SiDocker" },
      ]
    }
  ],
  process: [
    {
      title: "Discovery",
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
      description: "Comprehensive testing across different browsers and devices."
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
      question: "What types of web applications do you develop?",
      answer: "We develop various types of web applications including e-commerce platforms, SaaS applications, enterprise systems, content management systems, and custom web solutions."
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "Development time varies based on complexity. A basic web app might take 2-3 months, while complex applications can take 4-6 months or more."
    },
    {
      question: "Do you provide web hosting services?",
      answer: "Yes, we can help set up and manage your web hosting infrastructure using cloud providers like AWS, Google Cloud, or Azure."
    },
    {
      question: "Can you redesign my existing web application?",
      answer: "Yes, we can modernize your existing web application with new features, improved UI/UX, and better performance."
    },
    {
      question: "What about web application security?",
      answer: "We implement comprehensive security measures including SSL, data encryption, secure authentication, and regular security audits."
    }
  ]
};

// AI Infusion Data
export const aiInfusionData = {
  title: "AI Infusion",
  description: "Enhance your existing applications and systems with powerful AI capabilities to improve efficiency, automation, and user experience.",
  approach: "We seamlessly integrate AI capabilities into your existing systems, enhancing their functionality without disrupting your current operations.",
  approachPoints: [
    { title: "Smart Integration", description: "Carefully planned AI integration that complements your existing systems." },
    { title: "Minimal Disruption", description: "Smooth implementation process with zero to minimal downtime." },
    { title: "Performance Boost", description: "Significant improvement in system efficiency and capabilities." },
    { title: "Future-Ready", description: "Scalable AI solutions that grow with your business needs." },
  ],
  approachImage: "/images/ai-infusion.jpg",
  technologies: [
    {
      id: 1,
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics and pattern recognition.",
      stack: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Scikit-learn" },
        { name: "Keras" },
      ]
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description: "NLP solutions for text analysis and language understanding.",
      stack: [
        { name: "BERT" },
        { name: "GPT" },
        { name: "NLTK" },
        { name: "SpaCy" },
      ]
    },
    {
      id: 3,
      title: "Computer Vision",
      description: "Image and video processing capabilities.",
      stack: [
        { name: "OpenCV" },
        { name: "YOLO" },
        { name: "ResNet" },
        { name: "MobileNet" },
      ]
    }
  ],
  process: [
    {
      title: "Assessment",
      description: "Evaluating your current systems and identifying AI integration opportunities."
    },
    {
      title: "Planning",
      description: "Designing the AI integration strategy and selecting appropriate technologies."
    },
    {
      title: "Development",
      description: "Implementing AI features and ensuring seamless integration."
    },
    {
      title: "Testing",
      description: "Rigorous testing of AI components and system integration."
    },
    {
      title: "Deployment",
      description: "Careful deployment with monitoring and fallback mechanisms."
    },
    {
      title: "Optimization",
      description: "Continuous improvement and fine-tuning of AI capabilities."
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
      question: "What types of AI can be integrated into existing systems?",
      answer: "We can integrate various AI capabilities including machine learning, natural language processing, computer vision, and predictive analytics into your existing systems."
    },
    {
      question: "How long does AI integration take?",
      answer: "The timeline depends on the complexity of your system and the AI features being integrated. Simple integrations can take 2-3 months, while complex ones may take 4-6 months."
    },
    {
      question: "Will AI integration disrupt my current operations?",
      answer: "We plan integrations carefully to minimize disruption, often implementing changes in phases and providing fallback mechanisms."
    },
    {
      question: "How do you ensure AI model accuracy?",
      answer: "We use rigorous testing, validation, and continuous monitoring to ensure AI models perform accurately and reliably."
    },
    {
      question: "Can AI be integrated with legacy systems?",
      answer: "Yes, we specialize in integrating AI capabilities with both modern and legacy systems, ensuring compatibility and optimal performance."
    }
  ]
};

// AI Development Data
export const aiDevelopmentData = {
  title: "AI Development",
  description: "Harness the power of artificial intelligence to drive innovation and efficiency in your business with our cutting-edge AI development solutions.",
  approach: "Our AI development approach combines deep learning, machine learning, and neural networks to create intelligent solutions that solve complex business challenges.",
  approachPoints: [
    { title: "Custom AI Models", description: "We develop tailored AI models that address your specific business needs." },
    { title: "Data-Driven Solutions", description: "Leverage your data assets to create intelligent insights and predictions." },
    { title: "Scalable Architecture", description: "Build AI systems that grow with your business needs." },
    { title: "Continuous Learning", description: "Implement self-improving systems that get better over time." },
  ],
  approachImage: "/images/ai-development.jpg",
  // ... rest of the data from AIDevelopment.jsx
};

// Blockchain Data
export const blockchainData = {
  title: "Blockchain Development",
  description: "Build secure, transparent, and decentralized applications using cutting-edge blockchain technology.",
  approach: "Our blockchain development approach combines technical expertise with industry best practices to create robust and scalable blockchain solutions.",
  approachPoints: [
    { title: "Secure Architecture", description: "Implementing industry-standard security protocols and encryption." },
    { title: "Scalable Solutions", description: "Designing blockchain systems that can grow with your needs." },
    { title: "Smart Contracts", description: "Developing reliable and audited smart contracts for various use cases." },
    { title: "Integration Ready", description: "Ensuring seamless integration with existing systems and applications." },
  ],
  approachImage: "/images/blockchain-dev.jpg",
  technologies: [
    {
      id: 1,
      title: "Blockchain Platforms",
      description: "Leading blockchain platforms and frameworks.",
      stack: [
        { name: "Ethereum" },
        { name: "Hyperledger" },
        { name: "Solana" },
        { name: "Polygon" },
      ]
    },
    {
      id: 2,
      title: "Smart Contracts",
      description: "Smart contract development and auditing.",
      stack: [
        { name: "Solidity" },
        { name: "Rust" },
        { name: "Vyper" },
        { name: "Move" },
      ]
    },
    {
      id: 3,
      title: "Development Tools",
      description: "Essential tools for blockchain development.",
      stack: [
        { name: "Truffle" },
        { name: "Hardhat" },
        { name: "Web3.js" },
        { name: "Ethers.js" },
      ]
    }
  ],
  process: [
    {
      title: "Requirement Analysis",
      description: "Understanding your blockchain needs and use cases."
    },
    {
      title: "Architecture Design",
      description: "Designing the blockchain solution architecture."
    },
    {
      title: "Development",
      description: "Building and testing blockchain components."
    },
    {
      title: "Security Audit",
      description: "Comprehensive security review and testing."
    },
    {
      title: "Deployment",
      description: "Careful deployment and network setup."
    },
    {
      title: "Maintenance",
      description: "Ongoing support and updates."
    }
  ],
  projects: [
    {
      title: "Real Estate Property Search",
      category: "Real Estate",
      imageSet: 'c',
      description: "Advanced property finder app with location-based search, interactive maps, and personalized home recommendations."
    },
    {
      title: "Car Rental Booking App",
      category: "Transportation",
      imageSet: 'k',
      description: "Premium car rental service with simple booking process, instant confirmation, and luxury vehicle selection for travelers."
    },
    {
      title: "Furniture Shopping Platform",
      category: "E-commerce",
      imageSet: 'e',
      description: "Premium furniture shopping app featuring modern designs, room transformations, and curated collections for home decor."
    }
  ],
  faqs: [
    {
      question: "What types of blockchain solutions do you develop?",
      answer: "We develop various blockchain solutions including smart contracts, DApps, DeFi platforms, NFT marketplaces, and enterprise blockchain systems."
    },
    {
      question: "How secure are blockchain solutions?",
      answer: "We implement multiple layers of security including smart contract audits, encryption, and secure key management to ensure maximum security."
    },
    {
      question: "Can blockchain be integrated with existing systems?",
      answer: "Yes, we can integrate blockchain solutions with your existing systems through APIs and custom integration solutions."
    },
    {
      question: "What blockchain platforms do you work with?",
      answer: "We work with various platforms including Ethereum, Hyperledger, Solana, and Polygon, choosing the best platform for your specific needs."
    },
    {
      question: "How do you handle scalability in blockchain solutions?",
      answer: "We implement various scaling solutions including layer 2 solutions, sharding, and optimized smart contracts to ensure scalability."
    }
  ]
};

// iOS Development Data
export const iosDevelopmentData = {
  title: "iOS Development",
  description: "Create stunning, high-performance iOS applications that deliver exceptional user experiences and drive business growth.",
  approach: "Our iOS development approach combines Apple's best practices with modern development methodologies to create apps that stand out in the App Store.",
  approachPoints: [
    { title: "Native Excellence", description: "Leveraging Swift and native iOS frameworks for optimal performance." },
    { title: "User-Centric Design", description: "Creating intuitive and engaging user experiences." },
    { title: "Quality Assurance", description: "Rigorous testing across all iOS devices and versions." },
    { title: "App Store Ready", description: "Ensuring compliance with Apple's guidelines and requirements." },
  ],
  approachImage: "/images/ios-dev.jpg",
  technologies: [
    {
      id: 1,
      title: "Development Tools",
      description: "Essential tools for iOS development.",
      stack: [
        { name: "Swift" },
        { name: "SwiftUI" },
        { name: "UIKit" },
        { name: "Xcode" },
      ]
    },
    {
      id: 2,
      title: "Frameworks",
      description: "Powerful iOS frameworks and libraries.",
      stack: [
        { name: "Core Data" },
        { name: "ARKit" },
        { name: "Core ML" },
        { name: "Combine" },
      ]
    },
    {
      id: 3,
      title: "Testing & Deployment",
      description: "Tools for testing and app distribution.",
      stack: [
        { name: "TestFlight" },
        { name: "Fastlane" },
        { name: "XCTest" },
        { name: "App Store" },
      ]
    }
  ],
  process: [
    {
      title: "Planning",
      description: "Defining app requirements and architecture."
    },
    {
      title: "Design",
      description: "Creating UI/UX designs and prototypes."
    },
    {
      title: "Development",
      description: "Building the app with Swift and iOS frameworks."
    },
    {
      title: "Testing",
      description: "Testing across devices and iOS versions."
    },
    {
      title: "App Store Submission",
      description: "Preparing and submitting to the App Store."
    },
    {
      title: "Maintenance",
      description: "Regular updates and performance optimization."
    }
  ],
  projects: [
    {
      title: "Fitness Tracking App",
      category: "Health & Fitness",
      imageSet: 'd',
      description: "Comprehensive workout tracking app with personalized exercise routines, progress monitoring, video demonstrations, and daily fitness goals."
    },
    {
      title: "Grocery Shopping App",
      category: "E-commerce",
      imageSet: 'i',
      description: "Modern grocery shopping platform featuring fresh produce, real-time inventory, promotions, and intuitive cart management for convenient online shopping."
    },
    {
      title: "Food Delivery Mobile App",
      category: "Food & Delivery",
      imageSet: 'a',
      description: "Complete pizza ordering and restaurant delivery app with menu browsing, customization options, and seamless checkout experience."
    }
  ],
  faqs: [
    {
      question: "What iOS versions do you support?",
      answer: "We typically support the current iOS version and the two previous versions, ensuring broad device compatibility."
    },
    {
      question: "Do you use Swift or Objective-C?",
      answer: "We primarily use Swift for new projects, but can work with Objective-C for legacy code or specific requirements."
    },
    {
      question: "How do you handle app updates?",
      answer: "We provide regular updates, bug fixes, and feature additions, following Apple's guidelines and best practices."
    },
    {
      question: "Can you help with App Store submission?",
      answer: "Yes, we handle the entire App Store submission process, including preparing assets and meeting requirements."
    },
    {
      question: "Do you support iPad and Apple Watch development?",
      answer: "Yes, we develop apps for all Apple platforms including iPhone, iPad, Apple Watch, and Apple TV."
    }
  ]
};

// Android Development Data
export const androidDevelopmentData = {
  title: "Android Development",
  description: "Build powerful, scalable Android applications that reach millions of users across diverse devices and markets.",
  approach: "Our Android development approach focuses on creating robust, performant apps that work seamlessly across the Android ecosystem.",
  approachPoints: [
    { title: "Cross-Device Compatibility", description: "Ensuring optimal performance across Android devices." },
    { title: "Material Design", description: "Implementing Google's design guidelines for consistent UI." },
    { title: "Performance Optimization", description: "Maximizing app speed and efficiency." },
    { title: "Security Focus", description: "Implementing best practices for data protection." },
  ],
  approachImage: "/images/android-dev.jpg",
  technologies: [
    {
      id: 1,
      title: "Development Tools",
      description: "Core tools for Android development.",
      stack: [
        { name: "Kotlin" },
        { name: "Java" },
        { name: "Android Studio" },
        { name: "Gradle" },
      ]
    },
    {
      id: 2,
      title: "Architecture",
      description: "Modern Android architecture components.",
      stack: [
        { name: "MVVM" },
        { name: "Jetpack" },
        { name: "Room" },
        { name: "WorkManager" },
      ]
    },
    {
      id: 3,
      title: "Testing & Deployment",
      description: "Tools for testing and distribution.",
      stack: [
        { name: "JUnit" },
        { name: "Espresso" },
        { name: "Firebase" },
        { name: "Play Store" },
      ]
    }
  ],
  process: [
    {
      title: "Planning",
      description: "Defining app requirements and architecture."
    },
    {
      title: "Design",
      description: "Creating UI/UX designs following Material Design."
    },
    {
      title: "Development",
      description: "Building with Kotlin and Android frameworks."
    },
    {
      title: "Testing",
      description: "Testing across devices and Android versions."
    },
    {
      title: "Play Store Submission",
      description: "Preparing and submitting to Google Play."
    },
    {
      title: "Maintenance",
      description: "Regular updates and optimization."
    }
  ],
  projects: [
    {
      title: "Car Rental Booking App",
      category: "Transportation",
      imageSet: 'k',
      description: "Premium car rental service with simple booking process, instant confirmation, and luxury vehicle selection for travelers."
    },
    {
      title: "Fitness Tracking App",
      category: "Health & Fitness",
      imageSet: 'd',
      description: "Comprehensive workout tracking app with personalized exercise routines, progress monitoring, video demonstrations, and daily fitness goals."
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
      question: "What Android versions do you support?",
      answer: "We typically support Android 8.0 (Oreo) and above, covering the majority of active Android devices."
    },
    {
      question: "Do you use Kotlin or Java?",
      answer: "We primarily use Kotlin for new projects, but can work with Java for legacy code or specific requirements."
    },
    {
      question: "How do you handle device fragmentation?",
      answer: "We implement responsive design and thorough testing across various screen sizes and device capabilities."
    },
    {
      question: "Can you help with Play Store submission?",
      answer: "Yes, we handle the entire Play Store submission process, including preparing assets and meeting requirements."
    },
    {
      question: "Do you support Android TV and Wear OS?",
      answer: "Yes, we develop apps for all Android platforms including phones, tablets, TV, and wearables."
    }
  ]
};

// Vision Pro Development Data
export const visionProData = {
  title: "Vision Pro Development",
  description: "Create immersive spatial computing experiences for Apple Vision Pro, pushing the boundaries of augmented reality.",
  approach: "Our Vision Pro development approach combines spatial computing expertise with Apple's visionOS to create groundbreaking AR experiences.",
  approachPoints: [
    { title: "Spatial Computing", description: "Leveraging Vision Pro's advanced spatial capabilities." },
    { title: "Immersive Design", description: "Creating natural and intuitive spatial interfaces." },
    { title: "Performance Focus", description: "Optimizing for Vision Pro's powerful hardware." },
    { title: "User Comfort", description: "Ensuring comfortable and engaging experiences." },
  ],
  approachImage: "/images/vision-pro-dev.jpg",
  technologies: [
    {
      id: 1,
      title: "Development Tools",
      description: "Core tools for Vision Pro development.",
      stack: [
        { name: "Swift" },
        { name: "SwiftUI" },
        { name: "RealityKit" },
        { name: "ARKit" },
      ]
    },
    {
      id: 2,
      title: "Spatial Computing",
      description: "Technologies for spatial experiences.",
      stack: [
        { name: "Spatial Audio" },
        { name: "Hand Tracking" },
        { name: "Eye Tracking" },
        { name: "Room Mapping" },
      ]
    },
    {
      id: 3,
      title: "3D & Graphics",
      description: "Tools for 3D content and graphics.",
      stack: [
        { name: "USDZ" },
        { name: "Metal" },
        { name: "SceneKit" },
        { name: "Reality Composer" },
      ]
    }
  ],
  process: [
    {
      title: "Concept Development",
      description: "Exploring spatial computing possibilities."
    },
    {
      title: "Spatial Design",
      description: "Designing immersive spatial interfaces."
    },
    {
      title: "Development",
      description: "Building with visionOS and spatial frameworks."
    },
    {
      title: "Testing",
      description: "Testing comfort and performance."
    },
    {
      title: "App Store Submission",
      description: "Preparing and submitting to the App Store."
    },
    {
      title: "Optimization",
      description: "Refining spatial experiences."
    }
  ],
  projects: [
    {
      title: "AR Furniture Visualizer",
      category: "Technology",
      imageSet: 'f',
      description: "Augmented reality furniture visualization app allowing users to see furniture in their space before purchasing."
    },
    {
      title: "Real Estate Property Search",
      category: "Real Estate",
      imageSet: 'c',
      description: "Advanced property finder app with location-based search, interactive maps, and personalized home recommendations."
    },
    {
      title: "Healthy Meal Planner App",
      category: "Food & Health",
      imageSet: 'b',
      description: "Meal customization platform for creating perfect salads with favorite toppings and dressings tailored to your preferences."
    }
  ],
  faqs: [
    {
      question: "What is spatial computing?",
      answer: "Spatial computing combines AR, VR, and 3D interfaces to create immersive digital experiences that interact with the physical world."
    },
    {
      question: "How do you ensure user comfort?",
      answer: "We follow Apple's guidelines for comfortable spatial experiences, including proper depth, motion, and interaction design."
    },
    {
      question: "Can existing apps be adapted for Vision Pro?",
      answer: "Yes, we can adapt existing iOS apps for Vision Pro or create new spatial experiences from scratch."
    },
    {
      question: "What types of apps work best on Vision Pro?",
      answer: "Vision Pro excels with 3D visualization, immersive training, spatial design, and productivity applications."
    },
    {
      question: "How do you handle 3D content?",
      answer: "We use USDZ format and Apple's 3D tools to create and optimize 3D content for Vision Pro."
    }
  ]
};
