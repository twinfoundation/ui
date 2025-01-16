// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Popover positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PopoverPositions = {
	/**
	 * Top.
	 */
	Top: "top",

	/**
	 * Left.
	 */
	Left: "left",

	/**
	 * Right.
	 */
	Right: "right",

	/**
	 * Bottom.
	 */
	Bottom: "bottom"
} as const;

/**
 * Popover positions.
 */
export type PopoverPositions = (typeof PopoverPositions)[keyof typeof PopoverPositions];
