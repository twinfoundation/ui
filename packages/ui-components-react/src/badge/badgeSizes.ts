// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Badge sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BadgeSizes = {
	/**
	 * Extras Small.
	 */
	ExtraSmall: "xs",

	/**
	 * Small.
	 */
	Small: "sm"
} as const;

/**
 * Badge sizes.
 */
export type BadgeSizes = (typeof BadgeSizes)[keyof typeof BadgeSizes];
