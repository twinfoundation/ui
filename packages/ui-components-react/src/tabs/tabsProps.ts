// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TabsProps as FlowbiteTabsProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { TabsVariant } from "./tabsVariants";
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
	 * Can be null for inactive tabs to prevent unnecessary rendering
	 */
	content: ReactNode | null;

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

	/**
	 * Whether the tab content is loading
	 * Used to show loading state when content is being fetched
	 */
	isLoading?: boolean;

	/**
	 * Optional loading placeholder
	 * If not provided, no placeholder will be shown during loading
	 */
	loadingPlaceholder?: ReactNode;
}

/**
 * Tabs props.
 */
export interface TabsProps extends Omit<FlowbiteTabsProps, "color" | "label"> {
	/**
	 * The variant of the tabs
	 */
	variant?: TabsVariant;

	/**
	 * The tab items
	 */
	items: TabItem[];

	/**
	 * The active tab index
	 */
	activeTab?: number;

	/**
	 * The callback function to handle the active tab change
	 */
	onActiveTabChange?: (index: number) => void;

	/**
	 * Aria label for the tabs navigation
	 */
	"aria-label"?: string;
}
