// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE } from "../constants/sizes";

/**
 * FileInput sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FileInputSizes = {
	/**
	 * Small.
	 */
	Small: SMALL,

	/**
	 * Medium.
	 */
	Medium: MEDIUM,

	/**
	 * Large.
	 */
	Large: LARGE
} as const;

/**
 * FileInput sizes.
 */
export type FileInputSize = (typeof FileInputSizes)[keyof typeof FileInputSizes];
