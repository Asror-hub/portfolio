import React, { useState, useRef } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Piotr Kowalski",
    image: "testimonial1.jpg",
    rating: 5,
    comment: "The custom software development team delivered exactly what we needed. Their attention to detail and commitment to quality is outstanding.",
  },
  {
    name: "Jamshid Rakhimov",
    image: "testimonial2.jpg",
    rating: 5,
    comment: "Their development expertise helped us transform our business processes. The results exceeded our expectations.",
  },
  {
    name: "Anna Nowak",
    image: "testimonial3.jpg",
    rating: 5,
    comment: "The mobile app they developed for us has received fantastic user feedback. Their team's technical skills are top-notch.",
  },
  {
    name: "Carlos Mendez",
    image: "testimonial4.jpg",
    rating: 5,
    comment: "Their development services helped us create a secure and scalable platform. Extremely satisfied with the results.",
  },
  {
    name: "Amira Hassan",
    image: "testimonial5.jpg",
    rating: 5,
    comment: "The solution they developed has significantly improved our business efficiency. Excellent work!",
  },
  {
    name: "Jakub Wiśniewski",
    image: "testimonial6.jpg",
    rating: 5,
    comment: "Working with them was a great experience. Their developers integrated seamlessly with our team and delivered outstanding results.",
  },
  {
    name: "Sophie Laurent",
    image: "testimonial7.jpg",
    rating: 5,
    comment: "The web application they built is robust, scalable, and user-friendly. Their technical expertise is impressive.",
  },
  {
    name: "Katarzyna M",
    image: "testimonial8.jpg",
    rating: 5,
    comment: "Their mobile development teams delivered exceptional applications that our users love. Highly recommended!",
  },
];

const Testimonials = () => {
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
    <section className="section-padding bg-dark-900/50 relative">
      <div className="container">
        <div className="text-left mb-16" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 border border-primary-500/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            <div className="w-40 h-px bg-gradient-to-r from-primary-500 to-accent-500 ml-3"></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <h2 className="heading-2 mb-4">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="body-text-lg">What our clients say about our services</p>
        </div>

        {/* Horizontal scrolling container with buttons */}
        <div className="relative group -mx-32">
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
            className="overflow-x-auto hide-scrollbar px-32 w-full"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex gap-6 pb-8 min-w-max">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[400px] relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 select-none group hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-full bg-primary-gradient/30 flex items-center justify-center">
                        <span className="text-primary-400 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white/95 group-hover:text-white transition-colors duration-400">{testimonial.name}</h3>
                    </div>
                  </div>
                  <div className="mb-4 relative z-10">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-warning-400" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <FaQuoteLeft className="text-primary-500/20 text-4xl absolute -top-2 -left-2" />
                    <p className="text-white/80 leading-relaxed line-clamp-4 group-hover:text-white/90 transition-colors duration-400">{testimonial.comment}</p>
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

export default Testimonials; 