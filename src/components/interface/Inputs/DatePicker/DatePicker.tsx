import React from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Flex from "../../../layout/Flex";
import { inputSizes } from "../TextInput/TextInput";
import ErrorIcon from "../../../icons/Error";

export type DatePickerProps = {
  name?: string;
  label?: string;
  placeholderText?: string;
  showMonthsPicker?: boolean;
  dateFormat?: string;
  showMonthYearPicker?: boolean;
  hideHeader?: boolean;
  showYearPicker?: boolean;
  selected: (Date & (Date | string)) | null;
  onChange: (d: (Date & (Date | string)) | null) => void;
  inputSize?: string;
  error?: string;
};

const StyledDatePicker = styled(ReactDatePicker)<DatePickerProps>`
  ${({ inputSize = "large" }) => inputSizes[inputSize]};
  background: ${({ theme }) => theme.colors.BACKGROUND};
  color: ${({ theme }) => theme.colors.TEXT};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.ERROR : theme.colors.BORDER)};
  width: 100%;
`;
const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
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

const DatePicker = ({ name, label, error, ...args }: DatePickerProps) => {
  return (
    <Flex flexFlow="column">
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledDatePicker error={error} {...args} name={name} />
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

export default DatePicker;
