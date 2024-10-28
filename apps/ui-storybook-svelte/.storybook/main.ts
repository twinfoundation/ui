import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|mjs|ts|svelte)"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@chromatic-com/storybook",
		"@storybook/addon-themes"
	],

	framework: {
		name: "@storybook/sveltekit",
		options: {}
	}
};
export default config;
