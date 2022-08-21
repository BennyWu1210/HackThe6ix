import React, { useState } from "react";
import "./LostPet.css";
import Navbar from "../components/Navbar";
import Select from "react-select";

function LostPet() {
  const [species, setSpecies] = useState("");
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
  console.log(species);
  return (
    <div className="lost-container">
      <Navbar color="white" />
      <div className="lost-form">
        <form className="lost-species" method="POST" action="/Profile/lost-pet">
          <p className="lost-species-text">What species is the pet?</p>
          <Select
            name="species"
            onChange={(e) => setSpecies(e.value)}
            onDataChange={(value, action) => {
              this.setState({
                [action.name]: value,
              });
            }}
            options={options}
          />
          {species == "other" && (
            <input
              style={{ height: "30px", borderRadius: "10px" }}
              onChange={(e) => setSpecies(e.currentTarget.value)}
            />
          )}
          <br />
          <p className="lost-species-text">What breed is the pet?</p>
          <input
            style={{ height: "30px", borderRadius: "10px" }}
            onChange={(e) => setBreed(e.currentTarget.value)}
          />
          <p className="lost-species-text">What color is the pet?</p>
          <input type="color" name="colour" />
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
          </label><br/><br/>
          <br />
          <input type="submit" className="lost-button" />
        </form>
        <img
          src={require("../images/Pet4.gif")}
          alt="cute giraffe"
          className="lost-gif"
        />
      </div>
    </div>
  );
}

export default LostPet;
