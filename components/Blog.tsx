import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('soro-blog');
    if (!container) return;

    // Remove any previously injected script to avoid duplicates
    const existingScript = container.nextElementSibling;
    if (existingScript && existingScript.tagName === 'SCRIPT') {
      existingScript.remove();
    }

    const script = document.createElement('script');
    const params = new URLSearchParams(window.location.search);
    let url = 'https://app.trysoro.com/api/embed/d265f3d4-1798-45d5-8a28-6a93c356a194';
    const post = params.get('post');
    if (post) {
      url += '?post=' + encodeURIComponent(post);
    }
    script.src = url;
    container.after(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-900 font-sans">
      <Helmet>
        <title>Blog - ScalingWebs</title>
        <meta
          name="description"
          content="Read the latest articles, insights, and updates from ScalingWebs. Web design tips, development best practices, and industry news."
        />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="soro-blog"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
