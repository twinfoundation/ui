// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Alert colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AlertColors = {
	/**
	 * Primary.
	 */
	Primary: "primary",

	/**
	 * Error.
	 */
	Error: "error",

	/**
	 * Warning.
	 */
	Warning: "warning",

	/**
	 * Success.
	 */
	Success: "success",

	/**
	 * Gray.
	 */
	Gray: "gray"
} as const;

/**
 * Alert colors.
 */
export type AlertColors = (typeof AlertColors)[keyof typeof AlertColors];
