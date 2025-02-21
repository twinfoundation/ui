// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { execSync } from "node:child_process";
import { TailwindConfig } from "@twin.org/ui-components-react";

const npmRoot = execSync("npm root").toString().trim().replace(/\\/g, "/");

// Log the theme configuration
const theme = {
  ...TailwindConfig.getTheme(),
  extend: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
      inter: ["Inter", "sans-serif"]
    }
  }
};
console.log('Theme configuration:', JSON.stringify(theme, null, 2));

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.html",
    ...TailwindConfig.getContentPaths(npmRoot)
  ],
  plugins: TailwindConfig.getPlugins(),
  darkMode: "class",
  theme
};
