import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { Leaderboard } from "./Leaderboard";
import { NavBar } from "./NavBar";
import { Picks } from "./Picks";
import { Home } from "./Home";
import { Account } from "./Account";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/" component={Login} exact={true} />
            <Route path="/leaderboard" component={Leaderboard} exact={true} />
            <Route path="/picks" component={Picks} exact={true} />
            <Route path="/account" component={Account} exact={true} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
