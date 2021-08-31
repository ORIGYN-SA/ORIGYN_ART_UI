import React from "react"
import styled from 'styled-components';

export interface ContainerProps {
  size?: 'lg' | 'sm' | 'md' | 'full',
  padding?: string;
  relative?: boolean;
}

const StyledFlex = styled.div<ContainerProps>`${({size = 'full', relative, padding, theme}) => `
  display: block;
  padding: ${padding ? padding : '0'};
  width: ${size === 'full' ? '100%' : `${theme.containers[size]}px`};
  max-width: 100%;
  box-sizing: border-box;
  position: ${relative ? 'relative' : 'static'};
  margin: 0 auto;
`}`;

export default StyledFlex;
