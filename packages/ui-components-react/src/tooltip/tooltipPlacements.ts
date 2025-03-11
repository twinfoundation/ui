// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { TOP, RIGHT, BOTTOM, LEFT } from "../constants/positions";

/**
 * Tooltip placements.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipPlacements = {
	/**
	 * Top.
	 */
	Top: TOP,

	/**
	 * Right.
	 */
	Right: RIGHT,

	/**
	 * Bottom.
	 */
	Bottom: BOTTOM,

	/**
	 * Left.
	 */
	Left: LEFT
} as const;

/**
 * Tooltip placements.
 */
export type TooltipPlacement = (typeof TooltipPlacements)[keyof typeof TooltipPlacements];
