import React from "react";
import "./Picks.css";
import { AddAthlete } from "./Add-Athlete";

export const Picks = () => {
  return (
    <div className="picks">
      <h2>My Team</h2>
      <hr className="hr"></hr>
      <div>
        <p>Event: Cape Town Pro</p>
      </div>

      <div>
        <h4>Tier A (top 6)</h4>
        <AddAthlete />
        <AddAthlete />
      </div>

      <div>
        <h4>Tier B (top 12)</h4>
        <AddAthlete />
        <AddAthlete />
        <AddAthlete />
        <AddAthlete />
      </div>

      <div>
        <h4>Tier C (Wild Picks)</h4>
        <AddAthlete />
        <AddAthlete />
      </div>
    </div>
  );
};
