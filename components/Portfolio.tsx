import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MasonryGrid } from './ui/image-testimonial-grid';
import { PortfolioHero } from './ui/hero-dithering-card';
import Navbar from './Navbar';
import Footer from './Footer';

const portfolioItems = [
  {
    name: 'E-commerce',
    feedback: 'Modern e-commerce website with seamless checkout',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_1200,g_north/v1770637658/1_gix7z8.png',
    url: 'https://biolife.ee',
  },
  {
    name: 'Corporate Website',
    feedback: 'Full brand website design and development',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_600,g_north/v1770637659/2_tqjp2t.png',
    url: 'https://dnddesigncenter.com',
  },
  {
    name: 'Minimalistic High-end Website',
    feedback: 'Web platform interface with a focus on aesthetics and usability',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_1000,g_north/v1770637660/3_bmmfwx.png',
    url: 'https://kodumaakv.ee',
  },
  {
    name: 'Landing Page',
    feedback: 'High-converting landing page built for identity and sales',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_800,g_north/v1770637658/4_sa2obz.png',
    url: 'https://serenakasitoo.ee',
  },
  {
    name: 'E-commerce',
    feedback: 'Responsive website optimized for online sales',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_1200,g_north/v1770637659/5_ycta6w.png',
    url: 'https://kundalinikakao.ee',
  },
  {
    name: 'Conversion-focused Landing Page',
    feedback: 'Professional website for quick online presence',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_600,g_north/v1770637665/6_bjejvw.png',
    url: 'https://soepusa.ee/',
  },
  {
    name: 'E-commerce',
    feedback: 'Website for online retail with user-friendly design',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_1000,g_north/v1770637659/7_dywfja.png',
    url: 'https://hotelspasupply.com/en',
  },
  {
    name: 'Marketing Site',
    feedback: 'Marketing website with lead generation features',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_900,g_north/v1770637663/9_jfurqt.png',
    url: 'https://houseofom.com',
  },
  {
    name: 'AI Services',
    feedback: 'Highly dynamic website for AI solutions provider',
    mainImage: 'https://res.cloudinary.com/dl4bzhitw/image/upload/c_fill,w_800,h_1100,g_north/v1770637661/10_rw0tn2.png',
    url: 'https://effidigi.com',
  },
];

type PortfolioCardProps = {
  name: string;
  feedback: string;
  mainImage: string;
  url: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ name, feedback, mainImage, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
  >
    <img
      src={mainImage}
      alt={feedback}
      className="w-full h-auto block"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Image';
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
    <div className="absolute top-0 left-0 p-4 text-white">
      <h3 className="font-semibold text-sm drop-shadow-md mb-2">{name}</h3>
      <p className="text-sm font-medium leading-tight drop-shadow-md">{feedback}</p>
    </div>
  </a>
);

const Portfolio: React.FC = () => {
  const [columns, setColumns] = React.useState(2);

  const getColumns = (width: number) => {
    if (width < 640) return 2;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  React.useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-32 pb-0 md:pb-0 bg-[#fdfdfd]">
        <PortfolioHero 
          badge="Portfolio"
          heading="Our Work"
          description="A selection of projects we've designed, built, and optimized for real results."
        />
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MasonryGrid columns={columns} gap={4}>
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </MasonryGrid>
          <div className="text-center mt-12">
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              And more...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
