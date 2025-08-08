// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { SMALL, MEDIUM, LARGE } from "../constants/sizes";

/**
 * RangeSlider sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RangeSliderSizes = {
	/**
	 * Small.
	 */
	Small: SMALL,

	/**
	 * Medium.
	 */
	Medium: MEDIUM,

	/**
	 * Large.
	 */
	Large: LARGE
} as const;

/**
 * RangeSlider sizes.
 */
export type RangeSliderSize = (typeof RangeSliderSizes)[keyof typeof RangeSliderSizes];
