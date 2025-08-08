// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { HOVER, CLICK } from "../constants/triggers";

/**
 * Tooltip triggers.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipTriggers = {
	/**
	 * Hover.
	 */
	Hover: HOVER,

	/**
	 * Click.
	 */
	Click: CLICK
} as const;

/**
 * Tooltip triggers.
 */
export type TooltipTriggers = (typeof TooltipTriggers)[keyof typeof TooltipTriggers];
