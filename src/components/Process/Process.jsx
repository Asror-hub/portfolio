import React from 'react';
import ProcessTimeline from '../ProcessTimeline/ProcessTimeline';

const processSteps = [
  {
    title: "Discovery",
    description: "We begin by understanding your business needs, goals, and challenges to create a tailored solution."
  },
  {
    title: "Planning",
    description: "Our team develops a detailed project plan, timeline, and resource allocation strategy."
  },
  {
    title: "Design",
    description: "We create intuitive user interfaces and robust system architectures that align with your vision."
  },
  {
    title: "Development",
    description: "Our expert developers build your solution using cutting-edge technologies and best practices."
  },
  {
    title: "Testing",
    description: "We conduct thorough testing to ensure quality, performance, and security at every stage."
  },
  {
    title: "Deployment",
    description: "We handle the seamless deployment of your solution and provide comprehensive support."
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-dark-800/30" id="process">
      <div className="container">
        <div className="text-left mb-16" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <h2 className="heading-2 mb-4">Our <span className="text-gradient">Process</span></h2>
          <p className="body-text-lg">A proven methodology for delivering exceptional results</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ProcessTimeline steps={processSteps} />
        </div>
      </div>
    </section>
  );
};

export default Process; 