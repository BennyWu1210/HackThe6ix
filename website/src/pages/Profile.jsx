import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Route, Routes, Link } from "react-router-dom";
import "./Profile.css";
import LostPet from "./LostPet";
import FoundPet from "./FoundPet";

export default function Profile() {
  return (
    <div className="prof-container">
      <Navbar color="red" />
      <p className="prof-title">Do you have...</p>
      <div className="prof-options">
        <Link to="lost-pet" element={<LostPet />}>
          <div className="prof-option-1">
            <div className="prof-image">
              <img alt="Pet Image" src={require("../images/Pet2.png")} />
              <p className="prof-image-content">A Lost Pet?</p>
            </div>
          </div>
        </Link>
        <Link to="found-pet" element={<FoundPet />}>
          <div className="prof-option-2">
            <div className="prof-image">
              <img alt="Pet Image" src={require("../images/Pet3.png")} />
              <p to="lost-pet" className="prof-image-content">
                A Found Pet?
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
}
