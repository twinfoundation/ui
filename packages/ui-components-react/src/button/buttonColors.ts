// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Button colors.
 */
export const ButtonColors = {
	/**
	 * Primary button - Used for primary actions
	 */
	Primary: "primary",

	/**
	 * Secondary button - Used for secondary actions
	 */
	Secondary: "secondary",

	/**
	 * Ghost button - Used for tertiary actions
	 */
	Ghost: "ghost",

	/**
	 * Success button - Used for success states
	 */
	Success: "success",

	/**
	 * Error button - Used for error states
	 */
	Error: "error",

	/**
	 * Warning button - Used for warning states
	 */
	Warning: "warning",

	/**
	 * Info button - Used for informational states
	 */
	Info: "info"
} as const;

/**
 * Type for button colors
 */
export type ButtonColor = (typeof ButtonColors)[keyof typeof ButtonColors];
