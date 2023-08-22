/** @jsxImportSource @emotion/react */
import { EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { flexSpaceAroundRow } from "../../style";
import { NewPicks } from "./components/NewPicks";
import { ExistingPicks } from "./components/ExistingPicks";
import styled from "@emotion/styled";
import { YoutubeEmbed } from "./components/YoutubeEmbed";

export const Pick = () => {
  const userContext = useContext(UserContext);
  const [showExistingPick, setShowExistingPick] = useState<boolean>(
    userContext.user?.picks != null
  );

  const toggleShowExistingPick = () => {
    setShowExistingPick(!showExistingPick);
  };

  const PickPencil = () => {
    return (
      <div css={flexSpaceAroundRow}>
        <h1>Change Picks</h1>
        <IconButton
          size="large"
          aria-label="account of current user"
          color="inherit"
          style={{ height: 65 }}
          onClick={toggleShowExistingPick}
        >
          <EditOutlined />
        </IconButton>
      </div>
    );
  };

  return (
    <>
      <Content>
        {showExistingPick ? (
          <>
            <PickPencil />
            <ExistingPicks />
          </>
        ) : (
          <NewPicks showExistingPickChanger={setShowExistingPick} />
        )}
        <YoutubeEmbed />
      </Content>
    </>
  );
};

const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "95vw",
  marginTop: "100px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});
