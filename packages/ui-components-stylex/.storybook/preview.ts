import type { Preview } from "@storybook/react";
import '../src/assets/css/stylex.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    
    /**
     * Docs
     */

    docs: {
      toc: true,
    },
  },
};

export default preview;
