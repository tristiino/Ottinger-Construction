import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = "Services | Ottinger Construction"; // ✅ Update Title
  }, []);

  return <h1>Our Services</h1>;
};

export default Services;
