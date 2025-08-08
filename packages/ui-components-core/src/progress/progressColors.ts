// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import {
	ORANGE,
	PRIMARY,
	GREEN,
	PURPLE,
	YELLOW,
	PINK,
	INDIGO,
	DARK,
	BLUE
} from "../constants/colors";

/**
 * Progress colors.
 */
export const ProgressColors = {
	/**
	 * Orange.
	 */
	Orange: ORANGE,

	/**
	 * Primary.
	 */
	Primary: PRIMARY,

	/**
	 * Green.
	 */
	Green: GREEN,

	/**
	 * Purple.
	 */
	Purple: PURPLE,

	/**
	 * Yellow.
	 */
	Yellow: YELLOW,

	/**
	 * Pink.
	 */
	Pink: PINK,

	/**
	 * Indigo.
	 */
	Indigo: INDIGO,

	/**
	 * Dark.
	 */
	Dark: DARK,

	/**
	 * Blue.
	 */
	Blue: BLUE
} as const;

/**
 * Progress colors.
 */
export type ProgressColor = (typeof ProgressColors)[keyof typeof ProgressColors];
