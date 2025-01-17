// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AlertProps as FlowbiteAlertProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { AlertColors } from "./alertColors";

export const AlertPropTypes = {
	color: PropTypes.oneOf(Object.values(AlertColors)),
	onDismiss: PropTypes.func,
	rounded: PropTypes.bool,
	additionalContent: PropTypes.node,
	withBorderAccent: PropTypes.bool
};

/**
 * Alert props.
 */
export type AlertProps = PropsWithChildren<
	InferProps<typeof AlertPropTypes> & Omit<FlowbiteAlertProps, "color" | "label">
>;
