import React from 'react';
import playstore from '../../assets/playstore.svg';
import apple from '../../assets/apple.svg';
import facebook from '../../assets/facebook.svg';
import linkdln from '../../assets/linkdln.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&display=swap');

        /* Footer.css */
        .footer {
          max-width: 1440px;
          margin: 0 auto;
          background-color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding-top: 60px;
          padding-bottom: 60px;
          position: relative;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1178px;
          margin: 0 auto;
          padding: 0 20px;
          gap: 40px;
          position: relative;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 32px;
          flex: 1;
          max-width: 550px;
        }

        .social-icons {
          display: flex;
          gap: 8px;
          justify-content: flex-start;
        }

        .social-icons img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .compliance-text {
          font-size: 14px;
          line-height: 24px;
          letter-spacing: -0.05px;
          font-weight: 600;
          color: #333;
          max-width: 500px;
          text-align: left;
        }

        .download-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 278px;
          height: 56px;
          border-radius: 4px;
          padding: 16px 24px;
          gap: 10px;
          text-decoration: none;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: -0.01em;
        }

        .google-play {
          background-color: #2AA866;
        }

        .apple-store {
          background-color: #262157;
          width: 276px;
        }

        .btn-icon {
          height: 32px;
          width: auto;
        }

        .download-btn span {
          vertical-align: middle;
        }

        .vertical-divider {
          width: 1px;
          height: 253px;
          background-color: #3535354D;
          flex-shrink: 0;
        }

        .footer-right {
          display: flex;
          gap: 60px;
          justify-content: flex-end;
          flex: 1;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-column h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #333;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 12px;
          color: #333;
        }

        .footer-top-line,
        .footer-bottom-line {
          width: 1178px;
          height: 1px;
          background-color: #3535354D;
          border: none;
          margin: 0 auto;
        }

        .footer-top-line {
          margin-bottom: 40px;
        }

        .footer-bottom-line {
          margin-top: 60px;
        }

        /* Large Desktop */
        @media (max-width: 1440px) {
          .footer {
            padding-left: 20px;
            padding-right: 20px;
          }

          .footer-top-line,
          .footer-bottom-line {
            width: 100%;
            max-width: 1178px;
          }
        }

        @media (max-width: 1280px) {
          .footer-main {
            max-width: 1100px;
            gap: 35px;
          }

          .footer-left {
            max-width: 520px;
          }

          .footer-right {
            gap: 50px;
          }
        }

        /* Desktop & Laptop */
        @media (max-width: 1024px) {
          .footer {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .footer-main {
            max-width: 900px;
            gap: 30px;
          }

          .footer-left {
            max-width: 480px;
            gap: 28px;
          }

          .footer-right {
            gap: 40px;
          }

          .vertical-divider {
            height: 240px;
          }

          .compliance-text {
            font-size: 13px;
            line-height: 22px;
            max-width: 470px;
          }

          .download-btn {
            width: 260px;
            height: 54px;
            font-size: 14px;
            padding: 14px 20px;
          }

          .apple-store {
            width: 258px;
          }

          .footer-column h4 {
            font-size: 15px;
            margin-bottom: 14px;
          }

          .footer-column li {
            font-size: 15px;
            margin-bottom: 10px;
          }

          .footer-top-line {
            margin-bottom: 35px;
          }

          .footer-bottom-line {
            margin-top: 55px;
          }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .footer {
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .footer-main {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 0 30px;
          }

          .footer-left {
            max-width: 100%;
            align-items: center;
            text-align: center;
            gap: 26px;
          }

          .social-icons {
            justify-content: center;
          }

          .compliance-text {
            text-align: center;
            max-width: 100%;
            font-size: 13px;
            line-height: 22px;
          }

          .download-buttons {
            align-items: center;
            gap: 14px;
          }

          .download-btn {
            width: 250px;
            height: 52px;
          }

          .apple-store {
            width: 248px;
          }

          .vertical-divider {
            display: none;
          }

          .footer-right {
            justify-content: center;
            gap: 50px;
            flex-wrap: nowrap;
            width: 100%;
          }

          .footer-column {
            text-align: center;
          }

          .footer-top-line {
            margin-bottom: 32px;
          }

          .footer-bottom-line {
            margin-top: 50px;
          }
        }

        /* Large Mobile */
        @media (max-width: 640px) {
          .footer {
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .footer-main {
            gap: 35px;
            padding: 0 24px;
          }

          .footer-left {
            gap: 24px;
          }

          .social-icons {
            gap: 12px;
          }

          .social-icons img {
            width: 32px;
            height: 32px;
          }

          .compliance-text {
            font-size: 12px;
            line-height: 20px;
          }

          .download-buttons {
            gap: 12px;
            width: 100%;
          }

          .download-btn {
            width: 100%;
            max-width: 280px;
            height: 50px;
            font-size: 13px;
            padding: 12px 18px;
          }

          .apple-store {
            width: 100%;
            max-width: 280px;
          }

          .btn-icon {
            height: 28px;
          }

          .footer-right {
            flex-direction: column;
            gap: 30px;
            align-items: center;
          }

          .footer-column h4 {
            font-size: 14px;
            margin-bottom: 12px;
          }

          .footer-column li {
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 8px;
          }

          .footer-top-line {
            margin-bottom: 30px;
          }

          .footer-bottom-line {
            margin-top: 45px;
          }
        }

        /* Standard Mobile */
        @media (max-width: 480px) {
          .footer {
            padding-top: 35px;
            padding-bottom: 35px;
          }

          .footer-main {
            gap: 32px;
            padding: 0 20px;
          }

          .footer-left {
            gap: 22px;
          }

          .social-icons {
            gap: 10px;
          }

          .social-icons img {
            width: 30px;
            height: 30px;
          }

          .compliance-text {
            font-size: 11px;
            line-height: 19px;
          }

          .download-buttons {
            gap: 10px;
          }

          .download-btn {
            height: 48px;
            font-size: 12px;
            padding: 10px 16px;
            gap: 8px;
          }

          .btn-icon {
            height: 26px;
          }

          .footer-right {
            gap: 28px;
          }

          .footer-column h4 {
            font-size: 13px;
            margin-bottom: 10px;
          }

          .footer-column li {
            font-size: 13px;
            line-height: 20px;
            margin-bottom: 7px;
          }

          .footer-top-line {
            margin-bottom: 28px;
          }

          .footer-bottom-line {
            margin-top: 40px;
          }
        }

        /* Small Mobile */
        @media (max-width: 400px) {
          .footer {
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .footer-main {
            gap: 30px;
            padding: 0 16px;
          }

          .footer-left {
            gap: 20px;
          }

          .social-icons {
            gap: 8px;
          }

          .social-icons img {
            width: 28px;
            height: 28px;
          }

          .compliance-text {
            font-size: 10px;
            line-height: 18px;
          }

          .download-buttons {
            gap: 10px;
          }

          .download-btn {
            height: 46px;
            font-size: 11px;
            padding: 9px 14px;
            gap: 7px;
          }

          .btn-icon {
            height: 24px;
          }

          .footer-right {
            gap: 26px;
          }

          .footer-column h4 {
            font-size: 12px;
            margin-bottom: 9px;
          }

          .footer-column li {
            font-size: 12px;
            line-height: 19px;
            margin-bottom: 6px;
          }

          .footer-top-line {
            margin-bottom: 26px;
          }

          .footer-bottom-line {
            margin-top: 38px;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .footer {
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .footer-main {
            gap: 28px;
            padding: 0 14px;
          }

          .footer-left {
            gap: 18px;
          }

          .social-icons {
            gap: 7px;
          }

          .social-icons img {
            width: 26px;
            height: 26px;
          }

          .compliance-text {
            font-size: 10px;
            line-height: 17px;
          }

          .download-btn {
            height: 44px;
            font-size: 10px;
            padding: 8px 12px;
            gap: 6px;
          }

          .btn-icon {
            height: 22px;
          }

          .footer-right {
            gap: 24px;
          }

          .footer-column h4 {
            font-size: 11px;
            margin-bottom: 8px;
          }

          .footer-column li {
            font-size: 11px;
            line-height: 18px;
            margin-bottom: 6px;
          }

          .footer-top-line {
            margin-bottom: 24px;
          }

          .footer-bottom-line {
            margin-top: 36px;
          }
        }
      `}</style>

      <footer className="footer">
        <hr className="footer-top-line" />

        <div className="footer-main">
          <div className="footer-left">
            <div className="social-icons">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={twitter} alt="Twitter" />
              <img src={linkdln} alt="LinkedIn" />
            </div>

            <p className="compliance-text">
              Ethikavest Technologies Limited ("Ethikavest") is a duly registered company with Corporate Affairs Commission (CAC), RC8629941. We hold a SCUML License to ensure compliance with the Money Laundering (Prohibition) Act, 2004.
            </p>

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

        <hr className="footer-bottom-line" />
      </footer>
    </>
  );
};

export default Footer;