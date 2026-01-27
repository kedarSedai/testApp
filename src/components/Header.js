import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';

const Header = ({ scrollToSection, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => handleNavClick('home')}>
            <img src="/logo.png" alt="Your Insurance Services" className="logo-image" />
            <span className="logo-text">Your Insurance Services</span>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <button
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About Us
            </button>
            <button
              className={`nav-link ${activeSection === 'health' ? 'active' : ''}`}
              onClick={() => handleNavClick('health')}
            >
              Health Insurance
            </button>
            <button
              className={`nav-link ${activeSection === 'auto' ? 'active' : ''}`}
              onClick={() => handleNavClick('auto')}
            >
              Auto
            </button>
            <button
              className={`nav-link ${activeSection === 'homeowners' ? 'active' : ''}`}
              onClick={() => handleNavClick('homeowners')}
            >
              Homeowners
            </button>
            <button
              className={`nav-link nav-cta-link ${activeSection === 'quote' ? 'active' : ''}`}
              onClick={() => handleNavClick('quote')}
            >
              Request Quote
            </button>
            <a href="tel:6144142693" className="nav-cta">
              Call: (614) 414-2693
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 0l-.353.353a1 1 0 00.707 1.707h.413l2.121 2.121a1 1 0 001.414-1.414l-.354-.354zm2.121-10.607a1 1 0 010 1.414l-.353.353a1 1 0 01-1.414-1.414l.354-.354a1 1 0 011.414 0zM9 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </nav>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
