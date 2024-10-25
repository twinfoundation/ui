// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { execSync } from "node:child_process";
import { sveltekit } from "@sveltejs/kit/vite";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vitest/config";

const npmRoot = execSync("npm root").toString().trim().replace(/\\/g, "/");

export default defineConfig({
	plugins: [
		sveltekit(),
		copy({
			targets: [
				{
					src: `${npmRoot}/@twin.org/ui-tailwind/dist/fonts/**/*.otf`,
					dest: ["static/fonts"]
				}
			]
		})
	],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
});
