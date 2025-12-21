import React from 'react';
import playstore from '../../assets/playstore.svg';
import apple from '../../assets/apple.svg';
import facebook from '../../assets/facebook.svg';
import linkdln from '../../assets/linkdln.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

import './footer.css';

const Footer = () => {
  return (
    <footer className="f-footer">
      <hr className="f-footer-top-line" />

      <div className="f-footer-main">
        <div className="f-footer-left">
          <div className="f-social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={linkdln} alt="LinkedIn" />
          </div>

          <p className="f-compliance-text">
            Ethikavest Technologies Limited ("Ethikavest") is a duly registered company with Corporate Affairs Commission (CAC), RC8629941. We hold a SCUML License to ensure compliance with the Money Laundering (Prohibition) Act, 2004.
          </p>

          <div className="f-download-buttons">
            <a href="#" className="f-download-btn f-google-play">
              <img src={playstore} alt="Google Play" className="f-btn-icon" />
              <span>Download on Google Play</span>
            </a>
            <a href="#" className="f-download-btn f-apple-store">
              <img src={apple} alt="App Store" className="f-btn-icon" />
              <span>Download on Apple Store</span>
            </a>
          </div>
        </div>

        <div className="f-vertical-divider"></div>

        <div className="f-footer-right">
          <div className="f-footer-column">
            <h4>Company</h4>
            <p className="f-footer-link">Terms</p>
            <p className="f-footer-link">Privacy</p>
            <p className="f-footer-link">Contact Us</p>
            <p className="f-footer-link">Blog</p>
          </div>

          <div className="f-footer-column">
            <h4>Products</h4>
            <p className="f-footer-link">Hala Save</p>
            <p className="f-footer-link">Halal Investment</p>
          </div>

          <div className="f-footer-column">
            <h4>Get in Touch</h4>
            <p className="f-footer-link">Lagos, Nigeria.</p>
          </div>
        </div>
      </div>

      <hr className="f-footer-bottom-line" />
    </footer>
  );
};

export default Footer;