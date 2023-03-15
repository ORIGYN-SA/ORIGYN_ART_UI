import React from "react";
import styled from "styled-components";
import Card from "../Card";

const StyledProductCardContent = styled("div")`
  ${({ theme }) => `
  
  padding: 16px;
  
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    
    letter-spacing: -0.1px;
    color: #5F5F5F;
  }
  
  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    
    letter-spacing: -0.15px;
    color: #0B140C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`}
`;

const StyledCardImage = styled("img")`
  ${() => `width: 307px; height: 307px`}
`;
const StyledCard = styled(Card)`
  ${({ theme }) => `
  background-color: ${theme.colors.NAVIGATION_BACKGROUND};
  width: 307px;`}
`;

const ProductCard = ({ title, info, image, status }: ProductCardProps) => {
  return (
    <StyledCard flexFlow="column">
      <StyledCardImage src={image} alt={`image-${title}`} />
      <StyledProductCardContent>
        <p>{info}</p>
        <h4>{title}</h4>
        <br />
        <p>Status</p>
        {status}
      </StyledProductCardContent>
    </StyledCard>
  );
};

export default ProductCard;

type ProductCardProps = {
  title: string;
  info?: string;
  image: string;
  status: JSX.Element;
};
