import styled from "styled-components";

export interface GridProps {
  columns?: number;
  smColumns?: number;
  mdColumns?: number;
  lgColumns?: number;
  xlColumns?: number;
  gap?: number;
  smGap?: number;
  mdGap?: number;
  lgGap?: number;
  xlGap?: number;
  rows?: number;
}

const StyledGrid = styled("div")<GridProps>`
  ${({
    columns,
    theme,
    gap,
    rows,
    smColumns,
    mdColumns,
    lgColumns,
    xlColumns,
    smGap,
    mdGap,
    lgGap,
    xlGap,
  }) => `
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  grid-template-rows: ${rows};
  gap: ${gap}px;
  
  ${theme?.media?.xl} {
    grid-template-columns: repeat(${xlColumns}, minmax(0, 1fr))!important;
    gap: ${xlGap}px;
  }
  
  ${theme?.media?.lg} {
    grid-template-columns: repeat(${lgColumns}, minmax(0, 1fr))!important;
    gap: ${lgGap}px;
  }
  
  ${theme?.media?.md} {
    grid-template-columns: repeat(${
      mdColumns ? mdColumns : 1
    }, minmax(0, 1fr))!important;
    gap: ${mdGap}px;
  }
  
  ${theme?.media?.sm} {
    grid-template-columns: repeat(${
      smColumns ? smColumns : 1
    }, minmax(0, 1fr))!important;
    gap: ${smGap}px;
  }
`}
`;

export default StyledGrid;
