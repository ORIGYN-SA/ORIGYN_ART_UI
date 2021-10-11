import React from "react";
import Select from "react-select";
import styled from "styled-components";
import Flex from "../../../layout/Flex";

export type CustomSelectProps = {
  label?: string;
  name?: string;
  selectedOption?: string;
  placeholder?: string;
  handleChange?: (value: any) => void;
  error?: boolean;
  height?: string;
  options?: {
    value?: any;
    label?: any;
  }[];
};

const StyledSelect = styled(Select)`
  .css-319lph-ValueContainer {
    justify-content: end;
  }
  .css-1s2u09g-control {
    border: 1px solid #aeaeae;
    border-color: ${(props: any) => (props.error ? "#E42932" : "#C4C4C4")};
    border-radius: 2px;
    min-height: ${(props: any) => (props.height ? props.height : "50px")};
  }
  .css-1pahdxg-control {
    min-height: ${(props: any) => (props.height ? props.height : "50px")};
    border-color: transparent;
  }
  .css-1n7v3ny-option {
    background-color: #ffe7bd;
  }
  .css-4ljt47-MenuList {
    padding-top: 0;
    padding-bottom: 0;
    border: 1px solid #000;
  }
`;

const StyledLabel = styled.label`
  ${() => `
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
`}
`;

const CustomSelect = ({
  selectedOption,
  handleChange,
  label,
  name,
  options,
  ...rest
}: CustomSelectProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect
        value={selectedOption}
        onChange={(event) => {
          handleChange && handleChange(event);
        }}
        options={options}
        name={name}
        {...rest}
      />
    </Flex>
  );
};

export default CustomSelect;
