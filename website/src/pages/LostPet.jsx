import React, { useState } from "react";
import "./LostPet.css";
import Navbar from "../components/Navbar";
import Select from "react-select";

function LostPet() {
  const [specie, setSpecie] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState([]);
  const [img, setImage] = useState(null);

  const options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "fish", label: "Fish" },
    { value: "giraffe", label: "Giraffe" },
    { value: "other", label: "Other" },
  ];
  console.log(specie);
  return (
    <div className="lost-container">
      <Navbar color="white" />
      <div className="lost-form">
        <form
          className="lost-species"
          getValue={(e) => setSpecie(e.currentTarget.value)}
        >
          <p className="lost-species-text">What specie is the pet?</p>
          <Select options={options} />
          {specie == "other" && <input />}
        </form>
      </div>
    </div>
  );
}

export default LostPet;
