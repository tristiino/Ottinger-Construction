import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "About | Ottinger Construction"; // ✅ Update Title
  }, []);

  return <h1>About Us</h1>;
};

export default About;
