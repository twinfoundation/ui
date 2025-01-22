// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * TextInput sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TextInputSizes = {
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
 * TextInput sizes.
 */
export type TextInputSizes = (typeof TextInputSizes)[keyof typeof TextInputSizes];
