// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tooltip animations.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipAnimations = {
	/**
	 * False.
	 */
	False: false,

	/**
	 * Duration 150.
	 */
	Duration150: "duration-150",

	/**
	 * Duration 300.
	 */
	Duration300: "duration-300",

	/**
	 * Duration 500.
	 */
	Duration500: "duration-500",

	/**
	 * Duration 1000.
	 */
	Duration1000: "duration-1000"
} as const;

/**
 * Tooltip animations.
 */
export type TooltipAnimations = (typeof TooltipAnimations)[keyof typeof TooltipAnimations];
