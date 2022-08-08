import React from "react";
import "./Picks.css";
import { AddAthlete } from "./Add-Athlete";

export interface athlete {
  id: number;
  name: string;
  position: number;
  score: number;
  url: string;
}

const tierA: athlete[] = [
  {
    id: 1,
    name: "Andrea Principe",
    position: 1,
    score: 500,
    url: "/assets/images/andrea_principe.png",
  },
  {
    id: 2,
    name: "Giel Vlugte",
    position: 1,
    score: 500,
    url: "/assets/images/giel_vlugte.png",
  },
  {
    id: 3,
    name: "Luca Ceruti",
    position: 1,
    score: 500,
    url: "/assets/images/luca_ceruti.png",
  },
  {
    id: 4,
    name: "Lorenzo Casati",
    position: 1,
    score: 500,
    url: "/assets/images/lorenzo_casati.png",
  },
];

const tierB = [
  {
    id: 1,
    name: "Cohan Van Djik",
    position: 1,
    score: 500,
    url: "/assets/images/cohan_van_djik.png",
  },
  {
    id: 2,
    name: "Stig Hoefnagel",
    position: 1,
    score: 500,
    url: "/assets/images/stig_hoefnagel.png",
  },
  {
    id: 3,
    name: "Milan Lukic",
    position: 1,
    score: 500,
    url: "/assets/images/milan_lukic.png",
  },
  {
    id: 4,
    name: "Ross-Dillon Player",
    position: 1,
    score: 500,
    url: "/assets/images/ross_dillon_player.png",
  },
  {
    id: 5,
    name: "Jett Bradshaw",
    position: 1,
    score: 500,
    url: "/assets/images/jett_bradshaw.png",
  },
];

const tierC = [
  {
    id: 1,
    name: "Robby James",
    position: 1,
    score: 500,
    url: "/assets/images/robby_james.png",
  },
  {
    id: 2,
    name: "Julian Zens",
    position: 1,
    score: 500,
    url: "/assets/images/julian_zens.png",
  },
  {
    id: 3,
    name: "Dylan Graham",
    position: 1,
    score: 500,
    url: "/assets/images/dylan_graham.png",
  },
  {
    id: 4,
    name: "Aron Rosslee",
    position: 1,
    score: 500,
    url: "/assets/images/aron_rossless.png",
  },
  {
    id: 5,
    name: "Rob Kritzinger",
    position: 1,
    score: 500,
    url: "/assets/images/rob_kritzinger.png",
  },
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
