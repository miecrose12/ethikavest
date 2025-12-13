// src/components/Trusted.jsx
import React from 'react';
import './Trusted.css';

// Replace this with your actual image path
import trustedImage from '../../assets/trusted.svg'; // <-- update this path

const Trusted = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        {/* Left Side - Image */}
        <div className="trusted-image-wrapper">
          <img
            src={trustedImage}
            alt="Trusted and verified investments"
            className="trusted-image"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="trusted-content">
          <h2 className="trusted-title">
            Trusted and fully verified investments
          </h2>
          <p className="trusted-description">
            Every opportunity on Ethikavest is thoroughly vetted to meet strict
            ethical and performance standards. We offer Shariah-compliant,
            high-impact investments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trusted;