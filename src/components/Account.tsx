/** @jsxImportSource @emotion/react */
import "./Account.css";
import { useAuth0 } from "@auth0/auth0-react";
import { flexRow, imageStyle, leftAlignText } from "../style";

export const Account = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <h1 css={leftAlignText}>Account</h1>
        <div css={flexRow}>
          <h2>Welcome back!</h2>
          <img src={user?.picture} alt={user?.name} css={imageStyle} />
        </div>
        <p css={leftAlignText}>Name: {user?.nickname}</p>
        <p css={leftAlignText}>Email: {user?.email}</p>
      </div>
    );
  }

  return <div></div>;
};
