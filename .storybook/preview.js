import React from 'react';
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, themeLight } from '../src';
import { BrowserRouter as Router } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProviderMui theme={lightTheme}>
      <CssBaseline />
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Router>
          <Story />
        </Router>
      </ThemeProvider>
    </ThemeProviderMui>
  ),
];
