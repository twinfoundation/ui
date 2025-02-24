// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Tooltip as FlowbiteTooltip } from "flowbite-react";
import React, { type ReactNode } from "react";
import { TooltipPropTypes, type TooltipProps } from "./tooltipProps";
import { Button } from "../button/button";

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
		const { children, color, ...rest } = this._props;
		return (
			<FlowbiteTooltip {...rest}>
				<Button color={color ?? "primary"}>{children}</Button>
			</FlowbiteTooltip>
		);
	}
}
