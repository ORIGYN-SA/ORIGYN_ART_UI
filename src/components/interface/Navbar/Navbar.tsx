import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Flex from "../../layout/Flex";
import DarkThemeIcon from "../../icons/DarkTheme";
import LightThemeIcon from "../../icons/LightTheme";
import { HR, Icons } from "../../index";
import { theme } from "../../../utils";

const NavigationBarTooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isVisible && <StyledTooltip>{content}</StyledTooltip>}
    </div>
  );
};

const StyledTooltip = styled("div")`
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

const StyledNav = styled("div")`
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

const MobileNav = styled("div")`
  display: none;
  z-index: 10000;
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
const MobileNavHead = styled("div")`
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 16px;
  box-sizing: border-box;
`;
const MobileMenu = styled("div")`
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
    background-color: ${theme.colors.ACCENT_PURPLE_900};
    color: ${theme.colors.ACCENT_PURPLE_200};
  }`}
`;

const Navbar: React.FC<{
  navItems: any;
  onChangeTheme?: any;
  dAppsVersion: string;
  darkMode: boolean;
}> = ({ navItems, onChangeTheme = () => {}, dAppsVersion, darkMode }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient
            id="paint0_linear_1649_2905"
            x1="5.23311"
            y1="7.10534"
            x2="5.23311"
            y2="22.6188"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stopColor="#05612D" />
            <stop offset="0.3" stopColor="#017E36" />
            <stop offset="0.33" stopColor="#138838" />
            <stop offset="0.4" stopColor="#2E963C" />
            <stop offset="0.48" stopColor="#41A13F" />
            <stop offset="0.55" stopColor="#4CA740" />
            <stop offset="0.63" stopColor="#50A941" />
            <stop offset="0.73" stopColor="#57AB3C" />
            <stop offset="0.88" stopColor="#6CAF30" />
            <stop offset="0.91" stopColor="#70B02D" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1649_2905"
            x1="23.2229"
            y1="22.6182"
            x2="2.28735"
            y2="22.6182"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stopColor="#1F9CD4" />
            <stop offset="0.3" stopColor="#1470B1" />
            <stop offset="0.36" stopColor="#1A5EA2" />
            <stop offset="0.44" stopColor="#214B92" />
            <stop offset="0.53" stopColor="#254088" />
            <stop offset="0.63" stopColor="#263C85" />
            <stop offset="0.69" stopColor="#25397E" />
            <stop offset="0.79" stopColor="#223169" />
            <stop offset="0.9" stopColor="#1E2448" />
            <stop offset="0.91" stopColor="#1E2345" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1649_2905"
            x1="2.68839"
            y1="-2.50904"
            x2="27.6564"
            y2="11.9064"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EDE229" />
            <stop offset="0.44" stopColor="#F3A30F" />
            <stop offset="0.57" stopColor="#E96316" />
            <stop offset="0.68" stopColor="#E1321B" />
            <stop offset="0.73" stopColor="#DE1F1D" />
            <stop offset="0.84" stopColor="#DC1820" />
            <stop offset="1" stopColor="#DB1222" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1649_2905"
            x1="23.2214"
            y1="27.3971"
            x2="23.2214"
            y2="5.39851"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#293170" />
            <stop offset="0.06" stopColor="#313272" />
            <stop offset="0.14" stopColor="#473577" />
            <stop offset="0.25" stopColor="#6A3A7F" />
            <stop offset="0.29" stopColor="#793C82" />
            <stop offset="0.44" stopColor="#803483" />
            <stop offset="0.66" stopColor="#852E83" />
            <stop offset="0.97" stopColor="#59132A" />
            <stop offset="1" stopColor="#551022" />
          </linearGradient>
        </defs>
      </svg>
      <MobileNav>
        <MobileNavHead>
          <Icons.OrigynIcon />
          <Button
            iconButton
            size="medium"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <Icons.CloseIcon width={24} /> : <Icons.MenuIcon />}
          </Button>
        </MobileNavHead>
        {mobileMenu && (
          <MobileMenu>
            {navItems.map((item, index) => (
              <a href={item.href}>
                <NavButton
                  textButton
                  className={`nav-button${
                    index === currentTab ? " active" : ""
                  }`}
                >
                  {item.icon()} {item.title}
                </NavButton>
              </a>
            ))}
            <br />
            <HR />
            <br />
            <Flex flexFlow="column" gap={8} align="flex-start">
              <p
                style={{
                  color: theme.colors.INACTIVE,
                  fontSize: "14px",
                  marginLeft: "24px",
                }}
              >
                v{dAppsVersion}
              </p>
              <NavButton
                textButton
                onClick={onChangeTheme}
                className="nav-button"
              >
                {darkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
              </NavButton>
            </Flex>
          </MobileMenu>
        )}
      </MobileNav>
      <StyledNav>
        <Flex
          flexFlow="column"
          align="center"
          justify="space-between"
          fullHeight
        >
          <Flex flexFlow="column" align="center" gap={8}>
            <div style={{ marginBottom: "24px" }}>
              <Icons.OrigynIcon />
            </div>
            {navItems.map((item, index) => (
              <NavigationBarTooltip
                key={`navItem-${index}`}
                content={item.title.toUpperCase()}
              >
                <a key={`navItem-${index}`} href={item.href}>
                  <NavButton
                    textButton
                    iconButton
                    size="large"
                    className={`nav-button${
                      index === currentTab ? " active" : ""
                    }`}
                    onClick={() => setCurrentTab(index)}
                  >
                    {item.icon()}
                  </NavButton>
                </a>
              </NavigationBarTooltip>
            ))}
          </Flex>

          <Flex flexFlow="column" align="center" gap={16}>
            <Flex>
              <p style={{ color: theme.colors.INACTIVE, fontSize: "14px" }}>
                v{dAppsVersion}
              </p>
            </Flex>
            <NavButton
              textButton
              iconButton
              onClick={onChangeTheme}
              className="nav-button"
            >
              {darkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
            </NavButton>
          </Flex>
        </Flex>
      </StyledNav>
    </>
  );
};

export default Navbar;
