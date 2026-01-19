import React from 'react';
import { Clock, Coffee, Video, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const HelpSection: React.FC = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
            Our process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How Does It Work?</h2>
        </div>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Clock className="text-primary w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Schedule a Demo</h3>
            <p className="text-gray-600 leading-relaxed">
              Pick a time to see a brand new design of your website for free
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Coffee className="text-primary w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">We Do The Work</h3>
            <p className="text-gray-600 leading-relaxed">
              Grab some popcorn while our designers create your new design
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Video className="text-primary w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Video Presentation</h3>
            <p className="text-gray-600 leading-relaxed">
              We show you the new design via video meeting. Buy it if you like it!
            </p>
          </motion.div>
        </div>

        {/* Free Design Form Section */}
        <div className="bg-black text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Wanna See a Free Design? 👏
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We design a new homepage for your website 100% for free. Then it's up to you if you want it!
              </p>
            </div>
            
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl">
               <div className="space-y-4">
                <div>
                  <label htmlFor="process-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="process-email" placeholder="Your e-mail" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="process-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input type="tel" id="process-phone" placeholder="Your phone number" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="process-website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input type="url" id="process-website" placeholder="yourwebsite.com" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                </div>
                
                <Button className="w-full h-12 text-base font-semibold">
                  See new design
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium pt-2">
                   <CreditCard className="w-4 h-4" />
                   No Credit Card Required – See The New Design For Free!
                </div>
               </div>
            </div>
          </div>
          
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;