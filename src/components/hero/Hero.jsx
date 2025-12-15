// hero.jsx
import React from 'react';
import './hero.css';
import Apple from '../../assets/apple.svg';
import Google from '../../assets/playstore.svg';
import Heros from '../../assets/hrr.svg';
import Frame from '../../assets/Frame.svg';

function Hero() {
  return (
    <div id="home" className="hero-container">
      <div className="header-row">
        <div className="small-square"></div>
        <p className="small-text">First Halal Investment Product in Nigeria</p>
      </div>
      <h1 className="big-title">Earn returns without compromising your values</h1>
      <div className="subtitle1">
        <p className="subtitle-line11">Secure, transparent and value-driven</p>
        <p className="subtitle-line22">investments made for your financial growth.</p>
      </div>
      <div className="buttons-row">
        <div className="google-button2">
          <img src={Google} alt="Google Play" className="button-icon2" />
          <span>Download on Google Play</span>
        </div>
        <div className="apple-button2">
          <img src={Apple} alt="App Store" className="button-icon2" />
          <span>Download on Apple Store</span>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={Heros} alt="Hero Image" className="hero-image" />
        {/* <img src={Frame} alt="" className="frame" /> */}
      </div>
    </div>
  );
}

export default Hero;