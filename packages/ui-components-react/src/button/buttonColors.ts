// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import {
	PRIMARY,
	SECONDARY,
	PLAIN,
	ERROR,
	WARNING,
	SUCCESS,
	INFO,
	DARK
} from "../constants/colors";

/**
 * Button colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ButtonColors = {
	/**
	 * Primary.
	 */
	Primary: PRIMARY,

	/**
	 * Secondary.
	 */
	Secondary: SECONDARY,

	/**
	 * Plain.
	 */
	Plain: PLAIN,

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
	 * Info.
	 */
	Info: INFO,

	/**
	 * Dark.
	 */
	Dark: DARK
} as const;

/**
 * Button colors.
 */
export type ButtonColor = (typeof ButtonColors)[keyof typeof ButtonColors];
