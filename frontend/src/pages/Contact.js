import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Ottinger Construction"; // ✅ Update Title
  }, []);

  return <h1>Contact Us</h1>;
};

export default Contact;
