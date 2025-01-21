// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * FileInput sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FileInputSizes = {
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
 * FileInput sizes.
 */
export type FileInputSizes = (typeof FileInputSizes)[keyof typeof FileInputSizes];
