
import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react';

const SocialMedia = () => {
  const socialPlatforms = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/jaswanth-aied', followers: 'Jaswanth-aied' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/sai-jaswanth-vengala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', followers: 'Sai Jaswanth Vengala' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', followers: 'jaswanthvengala' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', followers: 'Jaswanth-archives' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/jashuuu_u?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', followers: 'jashuuu_u' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', followers: 'Sai Jaswanth Vengala' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow my journey across different platforms and stay updated with my latest work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:scale-105 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 group"
            >
              <platform.icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              <h3 className="font-semibold text-gray-200 mb-1">{platform.name}</h3>
              <p className="text-sm text-gray-500">{platform.followers}</p>
            </a>
          ))}
        </div>

        {/* Special Portfolio Card */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:scale-105 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-400/20 transition-all duration-300 group">
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img
        src="https://images.hdqwalls.com/download/code-syntax-dark-minimal-4k-mr-2048x2048.jpg"
        alt="Coding Logo"
        className="w-16 h-16 object-contain rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-2">Coding Profiles</h3>
      <p className="text-gray-400 mb-4">
        Check out my coding profiles on HackerRank, Leetcode, Codechef, etc.
      </p>
      <a
        href="https://www.stopstalk.com/user/profile/klu2300080076"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
      >
        View Portfolio
        <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
</div>



         <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:scale-105 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-400/20 transition-all duration-300 group">
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img
        src="https://img.freepik.com/premium-vector/vector-j-letter-initial-gradient-colorful-logo_196200-1049.jpg"
        alt="Coding Logo"
        className="w-16 h-16 object-contain rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-2">Professional Content Editing Portfolio - Under Development</h3>
      <p className="text-gray-400 mb-4">
        Check out my content editing portfolio showcasing my work on various platforms.
      </p>
      <a
        href="https://example.com/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
      >
        View Content Editing Portfolio
        <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
</div>



      </div>
    </section>
  );
};

export default SocialMedia;
