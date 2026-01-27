import React from 'react';
import './HealthInsurance.css';

const HealthInsurance = ({ scrollToSection }) => {
  const handleGetQuote = () => {
    scrollToSection && scrollToSection('quote');
  };

  return (
    <section id="health" className="health-insurance">
      <div className="container">
        <div className="health-wrapper">
          <div className="health-card">
            <div className="health-image">
              <img src="/health.jpg" alt="Health Insurance Coverage" />
            </div>
            <div className="health-content">
              <span className="health-badge">Healthcare Solutions</span>
              <h2>Health Insurance with Dental & Vision</h2>
              <p>
                Comprehensive health insurance plans tailored to your family's needs. From preventive care to major medical coverage, we connect you with top-rated carriers offering flexible options and competitive rates.
              </p>
              <div className="health-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">💊</span>
                  <span>Comprehensive health coverage options</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">😁</span>
                  <span>Dental plans with preventive care</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">👁️</span>
                  <span>Vision coverage for exams & glasses</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏥</span>
                  <span>Access to nationwide provider networks</span>
                </div>
              </div>
              <p className="health-mission">
                We're committed to making health insurance accessible and affordable for everyone. Our experts guide you through plan options so you can choose coverage that fits your needs and budget.
              </p>
              <div className="health-cta">
                <a href="https://www.healthsherpa.com/?_agent_id=saran-thapa-g8rvjg" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Health Insurance</a>
              </div>
            </div>
          </div>
        </div>

        {/* Dental & Vision Plans Grid */}
        <div className="dental-vision-section">
          <h3 className="dental-vision-title">Dental & Vision Plans</h3>
          <div className="dental-vision-grid">
            {/* Dental Plans Card */}
            <div className="dv-card dental-plans-card">
              <div className="dv-image">
                <img src="/dental.jpg" alt="Dental and vision option 1" />
              </div>
              <h4>Dental and vision option 1 </h4>
              <ul className="dv-features">
                <li>✓ Large network of dentists</li>
                <li>✓ Preventive care coverage</li>
                <li>✓ Major procedures included</li>
                <li>✓ Family-friendly plans</li>
              </ul>
              <p className="dv-description">Comprehensive dental coverage protecting your smile with reliable insurance plans.</p>
              <a href="https://www.mysmilecoverage.com/saranthapa/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Explore Plans</a>
            </div>

            {/* Vision Plans Card */}
            <div className="dv-card vision-plans-card">
              <div className="dv-image">
                <img src="/vision.jpeg" alt="Dental and vision option 2" />
              </div>
              <h4>Dental and vision option 2</h4>
              <ul className="dv-features">
                <li>✓ Eye exams covered</li>
                <li>✓ Glasses & contacts included</li>
                <li>✓ Wide provider network</li>
                <li>✓ Affordable premiums</li>
              </ul>
              <p className="dv-description">Crystal clear vision with comprehensive coverage for exams, frames, and contacts.</p>
              <a href="https://myplan.ameritas.com/id/010Z6401" target="_blank" rel="noopener noreferrer" className="btn-secondary">Explore Plans</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsurance;
