import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },

  /**
   * Temporary(?) fix/workaround for prop control input values:
   * https://github.com/storybookjs/storybook/issues/26496
   */
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
