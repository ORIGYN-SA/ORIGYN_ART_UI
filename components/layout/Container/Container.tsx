import styled from "styled-components";

export interface ContainerProps {
  size?: "lg" | "sm" | "md" | "full";
  padding?: string;
  smPadding?: string;
  relative?: boolean;
}

const StyledFlex = styled.div<ContainerProps>`
  ${({ size = "full", relative, padding, smPadding, theme }) => `
  display: block;
  padding: ${padding ? padding : "0"};
  max-width: ${size === "full" ? "100%" : `${theme.containers[size]}px`};
  width: 100%;
  box-sizing: border-box;
  position: ${relative ? "relative" : "static"};
  margin: 0 auto;
  
  ${theme.media.sm} {
    padding: ${smPadding ? smPadding : padding || "0"};
  }
`}
`;

export default StyledFlex;
