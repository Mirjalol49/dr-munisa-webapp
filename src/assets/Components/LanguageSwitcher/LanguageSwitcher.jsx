import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import './LanguageSwitcher.css';

// Import flag images
import uzFlag from '../../images/flags/uz.svg';
import enFlag from '../../images/flags/en.svg';
import ruFlag from '../../images/flags/ru.svg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  
  // Handle language change
  const changeLanguage = (lng) => {
    console.log('Changing language to:', lng);
    // Store the new language in localStorage
    localStorage.setItem('i18nextLng', lng);
    // Close the dropdown
    setIsOpen(false);
    // Change language without forcing page reload
    i18n.changeLanguage(lng);
  };
  
  // Toggle dropdown with position calculation
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the button and the dropdown
      const dropdownElements = document.querySelectorAll('.language-dropdown-portal');
      let clickedInsideDropdown = false;
      
      dropdownElements.forEach(element => {
        if (element.contains(event.target)) {
          clickedInsideDropdown = true;
        }
      });
      
      if (buttonRef.current && !buttonRef.current.contains(event.target) && !clickedInsideDropdown) {
        setIsOpen(false);
      }
    };

    // Close on escape key
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);
  
  // Get current language display name
  const getCurrentLanguageDisplay = () => {
    switch(i18n.language) {
      case 'uz': return 'UZ';
      case 'en': return 'EN';
      case 'ru': return 'RU';
      default: return 'UZ';
    }
  };
  
  // Get flag for current language
  const getCurrentLanguageFlag = () => {
    switch(i18n.language) {
      case 'uz': return uzFlag;
      case 'en': return enFlag;
      case 'ru': return ruFlag;
      default: return uzFlag;
    }
  };

  // State to store dropdown position
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  
  // Update dropdown position when button position changes (on scroll or resize)
  useEffect(() => {
    if (!isOpen || !buttonRef.current) return;
    
    const updatePosition = () => {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left
      });
    };
    
    // Initial position
    updatePosition();
    
    // Update position on scroll and resize with rAF throttling to avoid jitter
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);
  
  // Create dropdown portal component
  const DropdownPortal = () => {
    if (!isOpen || !buttonRef.current) return null;
    
    const dropdownStyle = {
      position: 'fixed',
      top: `${dropdownPosition.top}px`,
      left: `${dropdownPosition.left}px`,
      zIndex: 9999999,
      transform: 'translateY(0)' // Ensures the dropdown stays in place relative to viewport
    };
    
    const handleLanguageClick = (lng) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Language button clicked:', lng);
      // Use setTimeout to ensure the event completes before changing language
      setTimeout(() => {
        changeLanguage(lng);
      }, 10);
    };
    
    return createPortal(
      <div 
        className="language-dropdown-portal"
        style={dropdownStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className={`dropdown-item ${i18n.language === 'uz' ? 'active' : ''}`} 
          onClick={handleLanguageClick('uz')}
          type="button"
        >
          <img src={uzFlag} alt="Uzbekistan flag" className="dropdown-flag" />
          <span>O'zbekcha</span>
        </button>
        <button 
          className={`dropdown-item ${i18n.language === 'en' ? 'active' : ''}`} 
          onClick={handleLanguageClick('en')}
          type="button"
        >
          <img src={enFlag} alt="English flag" className="dropdown-flag" />
          <span>English</span>
        </button>
        <button 
          className={`dropdown-item ${i18n.language === 'ru' ? 'active' : ''}`} 
          onClick={handleLanguageClick('ru')}
          type="button"
        >
          <img src={ruFlag} alt="Russian flag" className="dropdown-flag" />
          <span>Русский</span>
        </button>
      </div>,
      document.body
    );
  };

  return (
    <div className="language-switcher-container">
      <button 
        ref={buttonRef}
        className="language-dropdown-toggle"
        onClick={toggleDropdown}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="language-flag-container">
          <img src={getCurrentLanguageFlag()} alt={`${getCurrentLanguageDisplay()} flag`} className="language-flag" />
        </span>
        <span className="language-code">{getCurrentLanguageDisplay()}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      <DropdownPortal />
    </div>
  );
};

export default LanguageSwitcher;
