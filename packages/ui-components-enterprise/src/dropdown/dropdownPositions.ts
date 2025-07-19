// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { TOP, BOTTOM, LEFT, RIGHT } from "../constants/positions";

/**
 * Dropdown positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DropdownPositions = {
	/**
	 * Top.
	 */
	Top: TOP,

	/**
	 * Bottom.
	 */
	Bottom: BOTTOM,

	/**
	 * Left.
	 */
	Left: LEFT,

	/**
	 * Right.
	 */
	Right: RIGHT
} as const;

/**
 * Dropdown positions.
 */
export type DropdownPosition = (typeof DropdownPositions)[keyof typeof DropdownPositions];
