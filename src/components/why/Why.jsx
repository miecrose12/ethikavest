import React from 'react';
import circlesPattern from '../../assets/fagbo.png';
import language from '../../assets/language.svg';  // ✅ Import here
import ai from '../../assets/ai.svg'; 
import compliance from '../../assets/copliance.svg'; 

const InvestmentSection = () => {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600&display=swap');

        .investment-section3 {
          position: relative;
          width: 100%;
          max-width: 2140px;
          min-height: 1093px;
          margin: 0 auto;
          background: #0F3B24;
          border-top: 3px solid #ABEA65;
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          overflow: hidden;
          padding: 120px 40px;
          box-sizing: border-box;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Decorative background image */
        .investment-section3::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0;
          background-image: var(--circles-pattern); /* ✅ CSS variable */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.13;
          pointer-events: none;
          z-index: 1;
        }

        .section-title3 {
       
          font-weight: 600;
          font-size: 64px;
          line-height: 120%;
          text-align: center;
          color: #ffffff;
          margin: 0 0 100px 0;
          position: relative;
          z-index: 3;
        }

        .section-title3 .highlight3 {
          color: #ABEA65;
        }
          .highlight3{
             font-family: 'TheShuffleRegular-yYarm', sans-serif;
              font-weight: 400;
          }

        .cards-container3 {
          display: grid;
          grid-template-columns: repeat(2, 464px);
          column-gap: 26px;
          row-gap: 26px;
          justify-content: center;
          position: relative;
          z-index: 3;
          max-width: 1024px;
        }

        .card3 {
          width: 464px;
          height: 264px;
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-sizing: border-box;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .card-header3 {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }

        .card-icon3 {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .card-icon3 img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .card-title3 {
          font-weight: 600;
          font-size: 32px;
          color: #0F3B24;
          margin: 0;
          flex: 1;
        }

        .card-description3 {
          font-size: 20px;
          line-height: 146%;
          color: #333333;
          margin: 0;
        }

        @font-face {
          font-family: 'TheShuffleRegular-yYarm';
          src: url('/fonts/TheShuffle-Regular.woff2') format('woff2'),
               url('/fonts/TheShuffle-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @media (max-width: 1024px) {
          .cards-container3 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .investment-section3 {
            padding: 60px 20px;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
          }

          .section-title3 {
            font-size: 36px;
            margin-bottom: 60px;
          }

          .cards-container3 {
            grid-template-columns: 1fr;
            row-gap: 20px;
          }

          .card3 {
            width: 100%;
            height: auto;
            padding: 30px;
          }

          .card-title3 {
            font-size: 24px;
          }

          .card-description3 {
            font-size: 16px;
          }
        }
      `}</style>

      {/* Inject imported image into CSS */}
      <section
        className="investment-section3"
        style={{ '--circles-pattern': `url(${circlesPattern})` }} // ✅ HERE
      >
        <h1 className="section-title3">
          Why your <span className="highlight3">savings</span> and <br />
          <span className="highlight3">investments</span> belong here
        </h1>

        <div className="cards-container3">

          <div className="card3">
            <div className="card-header3">
              <div className="card-icon3">
                <img src={compliance} alt="Faith Based" />
              </div>
              <h3 className="card-title3">Faith Based</h3>
            </div>
            <p className="card-description3">
              Guided by Shariah principles—free from interest, free from uncertainty.
            </p>
          </div>

          <div className="card3">
            <div className="card-header3">
              <div className="card-icon3">
                <img src={ai} alt="AI Powered" />
              </div>
              <h3 className="card-title3">AI Powered</h3>
            </div>
            <p className="card-description3">
              We use AI-powered investment strategies to deliver smarter, data-driven financial growth.
            </p>
          </div>

          <div className="card3">
            <div className="card-header3">
              <div className="card-icon3">
                <img src={language} alt="Multilingual" />
              </div>
              <h3 className="card-title3">Multilingual</h3>
            </div>
            <p className="card-description3">
              Invest with ease in your preferred language, Ethikavest speaks to everyone.
            </p>
          </div>

          <div className="card3">
            <div className="card-header3">
              <div className="card-icon3">
                <img src={compliance} alt="Shari'ah Compliance" />
              </div>
              <h3 className="card-title3">Shari'ah Compliance</h3>
            </div>
            <p className="card-description3">
              Ethical, transparent, and faith-aligned finance. Halal investment options you can trust.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default InvestmentSection;
