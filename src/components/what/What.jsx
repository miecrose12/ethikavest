// @ts-nocheck   <-- This kills all TypeScript errors forever
import React from 'react';
import './what.css';
import what from '../../assets/what.svg';


const What = () => {
  return (
    <section className="what-section">
      {/* The big glassmorphic image card */}
      <div className="glass-container">
        <img
          src={what}   // ← Replace with your real image
          alt="Ethikavest"
          className="background-image"
        />

        {/* All text overlay – positioned exactly like your design */}
        <div className="text-content">
          <h1 className="main-heading">What we're known for</h1>

          <p className="main-paragraph">
            At <strong>Ethikavest</strong>, we offer Africa’s first digital platform dedicated to{' '}
            <strong>halal-compliant investing</strong> and <strong>interest-free savings</strong>. 
            Our mission is to make <strong>ethical wealth-building</strong> accessible to all especially underserved communities. 
            Through our smart, <strong>Shariah-aligned financial tools</strong>, we provide individuals 
            with the opportunity to grow their wealth responsibly, without compromising their values. 
            Whether you’re saving for the future or investing in impactful ventures, Ethikavest ensures 
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