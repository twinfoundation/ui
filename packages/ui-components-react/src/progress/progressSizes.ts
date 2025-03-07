// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "../constants/sizes";

/**
 * Progress sizes.
 */
export const ProgressSizes = {
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
	Large: LARGE,

	/**
	 * Extra Large.
	 */
	ExtraLarge: EXTRA_LARGE
} as const;

/**
 * Progress sizes.
 */
export type ProgressSize = (typeof ProgressSizes)[keyof typeof ProgressSizes];
