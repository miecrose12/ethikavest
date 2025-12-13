// src/components/Back.jsx
import React from "react";
import "./Back.css";
import Frame from '../../assets/framer.svg';


const Back = () => {
  return (
    <section className="back-section">
      {/* Image – exactly your dimensions */}
      <img
        src={Frame} // ← replace with your real image path
        alt="Partners"
        className="back-image"
      />

      {/* White rectangle that extends outside the image */}
      <div className="back-card"></div>

      {/* Text content on the right */}
      <div className="back-text-container">
        <h1 className="back-heading">
          Backed by reliable,
          <br />
          industry-trusted partners
        </h1>
        <p className="back-paragraph">
          We work with carefully selected partners who uphold our standards of
          excellence and ethical integrity, ensuring your investments are placed
          with creditworthy.
        </p>
      </div>
    </section>
  );
};

export default Back;