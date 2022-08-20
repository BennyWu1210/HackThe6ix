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

<<<<<<< HEAD
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
=======
    document.addEventListener('touchend', e => {
        touchEnd = e.changedTouches[0].screenX
    checkDirection()
    })
    return (
        <div className="swipe-body">
            <Navbar color="blue"></Navbar>
            <div className="left-arrow"></div>
            <div className="image"></div>
            <div className="right-arrow"></div>

        </div>
    );
}
>>>>>>> 1f4bdf52124dc86fb9b0e45e5b0ece254fc66207
