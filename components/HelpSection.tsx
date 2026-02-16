import React from 'react';
import { Clock, Coffee, Video, CreditCard, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const HelpSection: React.FC = () => {
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
            <h3 className="text-xl font-bold mb-3 text-gray-900">Submit a Form</h3>
            <p className="text-gray-600 leading-relaxed">
              and we'll send you a time to see your brand new design of the website for free
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
              get some coffee while our team creates your new design
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
              we show you the new design via video meeting. Buy it if you like it!
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
               {isSuccess ? (
                <div className="text-center py-6 space-y-4">
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
               <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                    {errorMessage}
                  </div>
                )}
                <input type="hidden" name="form-name" value="process-design-request" />
                <input type="hidden" name="subject" value="New lead from %{formName} (%{submissionId})" />
                <div>
                  <label htmlFor="process-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="process-email" name="email" placeholder="Your e-mail" required className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="process-website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input type="text" id="process-website" name="website" placeholder="yourwebsite.com" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-medium text-gray-700">I am interested in:</label>
                  <div className="flex flex-col gap-3">
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

                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                      Sending...
                    </>
                  ) : (
                    'Receive For Free'
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium pt-2">
                   <CreditCard className="w-4 h-4" />
                   No Payment Due Now
                </div>
               </form>
              )}
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