// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import {
	ANIMATION_OFF,
	DURATION_150,
	DURATION_300,
	DURATION_500,
	DURATION_1000
} from "../constants/animations";

/**
 * Tooltip animations.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipAnimations = {
	/**
	 * False.
	 */
	False: ANIMATION_OFF,

	/**
	 * Duration 150.
	 */
	Duration150: DURATION_150,

	/**
	 * Duration 300.
	 */
	Duration300: DURATION_300,

	/**
	 * Duration 500.
	 */
	Duration500: DURATION_500,

	/**
	 * Duration 1000.
	 */
	Duration1000: DURATION_1000
} as const;

/**
 * Tooltip animations.
 */
export type TooltipAnimation = (typeof TooltipAnimations)[keyof typeof TooltipAnimations];
