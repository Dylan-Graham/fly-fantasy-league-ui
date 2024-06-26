/** @jsxImportSource @emotion/react */
import { useAuth0 } from "@auth0/auth0-react";
import { css } from "@emotion/react";
import { LogoutButton } from "./Logout-Button";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <LogoutButton></LogoutButton>;
  }

  return (
    <button css={buttonStyle} onClick={() => loginWithRedirect()}>
      Log In / Sign Up
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

  @media (max-width: 768px) {
    width: 30vw;
    height: 10px;
    font-size: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
