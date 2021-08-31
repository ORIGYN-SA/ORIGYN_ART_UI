import React from "react"
import styled from 'styled-components';

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  primary?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  bordered?: boolean;
}

const StyledFlex = styled.div<ButtonProps>`${({ size, disabled, fullWidth, bordered, primary, theme }) => `
  display: flex;
  width: ${fullWidth ? '100%' : '320px'};
  height: 50px;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${ primary ? theme.colors.WHITE : theme.colors.BLACK };
  color: ${ primary ? theme.colors.BLACK : theme.colors.WHITE };
  border: ${bordered ? `2px solid ${primary ? theme.colors.BLACK : theme.colors.WHITE}` : 'none'};
  
  &:hover {
    background-color: ${theme.colors.ACCENT_COLOR};
    color: ${theme.colors.WHITE};
  }
`}`;

export default StyledFlex;
