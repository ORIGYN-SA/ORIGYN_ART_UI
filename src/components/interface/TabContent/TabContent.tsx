import React, {useState} from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export type TabContentProps = {
  tabs: Array<{ title: string, id: string }>;
  content: Array<any>;
  fullWidth?: boolean;
  justify?: "center" | "flex-start" | "flex-end";
  borderBottom?: boolean;
  bgColor?: string;
};

const StyledTabContent = styled(Flex)<{borderBottom: boolean, bgColor}>`
  ${({theme, borderBottom, bgColor}) => `
  background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.BACKGROUND};
  color: ${theme.colors.TEXT};
  box-sizing: border-box;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  height: 50px;
  gap: 32px;
  
  ${borderBottom ? "border-bottom: 1px solid #E3E3E3;" : "" }
  
  ${theme.media.sm} {
    padding: 0 5px;
    width: 100%;
    gap: 10px;
    justify-content: space-evenly;
  }
`}
`;

const StyledTab = styled(MenuLink)`
  ${({ theme }) => `
    color: ${theme.colors.TEXT};
    font-weight: 600;
    display: flex;
    height: 50px;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid #E3E3E3;
    opacity: 0.5;
  
  &:hover {
    opacity: 1;
    border-bottom: 1px solid ${theme.colors.TEXT};
  }
  &.active {
    opacity: 1;
    color: ${theme.colors.TEXT};
    border-bottom: 2px solid ${theme.colors.ACCENT_COLOR};
  }
`}
`;

const TabContent = ({tabs, content, fullWidth=false, justify="center", borderBottom, bgColor}: TabContentProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column" align="flex-start">
      <StyledTabContent fullWidth={fullWidth} justify={justify} borderBottom={borderBottom} bgColor={bgColor}>
        {tabs.map(({id, title}, index) => (
          <StyledTab
            as="p"
            key={id}
            className={index === currentTab ? "active" : ""}
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

export default TabContent;
