import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaArrowRight, FaSearch, FaArrowDown } from 'react-icons/fa';
import { blogs } from '../data/blogData';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogs);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Get unique categories from blogs
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  // Debounced search function
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Filter posts based on search query and selected category
  const filterPosts = useCallback(() => {
    setIsSearching(true);
    let filtered = blogs;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.author.name.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(filtered);
    setIsSearching(false);
  }, [searchQuery, selectedCategory]);

  // Apply debounced search
  useEffect(() => {
    const debouncedSearch = debounce(filterPosts, 300);
    debouncedSearch();
    return () => {
      // Cleanup
      debouncedSearch.cancel?.();
    };
  }, [filterPosts]);

  const featuredPost = filteredPosts.find(blog => blog.featured);
  const regularPosts = filteredPosts.filter(blog => !blog.featured);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section - Matching Main Page Design */}
      <div className="w-full h-screen relative bg-dark-gradient overflow-hidden flex items-center justify-center">
        {/* Modern Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Round gradient orbs with glowing effects */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-primary-500/30" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent-500/18 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-accent-500/25" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-primary-400/25 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-primary-400/35" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-accent-400/15 to-transparent rounded-full animate-modern-float animate-pulse-glow shadow-lg shadow-accent-400/20" style={{animationDelay: '1s'}}></div>
          
          {/* Additional round shapes with glow */}
          <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-primary-300/25 rounded-full animate-modern-pulse shadow-lg shadow-primary-300/40" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-accent-300/30 rounded-full animate-modern-pulse shadow-lg shadow-accent-300/35" style={{animationDelay: '1.5s'}}></div>
          
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Background Norasoft Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full overflow-hidden">
          <h1 className="text-6xl sm:text-8xl md:text-[150px] lg:text-[240px] xl:text-[320px] 2xl:text-[400px] text-center font-bold uppercase subtle-bg-text whitespace-nowrap select-none">
            Norasoft
          </h1>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8" data-aos="fade-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-100 leading-tight">
                  Insights & <span className="text-gradient">Updates</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                  Discover the latest trends, technologies, and best practices in software development
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
                  <button 
                    onClick={() => {
                      const nextSection = document.querySelector('section');
                      if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="primary-btn group flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg glow px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Explore Articles
                    <span>
                      <FaArrowRight className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                  <button 
                    onClick={() => {
                      const searchInput = document.querySelector('input[type="text"]');
                      if (searchInput) {
                        searchInput.focus();
                      }
                    }}
                    className="secondary-btn flex items-center justify-center gap-2 text-sm sm:text-lg rounded-lg px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto"
                  >
                    Search Articles
                    <span>
                      <FaSearch className="text-lg sm:text-2xl" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto w-full px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{blogs.length}</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Articles</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{categories.length - 1}</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Categories</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">5+</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Authors</div>
                  </div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-center group p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden authentic-glass-card">
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">Weekly</div>
                    <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-400">Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow - Matching Main Page Design */}
        <div className="absolute bottom-16 sm:bottom-8 left-0 right-0">
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="0"
            className="flex flex-col items-center gap-4"
          >
            {/* Company Info - Hidden on mobile */}
            <div className="text-center hidden sm:block">
              <p className="text-neutral-300 font-medium">Global AI Solutions</p>
            </div>

            {/* Scroll Button */}
            <button 
              onClick={() => {
                const nextSection = document.querySelector('section');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:scale-110 transition-transform duration-300 p-2 group"
              aria-label="Scroll to next section"
            >
              <div className="animate-bounce">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <FaArrowDown className="text-xl text-primary-400 group-hover:text-primary-300" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Categories Section */}
      <section className="relative py-12 bg-dark-800/30">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8" data-aos="fade-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50"
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary-400 transition-colors"
                  onClick={filterPosts}
                >
                  <FaSearch className={`w-5 h-5 ${isSearching ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-dark-800/30">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20" data-aos="fade-up">
              <h3 className="heading-3 mb-4">No articles found</h3>
              <p className="body-text mb-8">
                {searchQuery
                  ? `No articles match your search for "${searchQuery}"`
                  : `No articles available in the ${selectedCategory} category`}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="primary-btn glow inline-flex items-center gap-2"
              >
                Clear filters
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16" data-aos="fade-up">
                  <Link to={`/blog/${featuredPost.id}`} className="group">
                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] authentic-glass-card">
                      {/* Glass reflection sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                      
                      <div className="flex flex-col lg:flex-row relative z-10">
                        <div className="lg:w-1/2">
                          <div className="h-[300px] lg:h-[400px] bg-primary-gradient/20">
                            {/* Replace with actual image */}
                            <div className="w-full h-full bg-primary-gradient/30 flex items-center justify-center">
                              <span className="text-4xl font-bold text-primary-400">AI</span>
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <span className="text-primary-400 font-medium mb-4 bg-primary-500/20 px-3 py-1 rounded-full">{featuredPost.category}</span>
                          <h2 className="text-xl font-semibold text-white/95 mb-4 group-hover:text-white transition-colors duration-400">
                            {featuredPost.title}
                          </h2>
                          <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-400">{featuredPost.excerpt}</p>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                              <span className="text-primary-400 font-bold">{featuredPost.author.name.charAt(0)}</span>
                            </div>
                            <div>
                              <p className="font-medium text-white/95 group-hover:text-white transition-colors duration-400">{featuredPost.author.name}</p>
                              <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-400">{featuredPost.author.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-white/70 group-hover:text-white/80 transition-colors duration-400">
                            <div className="flex items-center gap-2">
                              <FaCalendar />
                              <span>{featuredPost.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaClock />
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] authentic-glass-card">
                      {/* Glass reflection sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-hover:transition-transform group-hover:duration-1000"></div>
                      
                      <div className="h-48 bg-primary-gradient/20 relative z-10">
                        {/* Replace with actual image */}
                        <div className="w-full h-full bg-primary-gradient/30 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-400">AI</span>
                        </div>
                      </div>
                      <div className="p-6 relative z-10">
                        <span className="text-primary-400 text-sm font-medium bg-primary-500/20 px-2 py-1 rounded-full">{post.category}</span>
                        <h3 className="text-lg font-semibold text-white/95 mt-2 mb-3 group-hover:text-white transition-colors duration-400">
                          {post.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed mb-6 line-clamp-2 group-hover:text-white/90 transition-colors duration-400">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                              <span className="text-primary-400 font-bold text-sm">{post.author.name.charAt(0)}</span>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium text-white/95 group-hover:text-white transition-colors duration-400">{post.author.name}</p>
                              <p className="text-white/70 group-hover:text-white/80 transition-colors duration-400">{post.date}</p>
                            </div>
                          </div>
                          <span className="text-sm text-white/70 group-hover:text-white/80 transition-colors duration-400">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog; 