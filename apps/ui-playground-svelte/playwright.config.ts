// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173
	},
	testDir: "tests",
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
