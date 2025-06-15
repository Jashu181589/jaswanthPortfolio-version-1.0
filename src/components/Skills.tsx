
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    {
      name: "Video Editing",
      description: "Professional video editing with advanced color grading and effects",
      category: "Creative",
    },
    {
      name: "Prompt Writing",
      description: "AI prompt engineering for optimal model performance and outputs",
      category: "AI/ML",
    },
    {
      name: "Figma",
      description: "UI/UX design and prototyping with collaborative workflows",
      category: "Design",
    },
    {
      name: "UI/UX Design",
      description: "User-centered design principles and interaction design",
      category: "Design",
    },
    {
      name: "Scripting",
      description: "Automation scripts and custom tool development",
      category: "Development",
    },
    {
      name: "3D Modeling",
      description: "3D asset creation and procedural modeling techniques",
      category: "Creative",
    },
    {
      name: "Photography",
      description: "Digital photography and advanced photo editing techniques",
      category: "Creative",
    },
    {
      name: "Motion Graphics",
      description: "Animated graphics and visual effects for digital media",
      category: "Creative",
    },
    {
      name: "Machine Learning",
      description: "ML model development and data science applications",
      category: "AI/ML",
    },
    {
      name: "DevOps",
      description: "CI/CD pipelines, containerization, and cloud infrastructure",
      category: "Development",
    },
    {
      name: "Blockchain",
      description: "Smart contract development and DeFi applications",
      category: "Development",
    },
    {
      name: "Mobile Development",
      description: "Cross-platform mobile app development and optimization",
      category: "Development",
    },
  ];

  const displayedSkills = showAll ? skills : skills.slice(0, 8);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Creative": "bg-violet-500/20 text-violet-400 border-violet-500/30",
      "Design": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Development": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      "AI/ML": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse toolkit spanning creative design, technical development, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-400/10 hover:scale-105 transition-all duration-300 group"
            >
              {/* Skill Icon Placeholder */}
              <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
              </div>

              <div className="mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(skill.category)}`}>
                  {skill.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-200 mb-3 group-hover:text-violet-400 transition-colors duration-300">
                {skill.name}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {skills.length > 8 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-violet-400 px-8 py-3"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Show More Skills
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

export default Skills;
