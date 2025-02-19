// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Progress colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProgressColors = {
	/**
	 * Orange.
	 */
	Orange: "orange",

	/**
	 * Primary.
	 */
	Primary: "primary",

	/**
	 * Green.
	 */
	Green: "green",

	/**
	 * Purple.
	 */
	Purple: "purple",

	/**
	 * Yellow.
	 */
	Yellow: "yellow",

	/**
	 * Pink.
	 */
	Pink: "pink",

	/**
	 * Indigo.
	 */
	Indigo: "indigo",

	/**
	 * Dark.
	 */
	Dark: "dark",

	/**
	 * Blue.
	 */
	Blue: "blue"
} as const;

/**
 * Progress colors.
 */
export type ProgressColors = typeof ProgressColors[keyof typeof ProgressColors];
