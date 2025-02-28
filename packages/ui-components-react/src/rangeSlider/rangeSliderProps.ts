// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { RangeSliderProps as FlowbiteRangeSliderProps } from "flowbite-react";
import type { RangeSliderSizes } from "./rangeSliderSizes";

/**
 * RangeSlider props interface.
 */
export interface RangeSliderProps extends Omit<FlowbiteRangeSliderProps, "color" | "label"> {
	/**
	 * The size of the range slider.
	 */
	sizing?: RangeSliderSizes;

	/**
	 * The ID of the range slider.
	 */
	id?: string;

	/**
	 * Whether the range slider is disabled.
	 */
	disabled?: boolean;

	/**
	 * Whether the range slider is required.
	 */
	required?: boolean;

	/**
	 * The name of the range slider.
	 */
	name?: string;

	/**
	 * The value of the range slider.
	 */
	value?: string;

	/**
	 * The minimum value of the range slider.
	 */
	min?: number;

	/**
	 * The maximum value of the range slider.
	 */
	max?: number;
}
