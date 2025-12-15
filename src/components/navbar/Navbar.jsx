import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist form submitted');
    closeModal();
  };

  // Smooth scroll function
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="navbar-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}>Home</a></li>
            <li><a href="#journeya" onClick={(e) => { e.preventDefault(); smoothScrollTo('journeya'); }}>About</a></li>
            <li><a href="#reserve" onClick={(e) => { e.preventDefault(); smoothScrollTo('reserve'); }}>Contact Us</a></li>
          </ul>
          <button className="navbar-button" onClick={openModal}>
            Join Waitlist
          </button>
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`navbar-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-mobile-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}>Home</a></li>
              <li><a href="#journeya" onClick={(e) => { e.preventDefault(); smoothScrollTo('journeya'); }}>About</a></li>
              <li><a href="#reserve" onClick={(e) => { e.preventDefault(); smoothScrollTo('reserve'); }}>Contact Us</a></li>
            </ul>
            <button className="navbar-button navbar-mobile-button" onClick={openModal}>
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer"></div>

      {/* Modal remains unchanged */}
      {isModalOpen && (
        <div className="navbar-modal-overlay" onClick={closeModal}>
          <div className="navbar-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="navbar-modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="navbar-modal-title">Join the Waitlist</h2>
            <form onSubmit={handleSubmit}>
              <div className="navbar-modal-name-label">Name*</div>
              <div className="navbar-modal-name-row">
                <input
                  type="text"
                  placeholder="First name"
                  className="navbar-modal-name-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="navbar-modal-name-input"
                  required
                />
              </div>
              <div className="navbar-modal-email-label">Email*</div>
              <input
                type="email"
                placeholder="Enter your email"
                className="navbar-modal-email-input"
                required
              />
              <button type="submit" className="navbar-modal-join-btn">
                Join Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;