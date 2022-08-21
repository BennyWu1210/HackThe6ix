import React, { useState } from "react";
import "./FoundPet.css";
import Navbar from "../components/Navbar";
import Select from "react-select";

function FoundPet() {
  const [specie, setSpecie] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState([]);
  const [img, setImage] = useState(null);

  const optionsSpecies = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "fish", label: "Fish" },
    { value: "giraffe", label: "Giraffe" },
    { value: "other", label: "Other" },
  ];
  
  return (
    <div className="found-container">
      <Navbar color="white" />
      <div className="found-form">
        <form
          className="foundnp-species"
          getValue={(e) => setSpecie(e.currentTarget.value)}
          method="POST"
          action="/Profile/found-pet"
        >
          <p className="found-species-text">What specie is the pet?</p>
          <Select 
            name="species"
            onDataChange={(value, action) => {
              this.setState({
                  [action.name]: value
              })
          }}
            options={optionsSpecies} />
          {specie == "other" && <input />}
          <p>Colour of pet</p>
          <input type="color" name="colour"></input>
          <p>Size of pet</p>
          <input type="radio" id="large" name="size"></input>
          <label for="large"><img src={require("../images/large.jpg")}></img></label><br></br>
          <input type="radio" id="medium" name="size"></input>
          <label for="medium"><img src={require("../images/medium.jpg")}></img></label><br></br>
          <input type="radio" id="small" name="size"></input>
          <label for="small"><img src={require("../images/small.jpg")}></img></label><br></br>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default FoundPet;
