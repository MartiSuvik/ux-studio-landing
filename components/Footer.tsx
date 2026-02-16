import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface-light pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-8 border-b border-gray-200">
          
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">ScalingWebs</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Web design and SEO agency based in Tallinn, Estonia. We build high-performance websites for Baltic businesses that rank, convert, and scale.
            </p>
            <address className="text-sm text-gray-500 not-italic leading-relaxed">
              EFFI AI SOLUTIONS OÜ<br />
              Pärnu mnt 15<br />
              10141 Tallinn, Estonia
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                <li><a href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="/#works" className="text-gray-600 hover:text-gray-900 transition-colors">Our Work</a></li>
                <li><a href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a></li>
                <li><a href="/#team" className="text-gray-600 hover:text-gray-900 transition-colors">Team</a></li>
                <li><a href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</a></li>
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/romet-ridamae/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5">
                  <Linkedin className="w-4 h-4" /> Romet Ridamäe
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marti-suvorov-12aa0628b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5">
                  <Linkedin className="w-4 h-4" /> Marti Suvorov
                </a>
              </li>
              <li>
                <a href="https://www.inforegister.ee/en/17306855-EFFI-AI-SOLUTIONS-OU/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Estonian Business Registry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8">
          <p>© 2026 ScalingWebs (EFFI AI SOLUTIONS OÜ). All rights reserved.</p>
          <p className="mt-2 md:mt-0">Tallinn, Estonia · Serving businesses across Estonia, Latvia & Lithuania</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;