// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Button colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ButtonColors = {
	/**
	 * Primary.
	 */
	Primary: "primary",

	/**
	 * Secondary.
	 */
	Secondary: "secondary",

	/**
	 * Plain.
	 */
	Plain: "plain",

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
	 * Info.
	 */
	Info: "info"
} as const;

/**
 * Button colors.
 */
export type ButtonColors = (typeof ButtonColors)[keyof typeof ButtonColors];
