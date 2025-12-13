import React from "react";

const WaitlistContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add actual logic here later)
  };

  return (
    <>
      <style>{`
        /* Import Plus Jakarta Sans */
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* ====================== WAITLIST SECTION ====================== */
        .waitlist-section {
          position: relative;
          width: 1440px;
          max-width: 100%;
          height: 374px;
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
          padding-top: 300px;
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
          width: 134px;
          height: 44px;
          background-color: #26975C;
          color: #FFFFFF;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -1%;
          border-radius: 4px;
          border: 1px solid #26975C;
          padding: 16px 24px;
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

        /* ====================== LEFT SIDE - CONTACT INFO ====================== */
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
          letter-spacing: -1%;
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
          letter-spacing: -1%;
          color: #1A1A1A;
          margin: 24px 0;
        }

        .contact-phone {
          margin-top: 0;
        }

        .contact-email {
          margin-bottom: 0;
        }

        /* Right Side Phone Number - Desktop Only */
        .contact-phone-right {
          display: none;
        }

        /* ====================== RIGHT SIDE - FORM ====================== */
        .contact-form-wrapper {
          flex: 1;
          min-width: 300px;
          max-width: 520px;
          margin-top: 100px;
        }

        .contact-form {
          width: 100%;
        }

        /* ====================== FORM GROUPS ====================== */
        .form-group {
          width: 100%;
        }

        /* Full Name and Email - Input ABOVE the line */
        .form-group-name,
        .form-group-email {
          margin-bottom: 52px;
          display: flex;
          flex-direction: column;
        }

        /* Your Message - 200px from label to line */
        .form-group-message {
          margin-bottom: 54px;
          position: relative;
          padding-top: 10px;
        }

        /* All Labels - Base Styling */
        .form-label {
          display: block;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
          letter-spacing: -1%;
          color: #1A1A1A;
          margin-bottom: 8px;
        }

        /* Message Label - Now acts as placeholder, will be replaced */
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
        
        /* Message field wrapper positioning */
        .message-input-wrapper {
          position: relative;
          min-height: 200px;
          padding-top: 0;
          margin-top: -20px;
        }
        
        /* Underline for message */
        .message-input-wrapper .underline {
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
        }
        
        /* Textarea sits ON the line and covers full width */
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
        
        /* Hide label when textarea has content or is focused */
        .message-input-wrapper .form-textarea:focus ~ .form-label-message,
        .message-input-wrapper .form-textarea:not(:placeholder-shown) ~ .form-label-message {
          opacity: 0;
        }

        /* Underline - Base Styling */
        .underline {
          width: 100%;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.7);
          margin-top: 2px;
          margin-bottom: 0;
        }

        /* All Input Fields and Textarea - Base Styling */
        .form-input,
        .form-textarea {
          width: 100%;
          border: none;
          outline: none;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 140%;
          letter-spacing: -1%;
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
          letter-spacing: -1%;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
        }

        /* Textarea Specific */
        .form-textarea {
          resize: none;
          min-height: 120px;
          margin-bottom: 0;
        }

        /* ====================== CHECKBOX AND BUTTON WRAPPER ====================== */
        .form-footer {
          margin-top: 16px;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        /* Custom checkbox base (hidden native checkbox) */
        .custom-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        /* Styled checkbox box */
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

        /* Checkmark (visible when checked) */
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

        /* When the hidden input is checked */
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
          letter-spacing: -1%;
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

        /* ====================== SEND BUTTON ====================== */
        .btn-send {
          width: 134px;
          height: 44px;
          background-color: #26975C;
          color: #EAF6F0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -1%;
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

        /* ====================== RESPONSIVE DESIGN ====================== */
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
            letter-spacing: -1%;
            color: #1A1A1A;
            margin: 0;
            white-space: nowrap;
          }
        }

        @media (max-width: 768px) {
          .waitlist-section {
            height: auto;
            min-height: 600px;
            padding: 80px 20px;
          }
          
          .waitlist-content {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            padding-top: 0;
          }
          
          .waitlist-headline {
            font-size: 42px;
          }
          
          .waitlist-subheadline {
            font-size: 20px;
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
            font-size: 42px;
            margin-bottom: 40px;
          }
          
          .contact-details p {
            font-size: 24px;
          }
          
          .form-label {
            font-size: 24px;
          }
          
          .form-input,
          .form-textarea {
            font-size: 18px;
          }
          
          .form-label-message {
            margin-bottom: 120px;
          }
          
          .checkbox-wrapper {
            margin-bottom: 8px;
          }
        }
      `}</style>

      {/* ====================== WAITLIST SECTION ====================== */}
      <section className="waitlist-section">
        <div className="waitlist-content">
          <h1 className="waitlist-headline">
            Reserve your place on our exclusive waitlist
          </h1>

          <p className="waitlist-subheadline">
            Start your journey to halal wealth with confidence and peace of
            mind.
          </p>

          <button className="btn-join-waitlist">Join waitlist</button>
        </div>
      </section>

      {/* ====================== CONTACT SECTION ====================== */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left - Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Contact us</h2>

            <div className="contact-details">
              <p className="contact-phone">+234 (806)-635-4117</p>
              <p className="contact-email">support@ethikavest.com</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group form-group-name">
                <input type="text" className="form-input" placeholder="Full name*" required />
                <div className="underline"></div>
              </div>

              {/* Email */}
              <div className="form-group form-group-email">
                <input type="email" className="form-input" placeholder="Email address*" required />
                <div className="underline"></div>
              </div>

              {/* Message */}
              <div className="form-group form-group-message">
                <div className="message-input-wrapper">
                  <textarea rows={5} className="form-textarea" placeholder=" " required></textarea>
                  <label className="form-label form-label-message">Your message*</label>
                  <div className="underline"></div>
                </div>
              </div>

              {/* Checkbox + Button */}
              <div className="form-footer">
                <div className="checkbox-wrapper">
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                    <input type="checkbox" className="custom-checkbox" required />
                    <span className="checkbox-box"></span>
                  </label>
                  <p className="terms-text">
                    I agree with the{" "}
                    <a href="#" className="underline-link">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline-link">
                      Privacy Policy
                    </a>
                  </p>
                </div>

                <button type="submit" className="btn-send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaitlistContactSection;