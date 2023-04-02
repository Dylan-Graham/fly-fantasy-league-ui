/** @jsxImportSource @emotion/react */
import { useAuth0, User } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../../../context";
import { http_post } from "../../../lib";
import { imageStyle, waveAnimation } from "../../../style";
import styled from "@emotion/styled";

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

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const userContext = useContext(UserContext);

  const signUpSvgPath = "/assets/images/sign-up.gif";

  if (!user) {
    return (
      <div>
        <AnimatedImage src={signUpSvgPath} alt="sign-up-logo" />
      </div>
    );
  }

  if (isAuthenticated) {
    sendUser(user, userContext, getAccessTokenSilently);
    return (
      <div style={isAuthenticated ? mountedStyle : unmountedStyle}>
        <h1>Welcome!</h1>
        <img src={user?.picture} alt={user?.name} css={imageStyle} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    );
  }

  return (
    <div>
      <img
        src={signUpSvgPath}
        alt="sign-up-logo"
        style={{
          height: "100px",
          width: "300px",
          marginTop: "20px",
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const mountedStyle = { animation: "inAnimation 500ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 500ms ease-out",
  animationFillMode: "forwards",
};

const AnimatedImage = styled.img`
  // animation: ${waveAnimation} 30s infinite linear;
  border-radius: 5px;
  margin-top: 10vh;
  height: 200px;
  width: 300px;
  object-fit: cover;
`;
