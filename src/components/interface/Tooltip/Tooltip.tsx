import styled, { css, keyframes } from "styled-components";
import React, { useRef, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./styled";

const Tooltip = ({
  position,
  text,
  children,
  styleMe = true,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        styleMe={styleMe}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox
            position={position}
          >
            {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
