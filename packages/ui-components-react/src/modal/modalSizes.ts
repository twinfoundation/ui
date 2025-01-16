// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Modal sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ModalSizes = {
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
	ExtraLarge: "xlg",

	/**
	 * 2 XL.
	 */
	XL2: "2xl",

	/**
	 * 3 XL.
	 */
	XL3: "3xl",

	/**
	 * 4 XL.
	 */
	XL4: "4xl",

	/**
	 * 5 XL.
	 */
	XL5: "5xl",

	/**
	 * 6 XL.
	 */
	XL6: "6xl",

	/**
	 * 7 XL.
	 */
	XL7: "7xl"
} as const;

/**
 * Modal sizes.
 */
export type ModalSizes = (typeof ModalSizes)[keyof typeof ModalSizes];
