// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Modal positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ModalPositions = {
	/**
	 * Center.
	 */
	Center: "center",

	/**
	 * Center Left.
	 */

	CenterLeft: "center-left",

	/**
	 * Center Right.
	 */
	CenterRight: "center-right",

	/**
	 * Top Center.
	 */
	TopCenter: "top-center",

	/**
	 * Top Left.
	 */
	TopLeft: "top-left",

	/**
	 * Top Right.
	 */
	TopRight: "top-right",

	/**
	 * Bottom Center.
	 */
	BottomCenter: "bottom-center",

	/**
	 * Bottom Left.
	 */
	BottomLeft: "bottom-left",

	/**
	 * Bottom Right.
	 */
	BottomRight: "bottom-right"
} as const;

/**
 * Modal positions.
 */
export type ModalPositions = (typeof ModalPositions)[keyof typeof ModalPositions];
