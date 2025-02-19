// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Popover as FlowbitePopover, Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { PopoverPropTypes, type PopoverProps } from "./popoverProps";

/**
 * Popover component.
 */
export class Popover extends React.Component<PopoverProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = PopoverPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: PopoverProps;

	/**
	 * Create a new instance of Popover.
	 * @param props The props of the component.
	 */
	constructor(props: PopoverProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, customTrigger, ariaLabel, ariaDescription, ...rest } = this._props;

		const trigger = customTrigger ?? (
			<FlowbiteButton className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover dark:bg-surface-button dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed border-2 border-transparent focus:ring">
				{children}
			</FlowbiteButton>
		);

		return (
			<FlowbitePopover
				{...(ariaLabel && { "aria-label": ariaLabel })}
				{...(ariaDescription && { "aria-describedby": ariaDescription })}
				{...rest}
			>
				{trigger}
			</FlowbitePopover>
		);
	}
}
