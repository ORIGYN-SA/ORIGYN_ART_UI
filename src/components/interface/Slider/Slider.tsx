import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { Carousel } from "react-responsive-carousel";
import ArrowRightIcon from "../../icons/ArrowRight";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface SliderProps {
  children?: React.ReactChild[];
}

const StyledArrow = styled("div")`
  ${({ theme }) => `
    border: 2px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 17%;
    z-index: 1;
        
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.prev {
      right: auto;
      left: 17%;
      svg {
        transform: rotate(180deg);
      }
    }
    
  ${theme?.media?.lg} {
    right: 3%;
    
    &.prev {
      right: auto;
      left: 3%;
    }
  }
    
  ${theme?.media?.md} {
    display: none;
  }
`}
`;

const StyledIndicator = styled("div")`
  display: inline-block;
  border-top: 2px solid #151515;
  width: 140px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #aeaeae;
  padding: 5px;

  &.active {
    color: #151515;
    border-top: 2px solid #d8d8d8;
  }

  ${({ theme }) => theme?.media?.md} {
    width: 60px;
  }
`;

const ProductCard: React.FC<SliderProps> = ({ children }) => {
  return (
    <Carousel
      renderArrowPrev={(clickHandler) => (
        <StyledArrow onClick={clickHandler} className="prev">
          <ArrowRightIcon />
        </StyledArrow>
      )}
      renderArrowNext={(clickHandler) => (
        <StyledArrow onClick={clickHandler}>
          <ArrowRightIcon />
        </StyledArrow>
      )}
      renderIndicator={(clickHandler, isSelected, index) => (
        <StyledIndicator className={isSelected ? "active" : ""}>
          0{index + 1}
        </StyledIndicator>
      )}
    >
      {children}
    </Carousel>
  );
};

export default ProductCard;
