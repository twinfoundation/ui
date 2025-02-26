// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Dropdown as FlowbiteDropdown, Button as FlowbiteButton } from "flowbite-react";
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from "flowbite-react-icons/outline";
import { memo, type JSX } from "react";
import type { DropdownProps } from "./dropdownProps";

/**
 * Dropdown component.
 */
export const Dropdown = memo(
	({ title, header, size, placement, items, ...rest }: DropdownProps): JSX.Element => (
		<FlowbiteDropdown
			label={title}
			dismissOnClick={false}
			placement={placement ?? "bottom"}
			{...rest}
			renderTrigger={() => (
				<FlowbiteButton
					size={size ?? "md"}
					className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover dark:bg-surface-button dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed border-2 border-transparent focus:ring"
					aria-label={`${title} dropdown menu`}
				>
					<span className="inline-flex items-center gap-2">
						{title}
						{placement === "top" && <ArrowUp className="h-5 w-5" />}
						{placement === "right" && <ArrowRight className="h-5 w-5" />}
						{placement === "left" && <ArrowLeft className="h-5 w-5" />}
						{(placement === "bottom" || !placement) && <ArrowDown className="h-5 w-5" />}
					</span>
				</FlowbiteButton>
			)}
		>
			{header && <FlowbiteDropdown.Header>{header}</FlowbiteDropdown.Header>}
			{items && items?.length > 0
				? items.map((item, index) => {
						if (item?.divider) {
							return <FlowbiteDropdown.Divider key={`divider-${index}`} />;
						}
						return (
							<FlowbiteDropdown.Item
								key={`item-${index}`}
								className={item?.className ?? undefined}
								onClick={item?.onClick ?? undefined}
								icon={item?.icon ?? undefined}
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
