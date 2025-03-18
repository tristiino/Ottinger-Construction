import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../App.css'; 

const Home = () => {
  useEffect(() => {
    document.title = "Home | Ottinger Construction";
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
        <p>Established in 1983, we are a family-owned business specializing in high-quality construction, remodeling, and interior/exterior renovation services. Known for our honesty and reliability, we also offer financing options to help bring your vision to life</p>
      </section>

      {/* Service Sections */}
      <section className="service-sections">
        <Link to="/services" className="service-box">
          <img src="/assets/construction.png" alt="Construction" className="service-image" />
          <h2>Construction</h2>
        </Link>
        <Link to="/services" className="service-box">
          <img src="/assets/remodeling.png" alt="Remodeling" className="service-image" />
          <h2>Remodeling</h2>
        </Link>
        <Link to="/services" className="service-box">
          <img src="/assets/exterior.png" alt="Exterior" className="service-image" />
          <h2>Exterior</h2>
        </Link>
      </section>

      {/* Text Section */}
      <section className="info-text">
        <p>Your dream project is just one step away. Contact us today to get started!</p>
      </section>
    </div>
  );
};

export default Home;