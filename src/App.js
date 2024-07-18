// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
      {/* Other components or content */}
      <h1>This is my website!</h1>
        <p>This website is my project given to me by Alex.</p>
      </div>
      <footer>
        <p>&copy; 2024 ibankings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
