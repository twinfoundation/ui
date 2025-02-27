// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { RangeSlider as FlowbiteRangeSlider } from "flowbite-react";
import { memo, type JSX } from "react";
import type { RangeSliderProps } from "./rangeSliderProps";

/**
 * RangeSlider component.
 */
export const RangeSlider = memo(
	({ ...rest }: RangeSliderProps): JSX.Element => <FlowbiteRangeSlider {...rest} />
);

RangeSlider.displayName = "RangeSlider";
