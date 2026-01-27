import React from 'react';
import './Footer.css';

const Footer = () => {
  const address = '1255 Kemper Meadow Dr, Cincinnati, Ohio, 45240';
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-section">
            <h4>Insurance Products</h4>
            <ul className="footer-links">
              <li>
                <a href="#health">Health Insurance</a>
              </li>
              <li>
                <a href="#auto">Auto Insurance</a>
              </li>
              <li>
                <a href="#homeowners">Homeowners Insurance</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:6144142693">(614) 414-2693</a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:yourinsurance313@gmail.com">
                  yourinsurance313@gmail.com
                </a>
              </li>
              <li>
                <strong>Address:</strong>
                <br />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  {address}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-map-section">
            <h4>Visit Us</h4>
            <div className="footer-map">
              <iframe
                title="Office Location"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0, borderRadius: '8px' }}
                src={mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Insurance Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
