// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { execSync } from "node:child_process";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

const npmRoot = execSync("npm root").toString().trim().replace(/\\/g, "/");

export default defineConfig({
	plugins: [
		react(),
		copy({
			targets: [
				{
					src: `${npmRoot}/@twin.org/ui-tailwind/dist/fonts/**/*.otf`,
					dest: ["public/fonts"]
				}
			]
		})
	]
});
