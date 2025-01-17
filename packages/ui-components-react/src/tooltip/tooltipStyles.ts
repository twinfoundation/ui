// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tooltip styles.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipStyles = {
	/**
	 * Dark.
	 */
	Dark: "dark",

	/**
	 * Light.
	 */
	Light: "light"
} as const;

/**
 * Tooltip Styles.
 */
export type TooltipStyles = (typeof TooltipStyles)[keyof typeof TooltipStyles];
