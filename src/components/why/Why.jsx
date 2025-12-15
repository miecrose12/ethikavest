import React from 'react';
import circlesPattern from '../../assets/fagbo.png';
import language from '../../assets/language.svg';
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
          background-image: var(--circles-pattern);
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

        .highlight3 {
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

        /* Tablet & Medium Screens */
        @media (max-width: 1024px) {
          .investment-section3 {
            padding: 90px 32px;
            border-top-left-radius: 80px;
            border-top-right-radius: 80px;
            min-height: auto;
          }

          .section-title3 {
            font-size: 52px;
            margin-bottom: 80px;
          }

          .cards-container3 {
            grid-template-columns: 1fr;
            max-width: 500px;
            row-gap: 24px;
          }

          .card3 {
            width: 100%;
            height: auto;
            min-height: 220px;
            padding: 36px;
            gap: 22px;
          }

          .card-title3 {
            font-size: 28px;
          }

          .card-description3 {
            font-size: 18px;
          }
        }

        /* Small Tablet */
        @media (max-width: 768px) {
          .investment-section3 {
            padding: 70px 24px;
            border-top-left-radius: 60px;
            border-top-right-radius: 60px;
          }

          .section-title3 {
            font-size: 44px;
            margin-bottom: 60px;
          }

          .cards-container3 {
            max-width: 450px;
            row-gap: 20px;
          }

          .card3 {
            min-height: 200px;
            padding: 32px;
            gap: 20px;
          }

          .card-header3 {
            gap: 16px;
          }

          .card-icon3 {
            width: 32px;
            height: 32px;
          }

          .card-title3 {
            font-size: 26px;
          }

          .card-description3 {
            font-size: 17px;
            line-height: 150%;
          }
        }

        /* Mobile Landscape & Large Phones */
        @media (max-width: 640px) {
          .investment-section3 {
            padding: 60px 20px;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
          }

          .section-title3 {
            font-size: 36px;
            margin-bottom: 50px;
          }

          .cards-container3 {
            max-width: 400px;
            row-gap: 18px;
          }

          .card3 {
            width: 100%;
            height: auto;
            min-height: 180px;
            padding: 28px;
            gap: 18px;
            border-radius: 16px;
          }

          .card-header3 {
            gap: 14px;
          }

          .card-icon3 {
            width: 30px;
            height: 30px;
          }

          .card-title3 {
            font-size: 24px;
          }

          .card-description3 {
            font-size: 16px;
            line-height: 152%;
          }
        }

        /* Standard Mobile Phones */
        @media (max-width: 480px) {
          .investment-section3 {
            padding: 50px 16px;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
          }

          .section-title3 {
            font-size: 32px;
            margin-bottom: 40px;
            line-height: 125%;
          }

          .section-title3 br {
            display: none;
          }

          .cards-container3 {
            max-width: 100%;
            row-gap: 16px;
          }

          .card3 {
            min-height: 160px;
            padding: 24px;
            gap: 16px;
            border-radius: 14px;
          }

          .card-header3 {
            gap: 12px;
          }

          .card-icon3 {
            width: 28px;
            height: 28px;
          }

          .card-title3 {
            font-size: 22px;
            line-height: 130%;
          }

          .card-description3 {
            font-size: 15px;
            line-height: 155%;
          }
        }

        /* Small Mobile Phones (iPhone SE, small Androids) */
        @media (max-width: 400px) {
          .investment-section3 {
            padding: 45px 14px;
            border-top-left-radius: 35px;
            border-top-right-radius: 35px;
          }

          .section-title3 {
            font-size: 28px;
            margin-bottom: 35px;
          }

          .cards-container3 {
            row-gap: 14px;
          }

          .card3 {
            min-height: 150px;
            padding: 22px;
            gap: 14px;
            border-radius: 12px;
          }

          .card-header3 {
            gap: 10px;
          }

          .card-icon3 {
            width: 26px;
            height: 26px;
          }

          .card-title3 {
            font-size: 20px;
            line-height: 130%;
          }

          .card-description3 {
            font-size: 14px;
            line-height: 158%;
          }
        }

        /* Extra Small Phones */
        @media (max-width: 360px) {
          .investment-section3 {
            padding: 40px 12px;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
          }

          .section-title3 {
            font-size: 26px;
            margin-bottom: 30px;
          }

          .cards-container3 {
            row-gap: 12px;
          }

          .card3 {
            min-height: 140px;
            padding: 20px;
            gap: 12px;
            border-radius: 12px;
          }

          .card-header3 {
            gap: 10px;
          }

          .card-icon3 {
            width: 24px;
            height: 24px;
          }

          .card-title3 {
            font-size: 18px;
            line-height: 130%;
          }

          .card-description3 {
            font-size: 13px;
            line-height: 160%;
          }
        }
      `}</style>

      {/* Inject imported image into CSS */}
      <section
        className="investment-section3"
        style={{ '--circles-pattern': `url(${circlesPattern})` }}
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