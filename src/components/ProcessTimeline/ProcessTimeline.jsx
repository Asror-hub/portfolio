import React, { useEffect, useState } from 'react';

const ProcessTimeline = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

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
            // Mark all previous steps as completed
            const newCompletedSteps = new Set();
            for (let i = 0; i < index; i++) {
              newCompletedSteps.add(i);
            }
            setCompletedSteps(newCompletedSteps);
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
      
      {/* Vertical line */}
      <div className="w-px bg-dark-600 absolute left-[28px] top-0 bottom-0 z-10">
        {/* Progress line that fills as steps are completed */}
        <div
          className="w-px bg-primary-gradient absolute top-0 transition-all duration-1000 ease-out"
          style={{ 
            height: `${(completedSteps.size / (steps.length - 1)) * 100}%`,
            background: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%)'
          }}
        />
      </div>

      {/* Moving dot that travels along the timeline */}
      <div
        className="absolute left-[20px] z-30 transition-all duration-1000 ease-out"
        style={{ 
          top: `${(activeStep / (steps.length - 1)) * 100}%`,
          transform: 'translateY(-50%)'
        }}
      >
        <div className="w-4 h-4 bg-primary-gradient rounded-full shadow-lg shadow-primary-500/50 animate-pulse">
          <div className="w-full h-full bg-primary-gradient rounded-full animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Individual dots for each step */}
      {steps.map((_, index) => (
        <div
          key={`dot-${index}`}
          className="absolute left-[20px] z-20 transition-all duration-700 ease-out"
          style={{ 
            top: `${(index / (steps.length - 1)) * 100}%`,
            transform: 'translateY(-50%)'
          }}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all duration-700 ease-out ${
              completedSteps.has(index) 
                ? 'bg-primary-gradient shadow-lg shadow-primary-500/50 scale-110' 
                : 'bg-dark-600 border-2 border-dark-500'
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              // Add kick animation when moving dot reaches this dot
              animation: activeStep === index ? 'kickDot 0.6s ease-out' : 'none'
            }}
          />
        </div>
      ))}

      {/* Steps */}
      <div className="space-y-12 lg:space-y-24 w-full pl-16">
        {steps.map((step, index) => (
          <div
            key={index}
            id={`step-${index}`}
            className={`transition-all duration-700 ease-out ${
              completedSteps.has(index) 
                ? 'opacity-100 scale-100' 
                : activeStep === index
                ? 'opacity-100 scale-100'
                : 'opacity-50 scale-95'
            }`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                completedSteps.has(index)
                  ? 'bg-primary-gradient shadow-lg shadow-primary-500/30'
                  : 'bg-primary-500/20'
              }`}>
                <span className={`font-bold transition-colors duration-500 ${
                  completedSteps.has(index)
                    ? 'text-white'
                    : 'text-primary-400'
                }`}>
                  {index + 1}
                </span>
              </div>
              <h3 className={`heading-3 transition-colors duration-500 ${
                completedSteps.has(index)
                  ? 'text-neutral-100'
                  : 'text-neutral-400'
              }`}>
                {step.title}
              </h3>
            </div>
            <p className={`body-text transition-colors duration-500 ${
              completedSteps.has(index)
                ? 'text-neutral-300'
                : 'text-neutral-500'
            }`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;