import type { Preview } from "@storybook/react";
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
    defaultTheme: "light-mode",
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
  },
};

export default preview;