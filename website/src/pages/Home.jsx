import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar color="red" />
      <div className="home-hero">
        <div className="home-image">
          <img className="dog" src={require("../images/doggie.png")} />
        </div>
        <div className="home-content">
          <div className="home-title">Find Your Perfect Match</div>
          <div className="home-content">
            Dog Tinder is a website for fellow pet owners to find each other! 💛
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
