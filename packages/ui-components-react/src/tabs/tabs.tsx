// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tabs as FlowbiteTabs, type TabsRef } from "flowbite-react/components/Tabs";
import { memo, useRef, useCallback, type JSX } from "react";
import type { TabsProps } from "./tabsProps";

const TABS_THEME_CONFIG = {
	base: "flex flex-col gap-2",
	tablist: {
		base: "flex w-full text-center",
		variant: {
			underline: "-mb-px flex-wrap border-b border-surface-primary dark:surface-primary-dark"
		},
		tabitem: {
			base: "flex flex-1 items-center justify-center text-sm p-4 font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-tertiary disabled:dark:text-tertiary-dark",
			variant: {
				underline: {
					base: "",
					active: {
						on: "font-bold relative after:absolute after:bottom-[-2px] after:left-1/4 after:w-1/2 after:border-b-2 after:border-brand-primary text-brand-primary",
						off: "border-b-2 border-transparent text-tertiary hover:border-gray-300 hover:text-gray-600"
					}
				}
			},
			icon: "mr-2 h-5 w-5"
		}
	}
} as const;

/**
 * Tabs component.
 * Renders a tabbed interface that supports icons, disabled states, and controlled/uncontrolled modes.
 */
export const Tabs = memo(
	({
		variant = "default",
		items = [],
		activeTab,
		onActiveTabChange,
		"aria-label": ariaLabel = "Tabs navigation"
	}: TabsProps): JSX.Element => {
		const tabsRef = useRef<TabsRef>(null);

		const handleTabChange = useCallback(
			(index: number) => {
				onActiveTabChange?.(index);
			},
			[onActiveTabChange]
		);

		if (!items.length) {
			return <></>;
		}

		return (
			<FlowbiteTabs
				aria-label={ariaLabel}
				variant={variant}
				ref={tabsRef}
				onActiveTabChange={handleTabChange}
				theme={TABS_THEME_CONFIG}
			>
				{items.map((item, index) => (
					<FlowbiteTabs.Item
						key={`tab-${item.title}-${index}`}
						title={item.title}
						icon={item.icon}
						disabled={item.disabled}
						active={activeTab === index}
						role="tab"
						aria-selected={activeTab === index}
						aria-controls={`tab-panel-${index}`}
						tabIndex={activeTab === index ? 0 : -1}
					>
						<div
							role="tabpanel"
							id={`tab-panel-${index}`}
							aria-labelledby={`tab-${item.title}-${index}`}
							hidden={activeTab !== index}
						>
							{item.content}
						</div>
					</FlowbiteTabs.Item>
				))}
			</FlowbiteTabs>
		);
	}
);

Tabs.displayName = "Tabs";
