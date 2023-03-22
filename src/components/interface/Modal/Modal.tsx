import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import Container from "../../layout/Container";

import CloseIcon from "../../icons/Close";
import { Icons } from "../../index";

export type ModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title?: string | React.ReactNode;
  size?: "lg" | "md" | "sm" | "full";
  mode?: string;
};

const modalSizes = {
  lg: "860px",
  md: "640px",
  sm: "420px",
  full: "100%",
};

const StyledModal = styled(ReactModal)<{ size: string }>`
  &.ReactModalPortal {
  }
  &.ReactModal__Content {
    ::-webkit-scrollbar {
      display: none;
    }

    position: absolute;
    inset: 50% auto auto 50%;

    padding: 0;
    top: 50px;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, 0);
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(26, 32, 44, 0.1),
      0px 4px 6px -2px rgba(26, 32, 44, 0.05);
    overflow-y: auto;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.MODAL_BACKGROUND};
    color: ${({ theme }) => theme.colors.TEXT};
    width: ${({ size }) => modalSizes[size]};
    max-height: calc(100% - 100px);

    ${({ theme }) => theme?.media?.lg} {
      max-width: calc(100% - 48px);
    }
  }
  ${({ theme }) => theme?.media?.sm} {
    &.ReactModal__Content {
      inset: auto;
      left: 0;
      right: 0;
      transform: translate(0, 0);
      margin-right: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
    }
  }
`;

const StyledCloseBtn = styled(CloseIcon)`
  position: absolute;
  right: 34.75px;
  top: 42.75px;
  cursor: pointer;
  color: #fefefe;
  width: 18px;
  height: 18px;

  ${({ theme }) => theme?.media?.sm} {
    top: 15px;
    right: 15px;
  }
`;

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  isOpened,
  title,
  children,
  closeModal,
  size,
}) => {
  ReactModal.setAppElement("#root");

  return (
    <StyledModal
      isOpen={isOpened}
      onRequestClose={closeModal}
      style={{
        overlay: {
          zIndex: 10000,
        },
      }}
      size={size}
    >
      <Container relative size="md">
        <StyledCloseBtn onClick={closeModal}>{Icons.CloseIcon}</StyledCloseBtn>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </StyledModal>
  );
};

export default Modal;
