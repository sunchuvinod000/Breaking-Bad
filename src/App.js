import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails.js";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/userdetails/:id" component={UserDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
