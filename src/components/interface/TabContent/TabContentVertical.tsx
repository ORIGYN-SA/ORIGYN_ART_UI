import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";
import Select, { StylesConfig } from "react-select";
import { ArrowDownIcon } from "../../icons";

export type TabContentVerticalProps = {
  tabs: Array<{ title: string }>;
  content: Array<any>;
};

type Option = { value: number; label: string };

const StyledSelect = styled(Select)`
  ${({ theme }) => `
    display: none;
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: ${theme.colors.ACCENT_COLOR};
    }
    ${theme.media.md} {
      display: block;
    }
  `}
`;

const customReactSelectStyles: StylesConfig<Option | unknown, false> = {
  control: (provided) => ({
    ...provided,
    borderRadius: 0,
    flexDirection: "row-reverse",
    border: "none",
    backgroundColor: "transparent",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: "0.1em",
  }),
  option: (provided, state) => ({
    opacity: state.isSelected ? 1 : 0.5,
    lineHeight: "40px",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "0.1em",
    paddingLeft: "40px",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
    margin: 0,
  }),
};

const StyledTabContent = styled(Flex)<{ maxWidth?: string }>`
  ${({ theme, maxWidth = "none" }) => `
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: ${maxWidth};
    width: 100%;
    ${theme.media.md} {
    display: none;
    }
  `}
`;

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  padding-left: 7px;
  padding-right: 12px;
  &.up {
    padding-right: 7px;
    padding-left: 12px;
    transform: rotateZ(180deg);
  }
`;

const StyledTab = styled(MenuLink)`
  padding: 15px 0 6px 0;
  font-size: 16px;
  line-height: 1;
`;

const StyledContent = styled("div")`
  ${({ theme }) => `
  flex-grow: 1;
  padding-left: 35px;
  ${theme.media.md}{
    padding-left: 0;
  }
`}
`;

const TabContentVertical = ({ tabs, content }: TabContentVerticalProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const options: Array<Option> = tabs.map(({ title }, index) => ({
    value: index,
    label: title,
  }));

  return (
    <>
      <StyledSelect
        onChange={(option: any) => setCurrentTab(option?.value)}
        styles={customReactSelectStyles}
        components={{
          DropdownIndicator: () => (
            <StyledArrowDownIcon className={isMenuOpen ? "up" : ""} />
          ),
        }}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
        options={options}
        value={options.filter((el) => el.value === currentTab)[0]}
      />
      <Flex>
        <StyledTabContent maxWidth="200px">
          {tabs.map(({ title }, index) => (
            <StyledTab
              as="b"
              key={"contentTab-" + title}
              className={index === currentTab ? "active" : ""}
              onClick={() => setCurrentTab(index)}
            >
              {title}
            </StyledTab>
          ))}
        </StyledTabContent>
        <StyledContent>{content[currentTab]}</StyledContent>
      </Flex>
    </>
  );
};

export const useTabContentVertical = (
  steps: Array<{ title: string; content: any }>
) => {
  const [currentTab, setCurrentTab] = useState(0);

  return [
    <>
      <StyledSelect
        onChange={(option: any) => setCurrentTab(option?.value)}
        styles={customReactSelectStyles}
        components={{
          DropdownIndicator: ({ isFocused }) => (
            <StyledArrowDownIcon className={isFocused ? "up" : ""} />
          ),
        }}
        options={steps.map((s, i) => ({ value: i, label: s.title }))}
        defaultValue={{ label: steps[0].title, value: 0 }}
      />
      <StyledTabContent gap={0}>
        {steps.map(({ title }, index) => (
          <StyledTab
            as="b"
            key={"contentTab-" + title}
            className={index === currentTab ? "active" : ""}
            onClick={() => setCurrentTab(index)}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabContent>
    </>,
    steps[currentTab].content,
    currentTab,
    setCurrentTab,
  ];
};

export default TabContentVertical;
