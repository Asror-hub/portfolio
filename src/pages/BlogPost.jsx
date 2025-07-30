import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';
import { blogs } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogs.find(blog => blog.id === parseInt(id));
  const recommendedPosts = blogs
    .filter(blog => blog.id !== parseInt(id))
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    switch (content.type) {
      case 'paragraph':
        return <p className="text-gray-600 mb-6 leading-relaxed">{content.content}</p>;
      case 'heading':
        return <h2 className="text-2xl font-bold mb-4 mt-8">{content.content}</h2>;
      case 'list':
        return (
          <ul className="list-disc list-inside mb-6 text-gray-600 space-y-2">
            {content.items.map((item, index) => (
              <li key={index} className="ml-4">{item}</li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-6">
            {content.content}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-lg font-medium mb-4 inline-block" data-aos="fade-up">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-sm opacity-90" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12 p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none" data-aos="fade-up">
              {post.content.map((section, index) => (
                <div key={index}>{renderContent(section)}</div>
              ))}
            </article>

            {/* Share and Tags */}
            <div className="border-t border-gray-200 mt-12 pt-8" data-aos="fade-up">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Recommended Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-48 bg-gray-200">
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 