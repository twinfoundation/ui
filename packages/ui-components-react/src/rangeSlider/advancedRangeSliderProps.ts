// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import PropTypes from "prop-types";
import type { PropsWithChildren } from "react";
import type { RangeSliderProps } from "./rangeSliderProps";
import { TooltipPlacements } from "../tooltip/tooltipPlacements";

export const AdvancedRangeSliderPropTypes = {
	showTooltip: PropTypes.bool,
	tooltipPlacement: PropTypes.oneOf(Object.values(TooltipPlacements)),
	formatTooltip: PropTypes.func,
	isDualHandle: PropTypes.bool,
	startValue: PropTypes.string,
	endValue: PropTypes.string,
	onRangeChange: PropTypes.func,
	leftIcon: PropTypes.elementType,
	rightIcon: PropTypes.elementType,
	showIcons: PropTypes.bool,
	onLeftIconClick: PropTypes.func,
	onRightIconClick: PropTypes.func
};

/**
 * AdvancedRangeSlider props.
 */
export type AdvancedRangeSliderProps = PropsWithChildren<{
	showTooltip?: boolean;
	tooltipPlacement?: (typeof TooltipPlacements)[keyof typeof TooltipPlacements];
	formatTooltip?: (value: number) => string;
	isDualHandle?: boolean;
	startValue?: string;
	endValue?: string;
	onRangeChange?: (startValue: number, endValue: number) => void;
	leftIcon?: React.ElementType;
	rightIcon?: React.ElementType;
	showIcons?: boolean;
	onLeftIconClick?: () => void;
	onRightIconClick?: () => void;
}> &
	Omit<RangeSliderProps, "value" | "onChange">;
