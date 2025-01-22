// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SelectProps as FlowbiteSelectProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { SelectSizes } from "./selectSizes";

export const SelectPropTypes = {
	sizing: PropTypes.oneOf(Object.values(SelectSizes)),
	id: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
			selected: PropTypes.bool
		})
	).isRequired
};

/**
 * Select props.
 */
export type SelectProps = PropsWithChildren<
	InferProps<typeof SelectPropTypes> & Omit<FlowbiteSelectProps, "color" | "label">
>;
