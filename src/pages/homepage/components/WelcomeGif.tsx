/** @jsxImportSource @emotion/react */
import { useAuth0 } from "@auth0/auth0-react";
import { waveAnimation } from "../../../style";
import styled from "@emotion/styled";

export const WelcomeGif = () => {
  const { user } = useAuth0();

  const signUpSvgPath = "/assets/images/sign-up.gif";

  if (!user) {
    return (
      <div>
        <AnimatedImage src={signUpSvgPath} alt="sign-up-logo" />
      </div>
    );
  }

  return <div></div>;
};

const AnimatedImage = styled.img`
  // animation: ${waveAnimation} 30s infinite linear;
  border-radius: 5px;
  margin-top: 10vh;
  height: 200px;
  width: 300px;
  object-fit: cover;
`;
