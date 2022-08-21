import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
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
        <div className="page-cards">
          <Card
            name="Vivian Dai"
            text={'"100% Recommend! Found my dog within 2 hours of reporting!"'}
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
          <Card
            name="Benny Wu"
            text={
              '"I was so worried after losing my goldfish Ben Jr. while taking him on a walk! Luckily Furry Finder helped me locate Ben Jr. immediately!"'
            }
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
          <Card
            name="Rainbow Huang"
            text={
              '"Found my whore slut bitch ass dog with Furry Finder #mydogisacat"'
            }
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
          <Card
            name="Claire Wang"
            text={'"My parents used this service to find me"'}
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
          <Card
            name="Lala"
            text="I literally have skin cancer"
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
          <Card
            name="Lala"
            text="I literally have skin cancer"
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
          <Card
            name="Claire Wang"
            text="Thanks to Rainbow Huang I was able to reunite with my beloved
                  Spiky the Hedgehog in less than 69 hours after his first disappearance!"
            image={require("../images/Pet1.jpg")}
            isMoving="true"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
