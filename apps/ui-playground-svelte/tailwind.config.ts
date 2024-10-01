// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { getContent, getPlugins, getTheme } from "@twin.org/ui-components-svelte/config/config.cjs";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", ...getContent()],
	plugins: getPlugins(),
	darkMode: "class",
	theme: {
		extend: getTheme()
	}
};
