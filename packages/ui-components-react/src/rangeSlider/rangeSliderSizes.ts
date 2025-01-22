// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * RangeSlider sizes.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RangeSliderSizes = {
	/**
	 * Small.
	 */
	Small: "sm",

	/**
	 * Medium.
	 */
	Medium: "md",

	/**
	 * Large.
	 */
	Large: "lg"
} as const;

/**
 * RangeSlider sizes.
 */
export type RangeSliderSizes = (typeof RangeSliderSizes)[keyof typeof RangeSliderSizes];
