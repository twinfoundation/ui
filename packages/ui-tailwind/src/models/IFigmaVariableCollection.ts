// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IFigmaVariableCollectionMode } from "./IFigmaVariableCollectionMode";

/**
 * Figma variable collection.
 */
export interface IFigmaVariableCollection {
	/**
	 * The name of the collection.
	 */
	name: string;

	/**
	 * The collections of mode variables.
	 */
	modes: IFigmaVariableCollectionMode[];
}
