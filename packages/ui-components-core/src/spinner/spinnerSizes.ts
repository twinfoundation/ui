// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { EXTRA_SMALL, SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "../constants/sizes";

/**
 * Spinner sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SpinnerSizes = {
	/**
	 * Extra Small.
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
	 * Extra Large.
	 */
	ExtraLarge: EXTRA_LARGE
} as const;

/**
 * Spinner sizes.
 */
export type SpinnerSize = (typeof SpinnerSizes)[keyof typeof SpinnerSizes];
