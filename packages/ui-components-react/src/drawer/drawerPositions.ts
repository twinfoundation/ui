// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Drawer positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DrawerPositions = {
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
 * Drawer positions.
 */
export type DrawerPositions = (typeof DrawerPositions)[keyof typeof DrawerPositions];
