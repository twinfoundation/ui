// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tabs as FlowbiteTabs } from "flowbite-react";
import { Book, Chart, User, UserSettings } from "flowbite-react-icons/outline";
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
		const { variant } = this._props;
		return (
			<FlowbiteTabs aria-label="Default tabs" variant={variant || "default"}>
				<FlowbiteTabs.Item active title="Profile" icon={User}>
					This is{" "}
					<span className="font-medium text-gray-800 dark:text-white">
						Profile tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the next. The tab
					JavaScript swaps classes to control the content visibility and styling.
				</FlowbiteTabs.Item>
				<FlowbiteTabs.Item title="Dashboard" icon={Chart}>
					This is{" "}
					<span className="font-medium text-gray-800 dark:text-white">
						Dashboard tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the next. The tab
					JavaScript swaps classes to control the content visibility and styling.
				</FlowbiteTabs.Item>
				<FlowbiteTabs.Item title="Settings" icon={UserSettings}>
					This is{" "}
					<span className="font-medium text-gray-800 dark:text-white">
						Settings tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the next. The tab
					JavaScript swaps classes to control the content visibility and styling.
				</FlowbiteTabs.Item>
				<FlowbiteTabs.Item title="Contacts" icon={Book}>
					This is{" "}
					<span className="font-medium text-gray-800 dark:text-white">
						Contacts tab's associated content
					</span>
					. Clicking another tab will toggle the visibility of this one for the next. The tab
					JavaScript swaps classes to control the content visibility and styling.
				</FlowbiteTabs.Item>
				<FlowbiteTabs.Item disabled title="Disabled">
					Disabled content
				</FlowbiteTabs.Item>
			</FlowbiteTabs>
		);
	}
}
