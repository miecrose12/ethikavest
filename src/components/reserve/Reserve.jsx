import React, { useState } from "react"; // <-- This fixes the useState error!
import "./reserve.css"; // Your external CSS

const WaitlistContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Contact form states
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: "" });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Waitlist modal submission (unchanged, no API yet)
  const handleSubmitWaitlist = (e) => {
    e.preventDefault();
    alert("Thank you for joining the waitlist!"); // Placeholder
    closeModal();
  };

  // Handle contact form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle contact form submission to backend
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ success: false, error: "" });
    setIsSubmitting(true);

    // Basic validation
    if (!formData.fullname || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        error: "Please fill in all required fields (Name, Email, Message).",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://halalbackend-production-76e9.up.railway.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone.trim() || "", // Optional
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message.");
      }

      // Success
      setSubmitStatus({ success: true, error: "" });
      setFormData({ fullname: "", email: "", phone: "", message: "" }); // Reset
      alert("Message sent successfully!");
    } catch (err) {
      console.error("Contact submission error:", err);
      setSubmitStatus({
        success: false,
        error: err.message || "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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

      {/* Contact Form Section - Fully Integrated */}
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
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group form-group-name">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name*"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required
                />
                <div className="underline"></div>
              </div>

              <div className="form-group form-group-email">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div className="underline"></div>
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <div className="underline"></div>
              </div>

              <div className="form-group form-group-message">
                <div className="message-input-wrapper">
                  <textarea
                    name="message"
                    rows={5}
                    className="form-textarea"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label className="form-label form-label-message">Your message*</label>
                  <div className="underline"></div>
                </div>
              </div>

              <div className="form-footer">
                <div className="checkbox-wrapper">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <input type="checkbox" className="custom-checkbox" required />
                    <span className="checkbox-box"></span>
                  </label>
                  <p className="terms-text">
                    I agree with the{" "}
                    <a href="#" className="underline-link">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline-link">Privacy Policy</a>
                  </p>
                </div>

                {/* Feedback Messages */}
                {submitStatus.error && (
                  <p style={{ color: "red", margin: "10px 0" }}>
                    {submitStatus.error}
                  </p>
                )}
                {submitStatus.success && (
                  <p style={{ color: "green", margin: "10px 0" }}>
                    Message sent successfully!
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-send"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Waitlist Modal - unchanged */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="modal-title">Join the Waitlist</h2>

            <form onSubmit={handleSubmitWaitlist}>
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