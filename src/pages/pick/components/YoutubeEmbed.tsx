import styled from "@emotion/styled";
import { mobileWidth } from "../../../style/global";

export const YoutubeEmbed = () => {
  return (
    <Content>
      <YoutubePlayer
        width="100%"
        height="25%"
        src="https://www.youtube.com/embed/Zr6DdA3FlVQ?list=PLWOiDdttDz37LRME7CzILL9pqhuMdM-iU"
        title="Teaser | Lords Of Tram GKA Big-Air Kite World Cup France 2023"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></YoutubePlayer>
      <EventTile>
        <h1>Event</h1>
        <Line />
        <Value>Qatar Airways GKA World Championship</Value>
        <h1>Discipline</h1>
        <Line />
        <Value>Big Air</Value>
        <h1>Location</h1>
        <Line />
        <Value>Tarifa, Spain</Value>
        <h1>Prize Money</h1>
        <Line />
        <Value>€40,000 </Value>
      </EventTile>
    </Content>
  );
};

const Content = styled.div({
  width: "25vw",
  height: "122vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  '@media (max-width: 768px)': {
    width: mobileWidth
  }
});

const EventTile = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: "white",
  color: "black",
  borderRadius: "50px",
  padding: "25px",
});

const Value = styled.h3({
  paddingLeft: "20px",
});

const YoutubePlayer = styled.iframe({
  border: "none",
  borderRadius: "50px",
});

const Line = styled.hr({
  border: 0,
  width: "100%",
  height: "1px",
  backgroundImage: "linear-gradient(to right, #d4d4d4, #d4d4d4, #d4d4d4)",
});
