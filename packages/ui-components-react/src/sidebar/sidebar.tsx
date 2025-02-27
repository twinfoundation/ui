// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { memo, useCallback, useMemo, type JSX, type ReactNode } from "react";
import type { SidebarProps, SidebarItem, BadgeColor } from "./sidebarProps";

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
export const Sidebar = memo(
	({ logo, items, CTA, ariaLabel, children }: SidebarProps): JSX.Element => {
		/**
		 * Render a sidebar item and its children.
		 * @param item The item to render.
		 * @returns The rendered item.
		 */
		const renderItem = useCallback((item: SidebarItem): ReactNode => {
			const { label, href, icon, active, disabled, badge, badgeColor, items: subItems } = item;

			const badgeColorClass = useMemo(
				() => (badge ? getBadgeColorClass(badgeColor) : ""),
				[badge, badgeColor]
			);

			const itemKey = useMemo(() => `${href}-${label}`, [href, label]);

			if (subItems && subItems.length > 0) {
				return (
					<FlowbiteSidebar.Collapse key={itemKey} icon={icon} label={label} disabled={disabled}>
						{subItems.map((subItem: SidebarItem, index: number) => {
							const subItemKey = `${subItem.href}-${subItem.label}-${index}`;
							return <div key={subItemKey}>{renderItem(subItem)}</div>;
						})}
					</FlowbiteSidebar.Collapse>
				);
			}

			return (
				<FlowbiteSidebar.Item href={href} icon={icon} active={active} disabled={disabled}>
					<div className="flex w-full items-center justify-between">
						<span>{label}</span>
						{badge && (
							<span
								className={`inline-flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-medium ${badgeColorClass} text-white`}
							>
								{badge}
							</span>
						)}
					</div>
				</FlowbiteSidebar.Item>
			);
		}, []);

		const renderedItems = useMemo(
			() =>
				items?.map((item: SidebarItem, index: number) => {
					const itemKey = `${item.href}-${item.label}-${index}`;
					return <div key={itemKey}>{renderItem(item)}</div>;
				}),
			[items, renderItem]
		);

		return (
			<FlowbiteSidebar aria-label={ariaLabel ?? "Navigation sidebar"}>
				{logo && (
					<FlowbiteSidebar.Logo href={logo.href ?? "#"} img={logo.img} imgAlt={logo.imgAlt ?? ""}>
						{logo.label}
					</FlowbiteSidebar.Logo>
				)}
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>{renderedItems}</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
				{CTA && (
					<div className="mt-6" data-testid="sidebar-cta">
						{CTA}
					</div>
				)}
				{children}
			</FlowbiteSidebar>
		);
	}
);

Sidebar.displayName = "Sidebar";
