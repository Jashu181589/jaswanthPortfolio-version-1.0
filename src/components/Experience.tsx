
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, Building, Calendar } from 'lucide-react';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Freelance AI-Driven Content Editor & Performance Marketer",
      company: "Self-Employed / Freelance Platforms (Fiverr & Upwork)",
      period: "2021 - Present",
      description: "pecialized in editing high-impact content and managing performance-based advertising campaigns. Leveraged AI tools for content enhancement and analytics-driven decisions. Successfully optimized ad strategies across platforms, resulting in improved reach and conversion. Delivered creative assets and insights that scaled engagement for clients with audiences over 50K.",
      technologies: ["Photoshop", "GIMP", "Canva", "YouTube Analytics", "Google Ads"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub - KL University",
      period: "2023 - 2025",
      description: "Building and maintaining company websites using HTML, CSS, JavaScript, mainly dealing with React Vite, SpringBoot, Django. Worked closely with senior developers to learn best practices. Contributed to open-source projects and improved code quality standards.",
      technologies: ["HTML", "CSS", "JavaScript", "React Vite", "Tailwind and PostCSS", "Bootstrap and Django"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub - KL University",
      period: "2023 - 2025",
      description: "Building and maintaining company websites using HTML, CSS, and JavaScript. Worked closely with senior developers to learn best practices. Contributed to open-source projects and improved code quality standards.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    },
    {
      title: "Web Development Intern",
      company: "Creative Agency Pro",
      period: "2018 - 2019",
      description: "Assisted in the development of client websites and landing pages. Gained experience in responsive design and cross-browser compatibility. Participated in code reviews and agile development processes.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Photoshop"],
    },
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through various roles in the tech industry, building expertise and delivering impactful solutions
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {displayedExperiences.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-400/10 transition-all duration-300"
            >
              {/* Timeline Line */}
              {index < displayedExperiences.length - 1 && (
                <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-gradient-to-b from-emerald-400/50 to-transparent transform translate-y-full"></div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-200 mb-1">{experience.title}</h3>
                      <h4 className="text-lg text-emerald-400 font-semibold">{experience.company}</h4>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {experiences.length > 2 && (
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
                  Show More Experience
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

export default Experience;
