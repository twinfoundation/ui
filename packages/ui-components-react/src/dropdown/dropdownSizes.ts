// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Dropdown sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DropdownSizes = {
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
 * Dropdown sizes.
 */
export type DropdownSizes = (typeof DropdownSizes)[keyof typeof DropdownSizes];
