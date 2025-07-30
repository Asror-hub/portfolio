import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const technologies = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Our mobile app development company has expertise in over 30 different languages, and we've handpicked the best tech stack for mobile development.",
    stack: [
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "Flutter" },
      { name: "Java" },
      { name: "Python" },
      { name: "PHP" },
      { name: "Figma" },
    ]
  },
  {
    id: 2,
    title: "Web App Development",
    description: "We use cutting-edge web technologies and frameworks to build responsive and scalable web applications.",
    stack: [
      { name: "React" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "Node.js" },
      { name: "Django" },
      { name: "Laravel" },
    ]
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "We develop custom software solutions tailored to your specific business needs using the latest technologies.",
    stack: [
      { name: "Java" },
      { name: ".NET" },
      { name: "Python" },
      { name: "C++" },
      { name: "Ruby" },
      { name: "Go" },
    ]
  }
];

const Technologies = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            We use latest AI technologies to run your project{" "}
            <span className="text-primary">smoothly</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border"
              data-aos="fade-up"
              data-aos-delay={tech.id * 100}
            >
              <button
                className="w-full p-6 flex items-center justify-between"
                onClick={() => setActiveId(activeId === tech.id ? null : tech.id)}
              >
                <h3 className="text-xl font-bold text-left">{tech.title}</h3>
                <FaChevronDown
                  className={`text-primary transition-transform duration-300 ${
                    activeId === tech.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeId === tech.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-600 mb-6">{tech.description}</p>
                  <div className="flex flex-wrap gap-8">
                    {tech.stack.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{item.name.charAt(0)}</span>
                        </div>
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                    ))}
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