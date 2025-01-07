// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AlertProps as FlowbiteAlertProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { AlertColors } from "./alertColors";

export const AlertPropTypes = {
	color: PropTypes.oneOf(Object.values(AlertColors)),
	content: PropTypes.node,
	action: PropTypes.string,
	borderAccent: PropTypes.bool
};

/**
 * Alert props.
 */
export type AlertProps = PropsWithChildren<
	InferProps<typeof AlertPropTypes> & Omit<FlowbiteAlertProps, "color" | "label">
>;
