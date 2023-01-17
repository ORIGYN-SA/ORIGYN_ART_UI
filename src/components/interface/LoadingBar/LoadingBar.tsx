import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';

export type LoadingBarProps = {
  display: boolean;
};

const backgrounds = [
  "linear-gradient(136.26deg, #EDE229 -5.76%, #F3A30F 41.76%, #E96316 55.8%, #E1321B 67.68%, #DE1F1D 73.08%, #DC1820 84.96%, #DB1222 102.24%);",
  "linear-gradient(312.18deg, #05612D 2.99%, #017E36 29.94%, #138838 32.93%, #2E963C 39.92%, #41A13F 47.9%, #4CA740 54.89%, #50A941 62.87%, #57AB3C 72.85%, #6CAF30 87.82%, #70B02D 90.81%);",
  "linear-gradient(135deg, #1F9CD4 3%, #1470B1 30%, #1A5EA2 36%, #214B92 44%, #254088 53%, #263C85 63%, #25397E 69%, #223169 79%, #1E2448 90%, #1E2345 91%);",
  "linear-gradient(0deg, #293170 0%, #313272 12.5%, #473577 25%, #6A3A7F 37.5%, #793C82 50%, #803483 62.5%, #852E83 75%, #59132A 87.5%, #551022 100%);"
]

const Styles = styled.div`
.main-container{
position: absolute;
width: 56px;
height: 56px;
left: 0px;
top: 0px;
border-radius: 12px;
}
.gradient-background{
  background: linear-gradient(360deg,#ede229,#f3a30f,#e1321b,#db1222,#05612d,#017e36,#138838,#2e963c,#41a13f,#50a941,#70b02d,#1f9cd4,#1a5ea2,#214b92,#263c85,#25397e,#1e2345,#293170,#473577,#793c82,#852e83,#551022);
  background-size: 1000% 1000%;
  animation: myAnimation 5s  infinite alternate-reverse;
}

@keyframes myAnimation {
  0% {
    background-position: 0% 50%;
   
  }
  50% {
    background-position: 50% 99%;
    
  }
  100%{
    background-position: 100% 0%;
    
  }
`
const LogoMarkContainer = styled.div`
width: 32px;
height: 32px;
margin-top: 12px;
margin-bottom: 12px;
margin-left: 9px;

`

const LoadingBar = ({ display }: LoadingBarProps) => {
  return (
    <Styles>
    <div className="main-container gradient-background">
      <LogoMarkContainer>
        <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.50703 7.95881C3.97893 7.95881 3.54883 8.38891 3.54883 8.91701V20.4807C3.54883 23.5404 6.0151 26.023 9.0748 26.0557H10.4195C9.69545 26.023 9.1238 25.4296 9.1238 24.7055V8.91157C9.1238 8.38347 8.6937 7.95337 8.1656 7.95337L4.50703 7.95881Z" fill="white" />
          <path d="M3.54883 20.4807V25.2499C3.54883 28.7724 6.40165 31.6252 9.91867 31.6307C9.92412 31.6307 9.92412 31.6307 9.92956 31.6307H22.8435C25.7398 31.3966 27.972 28.9738 27.972 26.0666V24.6946C27.9666 25.4405 27.3568 26.0448 26.6109 26.0448L10.425 26.0557H9.13469C6.05321 26.0557 3.55427 23.5622 3.54883 20.4807C3.55427 20.4807 3.55427 20.4862 3.54883 20.4807Z" fill="white" />
          <path d="M10.4518 0.369385H2.39421C1.926 0.369385 1.57756 0.755931 1.55579 1.22414C1.46868 2.69955 1.2999 3.58153 0.913358 4.93172C0.771806 5.43259 1.09302 5.96069 1.61567 5.96069H26.6051C30.3562 5.9988 33.5466 9.03128 33.5466 12.8641V6.75556C33.5466 4.1314 31.9405 1.76857 29.496 0.810374L29.447 0.794041L29.4252 0.783152C28.7011 0.510937 27.928 0.369385 27.1549 0.369385H10.4518Z" fill="white" />
          <path d="M27.9611 7.31657H27.9666V24.6785V26.0504C27.9666 28.9577 25.7344 31.3804 22.838 31.6145C22.691 31.6254 22.544 31.6309 22.3916 31.6309H27.1608C30.6833 31.6363 33.5415 28.7835 33.5415 25.261C33.5415 25.2556 33.5415 25.2556 33.5415 25.2501V13.0603V12.9079C33.5415 9.08053 30.4437 5.97727 26.6164 5.96094C27.3623 5.97183 27.9611 6.5707 27.9611 7.31657Z" fill="white" />
        </svg>
      </LogoMarkContainer>
    </div>
    </Styles>
  )
}
export default LoadingBar;
