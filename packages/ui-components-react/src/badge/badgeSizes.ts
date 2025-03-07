// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { EXTRA_SMALL, SMALL } from "../constants/sizes";

/**
 * Badge sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BadgeSizes = {
	/**
	 * Extra small.
	 */
	ExtraSmall: EXTRA_SMALL,

	/**
	 * Small.
	 */
	Small: SMALL
} as const;

/**
 * Badge sizes.
 */
export type BadgeSize = (typeof BadgeSizes)[keyof typeof BadgeSizes];
