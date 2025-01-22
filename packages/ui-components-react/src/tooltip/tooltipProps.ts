// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TooltipProps as FlowbiteTooltipProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { TooltipAnimations } from "./tooltipAnimations";
import { TooltipPlacements } from "./tooltipPlacements";
import { TooltipStyles } from "./tooltipStyles";
import { TooltipTriggers } from "./tooltipTriggers";

export const TooltipPropTypes = {
	style: PropTypes.oneOf(Object.values(TooltipStyles)),
	animation: PropTypes.oneOf(Object.values(TooltipAnimations)),
	placement: PropTypes.oneOf(Object.values(TooltipPlacements)),
	trigger: PropTypes.oneOf(Object.values(TooltipTriggers)),
	arrow: PropTypes.bool,
	content: PropTypes.string
};

/**
 * Tooltip props.
 */
export type TooltipProps = PropsWithChildren<
	InferProps<typeof TooltipPropTypes> & Omit<FlowbiteTooltipProps, "color" | "label">
>;
