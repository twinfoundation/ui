// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SidebarProps as FlowbiteSidebarProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const SidebarPropTypes = {
	logo: PropTypes.shape({
		label: PropTypes.node.isRequired,
		img: PropTypes.string.isRequired,
		imgAlt: PropTypes.string,
		href: PropTypes.string
	}).isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
			icon: PropTypes.func,
			active: PropTypes.bool,
			disabled: PropTypes.bool
		})
	),
	CTA: PropTypes.node
};

/**
 * Sidebar props.
 */
export type SidebarProps = PropsWithChildren<
	InferProps<typeof SidebarPropTypes> & Omit<FlowbiteSidebarProps, "label">
>;
