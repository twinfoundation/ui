// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Color classes mapping for badge styles
 */
export interface ColorClasses {
	/**
	 * Gray color style
	 */
	gray: string;
	/**
	 * Failure color style
	 */
	failure: string;
	/**
	 * Warning color style
	 */
	warning: string;
	/**
	 * Success color style
	 */
	success: string;
	/**
	 * Info color style
	 */
	info: string;
}

/**
 * Badge colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BadgeColors = {
	/**
	 * Gray.
	 */
	Gray: "gray",

	/**
	 * Failure.
	 */
	Failure: "failure",

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
 * Badge colors.
 */
export type BadgeColors = (typeof BadgeColors)[keyof typeof BadgeColors];
