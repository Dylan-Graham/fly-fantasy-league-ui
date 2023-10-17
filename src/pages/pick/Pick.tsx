/** @jsxImportSource @emotion/react */
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { NewPicks } from "./components/NewPicks";
import { ExistingPicks } from "./components/ExistingPicks";
import styled from "@emotion/styled";
import { YoutubeEmbed } from "./components/YoutubeEmbed";

export const Pick = () => {
  const userContext = useContext(UserContext);
  const [showExistingPick, setShowExistingPick] = useState<boolean>(
    userContext.user?.picks != null
  );

  return (
    <>
      <Content>
        {showExistingPick ? (
          <>
            <ExistingPicks showExistingPickChanger={setShowExistingPick} />
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
  width: "100vw",
  marginTop: "100px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});
