// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tooltip placements.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipPlacements = {
	/**
	 * Top.
	 */
	Top: "top",

	/**
	 * Right.
	 */
	Right: "right",

	/**
	 * Bottom.
	 */
	Bottom: "bottom",

	/**
	 * Left.
	 */
	Left: "left"
} as const;

/**
 * Tooltip placements.
 */
export type TooltipPlacements = (typeof TooltipPlacements)[keyof typeof TooltipPlacements];
