/** @jsxImportSource @emotion/react */
import "./Login.css";
import { LoginButton } from "./Login-Button";
import { Profile } from "./Profile";
import { css } from "@emotion/react";
import { purpleNavBarColor, softWaveAnimation, waveAnimation } from "../style";
import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";

const baklSvgPath = "/assets/svg/bakl-logo.svg";
const signUpSvgPath = "/assets/images/sign-up.gif";
const pickAthletePath = "/assets/images/pick-athlete.png";

export const Login = ({
  loginLoading,
  loginLoadingChanger,
}: {
  loginLoading: boolean;
  loginLoadingChanger: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`container animated-div ${loginLoading ? "loading" : ""}`}
      onAnimationEnd={() => loginLoadingChanger(true)}
    >
      <div className="card green" css={purpleNavBarColor}>
        <h4>Build Your Team and Join The Ranks!</h4>
        {/* <img
          src={pickAthletePath}
          alt="-pick-athlete-logo"
          css={pickAthleteCss}
        /> */}
        <AnimatedImage src={pickAthletePath} alt="pick-athlete-logo" />
      </div>
      <div className="card white">
        <div css={buttons}>
          <LoginButton></LoginButton>
        </div>
        <Profile></Profile>
      </div>
    </div>
  );
};

const buttons = css`
  display: flex;
  justify-content: space-evenly;
`;

const AnimatedImage = styled.img`
  // animation: ${softWaveAnimation} 4s ease-in-out infinite;
  margin-top: 10px;
  width: 300px;
  border-radius: 5px;
  opacity: 1;
`;
