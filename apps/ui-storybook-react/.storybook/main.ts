import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-themes"
	],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	async viteFinal(config) {
		// Add custom Vite configuration
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve?.alias,
					// Add aliases for the icon paths to ensure they resolve correctly
					"@twin.org/ui-components-react/icons/solid": resolve(__dirname, "../../..", "packages/ui-components-react/src/icons/solid"),
					"@twin.org/ui-components-react/icons/outline": resolve(__dirname, "../../..", "packages/ui-components-react/src/icons/outline")
				}
			}
		};
	}
};
export default config;
