import React from 'react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface-light pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8">
          <p>© 2026 ScalingWebs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;