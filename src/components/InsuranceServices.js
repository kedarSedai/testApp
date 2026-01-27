import React from 'react';
import './InsuranceServices.css';

const InsuranceServices = ({ scrollToSection }) => {
  const handleQuoteClick = () => {
    if (scrollToSection) {
      scrollToSection('quote');
    }
  };

  const services = [
    {
      id: 'health',
      title: 'Health Insurance',
      icon: '🏥',
      description: 'Comprehensive health coverage with dental and vision options',
      features: [
        'Affordable monthly premiums',
        'Wide network of providers',
        'Dental & vision plans available',
        'Easy online enrollment'
      ],
      cta: 'Explore Health Plans'
    },
    {
      id: 'auto',
      title: 'Auto Insurance',
      icon: '🚗',
      description: 'Protect your vehicle with comprehensive and affordable coverage',
      features: [
        'Liability coverage',
        'Collision & comprehensive',
        'Multi-vehicle discounts',
        '24/7 claims support'
      ],
      cta: 'Get Auto Quote'
    },
    {
      id: 'homeowners',
      title: 'Homeowners Insurance',
      icon: '🏠',
      description: 'Protect your home and assets with comprehensive coverage',
      features: [
        'Dwelling coverage',
        'Personal property protection',
        'Liability coverage',
        'Additional living expenses'
      ],
      cta: 'Get Homeowners Quote'
    }
  ];

  return (
    <section id="services" className="insurance-services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Our Insurance Services</h2>
          <p className="services-subtitle">
            Comprehensive coverage options tailored to protect what matters most to you
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="service-btn" onClick={handleQuoteClick}>
                {service.cta}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceServices;
