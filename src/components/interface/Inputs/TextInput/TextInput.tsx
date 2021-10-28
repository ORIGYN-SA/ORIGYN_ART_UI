import React from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
};

const StyledTextInput = styled.input<{error: boolean}>`
  ${({theme, value, error}) => `
  padding: 13px 13px 13px 20px;
  font-weight: normal;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${ error ? theme.colors.ERROR : (value ? theme.colors.BLACK : theme.colors.LIGHT_GRAY)};
  box-sizing: border-box;
  border-radius: 2px;
  
  ::placeholder {
    color: ${theme.colors.LIGHT_GRAY};
  }

  &:focus{
    outline: none;
    border-color: ${theme.colors.BLACK};
  }
`}`;

const StyledLabel = styled.label`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const ErrorMessage = styled.div`
  ${({theme}) => `
  font-size: 14px;
  line-height: 22px;
  margin-top: 6px;
  color: ${theme.colors.ERROR};
`}
`;

const TextInput = ({ label, error, ...props }: TextInputProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      {label ? <StyledLabel htmlFor={props.id}>{label}</StyledLabel> : null }
      <StyledTextInput
        error={!!error}
        {...props}
      />
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </Flex>
  );
};

export default TextInput;
