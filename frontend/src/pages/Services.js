import React, { useEffect } from 'react';
import '../App.css'; // Ensure styling is applied

const Services = () => {
  useEffect(() => {
    document.title = "Services | Ottinger Construction"; // ✅ Update Title
  }, []);

  return (
    <div className="services-container">
      <h1 className="services-header">Our Services</h1>

      <div className="services-content">
        {/* Construction */}
        <div className="service-section">
          <img src="/assets/construction.png" alt="Construction" className="service-image" />
          <div className="service-text">
            <h2>Construction</h2>
            <p>We offer expert construction services, ensuring quality craftsmanship for all projects.</p>
          </div>
        </div>

        {/* Remodeling */}
        <div className="service-section">
          <img src="/assets/remodeling.png" alt="Remodeling" className="service-image" />
          <div className="service-text">
            <h2>Remodeling</h2>
            <p>Our remodeling services help bring new life to your home with modern designs.</p>
          </div>
        </div>

        {/* Exterior */}
        <div className="service-section">
          <img src="/assets/exterior.png" alt="Exterior" className="service-image" />
          <div className="service-text">
            <h2>Exterior</h2>
            <p>Enhance your home's curb appeal with our professional exterior renovation services.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;