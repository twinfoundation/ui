// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { EXTRA_SMALL, SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "../constants/sizes";

/**
 * Button sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ButtonSizes = {
	/**
	 * Extra small.
	 */
	ExtraSmall: EXTRA_SMALL,

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
	 * Extra large.
	 */
	ExtraLarge: EXTRA_LARGE
} as const;

/**
 * Button sizes type.
 */
export type ButtonSize = typeof ButtonSizes[keyof typeof ButtonSizes];

// Re-export size constants for backward compatibility
export { EXTRA_SMALL, SMALL, MEDIUM, LARGE, EXTRA_LARGE };
