/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { flexRow, imageStyle, leftAlignText } from "../../style";
import "./Account.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../homepage/components/Logout-Button";

export const Account = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div css={accountStyle}>
        <h1 css={leftAlignText}>Account</h1>
        <div css={flexRow}>
          <h2>Welcome back!</h2>
          <img src={user?.picture} alt={user?.name} css={imageStyle} />
        </div>
        <p css={leftAlignText}>Name: {user?.nickname}</p>
        <p css={leftAlignText}>Email: {user?.email}</p>
        <LogoutButton></LogoutButton>
      </div>
    );
  }

  return <div></div>;
};

const accountStyle = css`
  background: white;
  color: black;
  box-shadow: 20px 20px 60px #22252c, -20px -20px 60px #2e333c;
  border-radius: 50px;
  padding: 25px;
`;
