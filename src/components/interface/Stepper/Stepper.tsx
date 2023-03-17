import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export interface StepperProps {
  tabs: Array<{ title: React.ReactNode, id: string  }>;
  content: Array<any>;
  tabNavigable?: string;
};

const StyledTabContent = styled(Flex)`
  ${({ theme }) => `
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${theme.colors.WHITE};
  height: 50px;
  padding: 0;
  color: ${theme.colors.TEXT};
`}
`;

const StyledTab = styled(MenuLink)`
  ${({ theme, width }) => `
  color: ${theme.colors.TEXT};
  background: ${theme.colors.BACKGROUND};
  flex-grow: ${width ? 'auto' : 1};
  width: ${width ? width : 'width'};
  border-bottom: 3px solid ${theme.colors.BORDER};
  padding: 17px 0;
  text-align: center;
  
    
  &.active {
    color: ${theme.colors.TEXT};
    border-bottom: 3px solid ${theme.colors.BORDER};
  }
`}
`;

const Stepper = ({ tabs, content, tabNavigable="back" }: StepperProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column" fullWidth>
      <StyledTabContent fullWidth gap={0}>
        {tabs.map(({ id, title }, index) => (
          <StyledTab
            as="div"
            key={id}
            className={index <= currentTab ? "active" : ""}
            onClick={() => {
              switch (tabNavigable) {
                case "back":
                  if (currentTab > index) {
                    setCurrentTab(index);
                  }
                  break;
                case "forward":
                  if (currentTab < index) {
                    setCurrentTab(index);
                  }
                  break;
                case "any":
                  setCurrentTab(index);
                  break;
              }
            }}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabContent>
      {content[currentTab]}
    </Flex>
  );
};

// TODO: consider refactoring
export const useStepper = (steps: Array<{ label: React.ReactNode; id: string; content: any }>, tabNavigation = false) => {
  const [currentTab, setCurrentTab] = useState(0);

  return [
    <StyledTabContent gap={0}>
      {steps.map(({ id, label }, index) => (
        <StyledTab
          as="div"
          key={id}
          className={index === currentTab ? "active" : ""}
          onClick={() => tabNavigation ? setCurrentTab(index) : null}
        >
          {label}
        </StyledTab>
      ))}
    </StyledTabContent>,
    steps[currentTab].content,
    currentTab,
    setCurrentTab,
  ];
};

export default Stepper;
