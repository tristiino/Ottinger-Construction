import React, { useEffect } from 'react';
import '../App.css';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Ottinger Construction"; // ✅ Update Title
  }, []);

  return (
    <div className="about-container">
      {/* Page Header */}
      <h1>About Us</h1>

      {/* Bio Section */}
      <section className="bio-section">
        <p>
          At Ottinger Construction, we are dedicated to delivering top-quality construction, 
          remodeling, and exterior renovation services. With years of experience, 
          we take pride in our craftsmanship and commitment to excellence.
        </p>
      </section>

      {/* Mission Statement Section */}
      <section className="mission-statement">
        <div className="mission-box">
          <img src="/assets/mission1.png" alt="Our Values" className="mission-image" />
          <p>We prioritize integrity and quality in every project.</p>
        </div>
        <div className="mission-box">
          <img src="/assets/mission2.png" alt="Customer Focus" className="mission-image" />
          <p>Customer satisfaction is our top priority.</p>
        </div>
        <div className="mission-box">
          <img src="/assets/mission3.png" alt="Innovation" className="mission-image" />
          <p>We embrace modern designs and techniques.</p>
        </div>
      </section>
    </div>
  );
};

export default About;