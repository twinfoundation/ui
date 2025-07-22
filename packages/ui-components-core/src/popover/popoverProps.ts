// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { PopoverProps as FlowbitePopoverProps } from "flowbite-react";
import type { ReactElement } from "react";
import type { PopoverPositions } from "./popoverPositions";
import type { PopoverTriggers } from "./popoverTriggers";

/**
 * Popover props.
 */
export interface PopoverProps extends Omit<FlowbitePopoverProps, "content"> {
	/**
	 * Custom trigger element to replace the default button.
	 */
	customTrigger?: ReactElement;

	/**
	 * The content to show in the popover.
	 */
	content: string | ReactElement;

	/**
	 * The placement of the popover.
	 */
	placement: (typeof PopoverPositions)[keyof typeof PopoverPositions];

	/**
	 * The trigger type for the popover.
	 */
	trigger: (typeof PopoverTriggers)[keyof typeof PopoverTriggers];

	/**
	 * Whether to show the arrow.
	 */
	arrow?: boolean;

	/**
	 * The ARIA label for accessibility.
	 */
	ariaLabel?: string;

	/**
	 * The ARIA description for accessibility.
	 */
	ariaDescription?: string;

	/**
	 * Additional class name for the popover.
	 */
	className?: string;
}
