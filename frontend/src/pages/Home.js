import React, { useEffect } from 'react';
import '../App.css'; // Ensure styling is applied

const Home = () => {
  useEffect(() => {
    document.title = "Home | Ottinger Construction"; // Update page title
  }, []);

  return (
    <div className="home-container">
      {/* Logo Section */}
      <header className="logo-header">
        <img src="/assets/mocklogo.png" alt="Ottinger Construction Logo" className="logo" />
      </header>

      {/* Overview Section */}
      <section className="overview">
        <h1>Welcome to Ottinger Construction</h1>
        <p>We specialize in high-quality construction, remodeling, and exterior renovation services.</p>
      </section>

      {/* Service Sections */}
      <section className="service-sections">
        <div className="service-box">
          <img src="/assets/construction.png" alt="Construction" className="service-image" />
          <h2>Construction</h2>
        </div>
        <div className="service-box">
          <img src="/assets/remodeling.png" alt="Remodeling" className="service-image" />
          <h2>Remodeling</h2>
        </div>
        <div className="service-box">
          <img src="/assets/exterior.png" alt="Exterior" className="service-image" />
          <h2>Exterior</h2>
        </div>
      </section>

      {/* Text Section */}
      <section className="info-text">
        <p>Your dream project is just one step away. Contact us today to get started!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ottinger Construction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
