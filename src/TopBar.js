// TopBar.js
import React from 'react';
import './TopBar.css'; // Import your CSS file

const TopBar = () => {
  return (
    <nav className="top-bar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default TopBar;
