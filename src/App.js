// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section className="section" id="home">
          <header className="App-header">
            <h1>Welcome to My Website</h1>
            <p>This is the home page section.</p>
            <button className="cta-button">Learn More</button>
          </header>
        </section>
        <section className="section" id="about">
          <div className="section-content">
            <h2>About Us</h2>
            <p>Get to know more about us and our story.</p>
            <button className="cta-button">Read More</button>
          </div>
        </section>
        <section className="section" id="services">
          <div className="section-content">
            <h2>Our Services</h2>
            <p>Discover the services we offer to help you succeed.</p>
            <button className="cta-button">Explore Services</button>
          </div>
        </section>
        <section className="section" id="blog">
          <div className="section-content">
            <h2>Blog</h2>
            <p>Check out our latest blog posts and updates.</p>
            <button className="cta-button">Visit Blog</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
