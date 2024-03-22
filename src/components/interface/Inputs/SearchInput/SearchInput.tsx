import React from 'react';
import styled, { css } from 'styled-components';
import Flex from '../../../layout/Flex';
import SearchIcon from '../../../icons/Search';

export type SearchInputProps = {
  label: string;
  name: string;
  onSearch: Function;
  inputSize?: 'small' | 'medium' | 'large';
};

const largeSize = css`
  padding: 0 16px;
  height: 56px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  border-radius: 50px;
`;

const mediumSize = css`
  padding: 0 16px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  border-radius: 50px;
`;

const smallSize = css`
  padding: 0 12px;
  height: 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.1px;
  border-radius: 50px;
`;

export const inputSizes = {
  large: largeSize,
  medium: mediumSize,
  small: smallSize,
};

export const fontIconSizes = {
  large: 24,
  medium: 20,
  small: 16,
};

const StyledSearchInput = styled.input`
  ${({ theme }) => `
    padding: 0 16px;
    background: ${theme.colors.BACKGROUND};
    border: none;
    color: ${theme.colors.TEXT};
  
    ::placeholder {
      color: ${theme.colors.SECONDARY_TEXT};
    }
  
    &:focus{
      outline: none;
      color: ${theme.colors.TEXT};
    }
`}
`;

const StyledSearchInputWrap = styled(Flex)<{ inputSize?: string }>`
  ${({ inputSize }) => inputSizes[inputSize]};

  ${({ theme }) => `
    padding: 0 16px;
    gap: 10px;
    background: ${theme.colors.BACKGROUND};
    border: 1px solid ${theme.colors.BORDER};
    border-radius: 50px;
`}
`;

const StyledSearchIcon = styled(SearchIcon)<{ inputSize?: string }>`
  ${({ theme, inputSize }) => `
    fill: ${theme.colors.TEXT};
    width: ${fontIconSizes[inputSize]}px;
    height: ${fontIconSizes[inputSize]}px;
`}
`;

const SearchInput = ({ label, name, onSearch, inputSize }: SearchInputProps) => {
  return (
    <StyledSearchInputWrap align="center" justify="space-between" inputSize={inputSize}>
      <StyledSearchInput placeholder={label} type="text" id={name} name={name} />
      <StyledSearchIcon onClick={onSearch} inputSize={inputSize} />
    </StyledSearchInputWrap>
  );
};

SearchInput.defaultProps = {
  inputSize: 'large',
};

export default SearchInput;
