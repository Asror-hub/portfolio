import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaComments } from 'react-icons/fa';
import { MdSmartToy } from 'react-icons/md';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Norasoft's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Hide welcome message when chatbot is opened
  useEffect(() => {
    if (isOpen) {
      setShowWelcome(false);
    }
  }, [isOpen]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle scroll prevention for chatbot content
  const handleChatbotScroll = (e) => {
    const target = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;
    
    // Always prevent scroll propagation when over chatbot
    e.stopPropagation();
    
    // If at the top and trying to scroll up, prevent it
    if (scrollTop === 0 && e.deltaY < 0) {
      e.preventDefault();
    }
    
    // If at the bottom and trying to scroll down, prevent it
    if (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0) {
      e.preventDefault();
    }
  };

  // Prevent main page scroll when mouse is over chatbot
  const handleChatbotMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleChatbotMouseLeave = () => {
    document.body.style.overflow = 'unset';
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Pricing (check first to avoid conflicts)
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('how much') || message.includes('pricing')) {
      return "Our pricing is project-based and depends on several factors:\n\n• Project scope and complexity\n• Technology stack required\n• Timeline and delivery schedule\n• Team size and expertise needed\n• Post-launch support requirements\n\nWe offer flexible engagement models including fixed-price, time & material, and dedicated team options. I'd recommend scheduling a free consultation where we can discuss your requirements and provide a detailed quote. Shall I help you get in touch with our team?";
    }
    
    // Services
    if (message.includes('what services') || message.includes('what do you offer') || message.includes('what do you do') || (message.includes('service') && !message.includes('cost'))) {
      return "At Norasoft, we specialize in:\n\n• Custom Software Development - Tailored solutions for your unique business needs\n• Mobile App Development - Native iOS & Android applications\n• Web App Development - Modern, scalable web applications\n• AI Development - Intelligent automation and ML solutions\n• Cross-Platform Development - Cost-effective multi-platform apps\n\nEach service includes full project management, quality assurance, and post-launch support. Which area interests you most?";
    }
    
    // Mobile app specific
    if (message.includes('mobile') || message.includes('app') || message.includes('ios') || message.includes('android')) {
      return "Our mobile app development services cover:\n\n• Native iOS & Android Development\n• Cross-Platform Solutions (React Native, Flutter)\n• UI/UX Design & Prototyping\n• App Store Optimization\n• Maintenance & Updates\n\nWe've delivered 50+ successful mobile applications across various industries. Would you like to discuss your mobile app idea?";
    }
    
    // Web development specific
    if (message.includes('web') || message.includes('website')) {
      return "Our web development expertise includes:\n\n• Responsive Web Applications\n• E-commerce Platforms\n• Progressive Web Apps (PWA)\n• Custom CMS Solutions\n• API Development & Integration\n• Cloud Deployment\n\nWe use cutting-edge technologies to build fast, secure, and scalable web solutions. What type of web project are you considering?";
    }
    
    // AI/ML specific
    if (message.includes('ai') || message.includes('machine learning') || message.includes('artificial intelligence') || message.includes('automation')) {
      return "Our AI Development services encompass:\n\n• Machine Learning Model Development\n• Natural Language Processing (NLP)\n• Computer Vision Solutions\n• Predictive Analytics\n• Chatbot & Virtual Assistant Development\n• Process Automation\n\nWe help businesses leverage AI to improve efficiency and decision-making. What AI challenge are you looking to solve?";
    }
    
    // Timeline/Duration
    if (message.includes('how long') || message.includes('timeline') || message.includes('duration') || message.includes('time')) {
      return "Project timelines typically range from:\n\n• Simple Apps/Websites: 4-8 weeks\n• Medium Complexity Projects: 2-4 months\n• Enterprise Solutions: 4-8 months\n• Ongoing Development: Flexible sprints\n\nTimelines depend on project scope, complexity, and your specific requirements. We follow agile methodology with regular updates and milestone deliveries. Would you like to discuss your project timeline?";
    }
    
    // Contact/Reach
    if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('call')) {
      return "You can reach us through multiple channels:\n\n📧 Email: asrorodilov@email.com\n📱 Phone: +48668334362\n🌐 Website: Contact form below\n💬 This chat - I'm here 24/7!\n\nOur team typically responds within 2-4 hours during business hours. For urgent inquiries, please call us directly. How would you prefer to connect?";
    }
    
    // Portfolio/Projects
    if (message.includes('portfolio') || message.includes('project') || message.includes('work') || message.includes('example') || message.includes('case stud')) {
      return "We're proud of our track record:\n\n✅ 50+ Completed Projects\n✅ 30+ Happy Clients\n✅ 10+ Industries Served\n✅ 100% Success Rate\n\nOur portfolio includes Healthcare platforms, FinTech solutions, E-commerce systems, Educational apps, and more. Visit our 'Projects' page to explore detailed case studies with real results. Which industry interests you most?";
    }
    
    // Technologies/Tech Stack
    if (message.includes('technolog') || message.includes('tech stack') || message.includes('tools') || message.includes('framework')) {
      return "We work with modern, industry-leading technologies:\n\n• Frontend: React, Next.js, Vue.js, Angular\n• Mobile: React Native, Flutter, Swift, Kotlin\n• Backend: Node.js, Python, .NET, Java\n• AI/ML: TensorFlow, PyTorch, OpenAI\n• Cloud: AWS, Google Cloud, Azure\n• Database: PostgreSQL, MongoDB, Firebase\n\nWe select the best technology stack based on your project requirements, scalability needs, and long-term maintenance considerations.";
    }
    
    // Team/About/Company
    if (message.includes('team') || message.includes('about') || message.includes('company') || message.includes('who are you')) {
      return "Norasoft is a premier software development company dedicated to transforming businesses through innovative technology solutions.\n\n👥 15+ Expert Developers\n🏆 5+ Years of Excellence\n🌍 Serving clients globally\n🎯 100% Project Success Rate\n\nOur multidisciplinary team includes senior developers, UI/UX designers, QA specialists, and project managers. We combine technical expertise with business acumen to deliver solutions that drive real results. What would you like to know more about?";
    }
    
    // Process/Methodology
    if (message.includes('process') || message.includes('methodology') || message.includes('how do you work') || message.includes('workflow')) {
      return "Our proven development process ensures quality and transparency:\n\n1️⃣ Discovery & Planning - Understanding your vision\n2️⃣ Design & Prototyping - Visual concepts and wireframes\n3️⃣ Development - Agile sprints with regular updates\n4️⃣ Testing & QA - Comprehensive quality assurance\n5️⃣ Deployment - Smooth launch and migration\n6️⃣ Support - Ongoing maintenance and updates\n\nYou'll have direct access to your dedicated project manager and regular progress updates. Transparency is our priority!";
    }
    
    // Industries
    if (message.includes('industr') || message.includes('sector') || message.includes('domain')) {
      return "We have extensive experience across multiple industries:\n\n🏥 Healthcare - Medical platforms, telemedicine\n💰 Finance - FinTech, banking solutions\n🛒 E-commerce - Online stores, marketplaces\n📚 Education - E-learning, EdTech platforms\n🏠 Real Estate - Property management systems\n🚗 Transportation - Logistics, fleet management\n🏭 Manufacturing - Industry 4.0 solutions\n...and more!\n\nOur cross-industry expertise helps us bring best practices to your project. Which industry is your business in?";
    }
    
    // Support/Maintenance
    if (message.includes('support') || message.includes('maintenance') || message.includes('after launch') || message.includes('updates')) {
      return "We provide comprehensive post-launch support:\n\n🔧 Bug Fixes & Technical Support\n⚡ Performance Optimization\n🆕 Feature Updates & Enhancements\n🔒 Security Patches\n📊 Monitoring & Analytics\n📱 24/7 Emergency Support Available\n\nAll our projects include a warranty period, and we offer flexible maintenance packages tailored to your needs. Your success is our success!";
    }
    
    // Getting Started
    if (message.includes('get started') || message.includes('how to start') || message.includes('begin')) {
      return "Getting started with Norasoft is simple:\n\n1. Share your project idea through our contact form\n2. Schedule a free consultation call\n3. Receive a detailed proposal and quote\n4. Sign agreement and kick off the project\n5. Start building your solution!\n\nThe initial consultation is completely free with no obligations. We'll discuss your requirements, provide expert recommendations, and create a roadmap for success. Ready to take the first step?";
    }
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return "Hello! Welcome to Norasoft! 👋\n\nI'm your AI assistant, here to help you with:\n\n• Information about our services\n• Project estimates and timelines\n• Portfolio and case studies\n• Technical questions\n• Getting started with your project\n\nWhat would you like to know? Feel free to ask anything!";
    }
    
    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 😊\n\nIf you have any more questions or would like to discuss your project in detail, please don't hesitate to ask. Our team is ready to help you turn your vision into reality.\n\nIs there anything else I can assist you with today?";
    }
    
    // Check if message is gibberish (mostly random characters, very short words, or no vowels)
    const words = message.split(' ').filter(word => word.length > 0);
    const hasVowels = /[aeiou]/i.test(message);
    const avgWordLength = words.length > 0 ? words.reduce((sum, word) => sum + word.length, 0) / words.length : 0;
    const isLikelyGibberish = !hasVowels || (words.length > 0 && avgWordLength < 3 && message.length > 5);
    
    if (isLikelyGibberish || message.trim().length < 2) {
      return "I'm sorry, I didn't quite understand that. 🤔\n\nI'm here to help you with:\n\n• Information about our development services\n• Project pricing and timelines\n• Our portfolio and past projects\n• Technical questions about technologies\n• Getting started with your project\n\nCould you please rephrase your question? Or feel free to choose from the quick questions below!";
    }
    
    // Default response for unclear but valid messages
    return "I'm sorry, I didn't quite understand your question. Could you please clarify or rephrase it? 🤔\n\nI can help you with:\n\n• Our development services (Web, Mobile, AI, Custom Software)\n• Pricing and project estimates\n• Timeline and development process\n• Our portfolio and past projects\n• Technologies we use\n• Getting started with your project\n• Contact information\n\nPlease feel free to ask about any of these topics, or choose from the quick questions below!";
  };

  const quickQuestions = [
    "What services do you offer?",
    "How much does development cost?",
    "Can I see your portfolio?",
    "How do I get started?"
  ];

  return (
    <>
      {/* Welcome Message */}
      {showWelcome && !isOpen && (
        <div className="fixed bottom-28 right-6 z-40 animate-in slide-in-from-bottom-2 duration-500">
          <div className="relative">
            {/* Speech bubble */}
            <div className="bg-dark-700 border border-dark-600 rounded-2xl p-3 shadow-2xl max-w-xs relative">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRobot className="text-white text-xs" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-medium text-base">Assistant</p>
                    <button
                      onClick={() => setShowWelcome(false)}
                      className="text-neutral-400 hover:text-white transition-colors ml-1"
                    >
                      <FaTimes className="text-sm" />
                    </button>
                  </div>
                  <p className="text-neutral-300 text-base leading-relaxed">
                    How can I assist you today?
                  </p>
                </div>
              </div>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-dark-700 border-r border-b border-dark-600 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full transition-all duration-300 group ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
        }`}
      >
        {isOpen ? (
          <FaTimes className="text-white text-2xl mx-auto" />
        ) : (
          <FaRobot className="text-white text-2xl mx-auto" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div 
          className="fixed bottom-28 right-6 z-40 w-96 h-[700px] sm:w-[400px] sm:h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-4rem)] bg-dark-800/98 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl animate-in slide-in-from-bottom-2 duration-300 flex flex-col sm:bottom-32"
          onMouseEnter={handleChatbotMouseEnter}
          onMouseLeave={handleChatbotMouseLeave}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-dark-800/50 to-dark-700/50 rounded-t-3xl">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <FaRobot className="text-white text-lg" />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-800">
                  <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Assistant</h3>
                <p className="text-green-400 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-6 space-y-6"
            onWheel={handleChatbotScroll}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-[85%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-primary-500' 
                      : 'bg-gradient-to-r from-primary-500 to-accent-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <FaUser className="text-white text-sm" />
                    ) : (
                      <FaRobot className="text-white text-sm" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm min-w-0 flex-1 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                        : 'bg-white/5 backdrop-blur-sm text-neutral-200 border border-white/10'
                    }`}
                  >
                    <p className="text-sm leading-relaxed break-words whitespace-pre-wrap chatbot-message">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <FaRobot className="text-white text-sm" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm text-neutral-200 px-4 py-3 rounded-2xl border border-white/10 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-6 border-t border-white/10 bg-gradient-to-r from-dark-800/30 to-dark-700/30">
              <p className="text-sm text-neutral-300 mb-3 font-medium">Quick questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(question)}
                    className="text-xs bg-white/5 hover:bg-white/10 backdrop-blur-sm text-neutral-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-left border border-white/10 hover:border-white/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-6 border-t border-white/10 bg-gradient-to-r from-dark-800/50 to-dark-700/50 rounded-b-3xl">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 backdrop-blur-sm text-white placeholder-neutral-400 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent border border-white/10 focus:border-primary-500/50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 disabled:from-dark-600 disabled:to-dark-700 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
              >
                <FaPaperPlane className="text-base" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
