/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const imageStyle = css`
  border-radius: 100px;
  height: 80px;
  width: 80px;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
  width: 350px;
  justify-content: space-between;
`;

export const flexSpaceAroundRow = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const leftAlignText = css`
  text-align: left;
`;

export const bigTopMargin = css`
  margin-top: 50px;
`;

export const purpleNavBarColor = css`
  background: #672046;
`;

/**
 * Animation
 */

export const waveAnimation = keyframes`
0%,
100% {
  border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
}

10% {
  border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
}

20% {
  border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
}

30% {
  border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
  
}

40% {
  border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
}

50% {
  border-radius: 100%;
  
}

60% {
  border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
}

70% {
  border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
}

80% {
  border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
}

90% {
  border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
}
`;

export const softWaveAnimation = keyframes`
0% {
  border-radius:  12% 8% 6% 14% / 12% 6% 14% 8%;
} 

50% {
  border-radius:  6% 12% 14% 8% / 10% 12% 6% 12%;
}

100% {
border-radius:  12% 8% 6% 14% / 12% 6% 14% 8%;
} 
`;
