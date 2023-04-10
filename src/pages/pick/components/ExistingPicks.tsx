/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UserContext } from "../../../context";
import { useContext } from "react";

export const ExistingPicks = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <div css={existingPicksStyle}>
        <h2>My Team</h2>
        <hr css={hr}></hr>

        <div css={divStyle}>
          <h4 css={h4Style}>Tier A (top 6)</h4>
          {userContext.user.picks?.tierA.map((athlete: any) => {
            return (
              <p key={athlete.id} css={athleteStyle}>
                {athlete.name}
              </p>
            );
          })}
        </div>

        <div css={divStyle}>
          <h4 css={h4Style}>Tier B (top 12)</h4>
          {userContext.user.picks?.tierB.map((athlete: any) => {
            return (
              <p key={athlete.id} css={athleteStyle}>
                {athlete.name}
              </p>
            );
          })}
        </div>

        <div css={divStyle}>
          <h4 css={h4Style}>Tier C (Wild Picks)</h4>
          {userContext.user.picks?.tierC.map((athlete: any) => {
            return (
              <p key={athlete.id} css={athleteStyle}>
                {athlete.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

const existingPicksStyle = css`
  width: 40%;
  height: 850px;
  border-radius: 50px;
  background: white;
  color: black;
  box-shadow: 20px 20px 60px #22252c, -20px -20px 60px #2e333c;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    width: "386px";
  }
`;

const hr = css`
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, #d4d4d4, #d4d4d4, #d4d4d4);
`;

const divStyle = css`
  margin-bottom: 80px;
`;

const h4Style = css`
  margin-bottom: 30px;
`;

const athleteStyle = css`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin-left: 80px;
  height: 50px;
`;

