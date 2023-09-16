/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { imageStyle } from "../../style";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../homepage/components/Logout-Button";

export const Account = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <AccountStyle>
        <div>
          <h2>Welcome back!</h2>
          <img src={user?.picture} alt={user?.name} css={imageStyle} />
        </div>
        <p >Name: {user?.nickname}</p>
        <p >Email: {user?.email}</p>
        <LogoutButton></LogoutButton>
      </AccountStyle>
    );
  }

  return <div></div>;
};

const AccountStyle = styled.div({
  background: "white",
  color: "black",
  boxShadow: "20px 20px 60px #22252c, -20px -20px 60px #2e333c",
  borderRadius: "50px",
  padding: "25px",
  width: "350px",
  '@media (max-width: 768px)': {
    width: "50vw"
  }
})
