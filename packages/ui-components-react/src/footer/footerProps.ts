// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { FooterProps as FlowbiteFooterProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Footer props.
 */
export interface FooterProps extends Pick<FlowbiteFooterProps, "container"> {
	/**
	 * The body content of the footer
	 */
	body: ReactNode;
}
