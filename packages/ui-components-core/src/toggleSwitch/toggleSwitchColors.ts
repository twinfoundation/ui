// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import {
	PRIMARY,
	BLUE,
	DARK,
	FAILURE,
	WARNING,
	SUCCESS,
	INFO,
	GRAY,
	GREEN,
	LIGHT,
	RED,
	PURPLE,
	YELLOW,
	CYAN,
	LIME,
	INDIGO,
	TEAL,
	PINK
} from "../constants/colors";

/**
 * ToggleSwitch colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ToggleSwitchColors = {
	/**
	 * Primary.
	 */
	Primary: PRIMARY,

	/**
	 * Blue.
	 */
	Blue: BLUE,

	/**
	 * Dark.
	 */
	Dark: DARK,

	/**
	 * Failure.
	 */
	Failure: FAILURE,

	/**
	 * Warning.
	 */
	Warning: WARNING,

	/**
	 * Success.
	 */
	Success: SUCCESS,

	/**
	 * Info.
	 */
	Info: INFO,

	/**
	 * Gray.
	 */
	Gray: GRAY,

	/**
	 * Green.
	 */
	Green: GREEN,

	/**
	 * Light.
	 */
	Light: LIGHT,

	/**
	 * Red.
	 */
	Red: RED,

	/**
	 * Purple.
	 */
	Purple: PURPLE,

	/**
	 * Yellow.
	 */
	Yellow: YELLOW,

	/**
	 * Cyan.
	 */
	Cyan: CYAN,

	/**
	 * Lime.
	 */
	Lime: LIME,

	/**
	 * Indigo.
	 */
	Indigo: INDIGO,

	/**
	 * Teal.
	 */
	Teal: TEAL,

	/**
	 * Pink.
	 */
	Pink: PINK
} as const;

/**
 * ToggleSwitch colors.
 */
export type ToggleSwitchColor = (typeof ToggleSwitchColors)[keyof typeof ToggleSwitchColors];
