import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Let us know how we can help.</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      <footer className="contact-footer">
        <p>Get in Touch: <a href="mailto:contact@NeuroBank.com">contact@NeuroBank.com</a></p>
        <p>© 2025 NeuroBank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;