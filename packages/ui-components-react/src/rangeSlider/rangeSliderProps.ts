// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { RangeSliderProps as FlowbiteRangeSliderProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { RangeSliderSizes } from "./rangeSliderSizes";

export const RangeSliderPropTypes = {
	sizing: PropTypes.oneOf(Object.values(RangeSliderSizes)),
	id: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number
};

/**
 * RangeSlider props.
 */
export type RangeSliderProps = PropsWithChildren<
	InferProps<typeof RangeSliderPropTypes> & Omit<FlowbiteRangeSliderProps, "color" | "label">
>;
