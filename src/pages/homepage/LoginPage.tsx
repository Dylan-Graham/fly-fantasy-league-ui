/** @jsxImportSource @emotion/react */
import "./LoginPage.css";
import { LoginButton } from "./components/Login-Button";
import { css } from "@emotion/react";
import { purpleNavBarColor } from "../../style";
import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Profile } from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Homepage } from "./Homepage";

const pickAthletePath = "/assets/images/pick-athlete.png";

export const LoginPage = ({
  loginLoading,
  loginLoadingChanger,
}: {
  loginLoading: boolean;
  loginLoadingChanger: Dispatch<SetStateAction<boolean>>;
}) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Homepage />;
  }

  return (
    <div
      className={`container animated-div ${loginLoading ? "loading" : ""}`}
      onAnimationEnd={() => loginLoadingChanger(true)}
    >
      <div className="card green" css={purpleNavBarColor}>
        <h4>Build Your Team and Join The Ranks!</h4>
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
  margin-top: 10px;
  width: 300px;
  border-radius: 5px;
  opacity: 1;
`;
