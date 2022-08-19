/** @jsxImportSource @emotion/react */
import React from "react";
import "./Login.css";
import { LoginButton } from "./Login-Button";
import { Profile } from "./Profile";
import { css } from "@emotion/react";

const baklSvgPath = "/assets/svg/bakl-logo.svg";
const pickAthletePath = "/assets/images/pick-athlete.png";

export const Login = () => {
  return (
    <div className="container">
      <div className="card green">
        <img src={baklSvgPath} alt="bakl-logo" />
        <h4>Build Your Team and Join The Ranks!</h4>
        <img src={pickAthletePath} alt="bakl-logo" css={pickAthleteCss} />
      </div>
      <div className="card white">
        <div css={buttons}>
          <LoginButton></LoginButton>
        </div>
        <div></div>
        <Profile></Profile>
      </div>
    </div>
  );
};

const buttons = css`
  display: flex;
  justify-content: space-evenly;
`;

const pickAthleteCss = css`
  margin-top: 10px;
  width: 300px;
  border-radius: 5px;
  opacity: 0.5;
`;
