import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FeatureHighlight from './components/FeatureHighlight';
import FeaturedWork from './components/FeaturedWork';
import HelpSection from './components/HelpSection';
import Team from './components/Team';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import SchemaOrg from './components/SchemaOrg';

const HomePage: React.FC = () => (
  <div className="min-h-screen bg-background-light text-gray-900 font-sans">
    <Helmet>
      <title>ScalingWebs - We Design Your New Website Before You Buy It</title>
      <meta name="description" content="Get a free website design before you commit. ScalingWebs creates custom website designs with no risk. See your new design for free - no payment due now. Based in Tallinn, Estonia, serving Baltic businesses." />
    </Helmet>
    <SchemaOrg />
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