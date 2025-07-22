// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { DARK, LIGHT } from "../constants/colors";

/**
 * Tooltip styles.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipStyles = {
	/**
	 * Dark.
	 */
	Dark: DARK,

	/**
	 * Light.
	 */
	Light: LIGHT
} as const;

/**
 * Tooltip Styles.
 */
export type TooltipStyles = (typeof TooltipStyles)[keyof typeof TooltipStyles];
