import { useEffect } from 'react';

/**
 * Custom hook to handle scroll reveal animations
 * Adds animation to elements with the 'reveal' class when they enter the viewport
 */
const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150; // How much of the element needs to be visible
        
        if (elementTop < window.innerHeight - elementVisible) {
          revealElements[i].classList.add('revealed');
        }
      }
    };
    
    // Add event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Run once on load to check for elements already in view
    revealOnScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
};

export default useScrollReveal;
