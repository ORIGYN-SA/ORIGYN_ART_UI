import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import CheckboxUncheckedIcon from '../../../icons/CheckboxUnchecked';
import CheckboxCheckedIcon from '../../../icons/CheckboxChecked';
import CheckboxUncheckedDisabledIcon from '../../../icons/CheckboxUncheckedDisabled';
import CheckboxCheckedDisabledIcon from '../../../icons/CheckboxCheckedDisabled';

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  radio?: boolean;
}

const StyledCheckboxInput = styled.input`
  display: none;
  & + svg {
    display: none;
  }

  &:disabled + div {
    background-color: ${({ theme }) => theme.colors.DARK_GREY};
    &:after {
      opacity: 0.5;
    }
  }
  &:checked + div {
    background-color: ${({ theme }) => theme.colors.WHITE};
    opacity: 1;
    &:after {
      opacity: 1;
    }
  }
  & + svg {
    display: none;
  }

  &:checked + svg {
    display: block;
  }
  &:checked + svg + svg {
    display: none;
  }
`;

const StyledCheckboxCheckedIcon = styled(CheckboxCheckedIcon)`
  rect {
    fill: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  }
`;
const StyledCheckboxUncheckedIcon = styled(CheckboxUncheckedIcon)`
  rect {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  }
`;

const StyledCheckboxIcon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.BORDER};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  
  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.BACKGROUND}
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;

const CheckboxInput = ({ label, radio, id, ...props }: CheckboxInputProps) => {
  return (
    <>
      <StyledLabel htmlFor={id}>
        <StyledCheckboxInput type="checkbox" id={id} {...props} />
        {!radio ? (
          <>
            {props.disabled ? (
              <>
                <CheckboxCheckedDisabledIcon />
                <CheckboxUncheckedDisabledIcon />
              </>
            ) : (
              <>
                <StyledCheckboxCheckedIcon />
                <StyledCheckboxUncheckedIcon />
              </>
            )}
          </>
        ) : (
          <StyledCheckboxIcon />
        )}
        <span>{label}</span>
      </StyledLabel>
    </>
  );
};

export default CheckboxInput;
