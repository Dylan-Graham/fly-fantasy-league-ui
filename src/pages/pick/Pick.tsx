/** @jsxImportSource @emotion/react */
import { EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { flexSpaceAroundRow } from "../../style";
import { NewPicks } from "./components/NewPicks";
import { ExistingPicks } from "./components/ExistingPicks";

export const Pick = () => {
  const userContext = useContext(UserContext);
  const [showExistingPick, setShowExistingPick] = useState<boolean>(
    userContext.user?.picks != null
  );

  const toggleShowExistingPick = () => {
    setShowExistingPick(!showExistingPick);
  };

  return (
    <>
      {showExistingPick && (
        <div css={flexSpaceAroundRow}>
          <h1>Picks</h1>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
            onClick={toggleShowExistingPick}
          >
            <EditOutlined />
          </IconButton>
        </div>
      )}
      {showExistingPick ? (
        <ExistingPicks />
      ) : (
        <NewPicks showExistingPickChanger={setShowExistingPick} />
      )}
    </>
  );
};
