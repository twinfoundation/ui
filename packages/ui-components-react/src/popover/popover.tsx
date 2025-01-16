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
		const { ...rest } = this._props;
		return (
			<FlowbitePopover
			aria-labelledby="default-popover"
			{...rest}
			content={
				<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
					<div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
						<h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
					</div>
					<div className="px-3 py-2">
						<p>And here's some amazing content. It's very engaging. Right?</p>
					</div>
				</div>
			}
			>
				<FlowbiteButton className="focus:ring text-invert border-2 border-transparent bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed">Activate popover</FlowbiteButton>
			</FlowbitePopover>
		);
	}
}
