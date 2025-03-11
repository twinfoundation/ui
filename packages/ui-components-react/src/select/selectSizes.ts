// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE } from "../constants/sizes";
/**
 * Select sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SelectSizes = {
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
 * Select sizes.
 */
export type SelectSize = (typeof SelectSizes)[keyof typeof SelectSizes];
