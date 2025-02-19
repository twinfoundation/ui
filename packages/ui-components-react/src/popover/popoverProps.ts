// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { PopoverProps as FlowbitePopoverProps } from "flowbite-react";
import PropTypes from "prop-types";
import type { ReactElement } from "react";
import { PopoverPositions } from "./popoverPositions";
import { PopoverTriggers } from "./popoverTriggers";

export const PopoverPropTypes = {
	/**
	 * The placement of the popover.
	 */
	placement: PropTypes.oneOf(Object.values(PopoverPositions)).isRequired,

	/**
	 * The trigger type for the popover.
	 */
	trigger: PropTypes.oneOf(Object.values(PopoverTriggers)).isRequired,

	/**
	 * Whether to show the arrow.
	 */
	arrow: PropTypes.bool,

	/**
	 * The content to show in the popover.
	 */
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

	/**
	 * The ARIA label for accessibility.
	 */
	ariaLabel: PropTypes.string,

	/**
	 * The ARIA description for accessibility.
	 */
	ariaDescription: PropTypes.string,

	/**
	 * Custom trigger element to replace the default button.
	 */
	customTrigger: PropTypes.element,

	/**
	 * Additional class name for the popover.
	 */
	className: PropTypes.string
};

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
	placement?: (typeof PopoverPositions)[keyof typeof PopoverPositions];

	/**
	 * The trigger type for the popover.
	 */
	trigger?: (typeof PopoverTriggers)[keyof typeof PopoverTriggers];

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
