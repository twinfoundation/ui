// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { execSync } from "node:child_process";
import { TailwindConfig } from "@twin.org/ui-components-svelte/config/tailwindConfig.mjs";

const npmRoot = execSync("npm root").toString().trim().replace(/\\/g, "/");

export default {
	content: [
		"./src/**/*.{js,ts,svelte}",
		"./.storybook/**/*.html",
		...TailwindConfig.getContentPaths(npmRoot)
	],
	plugins: TailwindConfig.getPlugins(),
	darkMode: "class",
	theme: {
		extend: TailwindConfig.getTheme()
	}
};
