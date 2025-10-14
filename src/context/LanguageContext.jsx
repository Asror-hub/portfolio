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
    customsoftwaredevelopment: "Custom Software Development",
    mobileappdevelopment: "Mobile App Development",
    webappdevelopment: "Web App Development",
    aidevelopment: "AI Development",
    iosdevelopment: "iOS Development",
    androiddevelopment: "Android Development",
    
    // Industries
    "e-commerce": "E-commerce",
    "real estate": "Real Estate",
    education: "Education",
    finance: "Finance",
    
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
    digitaltransformationdescription: "Accelerate growth with comprehensive digital transformation solutions.",
    processautomation: "Process automation",
    cloudmigration: "Cloud migration",
    legacysystemmodernization: "Legacy system modernization",
    digitalworkflowoptimization: "Digital workflow optimization",
    
    businessintelligence: "Business Intelligence",
    businessintelligencedescription: "Transform data into actionable insights with advanced analytics.",
    datavisualization: "Data visualization",
    predictiveanalytics: "Predictive analytics",
    realtimereporting: "Real-time reporting",
    customdashboards: "Custom dashboards",
    
    enterprisesolutions: "Enterprise Solutions",
    enterprisesolutionsdescription: "Streamline operations with scalable enterprise-grade solutions.",
    erpintegration: "ERP integration",
    supplychainmanagement: "Supply chain management",
    inventorycontrol: "Inventory control",
    resourceplanning: "Resource planning",
    
    securitysolutions: "Security Solutions",
    securitysolutionsdescription: "Protect digital assets with comprehensive security solutions.",
    cybersecurity: "Cybersecurity",
    dataencryption: "Data encryption",
    accesscontrol: "Access control",
    compliancemanagement: "Compliance management",
    
    mobilesolutions: "Mobile Solutions",
    mobilesolutionsdescription: "Engage customers with innovative mobile solutions.",
    crossplatformapps: "Cross-platform apps",
    mobilefirstdesign: "Mobile-first design",
    pushnotifications: "Push notifications",
    offlinecapabilities: "Offline capabilities",
    
    cloudsolutions: "Cloud Solutions",
    cloudsolutionsdescription: "Scale your business with cloud-native solutions.",
    cloudarchitecture: "Cloud architecture",
    serverlesscomputing: "Serverless computing",
    microservices: "Microservices",
    containerization: "Containerization",
    
    aisolutions: "AI Solutions",
    aisolutionsdescription: "Leverage AI power to transform business processes.",
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
    customsoftwaredevelopment: "Разработка индивидуального ПО",
    mobileappdevelopment: "Разработка мобильных приложений",
    webappdevelopment: "Разработка веб-приложений",
    aidevelopment: "Разработка ИИ",
    iosdevelopment: "Разработка для iOS",
    androiddevelopment: "Разработка для Android",
    
    // Industries
    "e-commerce": "Электронная коммерция",
    "real estate": "Недвижимость",
    education: "Образование",
    finance: "Финансы",
    
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
    digitaltransformationdescription: "Ускорьте рост комплексными решениями цифровой трансформации.",
    processautomation: "Автоматизация процессов",
    cloudmigration: "Миграция в облако",
    legacysystemmodernization: "Модернизация устаревших систем",
    digitalworkflowoptimization: "Оптимизация цифровых рабочих процессов",
    
    businessintelligence: "Бизнес-аналитика",
    businessintelligencedescription: "Преобразуйте данные в практические идеи с помощью передовой аналитики.",
    datavisualization: "Визуализация данных",
    predictiveanalytics: "Прогнозная аналитика",
    realtimereporting: "Отчетность в реальном времени",
    customdashboards: "Пользовательские панели",
    
    enterprisesolutions: "Корпоративные решения",
    enterprisesolutionsdescription: "Оптимизируйте операции масштабируемыми корпоративными решениями.",
    erpintegration: "Интеграция ERP",
    supplychainmanagement: "Управление цепочкой поставок",
    inventorycontrol: "Контроль запасов",
    resourceplanning: "Планирование ресурсов",
    
    securitysolutions: "Решения безопасности",
    securitysolutionsdescription: "Защитите цифровые активы комплексными решениями безопасности.",
    cybersecurity: "Кибербезопасность",
    dataencryption: "Шифрование данных",
    accesscontrol: "Контроль доступа",
    compliancemanagement: "Управление соответствием",
    
    mobilesolutions: "Мобильные решения",
    mobilesolutionsdescription: "Привлекайте клиентов инновационными мобильными решениями.",
    crossplatformapps: "Кроссплатформенные приложения",
    mobilefirstdesign: "Мобильный дизайн",
    pushnotifications: "Push-уведомления",
    offlinecapabilities: "Офлайн-функциональность",
    
    cloudsolutions: "Облачные решения",
    cloudsolutionsdescription: "Масштабируйте бизнес облачными решениями.",
    cloudarchitecture: "Облачная архитектура",
    serverlesscomputing: "Бессерверные вычисления",
    microservices: "Микросервисы",
    containerization: "Контейнеризация",
    
    aisolutions: "Решения на основе ИИ",
    aisolutionsdescription: "Используйте силу ИИ для преобразования бизнес-процессов.",
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