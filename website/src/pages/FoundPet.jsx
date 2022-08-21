import React, { useState } from "react";
import "./FoundPet.css";
import Navbar from "../components/Navbar";
import Select from "react-select";

function FoundPet() {
  const [species, setSpecies] = useState("");
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

  console.log("Hi");
  return (
    <div className="found-container">
      <Navbar color="white" />
      <div className="found-form">
        <form
          className="foundnp-species"
          getValue={(e) => setSpecies(e.currentTarget.value)}
          method="POST"
          action="/Profile/found-pet"
          enctype="multipart/form-data"
        >
          <p className="found-species-text">What species is the pet?</p>
          <Select
            name="species"
            onDataChange={(value, action) => {
              this.setState({
                [action.name]: value,
              });
            }}
            options={optionsSpecies}
          />
          {species == "other" && <input />}
          <p className="found-species-text">Colour of pet</p>
          <input type="color" name="colour"></input>
          <p className="found-species-text">Size of pet</p>
          <input type="radio" id="large" value="large" name="size"></input>
          <label htmlFor="large">
            <img
              className="found-image"
              src={require("../images/large.jpg")}
            ></img>
          </label>
          <br></br>
          <input type="radio" id="medium" value="medium" name="size"></input>
          <label htmlFor="medium">
            <img
              className="found-image"
              src={require("../images/medium.jpg")}
            ></img>
          </label>
          <br></br>
          <input type="radio" id="small" value="small" name="size"></input>
          <label htmlFor="small">
            <img
              className="found-image"
              src={require("../images/small.jpg")}
            ></img>
          </label>
          <br></br>
          <p className="lost-species-text">Upload an image (optional)</p>
          <input type="file" name="image" accept="image/*"/>
          <p>Email</p>
          <input type="email" name="contact"></input>
          <input type="submit"></input>
        </form>
        <img
          src={require("../images/Pet5.gif")}
          alt="cute dog"
          className="found-gif"
        />
      </div>
    </div>
  );
}

export default FoundPet;
