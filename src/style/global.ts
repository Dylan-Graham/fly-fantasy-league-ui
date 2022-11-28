/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

export const greenBlackGradient = css`
  // background: rgb(47, 224, 181);
  background: linear-gradient(
    90deg,
    rgba(47, 224, 181, 1) 0%,
    rgba(0, 0, 0, 1) 80%
  );
`;