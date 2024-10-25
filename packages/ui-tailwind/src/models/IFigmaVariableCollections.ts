// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IFigmaVariableCollection } from "./IFigmaVariableCollection";

/**
 * Figma variable collections.
 */
export interface IFigmaVariableCollections {
	/**
	 * The version of the figma variables file.
	 */
	version: string;

	/**
	 * Metadata for the variables.
	 */
	metadata: unknown;

	/**
	 * The collections of variables.
	 */
	collections: IFigmaVariableCollection[];
}
