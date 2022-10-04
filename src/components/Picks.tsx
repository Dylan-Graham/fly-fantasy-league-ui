import React from "react";
import "./Picks.css";
import { AthletePicker } from "./Athlete-Picker";
import AthletesTierA from "../data/AthletesTierA.json";
import AthletesTierB from "../data/AthletesTierB.json";
import AthletesTierC from "../data/AthletesTierC.json";
import Button from "@mui/material/Button";
import { http_post } from "../lib";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { user, isAuthenticated } = useAuth0();

  const pickUrl = "/picks";

  const collectPicks = () => {
    if (!isAuthenticated) {
      console.error("User not authenticated");
    }

    const tierAPicks = [];
    const tierBPicks = [];
    const tierCPicks = [];

    for (const athlete of tierA) {
      if (!athlete.available) {
        tierAPicks.push({
          name: athlete.name,
          id: athlete.id,
        });
      }
    }

    for (const athlete of tierB) {
      if (!athlete.available) {
        tierBPicks.push({
          name: athlete.name,
          id: athlete.id,
        });
      }
    }

    for (const athlete of tierC) {
      if (!athlete.available) {
        tierCPicks.push({
          name: athlete.name,
          id: athlete.id,
        });
      }
    }

    const validPick =
      tierAPicks.length === 2 &&
      tierBPicks.length === 4 &&
      tierCPicks.length === 2;
    if (validPick) {
      // TODO: add username in here...

      const payload = {
        user: user?.email,
        picks: {
          tierA: tierAPicks,
          tierB: tierBPicks,
          tierC: tierCPicks,
        },
      };
      sendPicks(payload);
    }

    // TODO: dialog, complete your picks!
  };

  const sendPicks = async (picks: any) => {
    try {
      const response: any[] = await http_post(pickUrl, picks);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

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

      <Button onClick={collectPicks}>Save Pick</Button>
    </div>
  );
};
