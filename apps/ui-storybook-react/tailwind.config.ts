// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./.storybook/**/*.html",
		"../../packages/ui-components-core/src/**/*.{js,ts,jsx,tsx}",
		"../../packages/ui-components-enterprise/src/**/*.{js,ts,jsx,tsx}"
	],
	plugins: [],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Add basic color definitions that might be needed
				primary: {
					50: '#eff6ff',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
				},
				secondary: {
					50: '#f8fafc',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
				},
				success: '#10b981',
				warning: '#f59e0b',
				error: '#ef4444',
				info: '#3b82f6',
			}
		}
	}
};
