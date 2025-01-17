// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ToastProps as FlowbiteToastProps } from "flowbite-react";
import type { InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const ToastPropTypes = {};

/**
 * Toast props.
 */
export type ToastProps = PropsWithChildren<
	InferProps<typeof ToastPropTypes> & Omit<FlowbiteToastProps, "color" | "label">
>;
