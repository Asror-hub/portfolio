import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaArrowRight, FaSearch } from 'react-icons/fa';
import { blogs } from '../data/blogData';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogs);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="bg-gray-50 min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" data-aos="fade-up">
              Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Discover the latest trends, technologies, and best practices in software development
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                  onClick={filterPosts}
                >
                  <FaSearch className={`w-5 h-5 ${isSearching ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mt-12" data-aos="fade-up" data-aos-delay="300">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-white text-primary'
                      : 'bg-white/10 hover:bg-white/20 text-white'
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8">
                {searchQuery
                  ? `No articles match your search for "${searchQuery}"`
                  : `No articles available in the ${selectedCategory} category`}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
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
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                          <div className="h-[300px] lg:h-[400px] bg-gray-200">
                            {/* Replace with actual image */}
                            <div className="w-full h-full bg-primary/10"></div>
                          </div>
                        </div>
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <span className="text-primary font-medium mb-4">{featuredPost.category}</span>
                          <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              {featuredPost.author.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{featuredPost.author.name}</p>
                              <p className="text-sm text-gray-600">{featuredPost.author.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-600">
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
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="h-48 bg-gray-200">
                        {/* Replace with actual image */}
                        <div className="w-full h-full bg-primary/10"></div>
                      </div>
                      <div className="p-6">
                        <span className="text-primary text-sm font-medium">{post.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              {post.author.name.charAt(0)}
                            </div>
                            <div className="text-sm">
                              <p className="font-medium">{post.author.name}</p>
                              <p className="text-gray-600">{post.date}</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">{post.readTime}</span>
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