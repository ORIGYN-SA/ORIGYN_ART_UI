import React from "react";
import "./styles.css";
import Button from "../Button";
import ThemeIcon from "../../icons/theme";
import OrigynIcon from "../../icons/origyn";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 24px;
  align-items: center;
  position: absoulte;
  justify-content: space-between;
  float: left;
  gap: 564px;
  width: 104px;
  height: "calc(100% - 104px)";
  flex-grow: 1;
  background: black;
`;

/* asked kenneth, height should be set to 100% instead of 900px

 */

/* .flex-container is whole component,
 container 1 and 2 are children */

/* gap between div 1 and div 2 */

const NavigationTop = styled.div`
display: flex;
flex-direction: row;
width: 100%
height: 104px;
background: black;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0px;
  gap: 20px;
  width: 56px;
  height: 284px;
`;

const TopItem1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 10px;
  gap: 10px;
  width: 56px;
  height: 80px;
`;

const TopItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 56px;
  height: 184px;
`;

const ItemHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px;
  width: 18px;
  height: 18px;
`;

// const itemHome :hover {
//   background: #f4e5f1;
//   border-radius: 999px;
// }

// .item-home :active {
//   background: #f4e5f1;
//   border-radius: 999px;
// }

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 19px;
  color: #5f5f5f;
  width: 18px;
  height: 18px;
`;

// .item :hover {
//   background: #f4e5f1;
//   border-radius: 999px;
// }

// .item :active {
//   background: #f4e5f1;
//   border-radius: 999px;
// ;
// }

/* gap between div 1 and div 2 */
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 76px;
  height: 88px;
`;

const BottomItem1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  width: 76px;
  height: 32px;
  border-radius: 999px;
`;

const BottomItem2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px;
  gap: 10px;
  width: 32px;
  height: 32px;
`;

// const bottomItem2 :hover {
//   background: #f4e5f1;
//   border-radius: 999px;
// }

const Navbar = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <FlexContainer>
        {/* container 1 */}
        <Container1>
          <TopItem1>
            <OrigynIcon />
          </TopItem1>
        </Container1>

        {/* container 2 */}
        <Container2>
          <BottomItem1>
            <Button btnType="small">Connect</Button>
          </BottomItem1>
          <BottomItem2>
            <ThemeIcon />
          </BottomItem2>
        </Container2>
      </FlexContainer>

      <div
        style={{
          width: "calc(100% - 104px)",
          height: "calc(100% - 104px)",
          background: "black",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? " active " : " "}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
