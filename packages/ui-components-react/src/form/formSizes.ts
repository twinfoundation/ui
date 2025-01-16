// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Form sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FormSizes = {
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
 * Form sizes.
 */
export type FormSizes = (typeof FormSizes)[keyof typeof FormSizes];
