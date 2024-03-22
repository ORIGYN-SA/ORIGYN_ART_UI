import styled from "styled-components";

export type TFlexFlow = "column" | "row" | "column-reverse" | "row-reverse";

export type FlexProps = {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | string;
  align?: "flex-start" | "flex-end" | "center";
  flexFlow?: TFlexFlow;
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  smFlexFlow?: TFlexFlow;
  mdFlexFlow?: TFlexFlow;
  lgFlexFlow?: TFlexFlow;
  xlFlexFlow?: TFlexFlow;
  smGap?: number;
  mdGap?: number;
  lgGap?: number;
  xlGap?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  gap?: number;
  relative?: boolean;
};

const StyledFlex = styled("div")<FlexProps>`
  ${({
    justify,
    align,
    fullWidth,
    fullHeight,
    flexFlow,
    flexWrap,
    smFlexFlow,
    mdFlexFlow,
    lgFlexFlow,
    xlFlexFlow,
    relative,
    gap = 0,
    smGap,
    mdGap,
    lgGap,
    xlGap,
    theme,
  }) => `
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-flow: ${flexFlow ? flexFlow : "row"};
  flex-wrap: ${flexWrap ? flexWrap : "nowrap"};
  width: ${fullWidth ? "100%" : "auto"};
  height: ${fullHeight ? "100%" : "auto"};
  gap: ${gap}px;
  position: ${relative ? "relative" : "static"};
  
  ${theme?.media?.xl}{
    flex-flow: ${xlFlexFlow};
    gap: ${xlGap}px;
  }
  
  ${theme?.media?.lg}{
    flex-flow: ${lgFlexFlow};
    gap: ${lgGap}px;
  }
  
  ${theme?.media?.md}{
    flex-flow: ${mdFlexFlow};
    gap: ${mdGap}px;
  }
  
  ${theme?.media?.sm}{
    flex-flow: ${smFlexFlow || flexFlow};
    gap: ${smGap || gap}px;
  }
`}
`;

export default StyledFlex;
