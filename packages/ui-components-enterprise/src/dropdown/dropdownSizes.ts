// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE } from "../constants/sizes";

/**
 * Dropdown sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DropdownSizes = {
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
 * Dropdown sizes.
 */
export type DropdownSize = (typeof DropdownSizes)[keyof typeof DropdownSizes];
