import React from "react";
import ReactDOM from "react-dom";
import { useSnackBarContext } from "./useSnackContext";
import { Styles } from "./SnackStyles";
import { Layouts } from "./Layouts";
import {
  SnackContainerTopRight,
  SnackContainerTopLeft,
  SnackContainerBottomLeft,
  SnackContainerBottomRight,
} from "./Positions";

export const Snack = () => {
  const { snackBarArray, isOpen, providerPosition } = useSnackBarContext();

  if (!isOpen && snackBarArray.length === 0) return null;
  return ReactDOM.createPortal(
    <>
      <SnackContainerTopRight>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "top-right" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "top-right" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerTopRight>
      <SnackContainerTopLeft>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "top-left" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "top-left" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerTopLeft>
      <SnackContainerBottomLeft>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "bottom-left" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "bottom-left" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerBottomLeft>
      <SnackContainerBottomRight>
        {snackBarArray.map((snack, index) =>
          (providerPosition === "bottom-right" &&
            snack.snackPosition === undefined) ||
          snack.snackPosition == "bottom-right" ? (
            <Styles key={index}>{Layouts[snack.layout](snack)}</Styles>
          ) : null
        )}
      </SnackContainerBottomRight>
    </>,
    document.body
  );
};
