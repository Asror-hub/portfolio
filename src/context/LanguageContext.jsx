import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    // Navbar
    services: "Services",
    industries: "Industries",
    about: "About",
    projects: "Projects",
    solutions: "Solutions",
    blog: "Blog",
    contact: "Contact",
    language: "Language",
    
    // Services
    customSoftware: "Custom Software Development",
    mobileApp: "Mobile App Development",
    webApp: "Web App Development",
    aiDevelopment: "AI Development",
    iosDevelopment: "iOS Development",
    androidDevelopment: "Android Development",
    aiChatbot: "AI Chatbot Development",
    
    // Industries
    healthcare: "Healthcare",
    finance: "Finance",
    education: "Education",
    retail: "Retail",
    manufacturing: "Manufacturing",
    realEstate: "Real Estate",
    
    // Common
    viewMore: "View More",
    showLess: "Show Less",
    learnMore: "Learn More",
    getStarted: "Get Started",
    findSolution: "Find a Solution Together",
    
    // Solutions Page
    transformYourBusiness: "Transform Your Business",
    innovativeSolutionsFor: "Innovative Solutions for",
    modernBusinesses: "Modern Businesses",
    discoverSolutions: "Discover how our cutting-edge solutions can help you stay ahead in today's digital landscape.",
    
    // Solution Types
    digitaltransformation: "Digital Transformation",
    digitaltransformationdescription: "Accelerate your business growth with our comprehensive digital transformation solutions.",
    processautomation: "Process automation",
    cloudmigration: "Cloud migration",
    legacysystemmodernization: "Legacy system modernization",
    digitalworkflowoptimization: "Digital workflow optimization",
    
    businessintelligence: "Business Intelligence",
    businessintelligencedescription: "Turn your data into actionable insights with our advanced analytics solutions.",
    datavisualization: "Data visualization",
    predictiveanalytics: "Predictive analytics",
    realtimereporting: "Real-time reporting",
    customdashboards: "Custom dashboards",
    
    enterprisesolutions: "Enterprise Solutions",
    enterprisesolutionsdescription: "Streamline your operations with our scalable enterprise-grade solutions.",
    erpintegration: "ERP integration",
    supplychainmanagement: "Supply chain management",
    inventorycontrol: "Inventory control",
    resourceplanning: "Resource planning",
    
    securitysolutions: "Security Solutions",
    securitysolutionsdescription: "Protect your digital assets with our comprehensive security solutions.",
    cybersecurity: "Cybersecurity",
    dataencryption: "Data encryption",
    accesscontrol: "Access control",
    compliancemanagement: "Compliance management",
    
    mobilesolutions: "Mobile Solutions",
    mobilesolutionsdescription: "Engage your customers with our innovative mobile solutions.",
    crossplatformapps: "Cross-platform apps",
    mobilefirstdesign: "Mobile-first design",
    pushnotifications: "Push notifications",
    offlinecapabilities: "Offline capabilities",
    
    cloudsolutions: "Cloud Solutions",
    cloudsolutionsdescription: "Scale your business with our cloud-native solutions.",
    cloudarchitecture: "Cloud architecture",
    serverlesscomputing: "Serverless computing",
    microservices: "Microservices",
    containerization: "Containerization",
    
    aisolutions: "AI Solutions",
    aisolutionsdescription: "Leverage the power of AI to transform your business processes.",
    machinelearning: "Machine learning",
    naturallanguageprocessing: "Natural language processing",
    computervision: "Computer vision",
    predictivemodeling: "Predictive modeling",
  },
  ru: {
    // Navbar
    services: "Услуги",
    industries: "Отрасли",
    about: "О нас",
    projects: "Проекты",
    solutions: "Решения",
    blog: "Блог",
    contact: "Контакты",
    language: "Язык",
    
    // Services
    customSoftware: "Разработка индивидуального ПО",
    mobileApp: "Разработка мобильных приложений",
    webApp: "Разработка веб-приложений",
    aiDevelopment: "Разработка ИИ",
    iosDevelopment: "Разработка для iOS",
    androidDevelopment: "Разработка для Android",
    aiChatbot: "Разработка чат-ботов с ИИ",
    
    // Industries
    healthcare: "Здравоохранение",
    finance: "Финансы",
    education: "Образование",
    retail: "Розничная торговля",
    manufacturing: "Производство",
    realEstate: "Недвижимость",
    
    // Common
    viewMore: "Показать больше",
    showLess: "Показать меньше",
    learnMore: "Узнать больше",
    getStarted: "Начать",
    findSolution: "Найти решение вместе",
    
    // Solutions Page
    transformYourBusiness: "Преобразуйте свой бизнес",
    innovativeSolutionsFor: "Инновационные решения для",
    modernBusinesses: "Современного бизнеса",
    discoverSolutions: "Откройте для себя, как наши передовые решения помогут вам оставаться впереди в современном цифровом ландшафте.",
    
    // Solution Types
    digitaltransformation: "Цифровая трансформация",
    digitaltransformationdescription: "Ускорите рост вашего бизнеса с помощью наших комплексных решений по цифровой трансформации.",
    processautomation: "Автоматизация процессов",
    cloudmigration: "Миграция в облако",
    legacysystemmodernization: "Модернизация устаревших систем",
    digitalworkflowoptimization: "Оптимизация цифровых рабочих процессов",
    
    businessintelligence: "Бизнес-аналитика",
    businessintelligencedescription: "Превратите ваши данные в практические идеи с помощью наших передовых аналитических решений.",
    datavisualization: "Визуализация данных",
    predictiveanalytics: "Прогнозная аналитика",
    realtimereporting: "Отчетность в реальном времени",
    customdashboards: "Пользовательские панели",
    
    enterprisesolutions: "Корпоративные решения",
    enterprisesolutionsdescription: "Оптимизируйте свои операции с помощью наших масштабируемых корпоративных решений.",
    erpintegration: "Интеграция ERP",
    supplychainmanagement: "Управление цепочкой поставок",
    inventorycontrol: "Контроль запасов",
    resourceplanning: "Планирование ресурсов",
    
    securitysolutions: "Решения безопасности",
    securitysolutionsdescription: "Защитите свои цифровые активы с помощью наших комплексных решений безопасности.",
    cybersecurity: "Кибербезопасность",
    dataencryption: "Шифрование данных",
    accesscontrol: "Контроль доступа",
    compliancemanagement: "Управление соответствием",
    
    mobilesolutions: "Мобильные решения",
    mobilesolutionsdescription: "Привлекайте своих клиентов с помощью наших инновационных мобильных решений.",
    crossplatformapps: "Кроссплатформенные приложения",
    mobilefirstdesign: "Мобильный дизайн",
    pushnotifications: "Push-уведомления",
    offlinecapabilities: "Офлайн-функциональность",
    
    cloudsolutions: "Облачные решения",
    cloudsolutionsdescription: "Масштабируйте свой бизнес с помощью наших облачных решений.",
    cloudarchitecture: "Облачная архитектура",
    serverlesscomputing: "Бессерверные вычисления",
    microservices: "Микросервисы",
    containerization: "Контейнеризация",
    
    aisolutions: "Решения на основе ИИ",
    aisolutionsdescription: "Используйте силу ИИ для преобразования ваших бизнес-процессов.",
    machinelearning: "Машинное обучение",
    naturallanguageprocessing: "Обработка естественного языка",
    computervision: "Компьютерное зрение",
    predictivemodeling: "Прогнозное моделирование",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 