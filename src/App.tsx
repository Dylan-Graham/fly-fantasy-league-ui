import React from "react";
import "./App.css";
import { Leaderboard } from "./components/Leaderboard";
import { FlyAppBar } from "./components/FlyAppBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlyAppBar></FlyAppBar>
        <Leaderboard></Leaderboard>
      </header>
    </div>
  );
}

export default App;
