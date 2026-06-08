import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form values:", formData);
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

          <button type="submit" className="contact-submit-btn">
            Submit <span>›</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
