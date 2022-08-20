import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ color }) {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <a href="/">
          <img src={"/Logo.png"} alt="logo should be here" />
        </a>
      </div>

      <div className="nav-links">
        <Link className={`nav-link-${color}`} to="/">
          Home
        </Link>
        <Link className={`nav-link-${color}`} to="/Profile">
          Profile
        </Link>
        <Link className={`nav-link-${color}`} to="/Swipe">
          Swipe
        </Link>
        <Link className={`nav-link-${color}`} to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
