// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tailwind configuration for the UI components.
 * This provides the base configuration without Flowbite dependencies.
 */
export const TailwindConfig = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@twin.org/ui-components-react/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				// Surface colors
				"surface-button": "var(--surface-button)",
				"surface-button-hover": "var(--surface-button-hover)",
				"surface-button-pressed": "var(--surface-button-pressed)",
				"surface-button-alt": "var(--surface-button-alt)",
				"surface-button-alt-hover": "var(--surface-button-alt-hover)",
				"surface-button-alt-pressed": "var(--surface-button-alt-pressed)",
				"surface-second": "var(--surface-second)",
				"surface-third": "var(--surface-third)",
				"surface-third-dark": "var(--surface-third-dark)",
				"surface-second-dark": "var(--surface-second-dark)",
				
				// System colors
				"error": "var(--error)",
				"warning": "var(--warning)",
				"success": "var(--success)",
				"information": "var(--information)",
				
				// System tints
				"system-error-tints-200": "var(--system-error-tints-200)",
				"system-error-tints-600": "var(--system-error-tints-600)",
				"system-warning-tints-200": "var(--system-warning-tints-200)",
				"system-warning-tints-600": "var(--system-warning-tints-600)",
				"system-success-tints-200": "var(--system-success-tints-200)",
				"system-success-tints-600": "var(--system-success-tints-600)",
				"system-information-tints-200": "var(--system-information-tints-200)",
				"system-information-tints-600": "var(--system-information-tints-600)",
				
				// Text colors
				"invert": "var(--invert)"
			}
		}
	},
	plugins: []
};
