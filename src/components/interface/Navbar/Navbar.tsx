import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Flex from '../../layout/Flex';
import Grid from '../../layout/Grid';
import DarkThemeIcon from '../../icons/DarkTheme';
import LightThemeIcon from '../../icons/LightTheme';
import OrigynLogoMark from '../../icons/OrigynLogoMark';
import { HR, Icons } from '../../index';
import { theme } from '../../../utils';

type NavItem = {
  href: string;
  title: string;
  icon: any;
};

type NavItems = {
  start?: NavItem[];
  center?: NavItem[];
  end?: NavItem[];
};

const NavigationBarTooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isVisible && <StyledTooltip>{content}</StyledTooltip>}
    </div>
  );
};

const StyledTooltip = styled('div')`
  ${({ theme }) => `
    position: absolute;
    top: 50%;
    left: 100%;
    transform:translateY(-50%) translateX(8px);
    background-color: ${theme.colors.ACCENT_PURPLE_800};
    color: ${theme.colors.NAVIGATIONBAR_ICON_TEXT};
    font-size: 10px;
    font-weight: normal;
    white-space: nowrap;
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding: 4px;
    border-radius: 8px;
`}
`;

const StyledNav = styled('div')`
  ${({ theme }) => `
  display: block;
  ${theme.media.md}{
    display: none;
  }
  background-color: ${theme.colors.NAVIGATION_BACKGROUND};
  color: ${theme.colors.TEXT};
  padding: 24px;
  box-sizing: border-box;
  width: 104px;
  height: 100vh;
  position: sticky;
  top: 0;

  li {
    list-style: none;
  }

  a {
    color: ${theme.colors.WHITE};
  }

  svg {
    fill: currentColor;
  }
`}
`;

const MobileNav = styled('div')`
  display: none;
  z-index: 1000;
  position: sticky;
  top: 0;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.colors.TEXT};
  ${({ theme }) => theme.media.md} {
    display: block;
  }
`;

const MobileNavHead = styled('div')`
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 16px;
  box-sizing: border-box;
`;

const MobileMenu = styled('div')`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.colors.TEXT};
`;

const NavButton = styled(Button)`
  ${({ theme }) => `
  &.nav-button {
    color: ${theme.colors.SECONDARY_TEXT};
  }

  &.nav-button:hover, nav-button-mobile:hover {
    background-color: ${theme.colors.ACCENT_PURPLE_900};
    color: ${theme.colors.ACCENT_PURPLE_200};
  }
  &.nav-button.active, nav-button-mobile:hover {
    background-color: ${theme.colors.ACCENT_PURPLE_800};
    color: ${theme.colors.ACCENT_PURPLE_200};
  }
  &.nav-button-mobile {
    border-radius: 0 50px 50px 0;
  }
  `}
`;

const Navbar: React.FC<{
  navItems: NavItems;
  onChangeTheme?: any;
  dAppsVersion: string;
  darkMode: boolean;
  showThemeButton: boolean;
}> = ({ navItems, onChangeTheme = () => {}, dAppsVersion, darkMode, showThemeButton }) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const defaultTab = ['start', 'center', 'end'].find((key) => key in navItems);
  const [currentTab, setCurrentTab] = useState<string>(`${defaultTab}-0` || null);
  const countNavItems = Object.values(navItems).reduce(
    (acc, currentValue) => acc + currentValue.length,
    0,
  );

  useEffect(() => {
    const navbarCurrentTab = sessionStorage.getItem('navbarCurrentTab');
    if (navbarCurrentTab) {
      setCurrentTab(navbarCurrentTab);
    } else {
      setCurrentTab('start-0' || 'center-0' || 'end-0');
    }
  }, []);

  const handleTabChange = (index: string) => {
    setCurrentTab(index);
    sessionStorage.setItem('navbarCurrentTab', index);
  };

  return (
    <>
      <OrigynLogoMark />
      <MobileNav>
        <MobileNavHead>
          <Icons.OrigynIcon />
          <Button iconButton size="medium" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <Icons.CloseIcon width={24} /> : <Icons.MenuIcon />}
          </Button>
        </MobileNavHead>
        {mobileMenu && (
          <MobileMenu>
            {Object.entries(navItems).map(
              ([key, value]) =>
                value &&
                value.map((item, index) => (
                  <Flex
                    flexFlow="column"
                    align="flex-start"
                    gap={8}
                    key={`navItem-${key}-${index}`}
                  >
                    <Link to={item.href}>
                      <NavButton
                        textButton
                        className={`nav-button nav-button-mobile${
                          `${key}-${index}` === currentTab ? ' active' : ''
                        }`}
                        onClick={() => handleTabChange(`${key}-${index}`)}
                      >
                        {item.icon()} {item.title}
                      </NavButton>
                    </Link>
                  </Flex>
                )),
            )}
            <br />
            <HR />
            <br />
            <Flex flexFlow="column" gap={8} align="flex-start">
              <p
                style={{
                  color: theme.colors.INACTIVE,
                  fontSize: '14px',
                  marginLeft: '24px',
                }}
              >
                v{dAppsVersion}
              </p>
              <NavButton textButton onClick={onChangeTheme} className="nav-button">
                {darkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
              </NavButton>
            </Flex>
          </MobileMenu>
        )}
      </MobileNav>
      <StyledNav>
        <Flex flexFlow="column" align="center" fullHeight>
          <Flex flexFlow="column" align="center" style={{ marginBottom: '24px' }}>
            <Icons.OrigynIcon />
          </Flex>
          {['start', 'center', 'end'].map((key) => (
            <Flex
              flexFlow="column"
              align="center"
              justify={`flex-${key}`}
              gap={8}
              fullHeight
              key={`navItem-${key}`}
            >
              {navItems[key] &&
                navItems[key].map((item: NavItem, index: number) => (
                  <NavigationBarTooltip
                    key={`navItem-${key}-${index}`}
                    content={item.title.toUpperCase()}
                  >
                    <Link to={item.href}>
                      <NavButton
                        textButton
                        iconButton
                        size="large"
                        className={`nav-button${`${key}-${index}` === currentTab ? ' active' : ''}`}
                        onClick={() => handleTabChange(`${key}-${index}`)}
                      >
                        {item.icon()}
                      </NavButton>
                    </Link>
                  </NavigationBarTooltip>
                ))}
            </Flex>
          ))}
          <Flex flexFlow="column" align="center" gap={16}>
            <Flex>
              <p style={{ color: theme.colors.INACTIVE, fontSize: '14px' }}>v{dAppsVersion}</p>
            </Flex>
            {showThemeButton && (
              <NavButton textButton iconButton onClick={onChangeTheme} className="nav-button">
                {darkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
              </NavButton>
            )}
          </Flex>
        </Flex>
      </StyledNav>
    </>
  );
};

export default Navbar;
