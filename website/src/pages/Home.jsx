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
            Dog Tinder is a website for fellow pet owners to find their missing
            pets from the generosity of other friends 💛
          </div>
        </div>
      </div>

      <div className="home-page">
        <div className="page-heading">
          <div className="page-circles">
            <span className="dot" id="dot1" />
            <span className="dot" id="dot2" />
            <span className="dot" id="dot3" />
            <span className="dot" id="dot4" />
          </div>
          <div className="page-title">
            Find Your Lost Pets with a 69.69% Success Rate
          </div>
        </div>
        <div className="page-cards"></div>
      </div>
    </div>
  );
}

export default Home;
