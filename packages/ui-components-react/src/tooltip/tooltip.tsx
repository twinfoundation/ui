// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tooltip as FlowbiteTooltip } from "flowbite-react";
import { memo, type JSX } from "react";
import type { TooltipProps } from "./tooltipProps";
import { Button } from "../button/button";

/**
 * Tooltip component.
 */
export const Tooltip = memo(
	({ children, color, ...rest }: TooltipProps): JSX.Element => (
		<FlowbiteTooltip {...rest}>
			<Button color={color ?? "primary"}>{children}</Button>
		</FlowbiteTooltip>
	)
);

Tooltip.displayName = "Tooltip";
