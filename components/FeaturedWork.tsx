import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote } from 'lucide-react';
import { Carousel } from './ui/fancy-carousel';
import { Button } from './ui/button';

const projects = [
  {
    title: "",
    image: "https://res.cloudinary.com/effichat/image/upload/v1768851636/hhetrggfgjgddbkmn4of.png",
    category: "E-commerce"
  },
  {
    title: "",
    image: "https://res.cloudinary.com/effichat/image/upload/v1768851637/auvtt8xvfp30ay5gke5a.png",
    category: "Services Website"
  },
  {
    title: "",
    image: "https://res.cloudinary.com/effichat/image/upload/v1768851637/ff0jfoon1fktshpbpg6b.png",
    category: "E-commerce"
  },
  {
    title: "",
    image: "https://res.cloudinary.com/effichat/image/upload/v1768851637/mzaushzvklxgu2mwcyhm.png",
    category: "Services Website"
  },
  {
    title: "",
    image: "https://res.cloudinary.com/effichat/image/upload/v1768851637/uunegcy2b9ifgk2nbsr8.png",
    category: "Informational Website"
  }
];

const reviews = [
  {
    name: "Rüki Gallery (rukigalerii.ee)",
    text: "We ran a keyword analysis, created SEO content, and optimized the site, resulting in 2x organic traffic growth within a year, with 76% of total traffic coming from SEO. The site now ranks in Google TOP5 for key art-related keywords and gets 64% more clicks from search results.",
    logo: "https://media.voog.com/0000/0045/0492/photos/Asset%201%402x-100.jpg"
  },
  {
    name: "Premium Watches (premiumkellad.ee)",
    text: "We built a structured SEO strategy for the e-commerce site (categories, content, and technical SEO) and increased SEO-driven revenue by 3.4x. Today, around 60% of traffic and 55% of sales come from organic search.",
    logo: "https://www.premiumkellad.ee/cdn/shop/files/Logo.jpg?v=1613688760&width=280"
  },
  {
    name: "Tark Pere (tarkpere.ee)",
    text: "With a new brand, website, and SEO setup, we grew organic traffic by 2.8x, with roughly 85% of all traffic coming from search. Even 1.5 years after a one-time SEO project, the site still generates 300+ Google visits per month and ranks in the TOP5 for core keywords such as couples therapy and family counseling in Tallinn.",
    logo: "https://tarkpere.ee/wp-content/uploads/2021/07/LogoTarkPereVector.svg"
  }
];

const FeaturedWork: React.FC = () => {
  const slides = projects.map((project, index) => (
    <div
      key={index}
      className="relative h-80 md:h-[400px] w-full overflow-hidden rounded-2xl group border border-border"
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-white text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
      </div>
    </div>
  ));

  return (
    <section id="works" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Projects Header */}
        <div className="text-center mb-12">
           <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
             Projects
           </span>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl font-bold mb-4">Some of our previous work</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                With over 1000 finished projects we've built websites for every industry.
              </p>
           </motion.div>
        </div>
      
        <div className="relative mb-8">
           <Carousel
            slides={slides}
            options={{ align: "start", loop: true }}
           />
           {/* Simulate "Video" context from prompt with a play button overlay or similar feel if desired, 
               but sticking to carousel as requested. Adding a label. */}
        </div>

        <div className="border-t border-gray-200 pt-24">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wanna Do Some Due Diligence?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                      <img src={review.logo} alt={review.name} className="w-full h-full object-contain p-1" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <Quote className="text-gray-200 w-6 h-6" />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;