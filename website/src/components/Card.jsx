import React from "react";
import "./Card.css";

function Card({ image, text, name }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <p className="card-text">{text}</p>
        <p className="card-name">-{name}</p>
      </div>
    </div>
  );
}

export default Card;
