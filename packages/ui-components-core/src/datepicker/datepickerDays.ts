// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Datepicker Days.
 */
export const DatepickerDays = {
	/**
	 * Sunday.
	 */
	Sunday: 0,

	/**
	 * Monday.
	 */
	Monday: 1,

	/**
	 * Tuesday.
	 */
	Tuesday: 2,

	/**
	 * Wednesday.
	 */
	Wednesday: 3,

	/**
	 * Thursday.
	 */
	Thursday: 4,

	/**
	 * Friday.
	 */
	Friday: 5,

	/**
	 * Saturday.
	 */
	Saturday: 6
} as const;

/**
 * Datepicker Days.
 */
export type DatepickerDays = (typeof DatepickerDays)[keyof typeof DatepickerDays];
