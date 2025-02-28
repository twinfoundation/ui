// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tabs as FlowbiteTabs } from "flowbite-react";
import { memo, type JSX } from "react";
import type { TabsProps } from "./tabsProps";

/**
 * Tabs component.
 */
export const Tabs = memo(
	({ variant = "default", items = [] }: TabsProps): JSX.Element => (
		<FlowbiteTabs aria-label="Default tabs" variant={variant}>
			{items && items.length > 0 ? (
				items.map((item, index) => (
					<FlowbiteTabs.Item
						key={index}
						title={item?.title ?? ""}
						icon={item?.icon ?? undefined}
						disabled={item?.disabled ?? false}
						active={item?.active ?? false}
					>
						{item?.content}
					</FlowbiteTabs.Item>
				))
			) : (
				<></>
			)}
		</FlowbiteTabs>
	)
);

Tabs.displayName = "Tabs";
