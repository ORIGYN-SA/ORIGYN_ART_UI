import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";
import Banner from "../Banner";
import Button from "../Button/Button";
import Card from "../Card";

export type SecondaryNavProps = {
  tabs: Array<{ title: string; id: string }>;
  content: Array<any>;
  title?: string;
  titleLink?: string;
  onConnect?: () => void;
  onLogOut?: () => void;
  principal?: string;
};

const StyledSecondaryNav = styled(Flex)`
  ${({ theme }) => `
  background: linear-gradient(90deg, ${theme.colors.NAVIGATION_BACKGROUND_LIGHT} 0%, ${theme.colors.NAVIGATION_BACKGROUND} 100%);
  color: ${theme.colors.WHITE};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  height: 80px;
  gap: 32px;
  padding: 0 32px;
  
  ${theme.media.sm} {
    padding: 0 5px;
    overflow: auto;
    width: 100%;
    gap: 10px;
    justify-content: space-evenly;
  }
`}
`;

const StyledTab = styled(MenuLink)`
  ${({ theme }) => `
    background: ${theme.colors.NAVIGATION_BACKGROUND};
    color: ${theme.colors.TEXT};
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0;
    opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
    color: ${theme.colors.TEXT};
    border-bottom: 2px solid ${theme.colors.TEXT};
  }
`}
`;

const StyledWalletMenu = styled("div")`
  position: relative;
`;
const StyledLogOut = styled(Card)`
  position: absolute;
  top: 100%;
  right: 0;
`;
const StyledWallet = styled(Button)`
  position: relative;
  background: ${({ theme }) => theme.colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.BORDER};
  color: ${({ theme }) => theme.colors.TEXT};
  opacity: 1;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 0;
    right: 0;

    background: ${({ theme }) => theme.colors.SUCCESS};

    border: 1px solid #000000;
  }
`;

const StyledContent = styled("div")`
  background: ${({ theme }) => theme.colors.BACKGROUND};
  box-shadow: inset 0 0 10px 0 rgb(0 0 0 / 4%);
  border-radius: 16px 0px 0px 0px;
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled(MenuLink)`
  ${({ theme }) => `
    background: ${theme.colors.NAVIGATION_BACKGROUND};
    color: ${theme.colors.TEXT};
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0;
    opacity: 1;
    color: ${theme.colors.TEXT};
    margin-right: 32px;
  
`}
`;
const StyledContainer = styled("div")`
  ${({ theme }) => `
  width: 100%;
  height: auto;
  background: ${theme.colors.NAVIGATION_BACKGROUND};
  position: sticky;
  top: 0;
  z-index: 999;
  `}
`;

const SecondaryNav = ({
  tabs,
  content,
  title,
  titleLink,
  onConnect,
  principal,
  onLogOut,
}: SecondaryNavProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Banner
      bgColor="transparent"
      flexFlow="column"
      align="flex-start"
      padding="0"
    >
      <StyledContainer>
        <Banner
          bgColor="transparent"
          fullWidth
          justify="space-between"
          align="center"
          padding="0 24px"
        >
          <Flex align="center" gap={32}>
            <StyledSecondaryNav>
              <StyledTitle as="div" className={""}>
                <b>
                  <a href={titleLink ? titleLink : "#"}>{title}</a>
                </b>
              </StyledTitle>
              {tabs.map(({ id, title }, index) => (
                <StyledTab
                  as="div"
                  key={id}
                  className={index === currentTab ? "active" : ""}
                  onClick={() => setCurrentTab(index)}
                >
                  {title}
                </StyledTab>
              ))}
            </StyledSecondaryNav>
          </Flex>
          {onConnect && !principal && (
            <div>
              <Button size="small" onClick={onConnect}>
                Connect
              </Button>
            </div>
          )}
          {principal && (
            <StyledWalletMenu>
              <StyledWallet
                size="small"
                onClick={() => setIsMenuOpened(!isMenuOpened)}
              >
                {principal.slice(0, 2)}...{principal.slice(-4)}
              </StyledWallet>
              {onLogOut && isMenuOpened && (
                <StyledLogOut ref={ref} type="filled" padding="16px">
                  <Flex>
                    <Button textButton size="small" onClick={onLogOut}>
                      Log out
                    </Button>
                  </Flex>
                </StyledLogOut>
              )}
            </StyledWalletMenu>
          )}
        </Banner>
      </StyledContainer>
      <StyledContent>{content[currentTab]}</StyledContent>
    </Banner>
  );
};

export default SecondaryNav;
