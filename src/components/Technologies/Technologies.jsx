import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
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
} from "react-icons/si";

const technologies = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Our mobile app development company has expertise in over 30 different languages, and we've handpicked the best tech stack for mobile development.",
    stack: [
      { name: "Swift", icon: "SiSwift" },
      { name: "Kotlin", icon: "SiKotlin" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "React Native", icon: "SiReact" },
      { name: "Python", icon: "SiPython" },
      { name: "Figma", icon: "SiFigma" },
    ]
  },
  {
    id: 2,
    title: "Web App Development",
    description: "We use cutting-edge web technologies and frameworks to build responsive and scalable web applications.",
    stack: [
      { name: "React", icon: "SiReact" },
      { name: "Vue.js", icon: "SiVuedotjs" },
      { name: "Angular", icon: "SiAngular" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Django", icon: "SiDjango" },
      { name: "Laravel", icon: "SiLaravel" },
    ]
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "We develop custom software solutions tailored to your specific business needs using the latest technologies.",
    stack: [
      { name: ".NET", icon: "SiDotnet" },
      { name: "Python", icon: "SiPython" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Ruby", icon: "SiRuby" },
      { name: "Go", icon: "SiGo" },
    ]
  }
];

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

const Technologies = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="container">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/40 rounded-full flex items-center justify-center animate-pulse-glow">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="heading-2 mb-6">
            <span className="text-gradient">Technologies</span> we use
          </h2>
          <p className="body-text-lg max-w-2xl">
            We leverage cutting-edge AI technologies and modern frameworks to build robust, scalable solutions that drive your business forward.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`relative overflow-hidden transition-all duration-500 group ${
                activeId === tech.id ? 'scale-105' : 'scale-100'
              } bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:bg-white/8 hover:border-white/20 authentic-glass-card`}
              style={{ zIndex: activeId === tech.id ? 10 : 1 }}
            >
              {/* Glass reflection sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>

              <button
                className="w-full py-4 px-6 flex items-center justify-between relative z-10 group-hover:bg-white/5 transition-colors duration-300"
                onClick={() => setActiveId(activeId === tech.id ? null : tech.id)}
              >
                <h3 className="text-lg font-semibold text-white/95 text-left group-hover:text-white transition-colors duration-400">{tech.title}</h3>
                <FaChevronDown
                  className={`text-primary-500 transition-all duration-300 group-hover:text-primary-400 ${
                    activeId === tech.id ? "rotate-180 scale-110" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeId === tech.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                          className="group/tech flex flex-col items-center gap-2 bg-dark-700/50 p-4 rounded-xl border border-dark-600/50 hover:border-primary-500/30 hover:bg-dark-700/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/10"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center border border-primary-500/30 group-hover/tech:border-primary-500/50 group-hover/tech:shadow-lg group-hover/tech:shadow-primary-500/20 transition-all duration-300">
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
    </section>
  );
};

export default Technologies; 