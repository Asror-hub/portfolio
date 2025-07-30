import React, { useEffect } from 'react';
import { FaStar, FaApple, FaGooglePlay, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: "Alaska Airlines",
    category: "Travel",
    icon: "/images/projects/alaska-airlines-icon.png",
    description: "Alaska Airlines mobile app helps you make reservations, check in, and get your mobile boarding pass.",
    appStoreRating: 4.7,
    playStoreRating: 4.1,
    images: ["/images/projects/alaska-airlines-1.png", "/images/projects/alaska-airlines-2.png"],
    tags: ["Productivity", "Travel"],
    testimonial: {
      name: "Andrew Harrison",
      role: "VP at Alaska Airlines",
      text: "They implemented new features like boarding pass sharing and ability to see first-class waitlist."
    }
  },
  {
    title: "Kia Access",
    category: "Automotive",
    icon: "/images/projects/kia-icon.png",
    description: "Kia Access is the official Kia America, Inc. owner's app. Kia Access makes getting your vehicle information and services easier than ever.",
    appStoreRating: 4.7,
    playStoreRating: 4.1,
    images: ["/images/projects/kia-1.png", "/images/projects/kia-2.png"],
    tags: ["Productivity", "IoT"]
  },
  {
    title: "Kroger",
    category: "Food&Delivery",
    icon: "/images/projects/kroger-icon.png",
    description: "Looking for a faster, easier, more rewarding shopping experience? Save time and money with the Kroger app. It puts convenience, savings and rewards at your fingertips.",
    appStoreRating: 4.8,
    playStoreRating: 4.5,
    images: ["/images/projects/kroger-1.png", "/images/projects/kroger-2.png"],
    tags: ["Food&Delivery", "E-commerce"]
  },
  {
    title: "Allbirds",
    category: "E-commerce",
    icon: "/images/projects/allbirds-icon.png",
    description: "The world's most comfortable shoes, flats, and clothing made with natural materials like merino wool and eucalyptus.",
    appStoreRating: 4.9,
    playStoreRating: null,
    playStoreStatus: "coming soon",
    images: ["/images/projects/allbirds-1.png", "/images/projects/allbirds-2.png"],
    tags: ["E-commerce"]
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} size={12} />
        ))}
        <span className="ml-1 text-sm">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Our Projects</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Explore our portfolio of innovative solutions and successful implementations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    {/* Tags */}
                    <div className="flex gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {project.title.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    {/* App Store Ratings */}
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <FaApple size={20} />
                        {renderStars(project.appStoreRating)}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaGooglePlay size={20} />
                        {project.playStoreRating ? 
                          renderStars(project.playStoreRating) : 
                          <span className="text-sm text-gray-500">{project.playStoreStatus}</span>
                        }
                      </div>
                    </div>

                    {/* Testimonial if exists */}
                    {project.testimonial && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {project.testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{project.testimonial.name}</p>
                            <p className="text-sm text-gray-600">{project.testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{project.testimonial.text}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Content - App Screenshots */}
                  <div className="flex-1 relative min-h-[300px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4">
                      <div className="w-40 h-[400px] rounded-3xl bg-gray-100"></div>
                      <div className="w-40 h-[400px] rounded-3xl bg-gray-100"></div>
                    </div>
                  </div>
                </div>

                {/* Case Study Link */}
                <div className="mt-6 text-right">
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    Case study
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 