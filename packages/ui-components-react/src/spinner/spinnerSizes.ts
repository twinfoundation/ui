// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Spinner sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SpinnerSizes = {
	/**
	 * Extra Small.
	 */
	ExtraSmall: "xs",

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
 * Spinner sizes.
 */
export type SpinnerSizes = (typeof SpinnerSizes)[keyof typeof SpinnerSizes];
