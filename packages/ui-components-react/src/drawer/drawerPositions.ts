// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { TOP, BOTTOM, LEFT, RIGHT } from "../constants/positions";

/**
 * Drawer positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DrawerPositions = {
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
 * Drawer positions.
 */
export type DrawerPosition = (typeof DrawerPositions)[keyof typeof DrawerPositions];
