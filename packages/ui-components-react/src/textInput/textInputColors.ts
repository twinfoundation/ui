// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * TextInput colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TextInputColors = {
	/**
	 * None.
	 */
	None: "",

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
	Info: "info",

	/**
	 * Gray.
	 */
	Gray: "gray"
} as const;

/**
 * TextInput colors.
 */
export type TextInputColors = (typeof TextInputColors)[keyof typeof TextInputColors];
