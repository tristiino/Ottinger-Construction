import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Home | Ottinger Construction"; // ✅ Update Title
  }, []);

  return <h1>Welcome to Ottinger Construction</h1>;
};

export default Home;
