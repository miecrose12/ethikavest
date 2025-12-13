// src/components/HeroSection.jsx
import React from 'react';
import './journey.css';
import Frames from '../../assets/Frames.svg'; 

const HeroSection = () => {
  const steps = [
    {
      title: "Create Account",
      desc: "Create your free account in just seconds and start investing confidently today."
    },
     {
      title: "Create Account",
      desc: "Create your free account in just seconds and start investing confidently today."
    },
     {
      title: "Create Account",
      desc: "Create your free account in just seconds and start investing confidently today."
    },
     {
      title: "Create Account",
      desc: "Create your free account in just seconds and start investing confidently today."
    }
  ];

  return (
    <div className="hero-container">
      <h1 className="main-title">Start your journey—</h1>
      <h2 className="subtitle">
        simple and smooth.
      </h2>
      <p className="tagline">
        Starting is simple. Growing is natural.<br />
        It doesn’t take a minute to start growing wealth with us.
      </p>

      {/* All 4 cards visible at once on desktop */}
      <div className="cards-carousel">
        {steps.map((step, index) => (
          <div key={index} className="feature-card">
            <div className="card-content">
              <h3 className="card-title">{step.title}</h3>
              <p className="card-description">{step.desc}</p>
            </div>

            <div className="card-icon">
              <img src={Frames} alt="" className='icon-placeholder' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;