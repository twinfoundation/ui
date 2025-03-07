// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE } from "../constants/sizes";

/**
 * ToggleSwitch sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ToggleSwitchSizes = {
	/**
	 * Small.
	 */
	Small: SMALL,

	/**
	 * Medium.
	 */
	Medium: MEDIUM,

	/**
	 * Large.
	 */
	Large: LARGE
} as const;

/**
 * ToggleSwitch sizes.
 */
export type ToggleSwitchSize = (typeof ToggleSwitchSizes)[keyof typeof ToggleSwitchSizes];
