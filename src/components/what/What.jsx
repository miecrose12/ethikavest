// @ts-nocheck
import React from 'react';
import './what.css'; // Your CSS file
import what from '../../assets/what.svg'; // Keep if you want a fallback later

const What = () => {
  return (
    <section className="what-section">
      <div className="glass-container">
        {/* Replace img with video background */}
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/AtqMYliDtDo?autoplay=1&mute=1&loop=1&playlist=AtqMYliDtDo&controls=0&showinfo=0&rel=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Ethikavest Background Video"
          ></iframe>
        </div>

        {/* Existing glass overlay (adjust background/opacity if needed for video) */}
        <div className="glass-container::before"></div> {/* This is pseudo-element, no need to add div */}

        <div className="text-content">
          <h1 className="main-heading">What we're known for</h1>

          <p className="main-paragraph">
            At <strong>Ethikavest</strong>, we offer Africa's first digital platform dedicated to{' '}
            <strong>halal-compliant investing</strong> and <strong>interest-free savings</strong>. 
            Our mission is to make <strong>ethical wealth-building</strong> accessible to all especially underserved communities. 
            Through our smart, <strong>Shariah-aligned financial tools</strong>, we provide individuals 
            with the opportunity to grow their wealth responsibly, without compromising their values. 
            Whether you're saving for the future or investing in impactful ventures, Ethikavest ensures 
            your journey stays true to Islamic financial principles.
          </p>

          <div className="offer-section">
            <h2 className="offer-title">What we offer</h2>
            <ul className="offer-list">
              <li>A secure digital wallet for micro-savings accessible via mobile app, USSD, and web app.</li>
              <li>AI-powered multilingual onboarding system to support local languages such as Hausa, Yoruba, Pidgin, and Arabic.</li>
              <li>Ethical Investment accessible via USSD, mobile and web app.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;