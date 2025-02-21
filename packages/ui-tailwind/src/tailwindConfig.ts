// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Is, StringHelper } from "@twin.org/core";
import type { Config } from "tailwindcss";
import type { IFigmaVariableCollection } from "./models/IFigmaVariableCollection";
import { baseColors, semanticColors, componentTokens } from "./tokens";

/**
 * Type definition for color configuration in Tailwind.
 * Can be either a string (direct color value),
 * a nested ColorConfig object (for grouped colors),
 * or an object mapping modes to color values.
 */
interface ColorConfig {
	[key: string]: string | ColorConfig | { [key: string]: string };
}

/**
 * Type for a section of colors in the configuration.
 * Maps color names to their values or mode configurations.
 */
interface ColorSection {
	[key: string]: string | { [mode: string]: string };
}

/**
 * The tailwind config.
 */
export class TailwindConfig {
	/**
	 * Generate the tailwind config theme from the figma variables.
	 * @param figmaVariablesCollections The figma variables collection.
	 * @param replacements The replacements to apply to the theme.
	 * @param flattenSections The sections to flatten from the variables.
	 * @param removeSections The sections to remove from the variables.
	 * @returns The tailwind config theme.
	 */
	public static generateTheme(
		figmaVariablesCollections: IFigmaVariableCollection[],
		replacements: { from: RegExp; to: string }[] = TailwindConfig.getDefaultThemeReplacements(),
		flattenSections: string[] = TailwindConfig.getDefaultFlattenSections(),
		removeSections: string[] = TailwindConfig.getDefaultRemoveSections()
	): Config["theme"] {
		const colors: ColorConfig = {
			// Base colors and tints
			neutral: baseColors.neutral,
			"brand-primary-tints": baseColors.orange,
			"brand-secondary-tints": baseColors.blue,
			"system-success-tints": baseColors.success,
			"system-error-tints": baseColors.error,
			"system-warning-tints": baseColors.warning,
			"system-information-tints": baseColors.information,

			// Semantic colors
			brand: {
				primary: semanticColors.brand.primary,
				"primary-hover": semanticColors.brand.primaryHover,
				secondary: semanticColors.brand.secondary,
				"secondary-hover": semanticColors.brand.secondaryHover
			},
			surface: {
				main: semanticColors.surface.main,
				second: semanticColors.surface.second,
				third: semanticColors.surface.third
			},
			primary: semanticColors.primary,
			secondary: semanticColors.secondary,
			tertiary: semanticColors.tertiary,
			success: semanticColors.success,
			error: semanticColors.error,
			warning: semanticColors.warning,
			information: semanticColors.information,

			// Component-specific colors
			"surface-button": componentTokens.surface.button.default,
			"surface-button-hover": componentTokens.surface.button.hover,
			"surface-button-pressed": componentTokens.surface.button.pressed,
			"surface-button-disabled": componentTokens.surface.button.disabled,
			"surface-button-text": componentTokens.surface.button.text,
			"surface-button-text-hover": componentTokens.surface.button.textHover,
			"surface-button-text-pressed": componentTokens.surface.button.textPressed,
			"surface-button-text-disabled": componentTokens.surface.button.textDisabled,

			"surface-button-alt": componentTokens.surface.buttonAlt.default,
			"surface-button-alt-hover": componentTokens.surface.buttonAlt.hover,
			"surface-button-alt-pressed": componentTokens.surface.buttonAlt.pressed,
			"surface-button-alt-disabled": componentTokens.surface.buttonAlt.disabled,
			"surface-button-text-alt": componentTokens.surface.buttonAlt.text,
			"surface-button-text-alt-hover": componentTokens.surface.buttonAlt.textHover,
			"surface-button-text-alt-pressed": componentTokens.surface.buttonAlt.textPressed,
			"surface-button-text-alt-disabled": componentTokens.surface.buttonAlt.textDisabled,

			// Special values
			transparent: "transparent"
		};

		// Process Figma variables
		for (const figmaVariablesCollection of figmaVariablesCollections) {
			for (let i = 0; i < figmaVariablesCollection.modes.length; i++) {
				const figmaVariableMode = figmaVariablesCollection.modes[i];
				let modeName = figmaVariableMode.name.toLowerCase();
				if (i === 0) {
					modeName = "DEFAULT";
				}

				for (const figmaVariable of figmaVariableMode.variables) {
					if (Is.stringValue(figmaVariable.value)) {
						const variableNameParts = figmaVariable.name.split("/");
						if (variableNameParts.length === 2) {
							const section = StringHelper.kebabCase(variableNameParts[0]);

							if (!removeSections.includes(section)) {
								let variableName = variableNameParts[1];
								for (const replacement of replacements) {
									variableName = variableName.replace(replacement.from, replacement.to);
								}
								variableName = StringHelper.kebabCase(variableName).toLowerCase();

								if (flattenSections.includes(section)) {
									colors[variableName] = colors[variableName] || {};
									if (typeof colors[variableName] === "object") {
										(colors[variableName] as { [key: string]: string })[modeName] =
											figmaVariable.value;
									}
								} else {
									colors[section] = colors[section] || {};
									if (typeof colors[section] === "object") {
										const sectionObj = colors[section] as ColorSection;
										sectionObj[variableName] = sectionObj[variableName] || {};
										if (typeof sectionObj[variableName] === "object") {
											(sectionObj[variableName] as { [key: string]: string })[modeName] =
												figmaVariable.value;
										}
									}
								}
							}
						}
					}
				}
			}
		}

		return {
			colors,
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
		};
	}

	/**
	 * Build a content path.
	 * @param npmRoot The root for the node modules.
	 * @param pkg The package to get the content from.
	 * @param extensions The extensions to use for content processing.
	 * @returns The content path.
	 */
	public static buildContentPath(npmRoot: string, pkg: string, extensions: string[]): string {
		return `${npmRoot}/${pkg}/**/*.{${extensions.join(",")}}`;
	}

	/**
	 * Get the plugins.
	 * @returns The plugins.
	 */
	public static getPlugins(): Config["plugins"] {
		return [];
	}

	/**
	 * Get the default theme replacements.
	 * @returns The default theme replacements.
	 */
	private static getDefaultThemeReplacements(): { from: RegExp; to: string }[] {
		return [];
	}

	/**
	 * Get the default flatten sections.
	 * @returns The default flatten sections.
	 */
	private static getDefaultFlattenSections(): string[] {
		return [];
	}

	/**
	 * Get the default remove sections.
	 * @returns The default remove sections.
	 */
	private static getDefaultRemoveSections(): string[] {
		return [];
	}
}
