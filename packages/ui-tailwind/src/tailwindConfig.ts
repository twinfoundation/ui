// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Is, StringHelper } from "@twin.org/core";
import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";
import type { IFigmaVariableCollection } from "./models/IFigmaVariableCollection";

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
		const colors: { [color: string]: { [section: string]: { [mode: string]: string } | string } } =
			{};

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
									colors[variableName] ??= {};
									colors[variableName][modeName] = figmaVariable.value;
								} else {
									colors[section] ??= {};
									colors[section][variableName] ??= {};
									(colors[section][variableName] as { [mode: string]: string })[modeName] =
										figmaVariable.value;
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
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
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
	public static getDefaultThemeReplacements(): { from: RegExp; to: string }[] {
		return [
			{
				from: /^text-/g,
				to: ""
			},
			{
				from: /^border-/g,
				to: ""
			},
			{
				from: /^bg-/g,
				to: ""
			},
			{
				from: /^surface-text-/g,
				to: "surface-"
			},
			{
				from: /^surface-border-/g,
				to: "surface-"
			},
			{
				from: /^surface-bg-/g,
				to: "surface-"
			},
			{
				from: /_/g,
				to: "-"
			}
		];
	}

	/**
	 * Strip the sections from the variables.
	 * @returns The sections to strip from variables.
	 */
	public static getDefaultFlattenSections(): string[] {
		return ["surface", "text", "buttons"];
	}

	/**
	 * Remove the specified sections.
	 * @returns The sections to remove from variables.
	 */
	public static getDefaultRemoveSections(): string[] {
		return ["brand-primary", "brand-secondary", "base"];
	}
}
