import React, {useState} from "react"
import styled from 'styled-components';
import Flex from '../../layout/Flex';
import MenuLink from "../MenuLink";
import ProfileIcon from "../../icons/Profile";
import ArrowDownIcon from "../../icons/ArrowDown";
import Card from "../Card/Card";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

export type HeaderProps = {
  isLoggedIn: boolean;
}

const StyledHeader = styled(Flex)`${({ theme }) => `
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  height: 88px;
  padding: 0 30px;
`}`;


const StyledProfileDropdown = styled(Card)`
  position: absolute;
  right: 0;
  top: 56px;
  width: 250px;
  padding: 17px 25px;
`;

const StyledNavigation = styled(Flex)`${({ theme }) => `
  gap: 40px;
  
  ${theme.media.sm} {
    display: none;
    position: fixed;
    inset: 0px;
    background-color: ${theme.colors.WHITE};
    flex-flow: column;
    align-items: center;
    padding: 150px 0;
    gap: 30px;
    
    &.active {
      display: flex;
    }
  }
`}`;

const MenuButton = styled.button`${({ theme }) => `
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  display: block;
  width: 30px;
  height: 26px;
  
  background: transparent;
  border-top: 4px solid;
  border-bottom: 4px solid;
  
  color: $buttonColor;
  font-size: 0;
  
  transition: all .25s ease-in-out;
  
  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    
    position: absolute;
    top: 50%;
    left: 50%;
    
    background: currentColor;
    
    transform: translate(-50%, -50%);
    transition: transform .25s ease-in-out;
  }
  &.active {
    border-color: transparent;
  
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`}`;

const Header = ({isLoggedIn}: HeaderProps) => {
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  return (
    <StyledHeader align="center" justify="space-between">
      <Flex gap={50}>
        <img src="http://placehold.jp/161x37.png" alt="logo"/>
        <StyledNavigation className={isMobileMenuOpened ? 'active' : ''}>
          <MenuLink className="active">Browse</MenuLink>
          <MenuLink>Trading</MenuLink>
          <MenuLink>My Portfolio</MenuLink>
          <MenuLink>About</MenuLink>
        </StyledNavigation>
      </Flex>
      <Flex align="center" gap={15} relative onClick={() => setIsProfileOpened(!isProfileOpened)}>
        {
          isLoggedIn ? (
            <>
            <ProfileIcon />
            <p>ArtLover</p>
            <ArrowDownIcon />
              {
                isProfileOpened && (
                  <StyledProfileDropdown>
                    <Flex flexFlow="column" gap={30}>
                      <Flex flexFlow="column" gap={10}>
                        <p>My Account</p>
                        <p>Dashboard</p>
                      </Flex>
                      <div>
                        <p style={{opacity: "0.5"}}>Sign Out</p>
                      </div>
                    </Flex>
                  </StyledProfileDropdown>
                )
              }
            </>
          ) : (
            <p>Log In / Sign Up</p>
          )
        }
      </Flex>
      <MenuButton className={isMobileMenuOpened ? 'active' : ''} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} />
    </StyledHeader>
  )
}

export default Header;
