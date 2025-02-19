// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ProgressProps as FlowbiteProgressProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { ProgressColors } from "./progressColors";
import { ProgressPositions } from "./progressPositions";
import { ProgressSizes } from "./progressSizes";

export const ProgressPropTypes = {
	size: PropTypes.oneOf(Object.values(ProgressSizes)),
	progressLabelPosition: PropTypes.oneOf(Object.values(ProgressPositions)),
	textLabelPosition: PropTypes.oneOf(Object.values(ProgressPositions)),
	labelProgress: PropTypes.bool,
	labelText: PropTypes.bool,
	textLabel: PropTypes.string,
	color: PropTypes.oneOf(Object.values(ProgressColors)),
	progress: PropTypes.number.isRequired
};

/**
 * Progress props.
 */
export type ProgressProps = PropsWithChildren<
	InferProps<typeof ProgressPropTypes> & Omit<FlowbiteProgressProps, "label">
>;
