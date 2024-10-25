// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IFigmaVariableAlias } from "./IFigmaVariableAlias";

/**
 * Figma variable.
 */
export interface IFigmaVariable {
	/**
	 * The name of the variable.
	 */
	name: string;

	/**
	 * The type of the variable.
	 */
	type: string;

	/**
	 * Is the variable an alias.
	 */
	isAlias: boolean;

	/**
	 * The value of the variable.
	 */
	value: string | number | IFigmaVariableAlias | { [id: string]: unknown };
}
