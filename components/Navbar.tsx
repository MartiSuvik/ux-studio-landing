import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const menuItemVariants = {
  closed: { opacity: 0, y: 20, scale: 0.9 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
      delay: i * 0.08,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      delay: i * 0.03,
    },
  }),
};

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
    <>
      {/* Blur overlay for mobile menu (phone only) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/10 md:hidden"
            initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
            animate={{ backdropFilter: "blur(12px)", opacity: 1 }}
            exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-white py-3 border-b border-gray-100"
            : isScrolled 
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
                <img src="/ScalingWebs.svg" alt="ScalingWebs" className="w-8 h-8" />
                <span className="font-bold text-xl tracking-tight">ScalingWebs</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8 items-center">
              <a 
                href="/portfolio" 
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Works
              </a>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                How we work?
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                About
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('get-free-design')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-all group shadow-md hover:shadow-lg"
              >
                Contact
                <span className="ml-2 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
              
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-black relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ type: "spring", bounce: 0.35, duration: 0.4 }}
                    >
                      <X />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ type: "spring", bounce: 0.35, duration: 0.4 }}
                    >
                      <Menu />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-4 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col space-y-2 py-4">
                {[
                  { label: "Works", action: () => {}, href: "/portfolio", isLink: true },
                  { label: "Services", action: () => scrollToSection('services'), isLink: false },
                  { label: "About", action: () => scrollToSection('team'), isLink: false },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                  >
                    {item.isLink ? (
                      <a
                        href={item.href}
                        className="block text-lg font-medium text-gray-900 py-3 px-4 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={item.action}
                        className="text-lg font-medium text-gray-900 py-3 px-4 rounded-xl text-left w-full hover:bg-gray-50 active:scale-[0.98] transition-all"
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  custom={3}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="pt-2"
                >
                  <button
                    onClick={() => scrollToSection('get-free-design')}
                    className="inline-flex w-full items-center justify-center px-5 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 active:scale-[0.97] transition-all shadow-lg"
                  >
                    Contact Us
                    <span className="ml-2 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;