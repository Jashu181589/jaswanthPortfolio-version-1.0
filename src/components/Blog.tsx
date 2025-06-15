
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development including WebAssembly, Edge Computing, and the rise of meta-frameworks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "Web Development",
      url: "/blog/future-web-development",
    },
    {
      title: "Mastering Dark Mode Design",
      excerpt: "A comprehensive guide to implementing beautiful dark mode interfaces that enhance user experience and reduce eye strain.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      date: "December 10, 2023",
      readTime: "6 min read",
      category: "Design",
      url: "/blog/dark-mode-design",
    },
    {
      title: "AI in Creative Workflows",
      excerpt: "How artificial intelligence is revolutionizing creative processes and tools for designers and developers.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      date: "December 5, 2023",
      readTime: "10 min read",
      category: "AI/ML",
      url: "/blog/ai-creative-workflows",
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large React applications with performance optimization and maintainable code architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      date: "November 28, 2023",
      readTime: "12 min read",
      category: "React",
      url: "/blog/scalable-react-apps",
    },
    {
      title: "The Art of Technical Writing",
      excerpt: "Tips and strategies for creating clear, engaging technical documentation that helps developers succeed.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      date: "November 20, 2023",
      readTime: "7 min read",
      category: "Writing",
      url: "/blog/technical-writing",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Exploring CSS Grid, Flexbox, Custom Properties, and modern layout techniques for responsive web design.",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=400&h=250&fit=crop",
      date: "November 15, 2023",
      readTime: "9 min read",
      category: "CSS",
      url: "/blog/modern-css",
    },
  ];

  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Development": "bg-blue-500/20 text-blue-400",
      "Design": "bg-violet-500/20 text-violet-400",
      "AI/ML": "bg-emerald-500/20 text-emerald-400",
      "React": "bg-cyan-500/20 text-cyan-400",
      "Writing": "bg-orange-500/20 text-orange-400",
      "CSS": "bg-pink-500/20 text-pink-400",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPosts.map((post) => (
            <article
              key={post.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-400/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href={post.url}
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 px-8 py-3"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Show More Posts
                  <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
