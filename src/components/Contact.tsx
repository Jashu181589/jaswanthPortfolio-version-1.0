
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-1">Email</h4>
                  <a 
                    href="mailto:jaswanthvengala@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    jaswanthvengala@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-1">Phone</h4>
                  <a 
                    href="tel:+919493872938"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    +91 94938 72938
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-1">Location</h4>
                  <span className="text-gray-400">
                    Vijayawada, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to my newsletter for the latest updates on projects, blog posts, and tech insights.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-6 py-3 text-lg font-semibold transition-all duration-300"
              >
                Subscribe
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent mb-2">
                Sai Jaswanth Vengala
              </h4>
              <p className="text-gray-400 text-sm">
                Full Stack Developer & Creative Technologist
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Sai Jaswanth Vengala. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
