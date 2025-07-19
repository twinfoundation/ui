import type { StorybookConfig } from "@storybook/react-vite";

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
	viteFinal: async (config) => {
		// Add external dependencies to handle flowbite-react compatibility issues
		if (config.build && config.build.rollupOptions) {
			const currentExternal = config.build.rollupOptions.external;
			config.build.rollupOptions.external = [
				...(Array.isArray(currentExternal) ? currentExternal : []),
				'tailwindcss/version.js'
			];
		}
		return config;
	}
};
export default config;
