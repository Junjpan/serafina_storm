import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { withThemeByClassName } from "@storybook/addon-styling";
import "../src/app/globals.scss";
import '../src/app/page.scss';



//activate dark mode when a parent element has the .dark-mode class. In this case, add your theme classes to withThemeFromClassName and choose a default theme to set up the theme selector.
export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light-mode",
      dark: "dark-mode",
    },
    defaultTheme: "light",
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'white' },
      current: 'light', //storybook-dark-mode by default store all the data in the localstorage, even you change the current value here, if you don't clear the localStorage, it'll still show the original value
      stylePreview: true
    }
  },

};

export default preview;