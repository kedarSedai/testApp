import React from 'react';
import './AboutUs.css';

const AboutUs = ({ scrollToSection }) => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-card">
            <div className="about-image">
              <img src="/photos.png" alt="Founder of Your Insurance Services" />
            </div>
            <div className="about-content">
              <h2>About Your Insurance Services</h2>
              <p>
                We're an <strong>independent insurance agency</strong> dedicated to helping individuals and families protect what matters most.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Expert insurance guidance tailored to your needs</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Access to multiple top-rated carriers</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Personalized service and support</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Transparent pricing and honest advice</span>
                </div>
              </div>
              <p className="about-mission">
                We believe insurance should be simple, personal, and dependable. Whether bundling coverage, enrolling in health plans, or reviewing policies—we provide honest advice and long-term support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
