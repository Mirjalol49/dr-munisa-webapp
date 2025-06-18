import { useEffect } from 'react';

/**
 * SEOHead component for managing document head metadata
 * A custom solution since react-helmet-async has compatibility issues with React 19
 */
export default function SEOHead({ 
  title, 
  description, 
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  jsonLd = null
}) {
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', ogType);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    
    // Set canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl || window.location.href;
    
    // Add JSON-LD structured data if provided
    if (jsonLd) {
      let existingScript = document.querySelector('#json-ld-data');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'json-ld-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      // We don't remove meta tags on cleanup as they should persist
      // between route changes until replaced by another SEOHead component
    };
  }, [title, description, canonicalUrl, ogType, ogImage, jsonLd]);
  
  // Helper function to update or create meta tags
  function updateMetaTag(name, content) {
    if (!content) return;
    
    // Check if using name or property attribute
    const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
    const selector = isProperty 
      ? `meta[property="${name}"]` 
      : `meta[name="${name}"]`;
    
    let tag = document.querySelector(selector);
    
    if (!tag) {
      tag = document.createElement('meta');
      if (isProperty) {
        tag.setAttribute('property', name);
      } else {
        tag.setAttribute('name', name);
      }
      document.head.appendChild(tag);
    }
    
    tag.setAttribute('content', content);
  }
  
  // This component doesn't render anything visible
  return null;
}
