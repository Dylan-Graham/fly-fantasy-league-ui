/** @jsxImportSource @emotion/react */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { css } from "@emotion/react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <img src={user?.picture} alt={user?.name} css={imageStyle} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <a href="https://auth0.com/docs/quickstart/spa/react/02-calling-an-api">
          Next steps: API
        </a>
      </div>
    );
  }

  return <div></div>;
};

const imageStyle = css`
  border-radius: 100px;
  height: 80px;
  width: 80px;
`;
