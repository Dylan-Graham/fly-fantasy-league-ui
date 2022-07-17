import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Leaderboard } from "./components/Leaderboard";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/leaderboard" component={Leaderboard} exact={true} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
