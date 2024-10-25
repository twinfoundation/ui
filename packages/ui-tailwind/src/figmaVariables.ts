// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Is } from "@twin.org/core";
import type { IFigmaVariableAlias } from "./models/IFigmaVariableAlias";
import type { IFigmaVariableCollection } from "./models/IFigmaVariableCollection";
import type { IFigmaVariableCollectionMode } from "./models/IFigmaVariableCollectionMode";
import type { IFigmaVariableCollections } from "./models/IFigmaVariableCollections";
import figmaVariableCollections from "./variables/figma.json";

/**
 * The figma variable processing.
 */
export class FigmaVariables {
	/**
	 * Load the default figma variables.
	 * @returns The default figma variables.
	 */
	public static loadDefaultVariables(): IFigmaVariableCollections {
		return figmaVariableCollections;
	}

	/**
	 * Get the specified figma variables collection.
	 * @param figmaVariables A complete figma variables object.
	 * @param collectionName The name of the collection to get.
	 * @returns The tailwind config theme.
	 */
	public static getVariableCollection(
		figmaVariables: IFigmaVariableCollections,
		collectionName: string
	): IFigmaVariableCollection | undefined {
		if (Is.arrayValue(figmaVariables?.collections)) {
			const collections: { [key: string]: IFigmaVariableCollection } = {};
			for (const collection of figmaVariables.collections) {
				collections[collection.name] = collection;
			}

			const requestedCollection = collections[collectionName];
			if (Is.notEmpty(requestedCollection) && Is.arrayValue(requestedCollection.modes)) {
				const resolvedCollection: IFigmaVariableCollection = {
					name: requestedCollection.name,
					modes: []
				};

				for (const mode of requestedCollection.modes) {
					if (Is.arrayValue(mode.variables)) {
						const resolvedMode: IFigmaVariableCollectionMode = {
							name: mode.name,
							variables: []
						};

						for (const variable of mode.variables) {
							if (variable.isAlias) {
								const alias = variable.value as IFigmaVariableAlias;
								const resolvedValue = this.getVariableFromCollection(
									collections,
									alias.collection,
									alias.name
								);
								if (!Is.empty(resolvedValue)) {
									resolvedMode.variables.push({
										name: variable.name,
										type: variable.type,
										value: resolvedValue,
										isAlias: false
									});
								}
							} else {
								resolvedMode.variables.push(variable);
							}
						}

						if (resolvedMode.variables.length > 0) {
							resolvedCollection.modes.push(resolvedMode);
						}
					}
				}

				return resolvedCollection;
			}
		}
	}

	/**
	 * Get the specified variable from the collection.
	 * @param collections A complete figma variables object.
	 * @param collectionName The name of the collection to get.
	 * @param variableName The name of the variable to get.
	 * @returns The variable if it exists.
	 */
	public static getVariableFromCollection(
		collections: { [key: string]: IFigmaVariableCollection },
		collectionName: string,
		variableName: string
	): string | number | undefined {
		const requestedCollection = collections[collectionName];
		if (
			Is.notEmpty(requestedCollection) &&
			Is.array(requestedCollection.modes) &&
			requestedCollection.modes.length > 0
		) {
			const variable = requestedCollection.modes[0].variables.find(v => v.name === variableName);

			if (!Is.empty(variable)) {
				if (variable.isAlias) {
					const alias = variable.value as IFigmaVariableAlias;
					return this.getVariableFromCollection(collections, alias.collection, alias.name);
				}

				return variable.value as string | number;
			}
		}
	}
}
