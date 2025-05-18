import { useEffect, useCallback } from 'react';

/**
 * Custom hook to handle scroll reveal animations
 * Adds animation to elements with the 'reveal' class when they enter the viewport
 */
const useScrollReveal = () => {
  // Use useCallback to memoize the scroll handler
  const revealOnScroll = useCallback(() => {
    const revealElements = document.querySelectorAll('.reveal:not(.revealed)');
    if (!revealElements.length) return; // Skip if no elements to reveal
    
    // Use IntersectionObserver if available for better performance
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once revealed
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 }); // Reveal when 15% visible
      
      revealElements.forEach(el => observer.observe(el));
      return observer; // Return for cleanup
    } else {
      // Fallback for browsers without IntersectionObserver
      let rafId = null;
      
      const scrollHandler = () => {
        if (rafId) return; // Skip if a frame is already scheduled
        
        rafId = requestAnimationFrame(() => {
          for (let i = 0; i < revealElements.length; i++) {
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150; // How much of the element needs to be visible
            
            if (elementTop < window.innerHeight - elementVisible) {
              revealElements[i].classList.add('revealed');
            }
          }
          rafId = null;
        });
      };
      
      window.addEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler(); // Run once immediately
      
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, []);
  
  useEffect(() => {
    // Start the reveal effect
    const cleanup = revealOnScroll();
    
    // Clean up
    return () => {
      if (cleanup && typeof cleanup.disconnect === 'function') {
        cleanup.disconnect(); // Cleanup IntersectionObserver
      } else if (typeof cleanup === 'function') {
        cleanup(); // Cleanup scroll handler
      }
    };
  }, [revealOnScroll]);
};

export default useScrollReveal;
