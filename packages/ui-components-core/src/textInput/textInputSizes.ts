// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE } from "../constants/sizes";

/**
 * TextInput sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TextInputSizes = {
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
 * TextInput sizes.
 */
export type TextInputSize = (typeof TextInputSizes)[keyof typeof TextInputSizes];
