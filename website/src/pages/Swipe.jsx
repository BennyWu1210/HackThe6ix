import React from "react";
import Navbar from "../components/Navbar";
import "./Swipe.css";

export default function Swipe() {
  let touchStart = 0;
  let touchEnd = 0;

  function checkDirection() {
    if (touchEnd < touchStart) {
      console.log("left");
    } else if (touchEnd > touchStart) {
      console.log("right");
    }
  }

  document.addEventListener("touchstart", (e) => {
    touchStart = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchEnd = e.changedTouches[0].screenX;
    checkDirection();
  });
  return (
    <div>
      <Navbar color="red"></Navbar>
    </div>
  );
}
