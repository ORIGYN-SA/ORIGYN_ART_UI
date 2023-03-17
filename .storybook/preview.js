import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, themeLight } from "../src";
import { BrowserRouter as Router } from "react-router-dom";

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
          <Story />
      </Router>
    </ThemeProvider>
  ),
];
