import React from 'react';
import './HomeownersInsurance.css';

const HomeownersInsurance = ({ scrollToSection }) => {
  const handleGetQuote = () => {
    scrollToSection && scrollToSection('quote');
  };

  return (
    <section id="homeowners" className="homeowners-insurance">
      <div className="container">
        <div className="homeowners-wrapper">
          <div className="homeowners-card">
            <div className="homeowners-image">
              <img src="/home.jpg" alt="Homeowners Insurance Protection" />
            </div>
            <div className="homeowners-content">
              <h2>Homeowners Insurance</h2>
              <p>
                Your home is one of your most valuable investments. We provide comprehensive homeowners insurance to protect your property, belongings, and financial security with flexible coverage options.
              </p>
              <div className="homeowners-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Dwelling coverage for your home's structure</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Personal property protection for belongings</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Liability protection for accidents on your property</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Additional living expenses if displaced</span>
                </div>
              </div>
              <p className="homeowners-mission">
                Fire, wind, theft, vandalism, and water damage are all covered. We help you choose the right coverage at the right price to keep your home and assets fully protected.
              </p>
              <div className="homeowners-cta">
                <button className="btn-primary" onClick={handleGetQuote}>Get Quote</button>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Details Section */}
        <div className="coverage-section">
          <h3 className="coverage-title">Comprehensive Coverage Options</h3>
          <div className="coverage-grid">
            {/* Dwelling Coverage Card */}
            <div className="coverage-card dwelling-card">
              <div className="coverage-icon">🏠</div>
              <h4>Dwelling Coverage</h4>
              <p className="coverage-description">Protection for your home's structure and permanent fixtures against covered perils.</p>
              <ul className="coverage-features">
                <li>✓ Structure protection</li>
                <li>✓ Fire & smoke damage</li>
                <li>✓ Wind & hail damage</li>
                <li>✓ Extended replacement cost</li>
              </ul>
            </div>

            {/* Personal Property Card */}
            <div className="coverage-card personal-card">
              <div className="coverage-icon">📦</div>
              <h4>Personal Property</h4>
              <p className="coverage-description">Full coverage for your belongings and contents inside your home.</p>
              <ul className="coverage-features">
                <li>✓ Furniture & appliances</li>
                <li>✓ Clothing & electronics</li>
                <li>✓ Theft & vandalism</li>
                <li>✓ Off-premises coverage</li>
              </ul>
            </div>

            {/* Liability Protection Card */}
            <div className="coverage-card liability-card">
              <div className="coverage-icon">👥</div>
              <h4>Liability Protection</h4>
              <p className="coverage-description">Coverage for injuries and property damage caused by accidents on your property.</p>
              <ul className="coverage-features">
                <li>✓ Bodily injury coverage</li>
                <li>✓ Property damage coverage</li>
                <li>✓ Legal defense costs</li>
                <li>✓ Medical payments to guests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeownersInsurance;
