// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Select sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SelectSizes = {
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
 * Select sizes.
 */
export type SelectSizes = (typeof SelectSizes)[keyof typeof SelectSizes];
