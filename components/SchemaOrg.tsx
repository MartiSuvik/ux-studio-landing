import React from 'react';
import { Helmet } from 'react-helmet-async';

const SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://scalingwebs.com/#organization",
      "name": "ScalingWebs",
      "legalName": "EFFI AI SOLUTIONS OÜ",
      "url": "https://scalingwebs.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://scalingwebs.com/ScalingWebs.svg",
        "width": 200,
        "height": 200
      },
      "description": "ScalingWebs is a web design and SEO agency based in Tallinn, Estonia, specializing in high-performance websites optimized for search visibility and conversion across the Baltic region.",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Romet Ridamäe",
          "jobTitle": "Co-Founder",
          "sameAs": "https://www.linkedin.com/in/romet-ridamae/"
        },
        {
          "@type": "Person",
          "name": "Marti Suvorov",
          "jobTitle": "Co-Founder",
          "sameAs": "https://www.linkedin.com/in/marti-suvorov-12aa0628b/"
        }
      ],
      "sameAs": [
        "https://www.inforegister.ee/en/17306855-EFFI-AI-SOLUTIONS-OU/",
        "https://www.linkedin.com/in/romet-ridamae/",
        "https://www.linkedin.com/in/marti-suvorov-12aa0628b/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Estonian", "Russian"]
      }
    },

    // LocalBusiness
    {
      "@type": "LocalBusiness",
      "@id": "https://scalingwebs.com/#localbusiness",
      "name": "ScalingWebs",
      "legalName": "EFFI AI SOLUTIONS OÜ",
      "url": "https://scalingwebs.com",
      "image": "https://scalingwebs.com/Snippet.png",
      "description": "Web design and SEO agency in Tallinn, Estonia, serving Baltic businesses with free website design previews, SEO optimization, and website redesign services.",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pärnu mnt 15",
        "addressLocality": "Tallinn",
        "postalCode": "10141",
        "addressRegion": "Harju maakond",
        "addressCountry": "EE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 59.437,
        "longitude": 24.7536
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Estonia",
          "sameAs": "https://en.wikipedia.org/wiki/Estonia"
        },
        {
          "@type": "Country",
          "name": "Latvia",
          "sameAs": "https://en.wikipedia.org/wiki/Latvia"
        },
        {
          "@type": "Country",
          "name": "Lithuania",
          "sameAs": "https://en.wikipedia.org/wiki/Lithuania"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },

    // WebSite
    {
      "@type": "WebSite",
      "@id": "https://scalingwebs.com/#website",
      "url": "https://scalingwebs.com",
      "name": "ScalingWebs",
      "description": "We design and optimize websites built to rank, convert, and scale. Preview a free website concept or see how your current site is underperforming.",
      "publisher": { "@id": "https://scalingwebs.com/#organization" },
      "inLanguage": "en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://scalingwebs.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // WebPage (Home)
    {
      "@type": "WebPage",
      "@id": "https://scalingwebs.com/#webpage",
      "url": "https://scalingwebs.com",
      "name": "ScalingWebs - We Design Your New Website Before You Buy It",
      "description": "Get a free website design before you commit. ScalingWebs creates custom website designs with no risk. See your new design for free - no payment due now.",
      "isPartOf": { "@id": "https://scalingwebs.com/#website" },
      "about": { "@id": "https://scalingwebs.com/#organization" },
      "inLanguage": "en"
    },

    // Services
    {
      "@type": "Service",
      "@id": "https://scalingwebs.com/#service-free-design",
      "name": "Free Website Design Preview",
      "description": "We design a custom homepage for your business at no cost. You only pay if you want to proceed. 100% risk-free website design preview for Baltic businesses.",
      "provider": { "@id": "https://scalingwebs.com/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "Estonia" },
        { "@type": "Country", "name": "Latvia" },
        { "@type": "Country", "name": "Lithuania" }
      ],
      "serviceType": "Web Design"
    },
    {
      "@type": "Service",
      "@id": "https://scalingwebs.com/#service-seo",
      "name": "SEO Optimization",
      "description": "Keyword analysis, content creation, technical SEO, and on-page optimization to grow organic traffic for Baltic businesses. Proven results: 2x-3.4x traffic growth for Estonian clients.",
      "provider": { "@id": "https://scalingwebs.com/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "Estonia" },
        { "@type": "Country", "name": "Latvia" },
        { "@type": "Country", "name": "Lithuania" }
      ],
      "serviceType": "Search Engine Optimization"
    },
    {
      "@type": "Service",
      "@id": "https://scalingwebs.com/#service-redesign",
      "name": "Website Redesign",
      "description": "Full website rebuilds with modern design, fast load times, and conversion-optimized layouts. Websites built to rank, convert, and scale in the Baltic market.",
      "provider": { "@id": "https://scalingwebs.com/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "Estonia" },
        { "@type": "Country", "name": "Latvia" },
        { "@type": "Country", "name": "Lithuania" }
      ],
      "serviceType": "Web Design"
    },
    {
      "@type": "Service",
      "@id": "https://scalingwebs.com/#service-ecommerce",
      "name": "E-commerce Development",
      "description": "Online store setup with SEO-first architecture for maximum product visibility. E-commerce websites optimized for Estonian and Baltic markets.",
      "provider": { "@id": "https://scalingwebs.com/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "Estonia" },
        { "@type": "Country", "name": "Latvia" },
        { "@type": "Country", "name": "Lithuania" }
      ],
      "serviceType": "E-commerce Development"
    },

    // FAQPage (How Does It Work?)
    {
      "@type": "FAQPage",
      "@id": "https://scalingwebs.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I get a free website design from ScalingWebs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit a form with your email and current website URL, and we'll send you a time to see your brand new website design for free. No payment is required upfront."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I submit the form?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team creates your new website design while you wait. We handle the entire design process — structure, copy, pages — so you don't have to lift a finger."
          }
        },
        {
          "@type": "Question",
          "name": "How do I see the finished design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We present your new design via a video meeting. You can see exactly what your new website looks like, and you only buy it if you like it. 100% risk-free."
          }
        },
        {
          "@type": "Question",
          "name": "What SEO services does ScalingWebs offer in Estonia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ScalingWebs offers keyword analysis, content creation, technical SEO, on-page optimization, and e-commerce SEO for Baltic businesses. Our Estonian clients have seen 2x to 3.4x organic traffic growth."
          }
        }
      ]
    },

    // Reviews / Case Studies
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Rüki Gallery",
        "url": "https://rukigalerii.ee"
      },
      "itemReviewed": { "@id": "https://scalingwebs.com/#service-seo" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "reviewBody": "We ran a keyword analysis, created SEO content, and optimized the site, resulting in 2x organic traffic growth within a year, with 76% of total traffic coming from SEO. The site now ranks in Google TOP5 for key art-related keywords and gets 64% more clicks from search results."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Premium Watches",
        "url": "https://premiumkellad.ee"
      },
      "itemReviewed": { "@id": "https://scalingwebs.com/#service-seo" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "reviewBody": "We built a structured SEO strategy for the e-commerce site (categories, content, and technical SEO) and increased SEO-driven revenue by 3.4x. Today, around 60% of traffic and 55% of sales come from organic search."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Tark Pere",
        "url": "https://tarkpere.ee"
      },
      "itemReviewed": { "@id": "https://scalingwebs.com/#service-seo" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "reviewBody": "With a new brand, website, and SEO setup, we grew organic traffic by 2.8x, with roughly 85% of all traffic coming from search. Even 1.5 years after a one-time SEO project, the site still generates 300+ Google visits per month and ranks in the TOP5 for core keywords such as couples therapy and family counseling in Tallinn."
    }
  ]
};

const SchemaOrg: React.FC = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(SCHEMA_GRAPH)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
