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
        <form className="lost-species" method="POST" action="/Profile/lost-pet">
          <p className="lost-species-text">What specie is the pet?</p>
          <Select
            name="species"
            onDataChange={(value, action) => {
              this.setState({
                [action.name]: value,
              });
            }}
            options={options}
          />
          {specie == "other" && <input />}
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default LostPet;
