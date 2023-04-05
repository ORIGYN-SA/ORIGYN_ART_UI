# ORIGYN ART UI

React UI library created for and used by [Origyn Decentralized Applications](https://github.com/ORIGYN-SA/DApps).

## 🏁 Quickstart

Install origyn-art-ui and styled-components:

```
npm i @origyn/origyn-art-ui styled-components
```

In the component that renders your `App` component (for example: index.tsx), import `GlobalStyle`, `theme` and `themeLight` from `@origyn/origyn-art-ui`. Also import `ThemeProvider` from `styled-components`.

Insert `<GlobalStyle />` above `<App />` and wrap `<App />` with `<ThemeProvider theme={theme}>`. You can add logic or a custom provider to toggle `theme` (dark theme) with `themeLight` (light theme).

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle, theme, themeLight } from '@origyn/origyn-art-ui';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

## Contributors

All components in this library can be rendered in Storybook.

```sh
npm ci
npm run storybook
```

Browse to `http://localhost:6006/`.

## File Structure

All components are located in the components folder.

```sh
-.storybook/
|-main.js
|-preview.js
-components
|-layout
|-brandIdentity
|-interface
```

`brandIdentity` - information about the default setup for components (corporate color palette, used icons, typography etc.)

`layout` - layout components (Grid, Flex, etc.)

`interface` - UI components (Buttons, Dropdowns etc.)

## Links to fonts

```sh
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```
