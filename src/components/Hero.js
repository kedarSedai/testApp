import React from 'react';
import './Hero.css';
import Carousel from './Carousel';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Protect What Matters Most with{' '}
          <span className="highlight">Your Insurance Services</span>
        </h1>
        <p className="hero-subtitle">
          Comprehensive insurance solutions tailored to your needs. From health
          to auto to homeowners, we've got you covered.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('quote')}
          >
            Get a Quote
          </button>
          <a href="tel:6144142693" className="btn btn-secondary">
            Call Us: (614) 414-2693
          </a>
        </div>
      </div>
      <div className="hero-carousel">
        <Carousel scrollToSection={scrollToSection} />
      </div>
      <div className="hero-features">
        <div className="feature">
          <div className="feature-icon">🏥</div>
          <h3>Health Insurance</h3>
          <p>Dental & Vision Coverage</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚗</div>
          <h3>Auto Insurance</h3>
          <p>Protect Your Vehicle</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🏠</div>
          <h3>Homeowners</h3>
          <p>Safeguard Your Home</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
