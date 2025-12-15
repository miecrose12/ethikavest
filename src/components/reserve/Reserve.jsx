import React, { useState } from "react";

const WaitlistContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your actual submission logic here later
    alert("Thank you for joining the waitlist!");
    closeModal();
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        /* ====================== WAITLIST SECTION ====================== */
        .waitlist-section {
          position: relative;
          width: 1440px;
          max-width: 100%;
          height: 574px;
          background: linear-gradient(to bottom, #BFFCDE -44%, #FFFFFF 40%);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          margin: 0 auto;
          overflow: hidden;
        }

        .waitlist-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          padding-top: 50px;
          text-align: center;
          padding-left: 20px;
          padding-right: 20px;
        }

        .waitlist-headline {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 58px;
          line-height: 120%;
          letter-spacing: -1px;
          color: #1A1A1A;
          margin: 0 auto 24px;
          max-width: 1000px;
        }

        .waitlist-subheadline {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 132%;
          letter-spacing: 0;
          color: #333333;
          margin: 0 auto 48px;
          max-width: 800px;
        }

        .btn-join-waitlist {
          width: 154px;
          height: 44px;
          background-color: #26975C;
          color: #FFFFFF;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          border-radius: 4px;
          border: 1px solid #26975C;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .btn-join-waitlist:hover {
          background-color: #1e7a49;
        }

        /* ====================== CONTACT SECTION ====================== */
        .contact-section {
          width: 1440px;
          max-width: 100%;
          margin: 220px auto 0;
          padding: 0 80px 120px 80px;
        }

        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 120px;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }

        .contact-info {
          flex: 1;
          min-width: 300px;
          position: relative;
        }

        .contact-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 56px;
          line-height: 100%;
          color: #1A1A1A;
          margin: 0 0 60px 0;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contact-details p {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
          color: #1A1A1A;
          margin: 24px 0;
        }

        .contact-phone {
          margin-top: 0;
        }

        .contact-email {
          margin-bottom: 0;
        }

        .contact-phone-right {
          display: none;
        }

        .contact-form-wrapper {
          flex: 1;
          min-width: 300px;
          max-width: 520px;
          margin-top: 100px;
        }

        .contact-form {
          width: 100%;
        }

        .form-group {
          width: 100%;
        }

        .form-group-name,
        .form-group-email {
          margin-bottom: 52px;
          display: flex;
          flex-direction: column;
        }

        .form-group-message {
          margin-bottom: 54px;
          position: relative;
          padding-top: 10px;
        }

        .form-label {
          display: block;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
          color: #1A1A1A;
          margin-bottom: 8px;
        }

        .form-label-message {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          margin-bottom: 0;
          padding-top: 8px;
          color: #000000b2;
        }

        .message-input-wrapper {
          position: relative;
          min-height: 200px;
          padding-top: 0;
          margin-top: -20px;
        }

        .message-input-wrapper .underline {
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
        }

        .message-input-wrapper .form-textarea {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          padding-bottom: 58px;
          padding-top: 8px;
          background: transparent;
          height: 100%;
        }

        .message-input-wrapper .form-textarea:focus ~ .form-label-message,
        .message-input-wrapper .form-textarea:not(:placeholder-shown) ~ .form-label-message {
          opacity: 0;
        }

        .underline {
          width: 100%;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.7);
          margin-top: 2px;
          margin-bottom: 0;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          border: none;
          outline: none;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 140%;
          color: #000000B2;
          padding: 8px 0 2px 0;
          background: transparent;
          margin-bottom: 8px;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #000000B2;
          font-weight: 600;
          font-size: 32px;
          line-height: 140%;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
        }

        .form-textarea {
          resize: none;
          min-height: 120px;
          margin-bottom: 0;
        }

        .form-footer {
          margin-top: 16px;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .custom-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .checkbox-box {
          width: 24px;
          height: 24px;
          min-width: 24px;
          min-height: 24px;
          border: 2px solid #000000;
          border-radius: 2px;
          background-color: transparent;
          flex-shrink: 0;
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .checkbox-box:hover {
          background-color: rgba(38, 151, 92, 0.1);
        }

        .checkbox-box::after {
          content: "";
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 12px;
          border: solid #26975C;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .custom-checkbox:checked + .checkbox-box::after {
          opacity: 1;
        }

        .custom-checkbox:checked + .checkbox-box {
          border-color: #26975C;
        }

        .terms-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #1A1A1A;
          padding-top: 2px;
          margin: 0;
        }

        .underline-link {
          text-decoration: underline;
          color: #1A1A1A;
          transition: color 0.2s ease;
        }

        .underline-link:hover {
          color: #26975C;
        }

        .btn-send {
          width: 134px;
          height: 44px;
          background-color: #26975C;
          color: #EAF6F0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          border-radius: 4px;
          border: 1px solid #26975C;
          padding: 10px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-send:hover {
          background-color: #1e7a49;
          border-color: #1e7a49;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(38, 151, 92, 0.3);
        }

        .btn-send:active {
          transform: translateY(0);
        }

        /* ====================== RESPONSIVE ADJUSTMENTS ====================== */
        @media (min-width: 1024px) {
          .contact-phone-right {
            display: block;
            position: absolute;
            top: 120px;
            right: 0;
            font-family: "Plus Jakarta Sans", sans-serif;
            font-weight: 600;
            font-size: 32px;
            line-height: 100%;
            color: #1A1A1A;
            margin: 0;
            white-space: nowrap;
          }
        }

        @media (max-width: 1280px) {
          .contact-section {
            padding: 0 60px 100px 60px;
            margin-top: 180px;
          }
          .contact-container { gap: 100px; }
          .contact-title { font-size: 52px; margin-bottom: 50px; }
          .contact-details p { font-size: 30px; margin: 20px 0; }
          .contact-form-wrapper { margin-top: 90px; max-width: 480px; }
          .form-group-name,
          .form-group-email { margin-bottom: 48px; }
          .form-group-message { margin-bottom: 50px; }
          .form-label { font-size: 30px; margin-bottom: 6px; }
          .form-input::placeholder,
          .form-textarea::placeholder { font-size: 30px; }
          .form-input,
          .form-textarea { font-size: 19px; padding: 7px 0 1px 0; }
          .message-input-wrapper { min-height: 190px; margin-top: -18px; }
          .form-textarea { padding-bottom: 54px; padding-top: 7px; min-height: 110px; }
          .checkbox-box { width: 23px; height: 23px; min-width: 23px; min-height: 23px; }
          .checkbox-box::after { left: 5.5px; top: 1.5px; width: 5.5px; height: 11px; }
          .terms-text { font-size: 15.5px; line-height: 23px; }
          .btn-send { width: 130px; height: 42px; font-size: 15.5px; padding: 9px 22px; }
        }

        @media (max-width: 1024px) {
          .waitlist-section {
            height: 520px;
            border-top-left-radius: 80px;
            border-top-right-radius: 80px;
          }
          .waitlist-headline { font-size: 52px; max-width: 900px; margin-bottom: 20px; }
          .waitlist-subheadline { font-size: 22px; max-width: 700px; margin-bottom: 44px; }
          .btn-join-waitlist { width: 150px; height: 42px; font-size: 15.5px; }
          .contact-section {
            padding: 0 50px 90px 50px;
            margin-top: 150px;
          }
          .contact-container { gap: 80px; }
          .contact-title { font-size: 48px; margin-bottom: 45px; }
          .contact-details p { font-size: 28px; margin: 18px 0; }
          .contact-form-wrapper { margin-top: 80px; max-width: 460px; }
          .form-group-name,
          .form-group-email { margin-bottom: 44px; }
          .form-group-message { margin-bottom: 46px; padding-top: 8px; }
          .form-label { font-size: 28px; margin-bottom: 5px; }
          .form-input::placeholder,
          .form-textarea::placeholder { font-size: 28px; }
          .form-input,
          .form-textarea { font-size: 18px; padding: 6px 0 0 0; }
          .message-input-wrapper { min-height: 180px; margin-top: -16px; }
          .form-textarea { padding-bottom: 50px; padding-top: 6px; min-height: 100px; }
          .underline { height: 1px; margin-top: 1px; }
          .checkbox-wrapper { gap: 10px; margin-bottom: 10px; }
          .checkbox-box { width: 22px; height: 22px; min-width: 22px; min-height: 22px; border-width: 1.8px; border-radius: 1.8px; }
          .checkbox-box::after { left: 5px; top: 1px; width: 5px; height: 10px; border-width: 0 2.5px 2.5px 0; }
          .terms-text { font-size: 15px; line-height: 22px; padding-top: 1px; }
          .btn-send { width: 128px; height: 40px; font-size: 15px; padding: 8px 20px; border-radius: 3.5px; }
        }

        @media (max-width: 768px) {
          .waitlist-section {
            height: auto;
            min-height: 500px;
            padding: 70px 20px;
            border-top-left-radius: 60px;
            border-top-right-radius: 60px;
          }
          .waitlist-content {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            padding-top: 0;
            padding-left: 15px;
            padding-right: 15px;
          }
          .waitlist-headline {
            font-size: 44px;
            margin-bottom: 20px;
            max-width: 100%;
            letter-spacing: -0.8px;
          }
          .waitlist-subheadline {
            font-size: 20px;
            margin-bottom: 40px;
            max-width: 100%;
          }
          .btn-join-waitlist {
            width: auto;
            min-width: 134px;
            padding: 12px 28px;
            height: 44px;
            font-size: 16px;
          }
          .contact-section {
            padding: 0 40px 80px 40px;
            margin-top: 120px;
          }
          .contact-container {
            flex-direction: column;
            gap: 60px;
          }
          .contact-title {
            font-size: 44px;
            margin-bottom: 40px;
          }
          .contact-details p {
            font-size: 26px;
            margin: 20px 0;
            line-height: 120%;
          }
          .contact-form-wrapper {
            margin-top: 0;
            max-width: 100%;
          }
          .form-group-name,
          .form-group-email { margin-bottom: 45px; }
          .form-group-message { margin-bottom: 48px; padding-top: 8px; }
          .message-input-wrapper { min-height: 180px; margin-top: -16px; }
          .form-textarea { padding-bottom: 50px; padding-top: 6px; min-height: 100px; }
          .form-label { font-size: 26px; margin-bottom: 6px; }
          .form-input,
          .form-textarea { font-size: 18px; padding: 6px 0 1px 0; }
          .form-input::placeholder,
          .form-textarea::placeholder { font-size: 26px; line-height: 130%; }
          .form-label-message { padding-top: 6px; font-size: 26px; }
          .underline { background-color: rgba(0, 0, 0, 0.6); }
          .checkbox-wrapper { gap: 10px; margin-bottom: 10px; align-items: center; }
          .checkbox-box { width: 22px; height: 22px; border: 1.8px solid #000000; border-radius: 1.8px; }
          .checkbox-box::after { left: 5px; top: 1px; width: 5px; height: 10px; border-width: 0 2.5px 2.5px 0; }
          .terms-text { font-size: 15px; line-height: 22px; padding-top: 0; }
          .btn-send { width: 100%; max-width: 300px; height: 48px; font-size: 16px; padding: 12px 24px; border-radius: 4px; }
        }

        @media (max-width: 480px) {
          .waitlist-section {
            padding: 60px 15px;
            min-height: 460px;
          }
          .waitlist-headline { font-size: 38px; line-height: 115%; letter-spacing: -0.6px; margin-bottom: 18px; }
          .waitlist-subheadline { font-size: 18px; line-height: 128%; margin-bottom: 36px; }
          .btn-join-waitlist { min-width: 130px; padding: 11px 26px; height: 42px; font-size: 15px; }
          .contact-section {
            padding: 0 20px 70px 20px;
            margin-top: 100px;
          }
          .contact-container { gap: 50px; }
          .contact-title { font-size: 38px; margin-bottom: 35px; line-height: 105%; }
          .contact-details p { font-size: 24px; margin: 18px 0; line-height: 125%; }
          .form-group-name,
          .form-group-email { margin-bottom: 40px; }
          .form-group-message { margin-bottom: 42px; padding-top: 6px; }
          .message-input-wrapper { min-height: 160px; margin-top: -14px; }
          .form-textarea { padding-bottom: 46px; padding-top: 5px; min-height: 90px; }
          .form-label { font-size: 24px; margin-bottom: 4px; }
          .form-input,
          .form-textarea { font-size: 17px; padding: 5px 0 0 0; line-height: 135%; }
          .form-input::placeholder,
          .form-textarea::placeholder { font-size: 24px; line-height: 135%; }
          .form-label-message { padding-top: 5px; font-size: 24px; }
          .underline { height: 0.9px; margin-top: 1px; background-color: rgba(0, 0, 0, 0.65); }
          .checkbox-wrapper { gap: 8px; margin-bottom: 8px; }
          .checkbox-box { width: 20px; height: 20px; min-width: 20px; min-height: 20px; border: 1.6px solid #000000; border-radius: 1.5px; }
          .checkbox-box:hover { background-color: rgba(38, 151, 92, 0.08); }
          .checkbox-box::after { left: 4.5px; top: 0.5px; width: 4.5px; height: 9px; border-width: 0 2.2px 2.2px 0; }
          .terms-text { font-size: 14px; line-height: 20px; padding-top: 0; }
          .btn-send { height: 44px; font-size: 15px; padding: 10px 20px; }
        }

        /* ====================== MODAL ====================== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          overflow-y: auto;
        }

        .modal-content {
          background: #FFFFFF;
          border-radius: 20px;
          width: 100%;
          max-width: 520px;
          padding: 48px 40px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 24px;
          background: none;
          border: none;
          font-size: 32px;
          line-height: 1;
          cursor: pointer;
          color: #999;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          color: #333;
        }

        .modal-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 700;
          font-size: 36px;
          line-height: 120%;
          color: #1A1A1A;
          text-align: center;
          margin: 0 0 36px 0;
        }

        .modal-name-label,
        .modal-email-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 24px;
          color: #1A1A1A;
          margin-bottom: 10px;
        }

        .modal-name-row {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }

        .modal-name-input,
        .modal-email-input {
          width: 100%;
          padding: 16px 20px;
          background-color: #F0FAF5;
          border: none;
          border-radius: 12px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #1A1A1A;
        }

        .modal-name-input::placeholder,
        .modal-email-input::placeholder {
          color: #888;
          font-weight: 500;
        }

        .modal-name-input:focus,
        .modal-email-input:focus {
          outline: none;
          background-color: #E0F5EA;
        }

        .modal-email-wrapper {
          margin-bottom: 40px;
        }

        .modal-join-btn {
          width: 100%;
          height: 60px;
          background-color: #26975C;
          color: #FFFFFF;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 18px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-join-btn:hover {
          background-color: #1e7a49;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(38, 151, 92, 0.3);
        }

        /* Modal Responsiveness */
        @media (max-width: 768px) {
          .modal-content {
            padding: 48px 32px;
            max-width: 90vw;
          }
          .modal-title {
            font-size: 32px;
            margin-bottom: 32px;
          }
          .modal-name-row {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 28px;
          }
          .modal-email-wrapper {
            margin-bottom: 36px;
          }
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: 40px 24px;
          }
          .modal-title {
            font-size: 28px;
            margin-bottom: 28px;
          }
          .modal-name-label,
          .modal-email-label {
            font-size: 22px;
          }
          .modal-name-input,
          .modal-email-input {
            padding: 14px 18px;
            font-size: 17px;
          }
          .modal-join-btn {
            height: 56px;
            font-size: 17px;
          }
        }
      `}</style>

      {/* Waitlist Section - unchanged */}
      <section className="waitlist-section">
        <div className="waitlist-content">
          <h1 className="waitlist-headline">
            Reserve your place on our exclusive waitlist
          </h1>
          <p className="waitlist-subheadline">
            Start your journey to halal wealth with confidence and peace of mind.
          </p>
          <button onClick={openModal} className="btn-join-waitlist">
            Join waitlist
          </button>
        </div>
      </section>

      {/* CONTACT SECTION - unchanged design, enhanced responsiveness */}
    <section id="reserve" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Contact us</h2>
            <div className="contact-details">
              <p className="contact-phone">+234 (806)-635-4117</p>
              <p className="contact-email">support@ethikavest.com</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form">
              <div className="form-group form-group-name">
                <input type="text" className="form-input" placeholder="Full name*" />
                <div className="underline"></div>
              </div>

              <div className="form-group form-group-email">
                <input type="email" className="form-input" placeholder="Email address*" />
                <div className="underline"></div>
              </div>

              <div className="form-group form-group-message">
                <div className="message-input-wrapper">
                  <textarea rows={5} className="form-textarea" placeholder=" "></textarea>
                  <label className="form-label form-label-message">Your message*</label>
                  <div className="underline"></div>
                </div>
              </div>

              <div className="form-footer">
                <div className="checkbox-wrapper">
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span className="checkbox-box"></span>
                  </label>
                  <p className="terms-text">
                    I agree with the{" "}
                    <a href="#" className="underline-link">Terms and Conditions</a>{" "}
                    and{" "}
                    <a href="#" className="underline-link">Privacy Policy</a>
                  </p>
                </div>
                <button type="button" className="btn-send">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal & Responsive Modal - unchanged */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <h2 className="modal-title">Join the Waitlist</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <div className="modal-name-label">Name*</div>
                <div className="modal-name-row">
                  <input
                    type="text"
                    placeholder="First name"
                    className="modal-name-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="modal-name-input"
                    required
                  />
                </div>
              </div>

              <div className="modal-email-wrapper">
                <div className="modal-email-label">Email*</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="modal-email-input"
                  required
                />
              </div>

              <button type="submit" className="modal-join-btn">
                Join Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WaitlistContactSection;