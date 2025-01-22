// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * ToggleSwitch sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ToggleSwitchSizes = {
	/**
	 * Small.
	 */
	Small: "sm",

	/**
	 * Medium.
	 */
	Medium: "md",

	/**
	 * Large.
	 */
	Large: "lg"
} as const;

/**
 * ToggleSwitch sizes.
 */
export type ToggleSwitchSizes = (typeof ToggleSwitchSizes)[keyof typeof ToggleSwitchSizes];
