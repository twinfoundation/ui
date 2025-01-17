// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tooltip triggers.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipTriggers = {
	/**
	 * Hover.
	 */
	Hover: "hover",

	/**
	 * Click.
	 */
	Click: "click"
} as const;

/**
 * Tooltip triggers.
 */
export type TooltipTriggers = (typeof TooltipTriggers)[keyof typeof TooltipTriggers];
