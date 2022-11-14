import React, {PropsWithChildren} from "react";
import styles from "styled-components";
import {theme} from "../../../utils";

export interface ChipProps {
  size?: "small" | "medium";
  type?: "transparent" | "outlined" | "filled";
}

export const SChip = styles.b<ChipProps>`
    ${({theme, type = "transparent", size = "small"}) => `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        text-align: center;
        
        padding: 9px 12px;
        font-size: 14px;
        line-height: 22px;
        border-radius: 20px;
        
        ${size === "small" ? `
          padding: 6px 10px;
          font-size: 12px;
          line-height: 20px;
          border-radius: 16px;
        ` : ""}
        
        
        ${type === "transparent" ? `
          background: rgba(21, 21, 21, 0.5);
          color: #FEFEFE;
          
          svg {
            fill: #FEFEFE;
          }
        ` : ""}
        
        ${type === "outlined" ? `
          background: transparent;
          border: 1px solid #E3E3E3;
          color: #151515;
          
          :hover, &.hover {
            background: #FAFAFA;
          }
          
          :active, &.active {
            border: 1px solid #151515;
          }
        ` : ""}
        
        ${type === "filled" ? `
          background: #FAFAFA;
          color: #151515;
          
          :hover, &.hover {
            background: #F2F2F2;
          }
          
          :active, &.active {
            background: #151515;
            color: #FEFEFE;
            >svg {
              fill:  #FEFEFE;
            }
          }
        ` : ""}
        
    `}
`;

const Chip: React.FC<PropsWithChildren<ChipProps>> = (props) => {
  const {children} = props;
  return (
    <SChip {...props}>
      {children}
    </SChip>
  );
};

export default Chip;
