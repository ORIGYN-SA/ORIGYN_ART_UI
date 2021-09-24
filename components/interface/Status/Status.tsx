import React from "react";
import styles from "styled-components";

export interface StatusProps {
  label: string;
  status: string;
  maxWidth?: number;
}

const StyledStatus = styles.div`
    ${({ status, maxWidth }) => `
        background-color: ${status === "pending" ? "#F2BD00" : "#50AA3E"};
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding: 5px;
        text-align: center;
        width: 100%;
        max-width: ${maxWidth ? `${maxWidth}px` : `100%`};
    `}
`;

const Status = ({ label, status, maxWidth }: StatusProps) => {
  return (
    <StyledStatus status={status} maxWidth={maxWidth}>
      {label}
    </StyledStatus>
  );
};

export default Status;
