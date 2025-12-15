// @ts-nocheck
import React from 'react';
import what from '../../assets/what.svg';

const What = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600&display=swap');

        /* Exact design match – everything is inside the image on the left */
        .what-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 100px 0;
          background: transparent;
        }

        .glass-container {
          position: relative;
          width: 1185px;
          height: 730px;
          border-radius: 41px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }

        /* Glassmorphic overlay + exact blur */
        .glass-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #051B0F12;
          backdrop-filter: blur(10.1px);
          -webkit-backdrop-filter: blur(13.1px);
          z-index: 1;
        }

        .text-content {
          position: absolute;
          top: 85px;
          left: 55px;
          z-index: 2;
          color: white;
          max-width: 650px;
        }

        .main-heading {
          width: 567px;
          height: 67px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 56px;
          line-height: 120%;
          letter-spacing: -1px;
          margin: 0 0 27px 0;
        }

        .main-paragraph {
          width: 613px;
          height: 182px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 160%;
          margin: 0 0 40px 0;
        }

        .offer-section {
          margin-top: 37px;
        }

        .offer-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 16px;
        }

        .offer-list {
          width: 615px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 160%;
          padding-left: 20px;
          margin: 0;
        }

        .offer-list li {
          margin-bottom: 12px;
        }

        /* Large Desktop */
        @media (max-width: 1280px) {
          .what-section {
            padding: 100px 20px;
          }

          .glass-container {
            width: 100%;
            max-width: 1100px;
            height: 680px;
          }

          .text-content {
            top: 75px;
            left: 50px;
            max-width: 600px;
          }

          .main-heading {
            width: 100%;
            max-width: 520px;
            height: auto;
            font-size: 52px;
          }

          .main-paragraph {
            width: 100%;
            max-width: 580px;
            height: auto;
          }

          .offer-list {
            width: 100%;
            max-width: 580px;
          }
        }

        /* Desktop & Laptop */
        @media (max-width: 1024px) {
          .what-section {
            padding: 80px 20px;
          }

          .glass-container {
            max-width: 900px;
            height: 600px;
            border-radius: 35px;
          }

          .text-content {
            top: 60px;
            left: 45px;
            right: 45px;
            max-width: 550px;
          }

          .main-heading {
            max-width: 100%;
            font-size: 46px;
            margin-bottom: 24px;
          }

          .main-paragraph {
            max-width: 100%;
            margin-bottom: 35px;
          }

          .offer-section {
            margin-top: 32px;
          }

          .offer-list {
            max-width: 100%;
          }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .what-section {
            padding: 70px 16px;
          }

          .glass-container {
            max-width: 700px;
            height: 560px;
            border-radius: 30px;
          }

          .text-content {
            top: 50px;
            left: 40px;
            right: 40px;
            max-width: 100%;
          }

          .main-heading {
            font-size: 42px;
            margin-bottom: 22px;
          }

          .main-paragraph {
            font-size: 15px;
            margin-bottom: 32px;
          }

          .offer-section {
            margin-top: 28px;
          }

          .offer-title {
            font-size: 19px;
            margin-bottom: 14px;
          }

          .offer-list {
            font-size: 15px;
            padding-left: 18px;
          }

          .offer-list li {
            margin-bottom: 11px;
          }
        }

        /* Large Mobile */
        @media (max-width: 640px) {
          .what-section {
            padding: 60px 16px;
          }

          .glass-container {
            height: 600px;
            border-radius: 28px;
          }

          .text-content {
            top: 42px;
            left: 35px;
            right: 35px;
          }

          .main-heading {
            font-size: 38px;
            margin-bottom: 20px;
          }

          .main-paragraph {
            font-size: 15px;
            margin-bottom: 30px;
          }

          .offer-section {
            margin-top: 26px;
          }

          .offer-title {
            font-size: 18px;
            margin-bottom: 14px;
          }

          .offer-list {
            font-size: 15px;
            padding-left: 18px;
          }

          .offer-list li {
            margin-bottom: 10px;
          }
        }

        /* Standard Mobile */
        @media (max-width: 480px) {
          .what-section {
            padding: 50px 14px;
          }

          .glass-container {
            height: 640px;
            border-radius: 24px;
          }

          .text-content {
            top: 36px;
            left: 30px;
            right: 30px;
          }

          .main-heading {
            font-size: 34px;
            line-height: 125%;
            margin-bottom: 18px;
          }

          .main-paragraph {
            font-size: 14px;
            line-height: 165%;
            margin-bottom: 28px;
          }

          .offer-section {
            margin-top: 24px;
          }

          .offer-title {
            font-size: 17px;
            margin-bottom: 12px;
          }

          .offer-list {
            font-size: 14px;
            line-height: 165%;
            padding-left: 18px;
          }

          .offer-list li {
            margin-bottom: 10px;
          }
        }

        /* Small Mobile (iPhone SE, older Androids) */
        @media (max-width: 400px) {
          .what-section {
            padding: 45px 12px;
          }

          .glass-container {
            height: 680px;
            border-radius: 22px;
          }

          .text-content {
            top: 32px;
            left: 26px;
            right: 26px;
          }

          .main-heading {
            font-size: 30px;
            line-height: 128%;
            margin-bottom: 16px;
          }

          .main-paragraph {
            font-size: 13px;
            line-height: 170%;
            margin-bottom: 26px;
          }

          .offer-section {
            margin-top: 22px;
          }

          .offer-title {
            font-size: 16px;
            margin-bottom: 12px;
          }

          .offer-list {
            font-size: 13px;
            line-height: 170%;
            padding-left: 16px;
          }

          .offer-list li {
            margin-bottom: 9px;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .what-section {
            padding: 40px 10px;
          }

          .glass-container {
            height: 720px;
            border-radius: 20px;
          }

          .text-content {
            top: 28px;
            left: 22px;
            right: 22px;
          }

          .main-heading {
            font-size: 28px;
            line-height: 130%;
            margin-bottom: 14px;
          }

          .main-paragraph {
            font-size: 12px;
            line-height: 175%;
            margin-bottom: 24px;
          }

          .offer-section {
            margin-top: 20px;
          }

          .offer-title {
            font-size: 15px;
            margin-bottom: 11px;
          }

          .offer-list {
            font-size: 12px;
            line-height: 175%;
            padding-left: 15px;
          }

          .offer-list li {
            margin-bottom: 8px;
          }
        }

        /* Very Small Mobile */
        @media (max-width: 320px) {
          .what-section {
            padding: 35px 10px;
          }

          .glass-container {
            height: 760px;
            border-radius: 18px;
          }

          .text-content {
            top: 24px;
            left: 20px;
            right: 20px;
          }

          .main-heading {
            font-size: 26px;
            line-height: 132%;
            margin-bottom: 12px;
          }

          .main-paragraph {
            font-size: 11px;
            line-height: 178%;
            margin-bottom: 22px;
          }

          .offer-section {
            margin-top: 18px;
          }

          .offer-title {
            font-size: 14px;
            margin-bottom: 10px;
          }

          .offer-list {
            font-size: 11px;
            line-height: 178%;
            padding-left: 14px;
          }

          .offer-list li {
            margin-bottom: 8px;
          }
        }
      `}</style>

      <section className="what-section">
        <div className="glass-container">
          <img
            src={what}
            alt="Ethikavest"
            className="background-image"
          />

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
    </>
  );
};

export default What;