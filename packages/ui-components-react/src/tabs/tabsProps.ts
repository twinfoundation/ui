// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TabsProps as FlowbiteTabsProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { TabsVariants } from "./tabsVariants";

export const TabsPropTypes = {
	variant: PropTypes.oneOf(Object.values(TabsVariants)),
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
			icon: PropTypes.func,
			active: PropTypes.bool,
			disabled: PropTypes.bool
		})
	)
};

/**
 * Tabs props.
 */
export type TabsProps = PropsWithChildren<
	InferProps<typeof TabsPropTypes> & Omit<FlowbiteTabsProps, "color" | "label">
>;
