
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, Award, Download, Eye, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "AWS Solutions Architect Associate",
      description: "Comprehensive certification covering AWS cloud architecture, security, and best practices for designing distributed systems.",
      issuer: "Amazon Web Services",
      date: "December 2023",
      verificationUrl: "https://aws.amazon.com/verification",
      previewUrl: "https://example.com/cert-preview",
      downloadUrl: "https://example.com/cert-download",
    },
    {
      title: "Google Cloud Professional Developer",
      description: "Advanced certification demonstrating expertise in developing applications on Google Cloud Platform using various services and APIs.",
      issuer: "Google Cloud",
      date: "October 2023",
      verificationUrl: "https://cloud.google.com/verification",
      previewUrl: "https://example.com/cert-preview",
      downloadUrl: "https://example.com/cert-download",
    },
    {
      title: "React Developer Certification",
      description: "Professional certification validating advanced React.js skills including hooks, context, performance optimization, and testing.",
      issuer: "Meta (Facebook)",
      date: "August 2023",
      verificationUrl: "https://developers.facebook.com/verification",
      previewUrl: "https://example.com/cert-preview",
      downloadUrl: "https://example.com/cert-download",
    },
    {
      title: "UI/UX Design Professional",
      description: "Comprehensive certification covering user experience design principles, prototyping, user research, and design thinking methodologies.",
      issuer: "Adobe Certified Expert",
      date: "June 2023",
      verificationUrl: "https://adobe.com/verification",
      previewUrl: "https://example.com/cert-preview",
      downloadUrl: "https://example.com/cert-download",
    },
    {
      title: "AWS Solutions Architect Associate",
      description: "Comprehensive certification covering AWS cloud architecture, security, and best practices for designing distributed systems.",
      issuer: "Amazon Web Services",
      date: "December 2023",
      verificationUrl: "https://aws.amazon.com/verification",
      previewUrl: "https://example.com/cert-preview",
      downloadUrl: "https://example.com/cert-download",
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

              {/* PDF Preview Placeholder */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="w-full h-32 bg-gray-700 rounded border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <span className="text-gray-500 text-sm">Certificate Preview</span>
                  </div>
                </div>
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
