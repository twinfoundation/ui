import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: StorybookConfig = {
	stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
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
	viteFinal: (config) => {
		if (config.plugins) {
			const vanillaExtractPluginExists = config.plugins.find(plugin => 
				typeof plugin === 'object' && plugin && 'name' in plugin && plugin.name === 'vanilla-extract'
			);
			if (!vanillaExtractPluginExists) {
				config.plugins.push(vanillaExtractPlugin());
			}
		}
		return config;
	}
};
export default config; 