// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { execSync } from "node:child_process";
import { TailwindConfig } from "@twin.org/ui-components-react";

const npmRoot = execSync("npm root").toString().trim().replace(/\\/g, "/");

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", ...TailwindConfig.getContentPaths(npmRoot)],
	plugins: TailwindConfig.getPlugins(),
	darkMode: "class",
	theme: {
		extend: TailwindConfig.getTheme()
	}
};
