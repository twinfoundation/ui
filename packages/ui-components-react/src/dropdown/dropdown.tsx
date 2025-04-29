// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Dropdown as FlowbiteDropdown } from "flowbite-react";
import { memo, type JSX } from "react";
import type { DropdownProps } from "./dropdownProps";
import { Button } from "../button/button";

/**
 * Dropdown component.
 */
export const Dropdown = memo(
	({
		title,
		header,
		size = "md",
		placement = "bottom",
		items = [],
		color = "primary",
		iconOnly = false,
		icon,
		...rest
	}: DropdownProps): JSX.Element => (
		<FlowbiteDropdown
			label={title}
			dismissOnClick={false}
			placement={placement}
			{...rest}
			renderTrigger={() => (
				<Button
					size={size}
					color={color}
					buttonText={title}
					rightIcon={icon}
					showRightIcon={!iconOnly && Boolean(icon)}
					iconOnly={iconOnly}
					icon={icon}
					aria-label={`${title} dropdown menu`}
				/>
			)}
		>
			{header && <FlowbiteDropdown.Header>{header}</FlowbiteDropdown.Header>}
			{items.length > 0
				? items.map((item, index) => {
						if (item?.divider) {
							return <FlowbiteDropdown.Divider key={`divider-${index}`} />;
						}
						return (
							<FlowbiteDropdown.Item
								key={`item-${index}`}
								className={item?.className}
								onClick={item?.onClick}
								icon={item?.icon}
								disabled={item?.disabled ?? false}
							>
								{item?.checkbox ? (
									<div className="flex items-center gap-2">
										<input
											type="checkbox"
											checked={item.checked ?? false}
											disabled={item.disabled ?? false}
											onChange={e => {
												e.preventDefault();
												e.stopPropagation();
												item.onClick?.();
											}}
											className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300 disabled:opacity-50"
											aria-label={item.label ?? ""}
										/>
										{item?.label}
									</div>
								) : (
									item?.label
								)}
							</FlowbiteDropdown.Item>
						);
					})
				: null}
		</FlowbiteDropdown>
	)
);

Dropdown.displayName = "Dropdown";
