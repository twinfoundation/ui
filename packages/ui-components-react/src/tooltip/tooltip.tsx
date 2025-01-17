// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tooltip as FlowbiteTooltip, Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { TooltipPropTypes, type TooltipProps } from "./tooltipProps";

/**
 * Tooltip component.
 */
export class Tooltip extends React.Component<TooltipProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = TooltipPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: TooltipProps;

	/**
	 * Create a new instance of Tooltip.
	 * @param props The props of the component.
	 */
	constructor(props: TooltipProps) {
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
			<FlowbiteTooltip {...rest}>
				<FlowbiteButton className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed border-2 border-transparent focus:ring">
					Tooltip
				</FlowbiteButton>
			</FlowbiteTooltip>
		);
	}
}
