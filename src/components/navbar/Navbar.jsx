// navbar.jsx
import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="120" height="23" />
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button className="navbar-button">Join Waitlist</button>
      </div>
    </nav>
  );
};

export default Navbar;