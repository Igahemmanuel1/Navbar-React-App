// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1>This is my website!</h1>
        <p>This website is my project given to me by Alex.</p>
      </div>
      <section className="section">
        <div className="content">
          <h2>About Us</h2>
          <p>Learn more about our company and our mission.</p>
          <button className="cta-button">Read More</button>
        </div>
      </section>
      <section className="section">
        <div className="content">
          <h2>Services</h2>
          <p>Discover the wide range of services we offer.</p>
          <button className="cta-button">Explore Services</button>
        </div>
      </section>
      <section className="section">
        <div className="content">
          <h2>Blog</h2>
          <p>Read our latest blog posts and updates.</p>
          <button className="cta-button">Visit Blog</button>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 ibankings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
