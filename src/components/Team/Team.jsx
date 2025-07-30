import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Akilkhanov",
    role: "CEO & Founder",
    image: "../assets/dora-hero.png",
    bio: "Passionate about building innovative solutions and leading teams to success.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Isaac",
    role: "CTO",
    image: "/images/team/team2.jpg",
    bio: "Technology enthusiast with a focus on scalable architecture and emerging tech.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Russ",
    role: "Lead Developer",
    image: "/images/team/team3.jpg",
    bio: "Full-stack expert specializing in modern web technologies and team leadership.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Anthony",
    role: "Senior Android Dev",
    experience: "10+ years experience",
    image: "/images/team/team4.jpg",
    bio: "Android specialist with a decade of experience in mobile app development.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Uma",
    role: "UI/UX Designer",
    image: "/images/team/team5.jpg",
    bio: "Creative designer focused on crafting intuitive and beautiful user experiences.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Maria",
    role: "Backend Developer",
    image: "/images/team/team6.jpg",
    bio: "Backend specialist with expertise in building robust and scalable systems.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Alexandra",
    role: "DevOps Engineer",
    image: "/images/team/team7.jpg",
    bio: "DevOps professional specializing in CI/CD and cloud infrastructure.",
    links: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael",
    role: "Mobile Developer",
    image: "/images/team/team8.jpg",
    bio: "Cross-platform mobile developer with a passion for creating seamless apps.",
    links: {
      linkedin: "#",
      github: "#"
    }
  }
];

const Team = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Meet some of our <span className="text-primary">120+ team members</span>
          </h2>
        </div>

        {/* Horizontal scrolling container with buttons */}
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-primary hover:bg-white transition-all duration-200 ${
              showLeftButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-primary hover:bg-white transition-all duration-200 ${
              showRightButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Scrollable content */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex gap-6 pb-8 min-w-max px-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 select-none"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Image container */}
                  <div className="h-[200px] rounded-t-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      draggable="false"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    {member.experience && (
                      <p className="text-sm text-gray-500 mb-4">
                        {member.experience}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm mb-6">{member.bio}</p>

                    {/* Social links */}
                    <div className="flex gap-4">
                      <a
                        href={member.links.linkedin}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a
                        href={member.links.github}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          <div className="w-16 h-1 bg-primary/30 rounded-full"></div>
          <div className="w-6 h-1 bg-primary rounded-full"></div>
          <div className="w-6 h-1 bg-primary/30 rounded-full"></div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// Add this to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes rotate-glow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-rotate-glow {
    animation: rotate-glow 4s linear infinite;
  }
`;
document.head.appendChild(style);

export default Team; 