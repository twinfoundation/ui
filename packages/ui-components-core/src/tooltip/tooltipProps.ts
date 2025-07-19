// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TooltipProps as FlowbiteTooltipProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { TooltipAnimations } from "./tooltipAnimations";
import type { TooltipColors } from "./tooltipColors";
import type { TooltipPlacements } from "./tooltipPlacements";
import type { TooltipStyles } from "./tooltipStyles";
import type { TooltipTriggers } from "./tooltipTriggers";

/**
 * Tooltip props.
 */
export interface TooltipProps
	extends Omit<FlowbiteTooltipProps, "color" | "style" | "animation" | "placement" | "trigger"> {
	/**
	 * The style of the tooltip.
	 */
	style?: (typeof TooltipStyles)[keyof typeof TooltipStyles];

	/**
	 * The animation of the tooltip.
	 */
	animation?: (typeof TooltipAnimations)[keyof typeof TooltipAnimations];

	/**
	 * The placement of the tooltip.
	 */
	placement?: (typeof TooltipPlacements)[keyof typeof TooltipPlacements];

	/**
	 * The trigger of the tooltip.
	 */
	trigger?: (typeof TooltipTriggers)[keyof typeof TooltipTriggers];

	/**
	 * The color of the tooltip.
	 */
	color?: (typeof TooltipColors)[keyof typeof TooltipColors];

	/**
	 * The content of the tooltip.
	 */
	content: ReactNode;

	/**
	 * The children of the tooltip.
	 */
	children?: ReactNode;
}
