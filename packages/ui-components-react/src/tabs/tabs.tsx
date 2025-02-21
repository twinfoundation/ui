// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tabs as FlowbiteTabs } from "flowbite-react";
import React, { type ReactNode } from "react";
import { TabsPropTypes, type TabsProps } from "./tabsProps";

/**
 * Tabs component.
 */
export class Tabs extends React.Component<TabsProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = TabsPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: TabsProps;

	/**
	 * Create a new instance of Tabs.
	 * @param props The props of the component.
	 */
	constructor(props: TabsProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { variant, items } = this._props;
		return (
			<FlowbiteTabs aria-label="Default tabs" variant={variant || "default"}>
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
		);
	}
}
