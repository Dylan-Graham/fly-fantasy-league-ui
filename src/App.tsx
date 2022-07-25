import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Leaderboard } from "./components/Leaderboard";
import { NavBar } from "./components/NavBar";
import { Picks } from "./components/Picks";
import { Home } from "./components/Home";
import { Account } from "./components/Account";

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
