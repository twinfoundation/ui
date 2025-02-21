// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	TailwindConfig as TailwindConfigTwinOrg,
	FigmaVariables,
	type IFigmaVariableCollection
} from "@twin.org/ui-tailwind";
import * as flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

/**
 * The tailwind config.
 */
export class TailwindConfig {
	/**
	 * Generate the tailwind config theme.
	 * @param collections The collections to include.
	 * @returns The tailwind config theme.
	 */
	public static getTheme(
		collections: string[] = ["Twin Brand Color", "Twin Tokens"]
	): Config["theme"] {
		const defaultFigmaVariables = FigmaVariables.loadDefaultVariables();
		console.log('Loaded Figma variables:', JSON.stringify(defaultFigmaVariables, null, 2));

		const figmaVariablesCollections: IFigmaVariableCollection[] = [];
		for (const collection of collections) {
			const col = FigmaVariables.getVariableCollection(defaultFigmaVariables, collection);
			if (col) {
				figmaVariablesCollections.push(col);
				console.log(`Found collection ${collection}:`, JSON.stringify(col, null, 2));
			} else {
				console.log(`Collection not found: ${collection}`);
			}
		}
		const theme = TailwindConfigTwinOrg.generateTheme(figmaVariablesCollections);
		console.log('Generated theme:', JSON.stringify(theme, null, 2));
		return theme;
	}

	/**
	 * Get the content.
	 * @param npmRoot The root for the node modules.
	 * @param includePackage Include the package, defaults to true.
	 * @returns The content.
	 */
	public static getContentPaths(npmRoot: string, includePackage = true): string[] {
		const contentExtensions = ["html", "js", "cjs", "mjs", "ts", "jsx", "tsx"];
		const content = [flowbite.content({ base: npmRoot.replace("node_modules", "") })];

		if (includePackage) {
			content.push(
				TailwindConfigTwinOrg.buildContentPath(
					npmRoot,
					"@twin.org/ui-components-react",
					contentExtensions
				)
			);
		}

		return content;
	}

	/**
	 * Get the plugins.
	 * @returns The plugins.
	 */
	public static getPlugins(): Config["plugins"] {
		return [flowbite.plugin()];
	}
}
