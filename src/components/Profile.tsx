/** @jsxImportSource @emotion/react */
import { useAuth0, User } from "@auth0/auth0-react";
import { http_post } from "../lib";
import { imageStyle } from "../style";

const sendUser = async (user: User) => {
  try {
    const userData = {
      email: user?.email,
      points: null,
      picks: null,
      rank: null,
      name: user?.nickname,
    };
    const userUrl = "/user";
    const response: any[] = await http_post(userUrl, userData);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!user) {
    return <div></div>;
  }

  if (isAuthenticated) {
    sendUser(user);
    return (
      <div>
        <h1>Welcome!</h1>
        <img src={user?.picture} alt={user?.name} css={imageStyle} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    );
  }

  return <div></div>;
};
