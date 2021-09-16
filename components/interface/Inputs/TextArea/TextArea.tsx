import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";

export type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  rows?: number;
  resize?: string;
};

const StyledTextInput = styled.textarea<{ resize: string }>`
  ${({ theme, value, resize }) => `
  padding: 13px 13px 13px 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${value ? theme.colors.BLACK : theme.colors.LIGHT_GRAY};
  box-sizing: border-box;
  border-radius: 2px;
  resize: ${resize};
  ::placeholder {
    color: ${theme.colors.LIGHT_GRAY};
  }

  &:focus{
    outline: none;
    border-color: ${theme.colors.BLACK};
  }
`}
`;

const StyledLabel = styled.label`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const ErrorMessage = styled.div`
  ${({ theme }) => `
  font-size: 14px;
  line-height: 22px;
  margin-top: 6px;
  color: ${theme.colors.ERROR};
`}
`;

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows,
  resize,
}: TextAreaProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextInput
        rows={rows}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        resize={resize}
      />
    </Flex>
  );
};

export default TextInput;
