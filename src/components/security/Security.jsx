// src/components/Security/security.jsx
import React from 'react';
import './security.css';
// Make sure to place your image in public/images or adjust the path accordingly
import securityImage from '../../assets/security.svg'; // ← change path/name as needed

const Security = () => {
  return (
    <section className="security-section">
      <div className="security-container">
        {/* Left side - Text content */}
        <div className="security-text-content">
          <h1 className="security-title">
            Top-tier security built for trust
          </h1>
          <p className="security-description">
            At Ethikavest, your peace of mind comes first. We use advanced
            encryption and strong security measures to ensure your personal
            and financial data remains protected at every stage of your
            investment journey.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="security-image-wrapper">
          <img
            src={securityImage}
            alt="Security illustration"
            className="security-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Security;