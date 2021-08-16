import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Shoes from "./Components/pages/Shoes";
import Shirts from "./Components/pages/Shirts";
import Pants from "./Components/pages/Pants";
import Success from "./Components/pages/Success";
import NavBar from "./Components/Views/NavBar/NavBar";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Shoes">
            <Shoes />
          </Route>
          <Route path="/Shirts">
            <Shirts />
          </Route>
          <Route path="/Pants">
            <Pants />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
