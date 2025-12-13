// Footer.jsx
import React from 'react';
import './Footer.css';
import playstore from '../../assets/playstore.svg';
import apple from '../../assets/apple.svg';
import facebook from '../../assets/facebook.svg';
import linkdln from '../../assets/linkdln.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';


const Footer = () => {
  return (
    <footer className="footer">
      {/* Top horizontal line */}
      <hr className="footer-top-line" />

      <div className="footer-main">
        <div className="footer-left">
          {/* Social icons */}
          <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={linkdln} alt="LinkedIn" />
          </div>

          {/* Compliance text */}
          <p className="compliance-text">
            Ethikavest Technologies Limited (“Ethikavest”) is a duly registered company with Corporate Affairs Commission (CAC), RC8629941. We hold a SCUML License to ensure compliance with the Money Laundering (Prohibition) Act, 2004.
          </p>

          {/* Download buttons */}
          <div className="download-buttons">
            <a href="#" className="download-btn google-play">
              <img src={playstore} alt="Google Play" className="btn-icon" />
              <span>Download on Google Play</span>
            </a>
            <a href="#" className="download-btn apple-store">
              <img src={apple} alt="App Store" className="btn-icon" />
              <span>Download on Apple Store</span>
            </a>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="vertical-divider"></div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>Hala Save</li>
              <li>Halal Investment</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <ul>
              <li>Lagos, Nigeria.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <hr className="footer-bottom-line" />
    </footer>
  );
};

export default Footer;