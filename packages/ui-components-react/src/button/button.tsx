// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ButtonPropTypes, type ButtonProps } from "./buttonProps";

const colorClasses = {
	primary:
		"focus:ring text-invert border-2 border-transparent bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed",
	secondary:
		"focus:ring text-invert border-2 border-transparent bg-surface-button-alt hover:enabled:bg-surface-button-alt-hover focus:ring-surface-button-alt-pressed",
	error:
		"focus:ring text-invert border-2 border-transparent bg-error hover:enabled:bg-system-error-tints-600 focus:ring-system-error-tints-200",
	warning:
		"focus:ring text-invert border-2 border-transparent bg-warning hover:enabled:bg-system-warning-tints-600 focus:ring-system-warning-tints-200",
	success:
		"focus:ring text-invert border-2 border-transparent bg-success hover:enabled:bg-system-success-tints-600 focus:ring-system-success-tints-200",
	info: "focus:ring text-invert border-2 border-transparent bg-information hover:enabled:bg-system-information-tints-600 focus:ring-system-information-tints-200",
	plain:
		"focus:ring text-primary border-2 border-transparent bg-surface-second hover:enabled:bg-surface-third focus:ring-surface-button-pressed dark:text-invert dark:bg-surface-third-dark dark:hover:enabled:bg-surface-second-dark dark:focus:ring-surface-button-pressed"
};

/**
 * Button component.
 */
export class Button extends React.Component<ButtonProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ButtonPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: ButtonProps;

	/**
	 * Create a new instance of Button.
	 * @param props The props of the component.
	 */
	constructor(props: ButtonProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, ...rest } = this._props;
		return (
			<FlowbiteButton
				{...rest}
				className={`${colorClasses[this._props.color ?? "primary"]} ${this._props.className ?? ""}`}
				color="primary"
			>
				{children}
			</FlowbiteButton>
		);
	}
}
