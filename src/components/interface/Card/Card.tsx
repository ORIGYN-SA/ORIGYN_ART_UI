import styled, {css} from "styled-components";
import Flex from "../../layout/Flex";

export type CardProps = {
  padding?: string;
  type?: 'outlined' | "filled" | "elevated";
  bgColor?: string;
};


const outlined = css`
  background: transparent;
  border: 1px solid ${({theme}) => theme.colors.BORDER};
  border-radius: 12px;
`;

const filled = css`
  background: ${({theme}) => theme.colors.BORDER};
  border-radius: 12px;
`;

const elevated = css`
  background: ${({theme}) => theme.colors.BORDER};
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.32);
  border-radius: 12px;
`;

const cardTypes = {
  outlined,
  filled,
  elevated,
}

const StyledCard = styled(Flex)<CardProps>`
  ${({type = "outlined"}) => cardTypes[type]};
  ${({bgColor, theme}) => bgColor ? `background-color: ${theme.colors[bgColor]}` : "" };
  
  ${({ theme, padding = "0"}) => `
  color: ${theme.colors.TEXT};
  padding: ${padding};
  overflow: hidden;
`}
`;

export default StyledCard;
