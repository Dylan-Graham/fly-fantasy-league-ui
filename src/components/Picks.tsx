import React from "react";
import "./Picks.css";
import { AddAthlete } from "./Add-Athlete";

export interface athlete {
  id: number;
  name: string;
}

const tierA: athlete[] = [
  { id: 1, name: "Andrea Principe" },
  { id: 2, name: "Giel Vlugte" },
  { id: 3, name: "Luca Ceruti" },
  { id: 4, name: "Lorenzo Casati" },
];

const tierB = [
  { id: 1, name: "Cohan Van Djik" },
  { id: 2, name: "Stig Hoefnagel" },
  { id: 3, name: "Milan Lukic" },
  { id: 4, name: "Ross-Dillon Player" },
  { id: 5, name: "Jett Bradshaw" },
];

const tierC = [
  { id: 1, name: "Robby James" },
  { id: 2, name: "Julian Zens" },
  { id: 3, name: "Dylan Graham" },
  { id: 4, name: "Aron Rosslee" },
  { id: 5, name: "Rob Kritzinger" },
];

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
        <AddAthlete athletes={tierA} />
        <AddAthlete athletes={tierA} />
      </div>

      <div>
        <h4>Tier B (top 12)</h4>
        <AddAthlete athletes={tierB} />
        <AddAthlete athletes={tierB} />
        <AddAthlete athletes={tierB} />
        <AddAthlete athletes={tierB} />
      </div>

      <div>
        <h4>Tier C (Wild Picks)</h4>
        <AddAthlete athletes={tierC} />
        <AddAthlete athletes={tierC} />
      </div>
    </div>
  );
};
