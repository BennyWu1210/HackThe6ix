import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Swipe from "./pages/Swipe";
import Description from "./pages/Description";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home></Home>}></Route>
        <Route exact path="/profile" render={() => <Profile></Profile>}></Route>
        <Route exact path="/swipe" render={() => <Swipe></Swipe>}></Route>
        <Route exact path="/description" render={() => <Description></Description>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
