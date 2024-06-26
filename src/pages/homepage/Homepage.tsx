import styled from "@emotion/styled";
import {
  AccountCircle,
  GroupsRounded,
  LeaderboardRounded,
  LocalActivityRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { gkaColor } from "../../style/colors";

const MyTeam = () => {
  const navigate = useNavigate();
  const handleClick = (_event: any) => {
    navigate("/picks");
  };

  return (
    <WhiteButton onClick={handleClick}>
      <ColumnOne>
        <h1>My Team</h1>
        <p>Build your team and pick power kiters</p>
      </ColumnOne>
      <div>
        <GroupsRounded />
      </div>
    </WhiteButton>
  );
};

const JoinALeague = () => {
  const navigate = useNavigate();
  const handleClick = (_event: any) => {
    navigate("/leagues");
  };

  return (
    <WhiteButton onClick={handleClick}>
      <ColumnOne>
        <h1>Create a League</h1>
        <p>Create a new league for you and your friends</p>
      </ColumnOne>
      <div>
        <LocalActivityRounded />
      </div>
    </WhiteButton>
  );
};

const ViewLeaderboard = () => {
  const navigate = useNavigate();
  const handleClick = (_event: any) => {
    navigate("/leaderboard");
  };

  return (
    <WhiteButton onClick={handleClick}>
      <ColumnOne>
        <h1>View Leaderboard</h1>
        <p>Establish your rank!</p>
      </ColumnOne>
      <div>
        <LeaderboardRounded />
      </div>
    </WhiteButton>
  );
};

const ViewAccount = () => {
  const navigate = useNavigate();
  const handleClick = (_event: any) => {
    navigate("/account");
  };

  return (
    <WhiteButton onClick={handleClick}>
      <ColumnOne>
        <h1>View Account</h1>
      </ColumnOne>
      <div>
        <AccountCircle />
      </div>
    </WhiteButton>
  );
};

export const Homepage = () => {
  return (
    <Content>
      <MyTeam />
      <JoinALeague />
      <ViewLeaderboard />
      <ViewAccount />
    </Content>
  );
};

const WhiteButton = styled.button({
  backgroundColor: "white",
  color: "black",
  borderRadius: "5px",
  height: "150px",
  width: "50vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "40px",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: gkaColor,
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
  },

  '@media (max-width: 768px)': {
    width: '80vw',
  },
});

const ColumnOne = styled.div({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "110vh",
  marginTop: "80px",
});
