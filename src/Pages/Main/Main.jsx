import React, { useState, useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Results from './Results/Results'
import About from './About/About'   
import Faq from './Faq/Faq'
import CTA from './CTA/CTA'
import GameCharacter from '../../assets/Components/GameCharacter/GameCharacter'
import { useModal } from '../../context/ModalContext'
import SEOHead from '../../components/SEO/SEOHead'
import { generateClinicSchema } from '../../components/SEO/ClinicSchema'
const Main = () => {
  const [showGameCharacter, setShowGameCharacter] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    // Function to check if footer is in viewport
    const checkFooterVisibility = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0;
        
        if (isVisible) {
          setShowGameCharacter(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', checkFooterVisibility);
    
    // Check visibility on initial load after a short delay
    setTimeout(checkFooterVisibility, 1000);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', checkFooterVisibility);
    };
  }, []);

  // Handle when user clicks the "Bog'lanish" button
  const handlePlayClick = () => {
    openModal();
    setShowGameCharacter(false);
  };

  // Handle when user dismisses the character
  const handleDismissCharacter = () => {
    setShowGameCharacter(false);
  };

  // Create structured data for the homepage
  const jsonLd = generateClinicSchema();

  return (
    <>
      <SEOHead
        title="Dr Munisa Clinic | Hair & Beard Transplants in Tashkent"
        description="Natural-looking hair, beard and eyebrow transplants by Dr Munisa. Book a free consultation today for professional hair restoration services."
        canonicalUrl="https://dr-munisa.uz/"
        ogType="website"
        ogImage="/images/clinic-photo.jpg"
        jsonLd={jsonLd}
      />
    <main>
      <Hero />
      <Services/>
      <Results/>
      <About/>
      <Faq/>
      <CTA/>
      
      {/* Game Character */}
      {showGameCharacter && (
        <GameCharacter 
          onPlayGame={handlePlayClick} 
          onDismiss={handleDismissCharacter} 
        />
      )}
    </main>
    </>
  )
}

export default Main
