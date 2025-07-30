import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Doraemon 3D Movie",
    category: "Animation",
    image: "/images/projects/project1.jpg",
    description: "Experience the magic of Doraemon in stunning 3D animation.",
  },
  {
    title: "Doraemon Game App",
    category: "Gaming",
    image: "/images/projects/project2.jpg",
    description: "Interactive gaming experience with your favorite characters.",
  },
  {
    title: "Doraemon AR Experience",
    category: "Augmented Reality",
    image: "/images/projects/project3.jpg",
    description: "Bringing Doraemon's gadgets to life through AR technology.",
  },
];

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-500">Discover our latest works and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-primary/10">
                {/* Project image will be added here */}
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 group"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 