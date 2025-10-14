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
    <section className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-16" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <h2 className="heading-2 mb-4">
            Meet some of our <span className="text-gradient">120+ team members</span>
          </h2>
        </div>

        {/* Horizontal scrolling container with buttons */}
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-dark-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-200 ${
              showLeftButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-dark-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-200 ${
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
                  className="w-[280px] relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl select-none group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  {/* Image container */}
                  <div className="h-[200px] rounded-t-xl overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-lg font-semibold text-white/95 mb-2 group-hover:text-white transition-colors duration-400">
                      {member.name}
                    </h3>
                    <p className="text-primary-400 font-medium mb-2 group-hover:text-primary-300 transition-colors duration-400">{member.role}</p>
                    {member.experience && (
                      <p className="text-sm text-white/70 mb-4 group-hover:text-white/80 transition-colors duration-400">
                        {member.experience}
                      </p>
                    )}
                    <p className="text-white/80 text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-400">{member.bio}</p>

                    {/* Social links */}
                    <div className="flex gap-4">
                      <a
                        href={member.links.linkedin}
                        className="text-white/60 hover:text-primary-400 transition-colors duration-300 hover:scale-110"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a
                        href={member.links.github}
                        className="text-white/60 hover:text-primary-400 transition-colors duration-300 hover:scale-110"
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
        <div className="mt-6 flex justify-start gap-2 lg:hidden">
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