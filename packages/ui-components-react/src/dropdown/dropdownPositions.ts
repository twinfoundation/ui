// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Dropdown positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DropdownPositions = {
	/**
	 * Top.
	 */
	Top: "top",

	/**
	 * Bottom.
	 */
	Bottom: "bottom",

	/**
	 * Left.
	 */
	Left: "left",

	/**
	 * Right.
	 */
	Right: "right"
} as const;

/**
 * Dropdown positions.
 */
export type DropdownPositions = (typeof DropdownPositions)[keyof typeof DropdownPositions];
