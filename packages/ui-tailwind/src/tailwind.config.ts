// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { Config } from "tailwindcss";
import { baseColors, semanticColors, componentTokens } from "./tokens";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		colors: {
			// Base colors
			...baseColors,

			// Semantic colors
			brand: {
				primary: semanticColors.brand.primary,
				"primary-hover": semanticColors.brand.primaryHover,
				"primary-subtle": semanticColors.brand.primarySubtle,
				secondary: semanticColors.brand.secondary,
				"secondary-hover": semanticColors.brand.secondaryHover,
				"secondary-subtle": semanticColors.brand.secondarySubtle
			},
			surface: {
				main: semanticColors.surface.main.light,
				second: semanticColors.surface.second.light,
				third: semanticColors.surface.third.light,
				"dark:main": semanticColors.surface.main.dark,
				"dark:second": semanticColors.surface.second.dark,
				"dark:third": semanticColors.surface.third.dark
			},
			text: {
				primary: semanticColors.text.primary.light,
				secondary: semanticColors.text.secondary.light,
				tertiary: semanticColors.text.tertiary.light,
				"dark:primary": semanticColors.text.primary.dark,
				"dark:secondary": semanticColors.text.secondary.dark,
				"dark:tertiary": semanticColors.text.tertiary.dark
			},
			status: semanticColors.status,
			background: semanticColors.background,

			// Component-specific colors
			button: componentTokens.button,
			link: componentTokens.link,
			input: componentTokens.input
		},
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				],
				inter: ["Inter", "sans-serif"]
			}
		}
	},
	plugins: []
};

export default config;
