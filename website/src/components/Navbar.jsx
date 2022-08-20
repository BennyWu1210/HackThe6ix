import React from "react";
import "./Navbar.css";

function Navbar({ color }) {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <p>Hello</p>
      </div>
      <div className={`nav-links-${color}`} style={{ color: color }}>
        <li className="nav-link">Home</li>
        <li className="nav-link">Profile</li>
        <li className="nav-link">Swipe</li>
        <li className="nav-link">Description</li>
      </div>
    </div>
  );
}

export default Navbar;
