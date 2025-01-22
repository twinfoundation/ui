// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { LabelProps as FlowbiteLabelProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const LabelPropTypes = {
	htmlFor: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.string.isRequired
};

/**
 * Label props.
 */
export type LabelProps = PropsWithChildren<
	InferProps<typeof LabelPropTypes> & Omit<FlowbiteLabelProps, "color" | "label">
>;
