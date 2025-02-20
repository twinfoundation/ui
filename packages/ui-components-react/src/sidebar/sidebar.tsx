// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import React, { type ReactNode } from "react";
import {
	SidebarPropTypes,
	type SidebarProps,
	type SidebarItem,
	type BadgeColor
} from "./sidebarProps";

const getBadgeColorClass = (color?: BadgeColor): string => {
	switch (color) {
		case "primary":
			return "bg-surface-brand-secondary-1 !text-surface-brand-secondary-1";
		case "success":
			return "bg-surface-success !text-success";
		case "warning":
			return "bg-surface-warning !text-warning";
		case "error":
			return "bg-surface-error !text-error";
		case "information":
			return "bg-surface-information !text-information";
		default:
			return "bg-surface-gray-100 !text-gray-100";
	}
};

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
		const { logo, items, CTA, ariaLabel } = this._props;
		return (
			<FlowbiteSidebar aria-label={ariaLabel ?? "Navigation sidebar"}>
				{logo && (
					<FlowbiteSidebar.Logo href={logo.href ?? "#"} img={logo.img} imgAlt={logo.imgAlt ?? ""}>
						{logo.label}
					</FlowbiteSidebar.Logo>
				)}
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>
						{items?.map((item: SidebarItem, index: number) => (
							<React.Fragment key={`${item.href}-${item.label}-${index}`}>
								{this.renderItem(item)}
							</React.Fragment>
						))}
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
				{CTA && (
					<div className="mt-6" data-testid="sidebar-cta">
						{CTA}
					</div>
				)}
			</FlowbiteSidebar>
		);
	}

	/**
	 * Render a sidebar item and its children.
	 * @param item The item to render.
	 * @returns The rendered item.
	 */
	private renderItem(item: SidebarItem): ReactNode {
		const { label, href, icon, active, disabled, badge, badgeColor, items } = item;

		if (items && items.length > 0) {
			return (
				<FlowbiteSidebar.Collapse
					key={`${href}-${label}`}
					icon={icon}
					label={label}
					disabled={disabled}
				>
					{items.map((subItem: SidebarItem, index: number) => (
						<React.Fragment key={`${subItem.href}-${subItem.label}-${index}`}>
							{this.renderItem(subItem)}
						</React.Fragment>
					))}
				</FlowbiteSidebar.Collapse>
			);
		}

		return (
			<FlowbiteSidebar.Item
				key={`${href}-${label}`}
				href={href}
				icon={icon}
				active={active}
				disabled={disabled}
			>
				<div className="flex w-full items-center justify-between">
					<span>{label}</span>
					{badge && (
						<span
							className={`inline-flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-medium ${getBadgeColorClass(badgeColor)} text-white`}
						>
							{badge}
						</span>
					)}
				</div>
			</FlowbiteSidebar.Item>
		);
	}
}
