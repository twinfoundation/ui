// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TextareaProps as FlowbiteTextareaProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const TextareaPropTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	readOnly: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	rows: PropTypes.number,
	cols: PropTypes.number,
	className: PropTypes.string
};

/**
 * Textarea props.
 */
export type TextareaProps = PropsWithChildren<
	InferProps<typeof TextareaPropTypes> & Omit<FlowbiteTextareaProps, "color" | "label">
>;
