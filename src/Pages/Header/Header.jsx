import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/Images/logo.png'
import LanguageSwitcher from '../../assets/Components/LanguageSwitcher/LanguageSwitcher'
import './Header.css'
const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  // Determine if we're on a blog page to apply different styling
  const isBlogPage = location.pathname.includes('/blog');
  
  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  return (
    <header className={`header ${isBlogPage ? 'blog-header' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="header-top">
            <a href="/#" className="logo-container">
              <img src={logo} alt="logo dimond" width={80} height={"auto"} />
            </a>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="header-nav"
              aria-label="Toggle navigation menu"
              ref={hamburgerRef}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
          
          <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
            <div className="nav-links">
              {/* Only show these links on main page */}
              {!isBlogPage && (
                <>
                  <a href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</a>
                  <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.services')}</a>
                  <a href="#results" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.results')}</a>
                </>
              )}
              
              {/* Always show blog link, but highlight when active */}
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname.includes('/blog') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.blog')}
              </Link>
            </div>
           
            <div className="header-actions">
              <LanguageSwitcher />
              <a href="tel:+998949590000" className='header-btn' onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
