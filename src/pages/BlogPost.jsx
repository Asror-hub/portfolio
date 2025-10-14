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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <h2 className="heading-3 mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary-400 hover:text-primary-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    switch (content.type) {
      case 'paragraph':
        return <p className="body-text mb-6 leading-relaxed">{content.content}</p>;
      case 'heading':
        return <h2 className="heading-3 mb-4 mt-8">{content.content}</h2>;
      case 'list':
        return (
          <ul className="list-disc list-inside mb-6 text-neutral-300 space-y-2">
            {content.items.map((item, index) => (
              <li key={index} className="ml-4">{item}</li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-300 my-6">
            {content.content}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-neutral-100">
            <span className="text-lg font-medium mb-4 inline-block bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full" data-aos="fade-up">
              {post.category}
            </span>
            <h1 className="heading-1 mb-6" data-aos="fade-up">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-sm text-neutral-300" data-aos="fade-up" data-aos-delay="100">
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
      <section className="section-padding bg-dark-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12 p-6 card" data-aos="fade-up">
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center text-xl font-bold text-primary-400">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-neutral-100">{post.author.name}</h3>
                <p className="text-neutral-400">{post.author.role}</p>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none" data-aos="fade-up">
              {post.content.map((section, index) => (
                <div key={index}>{renderContent(section)}</div>
              ))}
            </article>

            {/* Share and Tags */}
            <div className="border-t border-dark-600 mt-12 pt-8" data-aos="fade-up">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="section-padding bg-dark-900/50">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 mb-12 text-center" data-aos="fade-up">
            Recommended <span className="text-gradient">Articles</span>
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
                <div className="card group hover:scale-105 overflow-hidden">
                  <div className="h-48 bg-primary-gradient/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-400">AI</span>
                  </div>
                  <div className="p-6">
                    <span className="text-primary-400 text-sm font-medium bg-primary-500/20 px-2 py-1 rounded-full">{post.category}</span>
                    <h3 className="heading-3 mt-2 mb-3 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="body-text mb-6 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                          <span className="text-primary-400 font-bold text-sm">{post.author.name.charAt(0)}</span>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium text-neutral-100">{post.author.name}</p>
                          <p className="text-neutral-400">{post.date}</p>
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