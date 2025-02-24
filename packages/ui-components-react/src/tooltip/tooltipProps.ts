// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TooltipProps as FlowbiteTooltipProps } from "flowbite-react";
import PropTypes from "prop-types";
import type { PropsWithChildren } from "react";
import { TooltipAnimations } from "./tooltipAnimations";
import { TooltipColors } from "./tooltipColors";
import { TooltipPlacements } from "./tooltipPlacements";
import { TooltipStyles } from "./tooltipStyles";
import { TooltipTriggers } from "./tooltipTriggers";

export const TooltipPropTypes = {
	style: PropTypes.oneOf(Object.values(TooltipStyles)),
	animation: PropTypes.oneOf(Object.values(TooltipAnimations)),
	placement: PropTypes.oneOf(Object.values(TooltipPlacements)),
	trigger: PropTypes.oneOf(Object.values(TooltipTriggers)),
	color: PropTypes.oneOf(Object.values(TooltipColors)),
	arrow: PropTypes.bool,
	content: PropTypes.string
};

/**
 * Tooltip props.
 */
export type TooltipProps = PropsWithChildren<{
	style?: (typeof TooltipStyles)[keyof typeof TooltipStyles];
	animation?: (typeof TooltipAnimations)[keyof typeof TooltipAnimations];
	placement?: (typeof TooltipPlacements)[keyof typeof TooltipPlacements];
	trigger?: (typeof TooltipTriggers)[keyof typeof TooltipTriggers];
	color?: (typeof TooltipColors)[keyof typeof TooltipColors];
	arrow?: boolean;
	content?: string;
}> &
	Omit<FlowbiteTooltipProps, "color" | "label">;
