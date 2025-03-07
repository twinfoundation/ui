// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { GRAY, WARNING, SUCCESS, INFO, FAILURE } from "../constants/colors";

/**
 * Badge colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BadgeColors = {
	/**
	 * Gray.
	 */
	Gray: GRAY,

	/**
	 * Failure.
	 */
	Failure: FAILURE,

	/**
	 * Warning.
	 */
	Warning: WARNING,

	/**
	 * Success.
	 */
	Success: SUCCESS,

	/**
	 * Info.
	 */
	Info: INFO
} as const;

/**
 * Badge colors.
 */
export type BadgeColor = typeof BadgeColors[keyof typeof BadgeColors];

/**
 * CSS classes for badge colors.
 */
export type ColorClasses = {
	[key: string]: string;
};

// Re-export color constants for backward compatibility
export { GRAY, FAILURE, WARNING, SUCCESS, INFO };
