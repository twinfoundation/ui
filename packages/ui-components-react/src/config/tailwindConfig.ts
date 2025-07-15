// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	TailwindConfig as TailwindConfigTwinOrg,
	FigmaVariables,
	type IFigmaVariableCollection
} from "@twin.org/ui-tailwind";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";
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

		const figmaVariablesCollections: IFigmaVariableCollection[] = [];
		for (const collection of collections) {
			const col = FigmaVariables.getVariableCollection(defaultFigmaVariables, collection);
			if (col) {
				figmaVariablesCollections.push(col);
			}
		}
		return TailwindConfigTwinOrg.generateTheme(figmaVariablesCollections);
	}

	/**
	 * Get the content.
	 * @param npmRoot The root for the node modules.
	 * @param includePackage Include the package, defaults to true.
	 * @returns The content.
	 */
	public static getContentPaths(npmRoot: string, includePackage = true): string[] {
		const contentExtensions = ["html", "js", "cjs", "mjs", "ts", "jsx", "tsx"];
		const content = [
			"./app/**/*.{js,jsx,md,mdx,ts,tsx}",
			"./components/**/*.{js,jsx,md,mdx,ts,tsx}",
			"./data/**/*.{js,jsx,ts,tsx}",
			".flowbite-react/class-list.json"
			// flowbite.content({ base: npmRoot.replace("node_modules", "") })
		];

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
		// return [flowbite.plugin()];
		return [flowbiteReact];
	}
}
