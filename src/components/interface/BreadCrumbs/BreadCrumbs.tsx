import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../layout/Flex";
import ArrowRightIcon from "../../icons/ArrowRight";
import './BreadCrumbs.scss'

export type BreadCrumbsProps = {
  data: Array<{ title: string; link: string }>;
};

// const SBreadCrumbs = styled("div")`
//   ${({ theme }) => `
//   display: flex;
//   gap: 15px;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 20px;
//   letter-spacing: -0.1px;
//   margin: 12px 0;
//   color: ${theme.colors.TEXT};
  
//   svg {
//     fill: ${theme.colors.TEXT};
//   }
  
//   a {
//     text-decoration: underline;
//     font-weight: 600;
//     color: ${theme.colors.TEXT};
    
//     &:hover {
//       text-decoration: none;
//     }
//   }
// `}
// `;

const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
  return (
    <div className="bread-crumbs-div">
      {data.map(({ link, title }, index) => (
        <Flex gap={15} smFlexFlow="row" align="center" key={title}>
          {index > 0 && (
            <span className="material-symbols-rounded">chevron_right</span>
          )}
          {index + 1 === data.length ? (
            <span>{title}</span>
          ) : (
            <Link to={link}>{title}</Link>
          )}
        </Flex>
      ))}
    </div>
  );
};

export default BreadCrumbs;
