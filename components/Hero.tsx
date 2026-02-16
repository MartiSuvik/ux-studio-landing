import React from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = Object.fromEntries(formData.entries());
    data.interests = formData.getAll('interests');
    
    try {
      const response = await fetch('https://hook.eu1.make.com/vau19fpxdf9oh3wogukdub9arbvg3mgq', {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text content - now on top */}
        <motion.div 
          className="space-y-8 text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Smarter Websites. <br className="md:hidden" />Stronger SEO. <br className="md:hidden" />Real Results.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We design and optimize websites built to rank, convert, and scale. <br className="hidden md:inline" />Preview a free website concept or see exactly how your current site is underperforming.
          </p>
        </motion.div>

        {/* Video and Form section - now at bottom */}
        <motion.div 
          className="relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            {/* Video */}
            <div className="relative w-full">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster="https://res.cloudinary.com/effichat/video/upload/so_0/v1769102816/fpnveyma3xft7a4yupoh.jpg"
                className="w-full h-auto"
              >
                <source src="https://res.cloudinary.com/effichat/video/upload/v1769102816/fpnveyma3xft7a4yupoh.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Form */}
            <div id="get-free-design" className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 relative z-10 scroll-mt-24">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-2">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Request Sent!</h3>
                  <p className="text-gray-600">We'll be in touch with your new design soon.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                      {errorMessage}
                    </div>
                  )}
                  <input type="hidden" name="form-name" value="hero-design-request" />
                  <input type="hidden" name="subject" value="New lead from %{formName} (%{submissionId})" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="hero-email" 
                        name="email"
                        placeholder="Your e-mail" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      <input 
                        type="text" 
                        id="hero-website" 
                        name="website"
                        placeholder="yourwebsite.com" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-gray-700">I am interested in:</label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="checkbox" name="interests" value="Free Design" className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">Free Design</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="checkbox" name="interests" value="Free Performance Report" className="peer h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">Free Performance Report</span>
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                        Sending...
                      </>
                    ) : (
                      'Receive For Free'
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                     <CreditCard className="w-4 h-4" />
                     No Payment Due Now
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;