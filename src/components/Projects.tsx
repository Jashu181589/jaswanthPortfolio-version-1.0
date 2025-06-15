
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "AI Video Editor",
      description: "Intelligent video editing application powered by machine learning algorithms for automatic scene detection and content optimization.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "FFmpeg"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio website built with Three.js featuring immersive animations and WebGL effects.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Three.js", "React", "WebGL", "GSAP"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum blockchain with smart contracts for vote integrity.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and video calls using WebRTC technology.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Socket.io", "React", "Node.js", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "AI/ML": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      "Mobile": "bg-violet-500/20 text-violet-400 border-violet-500/30",
      "Blockchain": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work spanning web development, AI/ML, mobile apps, and blockchain solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-emerald-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 4 && (
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
                  Show More Projects
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

export default Projects;
