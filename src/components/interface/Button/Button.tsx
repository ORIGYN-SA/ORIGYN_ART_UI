import styled, {css} from "styled-components";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  btnType?: "outlined" | "secondary" | "filled";
  iconButton?: boolean;
  textButton?: boolean;
  disabled?: boolean;
};

const largeSize = css`${({theme}) => `
  padding: 17px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  border-radius: 28px;
`}`;

const mediumSize = css`${({theme}) => `
  padding: 9px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  border-radius: 20px;
`}`;

const smallSize = css`${({theme}) => `
  padding: 6px 16px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.2px;
  border-radius: 16px;
  gap: 10px;
`}`;

const buttonSize = {
  small: smallSize,
  large: largeSize,
  medium: mediumSize,
}

const outlined = css`
  background-color: transparent;
  color: inherit;
  border: 1px solid #E3E3E3;
  
  svg {
    fill: currentColor;
  }
`;

const secondary = css`
  background-color: ${({theme}) => theme.colors.BACKGROUND};
  color: ${({theme}) => theme.colors.TEXT};
  svg {
    fill: currentColor;
  }
`;

const filled = css`
  background-color: ${({theme}) => theme.colors.TEXT};
  color: ${({theme}) => theme.colors.BACKGROUND};
  svg {
    fill: currentColor;
  }
`;

const accent = css`
  background-color: ${({theme}) => theme.colors.ACCENT_COLOR };
  color: ${({theme}) => theme.colors.ACC_BUTTON_TEXT};
  svg {
    fill: currentColor;
  }
`;

const buttonTypes = {
  outlined: outlined,
  secondary: secondary,
  filled: filled,
  accent: accent,
}

const StyledButton = styled.button<ButtonProps>
`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: none;
  gap: 15px;
  align-items: center;
  box-sizing: border-box;
  background: ${({theme}) => theme.colors.BACKGROUND};
  color: ${({theme}) => theme.colors.TEXT};
  white-space: nowrap;
  border: none;
  
  svg {
    fill: currentColor;
  }
  
  ${({size = "large"}) => buttonSize[size]};
  ${({btnType }) => buttonTypes[btnType]};
  
  ${({ theme, size = "large", disabled, iconButton, textButton }) => `
  :hover, &.hover {
    background-color: ${theme.colors.BORDER};
    color: ${theme.colors.TEXT};
  }
  :active, &.active {
    background-color: ${theme.colors.BORDER};
    color: ${theme.colors.TEXT};
  }
  cursor: pointer;
  
  ${disabled ? `
    background: ${theme.colors.INACTIVE};
    border-color: ${theme.colors.BORDER};
    color: ${theme.colors.SECONDARY_TEXT};
    cursor: not-allowed;
    :hover {
      background-color: ${theme.colors.INACTIVE};
      border-color: ${theme.colors.BORDER};
      color: ${theme.colors.SECONDARY_TEXT};
    }
  ` : ""}
  ${iconButton ? `
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    padding: 0;
    ${size === "medium" ? `
      width: 40px;
      height: 40px;
    ` : ""}
    ${size === "small" ? `
      width: 32px;
      height: 32px;
    ` : ""}
  ` : ""}
  ${textButton ? `
    background: transparent;
    color: ${theme.colors.TEXT};
    
    > svg {
      fill: currentColor;
    }
    
    :hover, &.hover {
      background: ${theme.colors.BORDER};
    }
    :active, &.active {
      background: ${theme.colors.BORDER};
    }
  ${disabled ? `
    background: transparent;
    cursor: not-allowed;
    :hover {
      background: transparent;
    }
  ` : ""}
  ` : ""}
`}
`;

export default StyledButton;
