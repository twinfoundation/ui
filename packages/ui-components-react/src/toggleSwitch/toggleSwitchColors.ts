// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * ToggleSwitch colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ToggleSwitchColors = {
	/**
	 * Primary.
	 */
	Primary: "primary",

	/**
	 * Blue.
	 */
	Blue: "blue",

	/**
	 * Dark.
	 */
	Dark: "dark",

	/**
	 * Failure.
	 */
	Failure: "failure",

	/**
	 * Warning.
	 */
	Warning: "warning",

	/**
	 * Success.
	 */
	Success: "success",

	/**
	 * Info.
	 */
	Info: "info",

	/**
	 * Gray.
	 */
	Gray: "gray",

	/**
	 * Green.
	 */
	Green: "green",

	/**
	 * Light.
	 */
	Light: "light",

	/**
	 * Red.
	 */
	Red: "red",

	/**
	 * Purple.
	 */
	Purple: "purple",

	/**
	 * Yellow.
	 */
	Yellow: "yellow",

	/**
	 * Cyan.
	 */
	Cyan: "cyan",

	/**
	 * Lime.
	 */
	Lime: "lime",

	/**
	 * Indigo.
	 */
	Indigo: "indigo",

	/**
	 * Teal.
	 */
	Teal: "teal",

	/**
	 * Pink.
	 */
	Pink: "pink"
} as const;

/**
 * ToggleSwitch colors.
 */
export type ToggleSwitchColors = (typeof ToggleSwitchColors)[keyof typeof ToggleSwitchColors];
