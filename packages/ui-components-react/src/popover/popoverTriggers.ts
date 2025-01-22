// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Popover Triggers.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PopoverTriggers = {
	/**
	 * Click.
	 */
	Click: "click",

	/**
	 * Hover.
	 */
	Hover: "hover"
} as const;

/**
 * Popover Triggers.
 */
export type PopoverTriggers = (typeof PopoverTriggers)[keyof typeof PopoverTriggers];
