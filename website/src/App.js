import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";
import Contact from "./pages/Contact";
import LostPet from "./pages/LostPet";
import FoundPet from "./pages/FoundPet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/lost-pet" element={<LostPet />} />
        <Route path="/profile/found-pet" element={<FoundPet />} />
      </Routes>
    </Router>
  );
}

export default App;
