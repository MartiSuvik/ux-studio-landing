import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FeatureHighlight from './components/FeatureHighlight';
import FeaturedWork from './components/FeaturedWork';
import HelpSection from './components/HelpSection';
import Team from './components/Team';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const HomePage: React.FC = () => (
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default App;