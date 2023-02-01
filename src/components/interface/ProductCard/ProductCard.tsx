import React from "react";
import styled from "styled-components";
import Card from "../Card";
import HR from "../HR";
import Flex from "../../layout/Flex";
import Button from "../Button";
import ArrowRight from "../../icons/ArrowRight";
import './ProductCard.scss'

export type ProductCardProps = {};

// const StyledProductCardContent = styled("div")`
//   ${() => `
//   padding: 16px;
  
//   p {
//     font-weight: 500;
//     font-size: 12px;
//     line-height: 20px;
    
//     letter-spacing: -0.1px;
//     color: #5F5F5F;
//   }
  
//   h4 {
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 22px;
    
//     letter-spacing: -0.15px;
//     color: #0B140C;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `}
// `;

const ProductCard = () => {
  return (
    <Card flexFlow="column">
      <img src="http://placehold.jp/240x290.png" alt="123" />
      <div className='product-card-content'>
        <p>Creator/Account</p>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
        <br />
        <p>Status</p>
        <Flex align="center" justify="space-between">
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M5.99678 1L5.92969 1.22788V7.83991L5.99678 7.90684L9.06594 6.09263L5.99678 1Z"
                fill="#343434"
              />
              <path
                d="M6.00089 1L2.93164 6.09263L6.00089 7.90684V4.69755V1Z"
                fill="#8C8C8C"
              />
              <path
                d="M5.9968 8.48824L5.95898 8.53435V10.8897L5.9968 11L9.06784 6.67497L5.9968 8.48824Z"
                fill="#3C3C3B"
              />
              <path
                d="M6.00089 11V8.48824L2.93164 6.67497L6.00089 11Z"
                fill="#8C8C8C"
              />
              <path
                d="M5.99805 7.90673L9.06721 6.09252L5.99805 4.69743V7.90673Z"
                fill="#141414"
              />
              <path
                d="M2.93164 6.09252L6.00089 7.90673V4.69743L2.93164 6.09252Z"
                fill="#393939"
              />
            </svg>
            0.075
          </h4>
          <ArrowRight />
        </Flex>
      </div>
    </Card>
  );
};

export default ProductCard;
