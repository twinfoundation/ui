// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tabs as FlowbiteTabs, type TabsRef } from "flowbite-react/components/Tabs";
import { memo, useRef, useCallback, type JSX } from "react";
import type { TabsProps } from "./tabsProps";
import { TABS_THEME_CONFIG } from "./tabsTheme";

/**
 * Tabs component.
 * Renders a tabbed interface that supports icons, disabled states, and controlled/uncontrolled modes.
 */
export const Tabs = memo(
	({
		variant = "default",
		items = [],
		activeTab = 0,
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
						{activeTab === index && (
							<div
								role="tabpanel"
								id={`tab-panel-${index}`}
								aria-labelledby={`tab-${item.title}-${index}`}
								aria-busy={item.isLoading}
							>
								{item.isLoading && item.loadingPlaceholder}
								{!item.isLoading && item.content}
							</div>
						)}
					</FlowbiteTabs.Item>
				))}
			</FlowbiteTabs>
		);
	}
);

Tabs.displayName = "Tabs";
