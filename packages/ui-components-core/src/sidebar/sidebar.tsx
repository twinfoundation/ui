// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { 
	Sidebar as FlowbiteSidebar, 
	SidebarCollapse, 
	SidebarItem, 
	SidebarItems, 
	SidebarItemGroup, 
	SidebarLogo 
} from "flowbite-react";
import { memo, useCallback, useMemo, type JSX, type ReactNode } from "react";
import type { SidebarProps, SidebarItem as SidebarItemType, BadgeColor } from "./sidebarProps";
import { PRIMARY, SUCCESS, WARNING, FAILURE, INFO } from "../constants/colors";

const getBadgeColorClass = (color?: BadgeColor): string => {
	switch (color) {
		case PRIMARY:
			return "bg-surface-brand-secondary-1 !text-surface-brand-secondary-1";
		case SUCCESS:
			return "bg-surface-success !text-success";
		case WARNING:
			return "bg-surface-warning !text-warning";
		case FAILURE:
			return "bg-surface-error !text-error";
		case INFO:
			return "bg-surface-information !text-information";
		default:
			return "bg-surface-gray-100 !text-gray-100";
	}
};

const SIDEBAR_THEME_CONFIG = {
	root: {
		inner:
			"h-full overflow-y-auto overflow-x-hidden rounded bg-surface-main px-3 py-4 dark:bg-secondary"
	},
	item: {
		base: "flex items-center justify-center rounded-lg p-2 pl-2 text-base font-normal text-primary hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
		active: "text-brand-primary",
		icon: {
			active: "text-brand-primary"
		}
	}
} as const;

/**
 * Sidebar component.
 */
export const Sidebar = memo(
	({
		logo,
		items,
		CTA,
		ariaLabel,
		children,
		footerContent,
		footerItems,
		header
	}: SidebarProps): JSX.Element => {
		/**
		 * Render a sidebar item and its children.
		 * @param item The item to render.
		 * @returns The rendered item.
		 */
		const renderItem = useCallback((item: SidebarItemType): ReactNode => {
			const { label, href, icon, active, disabled, badge, badgeColor, items: subItems } = item;
			const badgeColorClass = badge ? getBadgeColorClass(badgeColor) : "";
			const itemKey = `${href}-${label}`;

			if (subItems && subItems.length > 0) {
				return (
					<SidebarCollapse key={itemKey} icon={icon} label={label} disabled={disabled}>
						{subItems.map((subItem: SidebarItemType, index: number) => {
							const subItemKey = `${subItem.href}-${subItem.label}-${index}`;
							return <div key={subItemKey}>{renderItem(subItem)}</div>;
						})}
					</SidebarCollapse>
				);
			}

			return (
				<SidebarItem href={href} icon={icon} active={active}>
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
				</SidebarItem>
			);
		}, []);

		const renderedItems = useMemo(
			() =>
				items?.map((item: SidebarItemType, index: number) => {
					const itemKey = `${item.href}-${item.label}-${index}`;
					return <div key={itemKey}>{renderItem(item)}</div>;
				}),
			[items, renderItem]
		);

		const renderedFooterItems = useMemo(
			() =>
				footerItems?.map((item: SidebarItemType, index: number) => {
					const itemKey = `footer-${item.href}-${index}`;
					return <div key={itemKey}>{renderItem(item)}</div>;
				}),
			[footerItems, renderItem]
		);

		return (
			<FlowbiteSidebar
				aria-label={ariaLabel ?? "Navigation sidebar"}
				className="flex h-full flex-col"
				theme={SIDEBAR_THEME_CONFIG}
			>
				<div className="flex h-full flex-col">
					<div className="flex-grow">
						{header && (
							<div className="mb-2" data-testid="sidebar-header">
								{header}
							</div>
						)}
						{logo && (
							<SidebarLogo
								href={logo.href ?? "#"}
								img={logo.img}
								imgAlt={logo.imgAlt ?? ""}
							>
								{logo.label}
							</SidebarLogo>
						)}
						{items && items.length > 0 && (
							<SidebarItems>
								<SidebarItemGroup>{renderedItems}</SidebarItemGroup>
							</SidebarItems>
						)}
						{CTA && (
							<div className="mt-6" data-testid="sidebar-cta">
								{CTA}
							</div>
						)}
						{children}
					</div>
					{(footerContent ?? footerItems) && (
						<div className="flex-shrink-0" data-testid="sidebar-footer">
							{footerContent}
							{footerItems && (
								<SidebarItems>
									<SidebarItemGroup>{renderedFooterItems}</SidebarItemGroup>
								</SidebarItems>
							)}
						</div>
					)}
				</div>
			</FlowbiteSidebar>
		);
	}
);

Sidebar.displayName = "Sidebar";
