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
             <p className="text-gray-300 leading-relaxed">
  Your Insurance Services is an independent insurance agency specializing in
  <span className="font-medium text-gray-100">
    {" "}Property &amp; Casualty coverage
  </span>, including auto, homeowners, and bundled insurance solutions designed to
  protect what matters most. We also offer
  <span className="font-medium text-gray-100">
    {" "}health insurance plans
  </span>, along with
  <span className="font-medium text-gray-100">
    {" "}dental and vision coverage
  </span>, to support your overall financial and personal well-being. By working
  with
  <span className="font-medium text-white">
    {" "}multiple top-rated carriers
  </span>, we provide clear guidance, competitive options, and personalized
  service—making insurance
  <span className="font-medium text-white">
    {" "}simple, transparent
  </span>, and tailored to your unique needs.
</p>
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
