import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useSwipeable } from "react-swipeable";
import "./Swipe.css";

export default function Swipe() {
  // let touchStart = 0;
  // let touchEnd = 0;
  // let whyIsThereVirtualDebouncingThisIsDumb = 0;
  // const ref = React.useRef();

  // function checkDirection() {
  //   if (touchEnd < touchStart) {
  //     console.log("left");
  //   } else if (touchEnd > touchStart) {
  //     console.log("right");
  //   }
  // }
  const lol = [
    {
      image: require("../images/hdgehg.jpg"),
      text: "spikeboi roll"
    },
    {
      image: require("../images/louis.jpg"),
      text: "ice ice baby"
    },
    {
      image: require("../images/sonic.jpg"),
      text: "gotta go fast"
    },
    {
      image: require("../images/toystory.png"),
      text: "angy hdgehog"
    },
    {
      image: require("../images/shaymin.jpg"),
      text: "gotta catch 'em all!"
    },
    {
      image: require("../images/spiky.png"),
      text: "thing in a bowl... is it tasty?"
    }
  ]
  const [testingStuffLol, setStuff] = useState(
    <span style={{ fontSize: "100px" }}>Try Swiping</span>
  );
  const [bruh, setBruh] = useState(0)
  const handlers = useSwipeable({
    // Vivian: Just replace this arrow function ("setStuff") as the event listener
    onSwipedLeft: (eventData) =>
      // setStuff(
      //   <p
      //     style={{
      //       fontSize: "3rem",
      //       position: "absolute",
      //       left: 400,
      //       right: 500,
      //     }}
      //   >
      //     :( not your pet
      //   </p>
      // ),
      setBruh(bruh + 1),
    onSwipedRight: (eventData) =>
      setStuff(
        <p
          style={{
            fontSize: "3rem",
            position: "absolute",
            left: 1000,
            right: 500,
          }}
        >
          Your pet is with <a target="_blank" href="mailto:rainbow@gmail.com">rainbow@gmail.com</a>
        </p>
      ),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
  });
  // Orz Vivian I am super clueless with this:
  // document.addEventListener("touchstart", (e) => {
  //   touchStart = e.changedTouches[0].screenX;
  // });

  // document.addEventListener("touchend", (e) => {
  //   touchEnd = e.changedTouches[0].screenX;
  //   if (whyIsThereVirtualDebouncingThisIsDumb !== touchEnd - touchStart) {
  //     whyIsThereVirtualDebouncingThisIsDumb = touchEnd - touchStart;
  //     console.log(whyIsThereVirtualDebouncingThisIsDumb);
  //     if (Math.abs(touchEnd - touchStart) > 100) {
  //       checkDirection();
  //     }
  //   }
  // });
  return (
    <div className="swipe-body">
      <Navbar color="blue"></Navbar>
      <h3 style={{ fontSize: "30px", color: "#232323", textAlign: "center" }}>
        Click to swipe
      </h3>

      <div className="swipe-content" {...handlers}>
        
        <div className="left-side">
          <p className="left-arrow">←</p>
          <p className="left-desc">This is not my pet</p>
        </div>

        <div className="image">
          <Card
            className="hedgehogbruhmoment"
            name="Hedgehog"
            text={lol[bruh%lol.length].text}
            image={lol[bruh%lol.length].image}
            isMoving="false"
          />
        </div>
        
        <div className="right-side">
          <p className="right-arrow">→</p>
          <p className="right-desc">This is my pet!</p>
        </div>
      
      </div>
      {testingStuffLol}
      <Footer></Footer>
    </div>
  );
}
