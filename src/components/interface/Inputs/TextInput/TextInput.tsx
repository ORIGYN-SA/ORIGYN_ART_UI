import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../layout/Flex";
import ErrorIcon from "../../../icons/Error";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  optional?: string;
  inputSize?: "small" | "medium" | "large";
}

const largeSize = css`
  padding: 0 16px;
  height: 56px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  border-radius: 12px;
`;

const mediumSize = css`
  padding: 0 16px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  border-radius: 12px;
`;

const smallSize = css`
  padding: 0 12px;
  height: 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.1px;
  border-radius: 10px;
`;

export const inputSizes = {
  large: largeSize,
  medium: mediumSize,
  small: smallSize,
};

const StyledTextInput = styled.input<{ error: boolean; inputSize?: string }>`
  ${({ inputSize = "large" }) => inputSizes[inputSize]};

  ${({ theme, error }) => `
    padding: 0 16px;
    gap: 10px;
    background: ${theme.colors.BACKGROUND};
    
    border: 1px solid ${error ? theme.colors.ERROR : theme.colors.BORDER};
    color: ${error ? theme.colors.ERROR : theme.colors.TEXT}};
  
    ::placeholder {
      color: ${theme.colors.SECONDARY_TEXT};
    }
  
    &:focus{
      outline: none;
      color: ${theme.colors.TEXT};
    }
`}
`;

const ErrorMessage = styled("div")`
  ${({ theme }) => `
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  margin-top: 6px;
  color: ${theme.colors.ERROR};
  display: flex;
  align-items: center;
  gap: 6px;
`}
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`;

const Optional = styled.label`
${({ theme }) => `
font-size: 14px;
line-height: 22px;
margin-bottom: 8px;
margin-left: 5px;
color: ${theme.colors.SECONDARY_TEXT};
  `}
`

const TextInput = ({ label, error, optional, inputSize, ...props }: TextInputProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <Flex flexFlow="row" fullWidth>
      {label ? <Label htmlFor={props.id}>{label}</Label> : null}  {optional ? <Optional>{optional}</Optional> : null}
      </Flex>
      <StyledTextInput error={!!error} inputSize={inputSize} {...props} />
      <ErrorMessage>
        {error && (
          <>
            <ErrorIcon fill="#B5010A" />
            {error}
          </>
        )}
      </ErrorMessage>
    </Flex>
  );
};

export default TextInput;
