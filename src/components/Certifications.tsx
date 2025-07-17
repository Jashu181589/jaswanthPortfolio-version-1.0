import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, Award, Download, Eye, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "Google AI&ML Virtual Intenship with AICTE",
      description: "Comprehensive certification covering React fundamentals, state management, component architecture, and modern frontend development practices.",
      issuer: "AICTE in collaboration with Google",
      date: "JULY 2025",
      verificationUrl: "https://drive.google.com/file/d/1CzgJ4cy2c76NuiWW77pmL1_B71GjmgJU/view?usp=sharing",
      previewUrl: "https://github.com/Jashu181589/My-Portfolio/blob/main/G%20-%20AIML.png?raw=true",
      downloadUrl: "https://drive.google.com/file/d/1CzgJ4cy2c76NuiWW77pmL1_B71GjmgJU/view?usp=sharing",
    },
    
     {
      title: "React Frontend Developer",
      description: "Comprehensive certification covering React fundamentals, state management, component architecture, and modern frontend development practices.",
      issuer: "HackerRank",
      date: "March 2025",
      verificationUrl: "https://www.hackerrank.com/certificates/iframe/8a33e74ddd59",
      previewUrl: "https://github.com/Jashu181589/My-Portfolio/blob/main/Reach%20Frontend%20developer.png?raw=true",
      downloadUrl: "https://drive.google.com/file/d/1tEC3T046JOo62e958_W6QVWJaG3pUI_9/view?usp=sharing",
    },
    {
      title: "Cambridge LinguaSkill - B2 Level",
      description: "The Cambridge Linguaskill B2 exam certifies upper-intermediate English proficiency for academic and professional purposes.",
      issuer: "Cambridge University",
      date: "May 2024",
      verificationUrl: "https://results.linguaskill.com/",
      previewUrl: "https://github.com/Jashu181589/My-Portfolio/blob/main/Linguskillss.png?raw=true",
      downloadUrl: "https://drive.google.com/file/d/1m_1pK9t9wMuyKZrvM-56pP4sc65UO0ks/view?usp=sharing",
    },
    {
      title: "Cisco Internship in Networking with Packet Tracer",
      description: "Hands-on internship program focused on networking fundamentals, configuration, and troubleshooting using Cisco Packet Tracer.",
      issuer: "Cisco Systems",
      date: "June 2024",
      verificationUrl: "https://www.linkedin.com/in/sai-jaswanth-vengala/details/certifications/",
      previewUrl: "https://github.com/Jashu181589/My-Portfolio/blob/main/Cisco%20SS.png?raw=true",
      downloadUrl: "https://drive.google.com/file/d/1wcj0umpRFrnmYZRnzoYfNQkpfepEU8Yv/view?usp=sharing",
    },
   
   
  ];

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 2);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedCertifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-400/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-200 mb-2">{cert.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{cert.description}</p>

              {/* Certificate Preview Image */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <img
                  src={cert.previewUrl}
                  alt={`${cert.title} Preview`}
                  className="w-full h-48 object-cover rounded-lg border border-gray-700"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={cert.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-violet-500/20 text-violet-400 border border-violet-500/30 rounded-lg hover:bg-violet-500/30 transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </a>
                <a
                  href={cert.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-violet-400 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/30 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>

        {certifications.length > 2 && (
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
                  Show More Certifications
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

export default Certifications;