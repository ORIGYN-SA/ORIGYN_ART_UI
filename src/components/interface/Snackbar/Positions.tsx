import styled from "styled-components";

export const Positions = {
  "top-right": {
    top: "24px",
    right: "24px",
    bottom: "unset",
    left: "unset",
    align: "-webkit-right",
  },
  "top-left": {
    top: "24px",
    right: "unset",
    bottom: "unset",
    left: "24px",
    align: "-webkit-left",
  },
  "bottom-right": {
    top: "unset",
    right: "24px",
    bottom: "24px",
    left: "unset",
    align: "-webkit-right",
  },
  "bottom-left": {
    top: "unset",
    right: "unset",
    bottom: "24px",
    left: "24px",
    align: "-webkit-left",
  },
};

export type positionType = keyof typeof Positions;

export const SnackContainerTopLeft = styled("div")`
  position: fixed;
  top: ${Positions["top-left"].top};
  bottom: ${Positions["top-left"].bottom};
  left: ${Positions["top-left"].left};
  right: ${Positions["top-left"].right};
  z-index: 1000;
  text-align: ${Positions["top-left"].align};
`;
export const SnackContainerTopRight = styled("div")`
  position: fixed;
  top: ${Positions["top-right"].top};
  bottom: ${Positions["top-right"].bottom};
  left: ${Positions["top-right"].left};
  right: ${Positions["top-right"].right};
  z-index: 1000;
  text-align: ${Positions["top-right"].align};
`;
export const SnackContainerBottomLeft = styled("div")`
  position: fixed;
  top: ${Positions["bottom-left"].top};
  bottom: ${Positions["bottom-left"].bottom};
  left: ${Positions["bottom-left"].left};
  right: ${Positions["bottom-left"].right};
  z-index: 1000;
  text-align: ${Positions["bottom-left"].align};
`;
export const SnackContainerBottomRight = styled("div")`
  position: fixed;
  top: ${Positions["bottom-right"].top};
  bottom: ${Positions["bottom-right"].bottom};
  left: ${Positions["bottom-right"].left};
  right: ${Positions["bottom-right"].right};
  z-index: 1000;
  text-align: ${Positions["bottom-right"].align};
`;
