import React, { useState } from "react";
import "./reserve.css";

const WaitlistContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Contact form states (unchanged)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: "" });

  // New: Waitlist modal form states
  const [waitlistData, setWaitlistData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);
  const [waitlistMessage, setWaitlistMessage] = useState("");
  const [waitlistSuccess, setWaitlistSuccess] = useState(null); // true/false/null

  const openModal = () => {
    setIsModalOpen(true);
    // Reset waitlist form every time modal opens
    setWaitlistData({ firstname: "", lastname: "", email: "" });
    setWaitlistMessage("");
    setWaitlistSuccess(null);
    setIsWaitlistSubmitting(false);
  };

  const closeModal = () => setIsModalOpen(false);

  // Handle waitlist input changes
  const handleWaitlistChange = (e) => {
    const { name, value } = e.target;
    setWaitlistData((prev) => ({ ...prev, [name]: value }));
  };

  // Updated: Real API submission for waitlist
  const handleSubmitWaitlist = async (e) => {
    e.preventDefault();
    setIsWaitlistSubmitting(true);
    setWaitlistMessage("");
    setWaitlistSuccess(null);

    // Basic client-side validation
    if (!waitlistData.firstname || !waitlistData.lastname || !waitlistData.email) {
      setWaitlistMessage("Please fill in all fields.");
      setWaitlistSuccess(false);
      setIsWaitlistSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://halalbackend-production-76e9.up.railway.app/api/joinlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: waitlistData.firstname.trim(),
            lastname: waitlistData.lastname.trim(),
            email: waitlistData.email.trim(),
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setWaitlistSuccess(true);
        setWaitlistMessage(
          result.message || "You have successfully joined the waiting list!"
        );

        // Auto-close modal after 3 seconds
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        setWaitlistSuccess(false);
        setWaitlistMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setWaitlistSuccess(false);
      setWaitlistMessage("Network error. Please check your connection.");
    } finally {
      setIsWaitlistSubmitting(false);
    }
  };

  // Contact form handlers (unchanged except minor cleanup)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ success: false, error: "" });
    setIsSubmitting(true);

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
            phone: formData.phone.trim() || "",
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message.");
      }

      setSubmitStatus({ success: true, error: "" });
      setFormData({ fullname: "", email: "", phone: "", message: "" });
    } catch (err) {
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
      {/* Waitlist Section */}
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

      {/* Contact Form Section (unchanged structure) */}
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
              {/* Form fields remain the same */}
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
                    <a href="/terms" className="underline-link">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline-link">Privacy Policy</a>
                  </p>
                </div>

                {submitStatus.error && (
                  <p style={{ color: "red", margin: "10px 0" }}>{submitStatus.error}</p>
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

      {/* Updated Waitlist Modal with API integration */}
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

            {/* Success/Error Message */}
            {waitlistMessage && (
              <div
                className="modal-message"
                style={{
                  padding: "12px",
                  margin: "16px 0",
                  borderRadius: "8px",
                  textAlign: "center",
                  backgroundColor: waitlistSuccess ? "#d4edda" : "#f8d7da",
                  color: waitlistSuccess ? "#155724" : "#721c24",
                  border: `1px solid ${waitlistSuccess ? "#c3e6cb" : "#f5c6cb"}`,
                }}
              >
                {waitlistMessage}
              </div>
            )}

            {/* Show form only if not successfully submitted */}
            {!waitlistSuccess && (
              <form onSubmit={handleSubmitWaitlist}>
                <div>
                  <div className="modal-name-label">Name*</div>
                  <div className="modal-name-row">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      className="modal-name-input"
                      value={waitlistData.firstname}
                      onChange={handleWaitlistChange}
                      required
                      disabled={isWaitlistSubmitting}
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      className="modal-name-input"
                      value={waitlistData.lastname}
                      onChange={handleWaitlistChange}
                      required
                      disabled={isWaitlistSubmitting}
                    />
                  </div>
                </div>

                <div className="modal-email-wrapper">
                  <div className="modal-email-label">Email*</div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="modal-email-input"
                    value={waitlistData.email}
                    onChange={handleWaitlistChange}
                    required
                    disabled={isWaitlistSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  className="modal-join-btn"
                  disabled={isWaitlistSubmitting}
                >
                  {isWaitlistSubmitting ? "Joining..." : "Join Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WaitlistContactSection;