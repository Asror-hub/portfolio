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
    <section className="py-20 bg-gray-50" id="process">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-500">A proven methodology for delivering exceptional results</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ProcessTimeline steps={processSteps} />
        </div>
      </div>
    </section>
  );
};

export default Process; 