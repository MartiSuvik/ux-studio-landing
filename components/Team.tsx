import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Romet',
      role: 'Co-Founder',
      image: '/romet.png',
      linkedin: 'https://www.linkedin.com/in/romet-ridamae/'
    },
    {
      name: 'Marti',
      role: 'Co-Founder',
      image: '/marti.png',
      linkedin: 'https://www.linkedin.com/in/marti-suvorov-12aa0628b/'
    }
  ];

  return (
    <section id="team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi! We're the team behind ScalingWebs
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-0 transition-all flex flex-row items-center gap-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-32 h-32 overflow-hidden flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col py-4 pr-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-500 text-lg">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
        <p>
        We built ScalingWebs because we kept watching solid businesses lose to uglier, slower competitors with one unfair advantage: better websites.
        </p>
        <p>
        You know you need a website that actually works. You tried fixing it yourself. Tweaked pages, rewrote copy, stared at templates, still no idea if it was doing anything. Or you talked to agencies asking for $5k upfront and monthly retainers that made zero sense.
        </p>
        <p>
        ScalingWebs handles the entire website. Structure, copy, pages, publishing, upkeep. You don’t touch it.
        </p>
        <p>
        Your site starts doing its job. People land on it, understand what you do, and contact you instead of clicking the next result.
        </p>
        </div>

      </div>
    </section>
  );
};

export default Team;
