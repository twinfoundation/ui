// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tooltip colors.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TooltipColors = {
	/**
	 * Primary color.
	 */
	Primary: "primary",

	/**
	 * Secondary color.
	 */
	Secondary: "secondary",

	/**
	 * Plain color.
	 */
	Plain: "plain",

	/**
	 * Error color.
	 */
	Error: "error",

	/**
	 * Warning color.
	 */
	Warning: "warning",

	/**
	 * Success color.
	 */
	Success: "success",

	/**
	 * Info color.
	 */
	Info: "info",

	/**
	 * Dark color.
	 */
	Dark: "dark"
} as const;

/**
 * Tooltip colors.
 */
export type TooltipColor = (typeof TooltipColors)[keyof typeof TooltipColors];
