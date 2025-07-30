import React, { useState, useRef } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVision Inc.",
    image: "testimonial1.jpg",
    rating: 5,
    comment: "The custom software development team delivered exactly what we needed. Their attention to detail and commitment to quality is outstanding.",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    image: "testimonial2.jpg",
    rating: 5,
    comment: "Their AI development expertise helped us transform our business processes. The results exceeded our expectations.",
  },
  {
    name: "Emma Wilson",
    role: "Product Manager, StartupX",
    image: "testimonial3.jpg",
    rating: 5,
    comment: "The mobile app they developed for us has received fantastic user feedback. Their team's technical skills are top-notch.",
  },
  {
    name: "David Rodriguez",
    role: "Director, FinTech Solutions",
    image: "testimonial4.jpg",
    rating: 5,
    comment: "Their blockchain development services helped us create a secure and scalable platform. Extremely satisfied with the results.",
  },
  {
    name: "Lisa Zhang",
    role: "Head of Innovation, AI Corp",
    image: "testimonial5.jpg",
    rating: 5,
    comment: "The AI chatbot they developed has significantly improved our customer service efficiency. Excellent work!",
  },
  {
    name: "James Anderson",
    role: "Founder, HealthTech",
    image: "testimonial6.jpg",
    rating: 5,
    comment: "Their staff augmentation services provided us with highly skilled developers who integrated seamlessly with our team.",
  },
  {
    name: "Maria Garcia",
    role: "VP Engineering, CloudSys",
    image: "testimonial7.jpg",
    rating: 5,
    comment: "The web application they built is robust, scalable, and user-friendly. Their technical expertise is impressive.",
  },
  {
    name: "Alex Thompson",
    role: "Director, MobileFirst",
    image: "testimonial8.jpg",
    rating: 5,
    comment: "Their iOS and Android development teams delivered exceptional mobile applications that our users love.",
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
    <section className="py-20 bg-gray-50 relative">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-500">What our clients say about our services</p>
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
            className="overflow-x-auto hide-scrollbar px-4"
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
                  className="w-[400px] bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 select-none"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-primary/20 text-4xl absolute -top-2 -left-2" />
                    <p className="text-gray-600 relative z-10 line-clamp-4">{testimonial.comment}</p>
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

export default Testimonials; 