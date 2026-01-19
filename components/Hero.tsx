import React from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              We Design Your New Website Before You Buy It
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              We'll design a brand new website for you. If you don't like it we'll throw it away. Just put your URL below to see a new design for free.
            </p>
          </motion.div>

          <motion.div 
            className="relative w-full max-w-md mx-auto lg:mr-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative z-10">
              <div className="space-y-5">
                <div>
                  <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="hero-email" 
                    placeholder="Your e-mail" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input 
                    type="tel" 
                    id="hero-phone" 
                    placeholder="Your phone number" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="hero-website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input 
                    type="url" 
                    id="hero-website" 
                    placeholder="yourwebsite.com" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <Button className="w-full h-12 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                  See new design
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                   <CreditCard className="w-4 h-4" />
                   No Credit Card Required – See The New Design For Free!
                </div>
              </div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;