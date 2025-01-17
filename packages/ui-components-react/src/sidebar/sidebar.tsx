// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Sidebar as FlowbiteSidebar,
	Badge as FlowbiteBadge
} from "flowbite-react";
import { ArrowRight, ChartPie, CircleMinus, CirclePlus, DotsVertical, QuestionCircle, ShoppingBag, TableColumn } from "flowbite-react-icons/outline";
import React, { type ReactNode } from "react";
import { SidebarPropTypes, type SidebarProps } from "./sidebarProps";

/**
 * Sidebar component.
 */
export class Sidebar extends React.Component<SidebarProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = SidebarPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: SidebarProps;

	/**
	 * Create a new instance of Sidebar.
	 * @param props The props of the component.
	 */
	constructor(props: SidebarProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		return (
			<FlowbiteSidebar aria-label="Sidebar with logo branding example">
				<FlowbiteSidebar.Logo href="#" img="https://flowbite-react.com/favicon.svg" imgAlt="Flowbite logo">
					Flowbite
				</FlowbiteSidebar.Logo>
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>
						<FlowbiteSidebar.Item href="#" icon={ChartPie}>
							Dashboard
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Collapse
							icon={ShoppingBag}
							label="E-commerce"
							renderChevronIcon={(theme, open) => {
								const IconComponent = open ? CircleMinus : CirclePlus;

								return <IconComponent/>;
							}}
						>
							<FlowbiteSidebar.Item href="#">Products</FlowbiteSidebar.Item>
							<FlowbiteSidebar.Item href="#">Sales</FlowbiteSidebar.Item>
							<FlowbiteSidebar.Item href="#">Refunds</FlowbiteSidebar.Item>
							<FlowbiteSidebar.Item href="#">Shipping</FlowbiteSidebar.Item>
						</FlowbiteSidebar.Collapse>
						<FlowbiteSidebar.Item href="#" icon={ArrowRight}>
							Sign In
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#" icon={TableColumn}>
							Sign Up
						</FlowbiteSidebar.Item>
					</FlowbiteSidebar.ItemGroup>
					<FlowbiteSidebar.ItemGroup>
						<FlowbiteSidebar.Item href="#" icon={DotsVertical}>
							Documentation
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#" icon={QuestionCircle}>
							Help
						</FlowbiteSidebar.Item>
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
				<FlowbiteSidebar.CTA>
					<div className="mb-3 flex items-center">
					<FlowbiteBadge color="warning">Beta</FlowbiteBadge>
					<button
						aria-label="Close"
						className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
						type="button"
					>
						<svg
						aria-hidden
						className="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
						</svg>
					</button>
					</div>
					<div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
					Preview the new Flowbite dashboard navigation! You can turn the new
					navigation off for a limited time in your
					profile.
					</div>
					<a
					className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
					href="#"
					>
					Turn new navigation off
					</a>
				</FlowbiteSidebar.CTA>
			</FlowbiteSidebar>
		);
	}
}
