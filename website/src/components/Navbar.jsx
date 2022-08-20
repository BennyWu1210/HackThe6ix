import React from "react";
import "./Navbar.css";

export default function Navbar({ color }) {
  return (
    <nav className="nav-container">
      <div className="main">
        <a href="/">
          <img
            src={"../../public/Logo.png"}
            alt="logo should be here"
          />
        </a>
      </div>
      <div className={`nav-links-${color}`} style={{ color: color }}>
        <li className="nav-link">Home</li>
        <li className="nav-link">Profile</li>
        <li className="nav-link">Swipe</li>
        <li className="nav-link">Description</li>
      </div>
    </nav>
  );
}


