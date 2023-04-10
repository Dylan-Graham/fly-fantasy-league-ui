/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useContext } from "react";
import "./NewPicks.css";
import { AthletePicker } from "./Athlete-Picker";
import AthletesTierA from "../../../data/AthletesTierA.json";
import AthletesTierB from "../../../data/AthletesTierB.json";
import AthletesTierC from "../../../data/AthletesTierC.json";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { http_post } from "../../../lib";
import { UserContext } from "../../../context/UserContext";

export interface athlete {
  id: number;
  name: string;
  position: number;
  score: number;
  url: string;
  available: boolean;
}

export const NewPicks = ({
  showExistingPickChanger,
}: {
  showExistingPickChanger: Dispatch<SetStateAction<boolean>>;
}) => {
  const [tierA, setTierA] = React.useState<athlete[]>(AthletesTierA);
  const [tierB, setTierB] = React.useState<athlete[]>(AthletesTierB);
  const [tierC, setTierC] = React.useState<athlete[]>(AthletesTierC);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userContext = useContext(UserContext);

  const pickUrl = "/picks";

  const resetPicks = () => {
    for (const athlete of tierA) {
      athlete.available = true;
    }

    for (const athlete of tierB) {
      athlete.available = true;
    }

    for (const athlete of tierC) {
      athlete.available = true;
    }
  };

  resetPicks();

  const makeNewPick = () => {
    return (
      <div className="picks">
        <h2>My Team</h2>
        <hr className="hr"></hr>

        <div>
          <h4>Tier A (top 6)</h4>
          <AthletePicker athletes={tierA} tierChanger={setTierA} />
          <AthletePicker athletes={tierA} tierChanger={setTierA} />
        </div>

        <div>
          <h4>Tier B (top 12)</h4>
          <AthletePicker athletes={tierB} tierChanger={setTierB} />
          <AthletePicker athletes={tierB} tierChanger={setTierB} />
        </div>

        <div>
          <h4>Tier C (Wild Picks)</h4>
          <AthletePicker athletes={tierC} tierChanger={setTierC} />
          <AthletePicker athletes={tierC} tierChanger={setTierC} />
        </div>

        <hr className="hr"></hr>
        <Button onClick={collectPicks}>Save Pick</Button>
      </div>
    );
  };

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
      tierBPicks.length === 2 &&
      tierCPicks.length === 2;

    if (validPick) {
      const payload = {
        user: user?.email,
        picks: {
          tierA: tierAPicks,
          tierB: tierBPicks,
          tierC: tierCPicks,
        },
      };
      sendPicks(payload, getAccessTokenSilently);
    }
  };

  const sendPicks = async (payload: any, getAccessTokenSilently: any) => {
    try {
      const token = await getAccessTokenSilently();
      await http_post(pickUrl, payload, {}, token);

      const updatedUserPicks = userContext.user;
      userContext.user.picks = payload.picks;
      userContext.setUser(updatedUserPicks);
    } catch (err) {
      console.error(err);
    }

    showExistingPickChanger(true);
  };

  return makeNewPick();
};
