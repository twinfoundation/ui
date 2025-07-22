// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import { Tooltip as FlowbiteTooltip } from "flowbite-react";
import type { TooltipProps } from "./tooltipProps";

/**
 * Tooltip component.
 */
export const Tooltip = React.memo(
	({ children, color, ...rest }: TooltipProps): React.JSX.Element => (
		<FlowbiteTooltip {...rest}>
			<button className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white bg-${color ?? "primary"}-700 hover:bg-${color ?? "primary"}-800 focus:ring-4 focus:outline-none focus:ring-${color ?? "primary"}-300 dark:bg-${color ?? "primary"}-600 dark:hover:bg-${color ?? "primary"}-700 dark:focus:ring-${color ?? "primary"}-800`}>
				{children}
			</button>
		</FlowbiteTooltip>
	)
);

Tooltip.displayName = "Tooltip";
