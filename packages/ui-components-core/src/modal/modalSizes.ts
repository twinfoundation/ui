// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import {
	SMALL,
	MEDIUM,
	LARGE,
	EXTRA_LARGE_MODAL,
	XL2,
	XL3,
	XL4,
	XL5,
	XL6,
	XL7
} from "../constants/sizes";

/**
 * Modal sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ModalSizes = {
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
	Large: LARGE,

	/**
	 * Extra Large.
	 */
	ExtraLarge: EXTRA_LARGE_MODAL,

	/**
	 * 2 XL.
	 */
	XL2,

	/**
	 * 3 XL.
	 */
	XL3,

	/**
	 * 4 XL.
	 */
	XL4,

	/**
	 * 5 XL.
	 */
	XL5,

	/**
	 * 6 XL.
	 */
	XL6,

	/**
	 * 7 XL.
	 */
	XL7
} as const;

/**
 * Modal sizes.
 */
export type ModalSize = (typeof ModalSizes)[keyof typeof ModalSizes];
