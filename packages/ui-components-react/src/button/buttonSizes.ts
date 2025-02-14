// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Button sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ButtonSizes = {
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
 * Button sizes type.
 */
export type ButtonSize = (typeof ButtonSizes)[keyof typeof ButtonSizes];
