// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SpinnerProps as FlowbiteSpinnerProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { SpinnerSizes } from "./spinnerSizes";

export const SpinnerPropTypes = {
	size: PropTypes.oneOf(Object.values(SpinnerSizes)),
	color: PropTypes.string
};

/**
 * Spinner props.
 */
export type SpinnerProps = PropsWithChildren<
	InferProps<typeof SpinnerPropTypes> & Omit<FlowbiteSpinnerProps, "label">
>;
