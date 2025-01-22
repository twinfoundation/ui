// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { FooterProps as FlowbiteFooterProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const FooterPropTypes = {
	body: PropTypes.node.isRequired
};

/**
 * Footer props.
 */
export type FooterProps = PropsWithChildren<
	InferProps<typeof FooterPropTypes> & Omit<FlowbiteFooterProps, "color" | "label">
>;
