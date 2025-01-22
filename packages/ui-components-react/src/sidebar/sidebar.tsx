// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
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
		const { logo, items, CTA } = this._props;
		return (
			<FlowbiteSidebar aria-label="Sidebar with logo branding">
				<FlowbiteSidebar.Logo
					href={logo?.href ?? "#"}
					img={logo?.img ?? ""}
					imgAlt={logo?.imgAlt ?? ""}
				>
					{logo?.label}
				</FlowbiteSidebar.Logo>
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>
						{items && items.length > 0 ? (
							items.map(item => (
								<FlowbiteSidebar.Item href={item?.href} icon={item?.icon} active={item?.active}>
									{item?.label}
								</FlowbiteSidebar.Item>
							))
						) : (
							<></>
						)}
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
				{CTA && <FlowbiteSidebar.CTA>{CTA}</FlowbiteSidebar.CTA>}
			</FlowbiteSidebar>
		);
	}
}
