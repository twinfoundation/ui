// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { getTheme, getContent, getPlugins } from "./src/lib/config/config.cjs";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", ...getContent(false)],
	plugins: getPlugins(),
	darkMode: "class",
	theme: {
		extend: getTheme()
	}
};
