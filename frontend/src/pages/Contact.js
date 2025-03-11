import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'; // Ensure styles are applied

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Ottinger Construction"; // ✅ Update Title
  }, []);

  const formRef = useRef(); // ✅ Create reference for form

  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // ✅ Ensure ENV vars are set
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current, // ✅ Use form reference
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSent(true);
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {isSent ? (
        <p className="success-message">✅ Message sent successfully!</p>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Message *</label>
          <textarea name="comments" value={formData.comments} onChange={handleChange} required />

          <button type="submit">Send Now</button>
        </form>
      )}
    </div>
  );
};

export default Contact;