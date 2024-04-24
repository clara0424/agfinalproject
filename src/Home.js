import React from 'react';
import './Home.css';
import background from './background.jpg';
import perfumevideo from './perfumevideo/perfumevid.mp4'; // Corrected import statement with file extension

function Home() {
  return (
    <div className="home-container">
      <video controls>
        <source src={perfumevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="additional-content">
            <h2 className="contact-title">Contact Me</h2>
            <p className="fragrance-info">Explore our wide range of fragrances and find the one that suits you best.</p>
        </div>
    </div>
  );
}

export default Home;
