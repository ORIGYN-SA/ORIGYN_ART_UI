import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export type SliderProps = {
  tabs: Array<{ title: string }>;
  content: Array<any>;
};

const StyledTabContent = styled(Flex)`
  ${({ theme }) => `
  background: ${theme.colors.WHITE};
  height: 50px;
  padding: 0;
  color: #ffffff;
`}
`;

const StyledTab = styled(MenuLink)`
  ${({ theme }) => `
  color: ${theme.colors.BLACK};
  font-size: 12px;
  letter-spacing: 0.05em;
  flex-grow: 1;
  border-bottom: 3px solid ${theme.colors.BLACK};
  padding: 17px 0;
  text-align: center;
  text-transform: uppercase;
  min-width: 123px;
  
  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }
    
  &.active {
    opacity: 1;
    border-bottom: 3px solid ${theme.colors.BLACK};
  }
`}
`;

const Slider = ({ tabs, content }: StepperProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column">
      <StyledTabContent gap={0}>
        {tabs.map(({ title }, index) => (
          <StyledTab
            as="div"
            className={index <= currentTab ? "active" : ""}
            onClick={() => setCurrentTab(index)}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabContent>
      {content[currentTab]}
    </Flex>
  );
};

export default Slider;
