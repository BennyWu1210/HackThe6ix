import React from "react";
import Navbar from "../components/Navbar";
import "./Swipe.css";

export default function Swipe() {
  let touchStart = 0;
  let touchEnd = 0;
  let whyIsThereVirtualDebouncingThisIsDumb = 0;

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

    document.addEventListener('touchend', e => {
        touchEnd = e.changedTouches[0].screenX;
        if (whyIsThereVirtualDebouncingThisIsDumb !== (touchEnd - touchStart)) {
            whyIsThereVirtualDebouncingThisIsDumb = (touchEnd - touchStart);
            console.log(whyIsThereVirtualDebouncingThisIsDumb)
            if (Math.abs(touchEnd - touchStart) > 100){
                checkDirection();
            }
        }
    })
    return (
        <div className="swipe-body">
            <Navbar color="blue"></Navbar>
            <div className="left-arrow">
                <div className="arrow">←</div>This is not my pet</div>
            <div className="image"></div>
            <div className="right-arrow"><div className="arrow">→</div>This is my pet!</div>

        </div>
    );
}
