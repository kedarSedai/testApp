import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Comprehensive Health Coverage',
      description: 'Protect your family with affordable health insurance plans including dental and vision care. Get the coverage you need at prices you can afford.',
      icon: '🏥',
      color: '#1a5490',
      gradient: 'linear-gradient(135deg, #1a5490 0%, #2d7bc4 100%)',
      features: ['Dental & Vision Plans', 'Affordable Premiums', 'Wide Network'],
    },
    {
      title: 'Auto Insurance Protection',
      description: 'Drive with confidence knowing you\'re covered. Get competitive rates and comprehensive coverage for your vehicle.',
      icon: '🚗',
      color: '#2d7bc4',
      gradient: 'linear-gradient(135deg, #2d7bc4 0%, #4a90e2 100%)',
      features: ['24/7 Claims Support', 'Multi-Vehicle Discounts', 'Safe Driver Rewards'],

    },
    {
      title: 'Homeowners Insurance',
      description: 'Safeguard your most valuable investment with comprehensive homeowners insurance coverage tailored to your needs.',
      icon: '🏠',
      color: '#1a5490',
      gradient: 'linear-gradient(135deg, #1a5490 0%, #2d7bc4 100%)',
      features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${
              index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''
            }`}
            style={{ background: slide.gradient }}
          >
            <div className="slide-content">
              <div className="slide-icon-wrapper">
                <div className="slide-icon">{slide.icon}</div>
              </div>
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <div className="slide-features">
                {slide.features.map((feature, idx) => (
                  <div key={idx} className="slide-feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Progress Bar */}
      <div className="carousel-progress">
        <div
          className="carousel-progress-bar"
          style={{
            animation: `progress ${6000}ms linear infinite`,
            animationDelay: currentSlide === 0 ? '0ms' : '0ms',
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
