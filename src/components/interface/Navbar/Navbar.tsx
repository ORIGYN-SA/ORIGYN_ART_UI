import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Flex from '../../layout/Flex';
import DarkThemeIcon from '../../icons/DarkTheme';
import LightThemeIcon from '../../icons/LightTheme';
import OrigynLogoMark from '../../icons/OrigynLogoMark';
import { HR, Icons } from '../../index';
import { theme } from '../../../utils';

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

  &.nav-button:hover {
    background-color: ${theme.colors.ACCENT_PURPLE_900};
    color: ${theme.colors.ACCENT_PURPLE_200};
  }
  &.nav-button.active {
    background-color: ${theme.colors.ACCENT_PURPLE_800};
    color: ${theme.colors.ACCENT_PURPLE_200};
  }`}
`;

const Navbar: React.FC<{
  navItems: any;
  onChangeTheme?: any;
  dAppsVersion: string;
  darkMode: boolean;
  showThemeButton: boolean;
}> = ({ navItems, onChangeTheme = () => {}, dAppsVersion, darkMode, showThemeButton }) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    const navbarCurrentTab = sessionStorage.getItem('navbarCurrentTab');
    if (navbarCurrentTab) {
      setCurrentTab(parseInt(navbarCurrentTab));
    } else {
      setCurrentTab(0);
    }
  }, []);

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    sessionStorage.setItem('navbarCurrentTab', index.toString());
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
            {navItems.map((item, index) => (
              <Link to={item.href} key={`navItem-${index}`}>
                <NavButton
                  textButton
                  className={`nav-button${index === currentTab ? ' active' : ''}`}
                >
                  {item.icon()} {item.title}
                </NavButton>
              </Link>
            ))}
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
        <Flex flexFlow="column" align="center" justify="space-between" fullHeight>
          <Flex flexFlow="column" align="center" gap={8}>
            <div style={{ marginBottom: '24px' }}>
              <Icons.OrigynIcon />
            </div>
            {navItems.map((item, index) => (
              <NavigationBarTooltip key={`navItem-${index}`} content={item.title.toUpperCase()}>
                <Link to={item.href} key={`navItem-${index}`}>
                  <NavButton
                    textButton
                    iconButton
                    size="large"
                    className={`nav-button${parseInt(index) === currentTab ? ' active' : ''}`}
                    onClick={() => handleTabChange(parseInt(index))}
                  >
                    {item.icon()}
                  </NavButton>
                </Link>
              </NavigationBarTooltip>
            ))}
          </Flex>

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
