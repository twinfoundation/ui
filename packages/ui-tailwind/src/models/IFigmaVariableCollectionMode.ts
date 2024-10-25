// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IFigmaVariable } from "./IFigmaVariable";

/**
 * Figma variable collection mode.
 */
export interface IFigmaVariableCollectionMode {
	/**
	 * The name of the mode.
	 */
	name: string;

	/**
	 * The variables.
	 */
	variables: IFigmaVariable[];
}
