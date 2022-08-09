import React from "react";
import "./Picks.css";
import { AthletePicker } from "./Athlete-Picker";
import AthletesTierA from "../data/AthletesTierA.json";
import AthletesTierB from "../data/AthletesTierB.json";
import AthletesTierC from "../data/AthletesTierC.json";

export interface athlete {
  id: number;
  name: string;
  position: number;
  score: number;
  url: string;
  available: boolean;
}

export const Picks = () => {
  const [tierA, setTierA] = React.useState<athlete[]>(AthletesTierA);
  const [tierB, setTierB] = React.useState<athlete[]>(AthletesTierB);
  const [tierC, setTierC] = React.useState<athlete[]>(AthletesTierC);

  return (
    <div className="picks">
      <h2>My Team</h2>
      <hr className="hr"></hr>
      <div>
        <p>Event: Cape Town Pro</p>
      </div>

      <div>
        <h4>Tier A (top 6)</h4>
        <AthletePicker athletes={tierA} tierChanger={setTierA} />
        <AthletePicker athletes={tierA} tierChanger={setTierA} />
      </div>

      <div>
        <h4>Tier B (top 12)</h4>
        <AthletePicker athletes={tierB} tierChanger={setTierB} />
        <AthletePicker athletes={tierB} tierChanger={setTierB} />
        <AthletePicker athletes={tierB} tierChanger={setTierB} />
        <AthletePicker athletes={tierB} tierChanger={setTierB} />
      </div>

      <div>
        <h4>Tier C (Wild Picks)</h4>
        <AthletePicker athletes={tierC} tierChanger={setTierC} />
        <AthletePicker athletes={tierC} tierChanger={setTierC} />
      </div>
    </div>
  );
};
