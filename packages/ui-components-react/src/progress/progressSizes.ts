// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Progress sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ProgressSizes = {
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
	Large: "lg",

	/**
	 * Extra Large.
	 */
	ExtraLarge: "xl"
} as const;

/**
 * Progress sizes.
 */
export type ProgressSizes = (typeof ProgressSizes)[keyof typeof ProgressSizes];
