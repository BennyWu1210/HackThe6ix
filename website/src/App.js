import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";
import Description from "./pages/Description";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/swipe' element={<Swipe/>} />
        <Route path='/description' element={<Description/>} />
      </Routes>
    </Router>
  );
}

export default App;
