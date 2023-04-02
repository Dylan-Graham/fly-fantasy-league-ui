/** @jsxImportSource @emotion/react */
import { useAuth0 } from "@auth0/auth0-react";
import { css } from "@emotion/react";

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <button
      style={isAuthenticated ? mountedStyle : unmountedStyle}
      css={buttonStyle}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

const buttonStyle = css`
  color: white;
  background-color: #2fe0b5;
  border: none;
  width: 150px;
  height: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
`;

const mountedStyle = { animation: "inAnimation 500ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 500ms ease-out",
  animationFillMode: "forwards",
};
