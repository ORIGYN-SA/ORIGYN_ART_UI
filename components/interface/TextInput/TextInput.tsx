import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";

export type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
};

const StyledTextInput = styled.input`
  ${({ theme }) => `
  padding: 13px 13px 13px 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 2px;
  
  &:focus{
    outline: none;
  }
`}
`;

const StyledLabel = styled.label`
  ${({ theme }) => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const TextInput = ({ label, name, placeholder }: TextInputProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextInput
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </Flex>
  );
};

export default TextInput;
