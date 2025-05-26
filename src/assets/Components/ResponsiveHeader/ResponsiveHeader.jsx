import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './ResponsiveHeader.css';

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation();
  
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

  // Determine if we're on a blog page to apply different styling
  const isBlogPage = location.pathname.includes('/blog');

  return (
    <header className={`responsive-header ${isScrolled ? 'scrolled' : ''} ${isBlogPage ? 'blog-header' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="Dr. Munisa Logo" className="logo" />
          </Link>
        </div>

        <nav 
          className={`nav-menu ${isMenuOpen ? 'open' : ''}`} 
          ref={menuRef}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-links">
            <li>
              <a 
                href="/#hero" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Asosiy
              </a>
            </li>
            <li>
              <a 
                href="/#services" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Xizmatlar
              </a>
            </li>
            <li>
              <a 
                href="/#results" 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Natijalar
              </a>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname.includes('/blog') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
          <a 
            href="tel:+998949590000" 
            className="contact-button"
            onClick={() => setIsMenuOpen(false)}
          >
            BOG'LANISH
          </a>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
