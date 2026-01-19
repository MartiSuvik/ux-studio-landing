import React from 'react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface-light pt-20 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16">
          <div className="text-center mb-10">
             <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
              Get in touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enough talk. Let's go!</h2>
            <p className="text-gray-500">Fill in the form below and we'll get back to you ASAP</p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone number</label>
                <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea placeholder="Message (optional)" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50 resize-none"></textarea>
            </div>

            <Button className="w-full h-12 text-lg">Let's go!</Button>
          </form>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p>© 2023 uxstudio. All rights reserved.</p>
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