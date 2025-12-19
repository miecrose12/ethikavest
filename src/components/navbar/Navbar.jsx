import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // New state for form fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  // New state for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(null); // true/false/null

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    if (isMenuOpen) setIsMenuOpen(false);
    // Reset form and messages when opening
    setFirstname('');
    setLastname('');
    setEmail('');
    setSubmitMessage('');
    setSubmitSuccess(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Updated handleSubmit to call the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitSuccess(null);

    try {
      const response = await fetch('https://halalbackend-production-76e9.up.railway.app/api/joinlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstname.trim(),
          lastname: lastname.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setSubmitMessage(data.message || 'You have successfully joined the waiting list!');
        // Optionally auto-close modal after a few seconds
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage('Network error. Please check your connection and try again.');
      console.error('Waitlist submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Smooth scroll function (unchanged)
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={logo}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('home');
              }}
              alt="Logo"
              style={{ cursor: 'pointer' }}
            />
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

      {/* Modal with API integration */}
      {isModalOpen && (
        <div className="navbar-modal-overlay" onClick={closeModal}>
          <div className="navbar-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="navbar-modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="navbar-modal-title">Join the Waitlist</h2>

            {/* Show success/error message */}
            {submitMessage && (
              <div className={`navbar-modal-message ${submitSuccess ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}

            {/* Form only shown if not successfully submitted */}
            {!submitSuccess && (
              <form onSubmit={handleSubmit}>
                <div className="navbar-modal-name-label">Name*</div>
                <div className="navbar-modal-name-row">
                  <input
                    type="text"
                    placeholder="First name"
                    className="navbar-modal-name-input"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="navbar-modal-name-input"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="navbar-modal-email-label">Email*</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="navbar-modal-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="navbar-modal-join-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;