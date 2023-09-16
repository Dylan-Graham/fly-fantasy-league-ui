/** @jsxImportSource @emotion/react */
import "./LoginPage.css";
import { LoginButton } from "./components/Login-Button";
import { css } from "@emotion/react";
import { purpleNavBarColor } from "../../style";
import { Dispatch, SetStateAction, useContext } from "react";
import styled from "@emotion/styled";
import { WelcomeGif } from "./components/WelcomeGif";
import { User, useAuth0 } from "@auth0/auth0-react";
import { Homepage } from "./Homepage";
import { http_post } from "../../lib";
import { UserContext } from "../../context/UserContext";

const pickAthletePath = "/assets/images/pick-athlete.png";

const sendUser = async (
  user: User,
  userContext: any,
  getAccessTokenSilently: any
) => {
  if (userContext.user != null) {
    return;
  }

  try {
    const userData = {
      email: user?.email,
      points: null,
      picks: null,
      rank: null,
      name: user?.nickname,
    };
    const userUrl = "/user";
    const token = await getAccessTokenSilently();
    const response = await http_post(userUrl, userData, {}, token);
    userContext.setUser(response);
  } catch (err) {
    console.error(err);
  }
};

export const LoginPage = ({
  loginLoading,
  loginLoadingChanger,
}: {
  loginLoading: boolean;
  loginLoadingChanger: Dispatch<SetStateAction<boolean>>;
}) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userContext = useContext(UserContext);

  if (isAuthenticated && user) {
    sendUser(user, userContext, getAccessTokenSilently);
    return <Homepage />;
  }

  return (
    <div
      className={`container animated-div ${loginLoading ? "loading" : ""}`}
      onAnimationEnd={() => loginLoadingChanger(true)}
    >
      <div className="card green" css={purpleNavBarColor}>
        <h4 className="text">Build Your Team and Join The Ranks!</h4>
        <AnimatedImage src={pickAthletePath} alt="pick-athlete-logo" />
      </div>
      <div className="card white">
        <div css={buttons}>
          <LoginButton></LoginButton>
        </div>
        <WelcomeGif></WelcomeGif>
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

  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
    margin-top: 0px
  }

`;
