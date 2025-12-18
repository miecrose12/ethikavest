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
      title: "Fund Wallet",
      desc: "Add funds seamlessly with multiple payment options and start building your portfolio."
    },
    {
      title: "Choose Investment",
      desc: "Browse verified opportunities and select investments that match your goals."
    },
    {
      title: "Track Growth",
      desc: "Monitor your returns in real-time and watch your wealth grow effortlessly."
    }
  ];

  // Duplicate cards for seamless infinite loop
  const duplicatedSteps = [...steps, ...steps ];

  return (
   <section id="journeya" className="hero-container">
      <h1 className="main-title">
        Start your journey—<br />
        
      </h1>
     
      <h2 className="subtitle">Simple and smooth</h2>
     
      <p className="tagline">
        Starting is simple. Growing is natural.<br/> It doesn't take a minute to<br />
        start growing wealth with us.
      </p>

      <div className="cards-carousel">
        <div className="cards-track">
          {duplicatedSteps.map((step, index) => (
            <div key={index} className="feature-card">
              <div className="card-content">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-description">{step.desc}</p>
              </div>
              <div className="card-icon">
              <img src={Frames} className='icon-placeholder' alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 