/** @jsxImportSource @emotion/react */
import React from "react";
import "./Login.css";
import { LoginButton } from "./Login-Button";
import { Profile } from "./Profile";
import { css } from "@emotion/react";

export const Login = () => {
  return (
    <div className="container">
      <div className="card green">
        <h2>BAKL Fantasy</h2>
        <h4>Pick Your Team and Join The Ranks!</h4>
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
