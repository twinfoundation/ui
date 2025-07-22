// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import {
	CENTER,
	CENTER_LEFT,
	CENTER_RIGHT,
	TOP_CENTER,
	TOP_LEFT,
	TOP_RIGHT,
	BOTTOM_CENTER,
	BOTTOM_LEFT,
	BOTTOM_RIGHT
} from "../constants/positions";

/**
 * Modal positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ModalPositions = {
	/**
	 * Center.
	 */
	Center: CENTER,

	/**
	 * Center Left.
	 */
	CenterLeft: CENTER_LEFT,

	/**
	 * Center Right.
	 */
	CenterRight: CENTER_RIGHT,

	/**
	 * Top Center.
	 */
	TopCenter: TOP_CENTER,

	/**
	 * Top Left.
	 */
	TopLeft: TOP_LEFT,

	/**
	 * Top Right.
	 */
	TopRight: TOP_RIGHT,

	/**
	 * Bottom Center.
	 */
	BottomCenter: BOTTOM_CENTER,

	/**
	 * Bottom Left.
	 */
	BottomLeft: BOTTOM_LEFT,

	/**
	 * Bottom Right.
	 */
	BottomRight: BOTTOM_RIGHT
} as const;

/**
 * Modal positions.
 */
export type ModalPosition = (typeof ModalPositions)[keyof typeof ModalPositions];
