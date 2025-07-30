import React, { useEffect, useState } from 'react';

const ProcessTimeline = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = steps.map((_, index) => 
        document.getElementById(`step-${index}`)
      );
      
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;

      elements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps]);

  return (
    <div className="relative flex">
      {/* Timeline line with moving dot */}
      <div className="hidden lg:block w-px bg-gray-200 absolute left-[28px] top-0 bottom-0">
        <div
          className="w-4 h-4 bg-primary rounded-full absolute -left-[7px] transition-all duration-500"
          style={{ top: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-12 lg:space-y-24 w-full lg:pl-16">
        {steps.map((step, index) => (
          <div
            key={index}
            id={`step-${index}`}
            className={`transition-opacity duration-500 ${
              index === activeStep ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline; 