// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TabsProps as FlowbiteTabsProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { TabsVariants } from "./tabsVariants";
import type { IconComponent } from "../types/iconTypes";

/**
 * Tab item interface
 */
export interface TabItem {
	/**
	 * Title of the tab
	 */
	title: string;

	/**
	 * Content of the tab
	 */
	content: ReactNode;

	/**
	 * Icon component for the tab
	 */
	icon?: IconComponent;

	/**
	 * Whether the tab is active
	 */
	active?: boolean;

	/**
	 * Whether the tab is disabled
	 */
	disabled?: boolean;
}

/**
 * Tabs props.
 */
export interface TabsProps extends Omit<FlowbiteTabsProps, "color" | "label"> {
	/**
	 * The variant of the tabs
	 */
	variant?: TabsVariants;

	/**
	 * The tab items
	 */
	items?: TabItem[];
}
