import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form values:", formData);

    setLoading(true);
    setStatusMessage("");

    try {
      const formEncodedData = new URLSearchParams();

      formEncodedData.append("fullName", formData.fullName);
      formEncodedData.append("phoneNumber", formData.phoneNumber);
      formEncodedData.append("email", formData.email);
      formEncodedData.append("message", formData.message);

      const response = await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formEncodedData,
      });

      console.log("Status:", response.status);

      const result = await response.text();

      console.log("Response:", result);

      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");

        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Have Questions About Planetary Science?</h2>
          <p>
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed? Reach out and we’ll get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Full Name<span>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Phone Number<span>*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Please enter a valid phone number."
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Message<span>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              maxLength="100"
              required
            ></textarea>
            <small>100 characters</small>
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
            {!loading && <span>›</span>}
          </button>

          {statusMessage && (
            <p className="form-status-message">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
