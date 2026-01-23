import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FeatureHighlight from './components/FeatureHighlight';
import FeaturedWork from './components/FeaturedWork';
import HelpSection from './components/HelpSection';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <FeatureHighlight />
        <FeaturedWork />
        <HelpSection />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;