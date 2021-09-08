import React from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import Container from "../../layout/Container";

import CloseIcon from "../../icons/Close";

export type ModalProps = {
  isOpened: boolean;
  closeModal: () => void;
  title?: string | React.ReactNode;
};

const customStyles = {
  overlay: {
    overflow: "auto",
  },
  content: {
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow:
      "0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05)",
    "@media (max-width: 600)": {},
  },
};

const StyledCloseBtn = styled(CloseIcon)`
  position: absolute;
  right: 50px;
  top: 50px;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({
  isOpened,
  title,
  children,
  closeModal,
}) => {
  return (
    <ReactModal isOpen={isOpened} style={customStyles} onRequestClose={closeModal}>
      <Container relative size="md" padding="45px 40px">
        {title && <h2>{title}</h2>}
        {children}
        <StyledCloseBtn onClick={closeModal} />
      </Container>
    </ReactModal>
  );
};

export default Modal;
