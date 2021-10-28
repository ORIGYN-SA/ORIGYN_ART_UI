import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../layout/Flex";
import ArrowRightIcon from "../../icons/ArrowRight";

export type BreadCrumbsProps = {
  data: Array<{ title: string; link: string }>;
};

const StyledBreadCrumbsLink = styled(Link)`
  ${({theme}) => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin: 12px 0;
  text-decoration: none;
  color: ${theme.colors.BLACK};
`}
`;

const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
  return (
    <Flex gap={15} align="center">
      {data.map((item, index) => (
        <>
          {index > 0 && <ArrowRightIcon />}
          <StyledBreadCrumbsLink to={item.link}>{item.title}</StyledBreadCrumbsLink>
        </>
      ))}
    </Flex>
  );
};

export default BreadCrumbs;