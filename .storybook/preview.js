import React from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = {
  colors: {
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    ACCENT_COLOR: '#F5A506',
    BG_GRAY: '#E5E5E5'
  },
  typography: {

  },
  spacing: {

  },
  containers: {
    sm: 905,
    md: 1150,
    lg: 1400,
  }
};
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #E5E5E5;
    margin: 0;
    padding: 0;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin: 0;
  }
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
