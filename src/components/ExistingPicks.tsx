/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UserContext } from "../context";
import { useContext } from "react";

export const ExistingPicks = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <div css={existingPicksStyle}>
        <div style={{ marginTop: "4vh" }}>
          <h3>Tier A</h3>
          {userContext.user.picks.tierA.map((athlete: any) => {
            return <p key={athlete.id}>{athlete.name}</p>;
          })}
        </div>

        <div>
          <h3>Tier B</h3>
          {userContext.user.picks.tierB.map((athlete: any) => {
            return <p key={athlete.id}>{athlete.name}</p>;
          })}
        </div>

        <div>
          <h3>Tier C</h3>
          {userContext.user.picks.tierC.map((athlete: any) => {
            return <p key={athlete.id}>{athlete.name}</p>;
          })}
        </div>
      </div>
    </>
  );
};

const existingPicksStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  background: white;
  color: black;
  width: 30vw;
  height: 37vh;
  border-radius: 4px;
`;

