// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Button sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ButtonSizes = {
	/**
	 * Extras Small.
	 */
	ExtraSmall: "xs",

	/**
	 * Small.
	 */
	Small: "sm",

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
 * Button sizes.
 */
export type ButtonSizes = (typeof ButtonSizes)[keyof typeof ButtonSizes];
