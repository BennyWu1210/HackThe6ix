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
            onChange={(e) => setSpecie(e.value)}
            onDataChange={(value, action) => {
              this.setState({
                [action.name]: value,
              });
            }}
            options={options}
          />
          {specie == "other" && (
            <input
              style={{ height: "30px", borderRadius: "10px" }}
              onChange={(e) => setSpecie(e.currentTarget.value)}
            />
          )}
          <br />
          <input type="submit" />
        </form>
        <form className="lost-species">
          <p className="lost-species-text">What breed is the pet?</p>
          <input
            style={{ height: "30px", borderRadius: "10px" }}
            onChange={(e) => setBreed(e.currentTarget.value)}
          />
        </form>
        <form className="lost-species">
          <p className="lost-species-text">What color is the pet?</p>
          <input type="color" name="colour"></input>
        </form>
        <form className="lost-species">
          <p className="lost-species-text">Upload an image (optional)</p>
          <input type="file" name="colour"></input>
        </form>
      </div>
    </div>
  );
}

export default LostPet;
