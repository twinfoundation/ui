// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Figma variable alias.
 */
export interface IFigmaVariableAlias {
	/**
	 * If this is an alias which collection is the real value in.
	 */
	collection: string;

	/**
	 * The name of the variable in the collection.
	 */
	name: string;
}
