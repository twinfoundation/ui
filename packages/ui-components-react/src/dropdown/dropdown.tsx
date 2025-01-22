// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Dropdown as FlowbiteDropdown, Button as FlowbiteButton } from "flowbite-react";
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from "flowbite-react-icons/outline";
import React, { type ReactNode } from "react";
import { DropdownPropTypes, type DropdownProps } from "./dropdownProps";

/**
 * Dropdown component.
 */
export class Dropdown extends React.Component<DropdownProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = DropdownPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: DropdownProps;

	/**
	 * Create a new instance of Dropdown.
	 * @param props The props of the component.
	 */
	constructor(props: DropdownProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { header, size, placement, items, ...rest } = this._props;
		return (
			<div className="m-auto mt-5 block w-auto pt-5 text-center">
				<div className="h-[20vh]"></div>
				<FlowbiteDropdown
					label=""
					dismissOnClick={false}
					placement={placement ?? "bottom"}
					{...rest}
					renderTrigger={() => (
						<FlowbiteButton
							size={size ?? "md"}
							className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover dark:bg-surface-button dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed m-auto mt-5 border-2 border-transparent focus:ring"
						>
							Dropdown
							{placement === "top" && <ArrowUp className="ml-2 h-5 w-5" />}
							{placement === "right" && <ArrowRight className="ml-2 h-5 w-5" />}
							{placement === "left" && <ArrowLeft className="ml-2 h-5 w-5" />}
							{(placement === "bottom" || !placement) && <ArrowDown className="ml-2 h-5 w-5" />}
						</FlowbiteButton>
					)}
				>
					{header && <FlowbiteDropdown.Header>{header}</FlowbiteDropdown.Header>}
					{items && items?.length > 0 ? (
						items.map(item => {
							if (item?.divider) {
								return <FlowbiteDropdown.Divider />;
							}
							return (
								<FlowbiteDropdown.Item
									className={item?.className ?? undefined}
									onClick={item?.onClick ?? undefined}
									icon={item?.icon ?? undefined}
								>
									{item?.label}
								</FlowbiteDropdown.Item>
							);
						})
					) : (
						<></>
					)}
				</FlowbiteDropdown>
			</div>
		);
	}
}
