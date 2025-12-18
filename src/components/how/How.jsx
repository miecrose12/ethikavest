import React from "react";

const ChevronDown = ({ isStraight }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: isStraight ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const How = () => {
  // One unified active state per dropdown (works for both hover and touch)
  const [frequencyActive, setFrequencyActive] = React.useState(false);
  const [durationActive, setDurationActive] = React.useState(false);
  const [amountActive, setAmountActive] = React.useState(false);
  const [investmentActive, setInvestmentActive] = React.useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .how-wrapper {
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 100px 20px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .how-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 30px;
        }
        .how-title {
          font-weight: 600;
          font-size: 56px;
          line-height: 120%;
          letter-spacing: -1px;
          color: #000;
          text-align: left;
        }
        .investment-header {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          font-size: 22px;
          color: #000;
          cursor: pointer;
          padding: 16px;
          border-radius: 12px;
        }
        .investment-header svg { color: #2AA866; flex-shrink: 0; }

        .card-label {
          font-weight: 500;
          font-size: 18px;
          margin: 0 0 20px 40px;
          color: inherit;
        }
        .investment-card {
          width: 100%;
          max-width: 1265px;
          height: 203px;
          background: #EAF6F0;
          border-radius: 20px;
          padding: 40px;
          margin: 0 auto 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .investment-card:hover {
          background: #d4efe2;
        }
        .investment-row {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          gap: 180px;
        }
        .input-group {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          padding: 20px; /* Very large touch/hover area */
          border-radius: 16px;
          transition: background 0.2s ease;
        }
        .input-group:hover {
          background: rgba(42, 168, 102, 0.1);
        }
        .input-text {
          font-weight: 700;
          font-size: 20px;
          color: #53575E;
          text-decoration: underline;
          text-decoration-color: #53575E;
        }
        .input-group svg {
          color: #2AA866;
          flex-shrink: 0;
        }
        .amount-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .currency-text {
          font-weight: 500;
          font-size: 18px;
          color: #53575E;
        }
        .amount-value {
          font-weight: 700;
          font-size: 36px;
          letter-spacing: -1px;
          color: #2AA866;
          text-decoration: underline;
          text-decoration-color: #2AA866;
        }

        .returns-card {
          width: 100%;
          max-width: 1265px;
          height: 295px;
          background: #0F3B24;
          border-radius: 20px;
          padding: 40px;
          margin: 0 auto;
          color: #EAF6F0;
          transition: background 0.3s ease;
        }
        .returns-card:hover {
          background: #0d3320;
        }
        .returns-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 163px;
          height: 215px;
          position: relative;
        }
        .return-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          width: 240px;
        }
        .top-label {
          font-weight: 500;
          font-size: 18px;
          color: #EAF6F0;
          margin-bottom: 70px;
        }
        .big-amount {
          position: relative;
          display: inline-block;
          text-align: left;
          min-height: 76px;
        }
        .big-amount .naira-symbol {
          position: absolute;
          top: -4px;
          left: 0;
          font-weight: 600;
          font-size: 28px;
          color: #ABEA65;
        }
        .big-amount .number {
          font-weight: 700;
          font-size: 42px;
          letter-spacing: -2px;
          line-height: 1;
          color: #ABEA65;
          padding-left: 38px;
          display: block;
        }
        .rate-amount .number {
          font-size: 42px;
          padding-left: 0;
          text-align: center;
        }
        .return-block:nth-child(2) .big-amount .number {
          font-size: 48px;
        }
        .returns-content::before,
        .returns-content::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 170px;
          background: #ABEA65;
          opacity: 0.5;
        }
        .returns-content::before {
          left: calc(50% - 163px - 81px);
        }
        .returns-content::after {
          left: calc(50% + 163px + 81px);
        }

        /* Responsive styles (unchanged) */
        @media (max-width: 1200px) {
          .investment-row { gap: 80px; }
          .returns-content { gap: 80px; }
          .returns-content::before { left: calc(50% - 80px - 81px); }
          .returns-content::after { left: calc(50% + 80px + 81px); }
        }
        @media (max-width: 1080px) {
          .how-title { font-size: 44px; }
          .investment-header { margin-top: 0; }
          .investment-row { flex-direction: column; gap: 30px; height: auto; }
          .investment-card { height: auto; padding: 40px 30px; }
          .returns-content { flex-direction: column; gap: 50px; height: auto; }
          .returns-card { height: auto; }
          .top-label { margin-bottom: 20px; }
          .returns-content::before,
          .returns-content::after {
            width: 280px; height: 1px; left: 50% !important;
            transform: translateX(-50%); top: auto;
          }
          .returns-content::before { top: calc(33.33% + 25px); }
          .returns-content::after { top: calc(66.66% + 25px); }
        }
        @media (max-width: 768px) {
          .how-wrapper { padding: 60px 20px; }
          .how-title { font-size: 36px; }
          .investment-header { font-size: 18px; }
          .input-text { font-size: 18px; }
          .amount-value { font-size: 28px; }
          .currency-text { font-size: 16px; }
          .input-group { padding: 24px; }
        }
        @media (max-width: 640px) {
          .how-wrapper { padding: 40px 16px; }
          .how-title { font-size: 32px; }
          .investment-header { font-size: 16px; }
          .investment-card, .returns-card { padding: 30px 20px; height: auto; }
          .card-label { margin: 0 0 20px 20px; font-size: 16px; }
          .input-text { font-size: 16px; }
          .amount-value { font-size: 24px; }
          .currency-text { font-size: 14px; }
          .big-amount .number { font-size: 36px; padding-left: 32px; }
          .big-amount .naira-symbol { font-size: 24px; }
          .rate-amount .number { font-size: 36px; }
          .return-block:nth-child(2) .big-amount .number { font-size: 40px; }
          .top-label { font-size: 16px; }
          .return-block { width: 100%; }
          .returns-content::before, .returns-content::after { width: 200px; }
        }

        /* MOST IMPORTANT: Force chevron to flip when tapping ANYWHERE on the dropdown area on mobile */
        .input-group:active svg,
        .investment-header:active svg {
          transform: rotate(180deg) !important;
        }
        .input-group:active,
        .investment-header:active {
          background: rgba(42, 168, 102, 0.2) !important;
        }
      `}</style>

      <div className="how-wrapper">
        <div className="how-header">
          <h2 className="how-title">
            How much would you <br /> make?
          </h2>
          <div
            className="investment-header"
            onMouseEnter={() => setInvestmentActive(true)}
            onMouseLeave={() => setInvestmentActive(false)}
            onTouchStart={() => setInvestmentActive(true)}
            onTouchEnd={() => setInvestmentActive(false)}
            onTouchCancel={() => setInvestmentActive(false)}
          >
            <span>investment</span>
            <ChevronDown isStraight={investmentActive} />
          </div>
        </div>

        <div className="investment-card">
          <p className="card-label">if i invested</p>
          <div className="investment-row">
            {/* Frequency dropdown */}
            <div
              className="input-group"
              onMouseEnter={() => setFrequencyActive(true)}
              onMouseLeave={() => setFrequencyActive(false)}
              onTouchStart={() => setFrequencyActive(true)}
              onTouchEnd={() => setFrequencyActive(false)}
              onTouchCancel={() => setFrequencyActive(false)}
            >
              <span className="input-text">Every week</span>
              <ChevronDown isStraight={frequencyActive} />
            </div>

            {/* Duration dropdown */}
            <div
              className="input-group"
              onMouseEnter={() => setDurationActive(true)}
              onMouseLeave={() => setDurationActive(false)}
              onTouchStart={() => setDurationActive(true)}
              onTouchEnd={() => setDurationActive(false)}
              onTouchCancel={() => setDurationActive(false)}
            >
              <span className="input-text">For 3 months</span>
              <ChevronDown isStraight={durationActive} />
            </div>

            {/* Amount dropdown */}
            <div
              className="input-group amount-group"
              onMouseEnter={() => setAmountActive(true)}
              onMouseLeave={() => setAmountActive(false)}
              onTouchStart={() => setAmountActive(true)}
              onTouchEnd={() => setAmountActive(false)}
              onTouchCancel={() => setAmountActive(false)}
            >
              <span className="amount-value">10,000.00</span>
              <span className="currency-text">naira</span>
              <ChevronDown isStraight={amountActive} />
            </div>
          </div>
        </div>

        <div className="returns-card">
          <div className="returns-content">
            <div className="return-block">
              <p className="top-label">I would make</p>
              <div className="big-amount">
                <span className="naira-symbol">₦</span>
                <span className="number">15,943.00</span>
              </div>
            </div>
            <div className="return-block">
              <p className="top-label">earned this from EthikaVest</p>
              <div className="big-amount">
                <span className="naira-symbol">₦</span>
                <span className="number">5,943.00</span>
              </div>
            </div>
            <div className="return-block">
              <p className="top-label">at what rate</p>
              <div className="big-amount rate-amount">
                <span className="number">15.00%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;