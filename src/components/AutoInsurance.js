import React from 'react';
import './AutoInsurance.css';

const AutoInsurance = ({ scrollToSection }) => {
  const handleQuoteClick = () => {
    if (scrollToSection) {
      scrollToSection('quote');
    }
  };

  return (
    <section id="auto" className="auto-insurance">
      <div className="container">
        <div className="auto-wrapper">
          <div className="auto-card">
            <div className="auto-image">
              <img src="/auto.jpg" alt="Auto Insurance Protection" />
            </div>
            <div className="auto-content-inner">
              <h2>Comprehensive Auto Coverage</h2>
              <p>
                Drive with confidence knowing you're protected. Our auto insurance policies offer comprehensive coverage at competitive rates, tailored to your specific needs and driving habits.
              </p>
              <div className="coverage-options">
                <div className="coverage-item">
                  <div className="coverage-icon">🛡️</div>
                  <div>
                    <h4>Liability Coverage</h4>
                    <p>Protection for bodily injury and property damage</p>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-icon">💥</div>
                  <div>
                    <h4>Collision Coverage</h4>
                    <p>Coverage for damage from accidents</p>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-icon">🌧️</div>
                  <div>
                    <h4>Comprehensive Coverage</h4>
                    <p>Protection against theft, vandalism, and natural disasters</p>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-icon">🚑</div>
                  <div>
                    <h4>Uninsured Motorist</h4>
                    <p>Coverage when others don't have insurance</p>
                  </div>
                </div>
              </div>
              <div className="features-list">
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>24/7 Claims Support</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Multi-Vehicle Discounts</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Safe Driver Rewards</span>
                </div>
                <div className="feature-item">
                  <span className="check">✓</span>
                  <span>Flexible Payment Options</span>
                </div>
              </div>
              <div className="cta-section">
                <button className="btn-primary" onClick={handleQuoteClick}>Get Auto Quote</button>
                <a href="tel:6144142693" className="btn-secondary">
                  Call: (614) 414-2693
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoInsurance;
