import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="main">
        <a href="/">
          <img
            src={"../../public/Logo.png"}
            alt="logo should be here"
          />
        </a>
      </div>
      <div class="navigation">
        <Link to="/" className="navlink">
          <h2>Home</h2>
        </Link>
        <Link to="/profile" className="navlink">
          <h2>Profile</h2>
        </Link>
        <Link to="/swipe" className="navlink">
          <h2>Swipe</h2>
        </Link>
        <Link to="/description" className="navlink">
          <h2>Description</h2>
        </Link>
      </div>
      {/* <div class={`nav-links-${color}`} style={{ color: color }}>
        <li className="nav-link">Home</li>
        <li className="nav-link">Profile</li>
        <li className="nav-link">Swipe</li>
        <li className="nav-link">Description</li>
      </div> */}
    </nav>
  );
}


