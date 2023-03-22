import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    BACKGROUND: "#151515",
    //BACKGROUND: '#f3f3f3', LIGHT
    BORDER: "#242424",
    //BORDER: '#E3E3E3', LIGHT
    TEXT: "#FEFEFE",
    // TEXT: '#151515', LIGHT
    SECONDARY_TEXT: "#5F5F5F",
    INACTIVE: "#9A9A9A",

    NAVIGATION_BACKGROUND: "#000000",
    // NAVIGATION_BACKGROUND: '#fafafa', LIGHT
    NAVIGATION_BACKGROUND_LIGHT: "#121212",
    // NAVIGATION_BACKGROUND_LIGHT: '#FCFCFC', LIGHT

    ERROR: "#B5010A",
    PROGRESS: "#F2BD00",
    SUCCESS: "#50AA3E",

    ACCENT_COLOR: "#70237D",
    ACCENT_COLOR_2: "#FFE7BD",
    ACCENT_PURPLE_800: "#331038",
    // ACCENT_PURPLE_800:""#EDC7F2"", LIGHT
    ACCENT_PURPLE_900: " #250A2B",
    // ACCENT_PURPLE_900:" #f4e5f1", LIGHT
    ACCENT_PURPLE_200: "#EDC7F2",
    // ACCENT_PURPLE_200 : "#70237D", LIGHT
    NAVIGATIONBAR_ICON_TEXT: "#edc7f2",
    // NAVIGATION_ICON_TEXT: "#70237D", LIGHT
    BREADCRUMB_TEXT: "#edc7f2",
    // BREADCRUMB_TEXT: "#561b60", LIGHT
    BREADCRUMB_TEXT_ACTIVE: "#aa36bf",


    PRIMARY_1000: "#0f0f0f",
    PRIMARY_900: "#151515",
    PRIMARY_800: "#242424",
    PRIMARY_700: "#3A3A3A",
    PRIMARY_600: "#5F5F5F",
    PRIMARY_500: "#9A9A9A",
    PRIMARY_400: "#E3E3E3",
    PRIMARY_300: "#F2F2F2",
    PRIMARY_200: "#FAFAFA",
    PRIMARY_100: "#FEFEFE",
  },
  shadows: {
    sm: "0px 5px 5px -5px rgba(0, 0, 0, 0.1)",
    md: "0px 5px 10px -5px rgba(26, 32, 44, 0.1)",
    lg: "0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05)",
  },
  typography: {},
  spacing: {},
  media: {
    sm: "@media (max-width: 600px)",
    md: "@media (max-width: 960px)",
    lg: "@media (max-width: 1280px)",
    xl: "@media (max-width: 1920px)",
  },
  containers: {
    sm: 905,
    md: 1150,
    lg: 1440,
  },
};

export const themeLight = {
  colors: {
    BACKGROUND: "#f3f3f3",
    BORDER: "#E3E3E3",
    TEXT: "#151515",
    SECONDARY_TEXT: "#5F5F5F",
    INACTIVE: "#9A9A9A",

    NAVIGATION_BACKGROUND: "#fafafa",
    NAVIGATION_BACKGROUND_LIGHT: "#FCFCFC",

    ERROR: "#B5010A",
    PROGRESS: "#F2BD00",
    SUCCESS: "#50AA3E",

    ACCENT_COLOR: "#70237D",
    ACCENT_COLOR_2: "#FFE7BD",
    ACCENT_PURPLE_800: "#EDC7F2",
    ACCENT_PURPLE_900: " #F4E5F1",
    ACCENT_PURPLE_200: "#70237D",
    NAVIGATIONBAR_ICON_TEXT: "#5f5f5f",
    BREADCRUMB_TEXT: "#561b60",
  },
  shadows: {
    sm: "0px 5px 5px -5px rgba(0, 0, 0, 0.1)",
    md: "0px 5px 10px -5px rgba(26, 32, 44, 0.1)",
    lg: "0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05)",
  },
  typography: {},
  spacing: {},
  media: {
    sm: "@media (max-width: 600px)",
    md: "@media (max-width: 960px)",
    lg: "@media (max-width: 1280px)",
    xl: "@media (max-width: 1920px)",
  },
  containers: {
    sm: 905,
    md: 1150,
    lg: 1440,
  },
};

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  :root {
    --text-line-height: 1.57;
  }
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${(props) => props.theme?.colors?.NAVIGATION_BACKGROUND};
    color: ${(props) => props.theme?.colors?.TEXT};
    font-weight: 400;
    font-size: 14px;
    line-height: var(--text-line-height);
    letter-spacing: -0.15px;
  }
  .secondary_color {
    color: ${(props) => props.theme?.colors?.SECONDARY_TEXT};
  }
  .small_text {
    font-size: 10px;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  img {
    max-width: 100%;
  }
  .noShrink {
    flex-shrink: 0;
  }
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1px;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.75px;
  }
  h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.5px;
  }
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.25px;
  }
  h5 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.15px;
  }
  h6 {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.1px;
  }
  h1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b {
    font-weight: 500;
  }
  
  @media (min-width: 600px) {
    // TODO: consider fonts responsiveness
  }
  
  @media (min-width: 960px) {
    // TODO: consider fonts responsiveness
  }
  
  @media (min-width: 1280px) {
    // TODO: consider fonts responsiveness
  }
`;
