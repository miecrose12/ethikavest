import React from 'react';

const Privacy = () => {
  return (
    <>
      <style>{`
        .privacy-page {
          min-height: 100vh;
          background-color: white;
          color: #1a1a1a;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 80px 20px 100px;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header h1 {
          font-size: 2.6rem;
          font-weight: 700;
          color: #26975C;
          margin: 0 0 12px;
        }

        .date {
          font-size: 1.1rem;
          color: #555;
          font-weight: 400;
        }

        h2 {
          color: #26975C;
          font-size: 1.8rem;
          font-weight: 600;
          margin: 64px 0 20px;
          border-bottom: 2px solid #e8f5ef;
          padding-bottom: 12px;
        }

        h3 {
          color: #26975C;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 32px 0 12px;
        }

        ul {
          list-style: none;
          padding-left: 0;
          margin: 16px 0;
        }

        ul li {
          padding-left: 24px;
          position: relative;
          margin-bottom: 12px;
        }

        ul li::before {
          content: "•";
          color: #26975C;
          position: absolute;
          left: 0;
          font-size: 1.4rem;
        }

        .key-points {
          margin: 48px 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .grid div {
          background: #f8fafc;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #e8f5ef;
        }

        .grid h3 {
          margin: 0 0 12px;
        }

        .footer {
          text-align: center;
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid #e8f5ef;
          color: #666;
          font-size: 0.95rem;
        }

        a {
          color: #26975C;
          text-decoration: none;
          font-weight: 500;
        }

        a:hover {
          text-decoration: underline;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .container {
            padding: 60px 16px;
          }
          .header h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="privacy-page">
        <div className="container">
          <header className="header">
            <h1>Privacy Policy</h1>
            <p className="date">Ethikavest Limited • Effective September 1, 2024</p>
          </header>

          <section>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how Ethikavest Limited (“we”, “us”, “Ethikavest”) collects, uses, and protects your personal information when you use our website or mobile application.
            </p>
            <p>
              By using our services, you agree to this Policy. Ethikavest is fully committed to Shariah-compliant financial services, ensuring all operations align with halal principles.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name, username, gender, date of birth</li>
              <li>Email address, postal address, telephone number</li>
              <li>Account number, card number, and expiry date</li>
              <li>Any other information required to provide our services</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Create and maintain your account</li>
              <li>Process payments and provide services</li>
              <li>Communicate with you about updates and support</li>
              <li>Improve and personalize our services</li>
              <li>Perform halal screening and ensure Shariah compliance</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2>4. How We Share Your Information</h2>
            <p>
              We may share your information with our banking partners or service providers to deliver services, but only as necessary and always in compliance with halal principles.
            </p>
            <p>
              We may share information during business transfers or if required by law. We will never share your data with third parties for non-halal activities.
            </p>
          </section>

          <section className="key-points">
            <h2>Key Commitments</h2>
            <div className="grid">
              <div>
                <h3>Security</h3>
                <p>We use encryption, firewalls, and secure servers to protect your data.</p>
              </div>
              <div>
                <h3>Retention</h3>
                <p>We keep your data only as long as necessary or required by law.</p>
              </div>
              <div>
                <h3>Your Rights</h3>
                <p>You can access, correct, or delete your personal information at any time.</p>
              </div>
              <div>
                <h3>Cookies</h3>
                <p>We use cookies to improve your experience. You can manage them in your browser.</p>
              </div>
              <div>
                <h3>Halal Compliance</h3>
                <p>All data practices align with Shariah principles. No support for non-halal activities.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be posted on our website.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>
              For questions or to exercise your rights, contact us at:
            </p>
            <p>
              Email: <a href="mailto:support@ethikavest.com">support@ethikavest.com</a><br />
              Address: Plot 19 Block IV, Amen Estate Phase 2, Ibeju Lekki, Lagos, Nigeria
            </p>
          </section>

          <footer className="footer">
            <p>© 2024 Ethikavest Limited. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Privacy;