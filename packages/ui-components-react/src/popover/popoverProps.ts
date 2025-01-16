// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { PopoverProps as FlowbitePopoverProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { PopoverPositions } from "./popoverPositions";
import { PopoverTriggers } from "./popoverTriggers";

export const PopoverPropTypes = {
	placement: PropTypes.oneOf(Object.values(PopoverPositions)),
	trigger: PropTypes.oneOf(Object.values(PopoverTriggers)),
	arrow: PropTypes.bool
};

/**
 * Popover props.
 */
 export type PopoverProps = PropsWithChildren<
	InferProps<typeof PopoverPropTypes> & Omit<FlowbitePopoverProps, "color" | "label">
 >;
