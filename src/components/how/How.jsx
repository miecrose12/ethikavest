import React from "react";
import './how.css';

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const How = () => {
  return (
    <div className="how-wrapper">


      {/* Header */}
      <div className="how-header">
        <h2 className="how-title">How much would you <br/> make?</h2>
        <div className="investment-header">
          <span>investment</span>
          <ChevronDown />
        </div>
      </div>

      {/* FIRST CARD – Investment */}
      <div className="investment-card">
        <p className="card-label">if i invested</p>

        <div className="investment-row">
          <div className="input-group">
            <span className="input-text">Every week</span>
            <ChevronDown />
          </div>

          <div className="input-group">
            <span className="input-text">For 3 months</span>
            <ChevronDown />
          </div>

          <div className="input-group amount-group">
            <span className="amount-value">10,000.00</span>
              <span className="currency-text">naira</span>
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* SECOND CARD – Returns */}
      <div className="returns-card">
        <div className="returns-content">

          {/* Left */}
          <div className="return-block">
            <p className="top-label">I would make</p>
            <div className="big-amount">
              <span className="naira-symbol">₦</span>
              <span className="number">15,943.00</span>
            </div>
          </div>

          {/* Center */}
          <div className="return-block">
            <p className="top-label">earned this from EthikaVest</p>
            <div className="big-amount">
              <span className="naira-symbol">₦</span>
              <span className="number">5,943.00</span>
            </div>
          </div>

          {/* Right */}
          <div className="return-block">
            <p className="top-label">at what rate</p>
            <div className="big-amount rate-amount">
              <span className="number">15.00%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default How;