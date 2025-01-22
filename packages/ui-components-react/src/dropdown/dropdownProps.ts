// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DropdownProps as FlowbiteDropdownProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { DropdownPositions } from "./dropdownPositions";
import { DropdownSizes } from "./dropdownSizes";

export const DropdownPropTypes = {
	placement: PropTypes.oneOf(Object.values(DropdownPositions)),
	size: PropTypes.oneOf(Object.values(DropdownSizes)),
	header: PropTypes.node,
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			icon: PropTypes.func,
			className: PropTypes.string,
			onClick: PropTypes.func,
			divider: PropTypes.bool
		})
	)
};

/**
 * Dropdown props.
 */
export type DropdownProps = PropsWithChildren<
	InferProps<typeof DropdownPropTypes> & Omit<FlowbiteDropdownProps, "color" | "label">
>;
