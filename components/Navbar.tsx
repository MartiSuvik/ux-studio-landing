import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3" 
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30">U</div>
              <span className="font-bold text-xl tracking-tight">uxstudio</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('works')} 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              About
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-all group shadow-md hover:shadow-lg"
            >
              Contact
              <span className="ml-2 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
            
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-4 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('works')} className="text-base font-medium text-gray-900 py-2 text-left w-full">Works</button>
            <button onClick={() => scrollToSection('services')} className="text-base font-medium text-gray-900 py-2 text-left w-full">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-base font-medium text-gray-900 py-2 text-left w-full">About</button>
            <button onClick={() => scrollToSection('contact')} className="inline-flex w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800">
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;