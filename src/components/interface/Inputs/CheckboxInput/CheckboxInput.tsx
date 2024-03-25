import React from 'react';
import styled, { useTheme } from 'styled-components';
import Checkbox from '@mui/material/Checkbox';

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  radio?: boolean;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;

const CheckboxInput = ({ label, radio, id, ...props }: CheckboxInputProps) => {
  const theme: any = useTheme();
  return (
    <StyledLabel htmlFor={id}>
      <Checkbox
        id={id}
        disabled={props.disabled}
        sx={{
          color: theme.colors.SECONDARY_TEXT,
          '&.Mui-checked': {
            color: theme.colors.SECONDARY_TEXT,
          },
        }}
        disableRipple
        {...props}
      />
      <span>{label}</span>
    </StyledLabel>
  );
};

export default CheckboxInput;
