// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { INFO, ERROR, WARNING, SUCCESS, GRAY } from "../constants/colors";

/**
 * Alert colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AlertColors = {
	/**
	 * Info.
	 */
	Info: INFO,

	/**
	 * Error.
	 */
	Error: ERROR,

	/**
	 * Warning.
	 */
	Warning: WARNING,

	/**
	 * Success.
	 */
	Success: SUCCESS,

	/**
	 * Gray.
	 */
	Gray: GRAY
} as const;

/**
 * Alert colors.
 */
export type AlertColor = (typeof AlertColors)[keyof typeof AlertColors];
