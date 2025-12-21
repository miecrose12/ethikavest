import React from 'react';

const Terms = () => {
  return (
    <>
      <style>{`
        .terms-page {
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

        .warning {
          background: #e8f5ef;
          border-left: 5px solid #26975C;
          padding: 20px 24px;
          margin-bottom: 48px;
          border-radius: 8px;
        }

        .warning strong {
          color: #26975C;
          font-weight: 600;
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

      <div className="terms-page">
        <div className="container">
          <header className="header">
            <h1>Terms and Conditions</h1>
            <p className="date">Ethikavest Account • Effective September 1, 2024</p>
          </header>

          <div className="warning">
            <p>
              <strong>If you do not agree to these terms, please do not proceed and exit the application immediately.</strong>
            </p>
            <p>We may terminate your account if we believe you have violated these terms.</p>
          </div>

          <section>
            <h2>1. About Us</h2>
            <p>
              Ethikavest Limited (“we”, “us”, “Ethikavest”) operates ethikavest.com and related mobile apps. We are registered in Nigeria (RC 1873053) and based in Lagos. We are regulated by the Corporate Affairs Commission.
            </p>
            <p>
              Contact: <a href="mailto:support@ethikavest.com">support@ethikavest.com</a> | 08066354117
            </p>
          </section>

          <section>
            <h2>2. Acceptance of Terms</h2>
            <p>
              By using our site or services, you accept these Terms, our Acceptable Use Policy, and Privacy Policy. If you do not agree, do not use the site.
            </p>
            <h3>Prohibited Uses</h3>
            <ul>
              <li>Breaching any law</li>
              <li>Fraudulent or unlawful activity</li>
              <li>Harming or harassing others</li>
              <li>Transmitting spam or viruses</li>
            </ul>
          </section>

          <section>
            <h2>3. Eligibility & Account</h2>
            <p>
              You must be an individual or entity registered in Nigeria. Your account provides access to Qard Savings, Debit Cards, and other services via our Banking Partner.
            </p>
            <p>You may not use the account for third parties or non-business purposes.</p>
          </section>

          <section className="key-points">
            <h2>Key Terms Summary</h2>
            <div className="grid">
              <div>
                <h3>Access</h3>
                <p>You provide your own internet and devices.</p>
              </div>
              <div>
                <h3>Intellectual Property</h3>
                <p>All content belongs to Ethikavest. Limited license granted.</p>
              </div>
              <div>
                <h3>Security</h3>
                <p>Keep login details confidential. Notify us of breaches.</p>
              </div>
              <div>
                <h3>Third-Party Links</h3>
                <p>We are not responsible for external sites.</p>
              </div>
              <div>
                <h3>Data & Migration</h3>
                <p>We may migrate your account to another bank with notice.</p>
              </div>
              <div>
                <h3>Termination</h3>
                <p>We may suspend or terminate your account at any time.</p>
              </div>
              <div>
                <h3>Liability</h3>
                <p>We are not liable for indirect or consequential damages.</p>
              </div>
              <div>
                <h3>Governing Law</h3>
                <p>Nigerian law applies.</p>
              </div>
              <div>
                <h3>Disputes</h3>
                <p>Resolved via mediation or arbitration in Nigeria. Max claim: ₦30,000.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use after changes means you accept them.
            </p>
          </section>

          <footer className="footer">
            <p>© 2024 Ethikavest Limited. All rights reserved.</p>
            <p><a href="mailto:support@ethikavest.com">support@ethikavest.com</a></p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Terms;