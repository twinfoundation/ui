// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Spinner as FlowbiteSpinner, Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { SpinnerPropTypes, type SpinnerProps } from "./spinnerProps";

/**
 * Spinner component.
 */
export class Spinner extends React.Component<SpinnerProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = SpinnerPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: SpinnerProps;

	/**
	 * Create a new instance of Spinner.
	 * @param props The props of the component.
	 */
	constructor(props: SpinnerProps) {
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
			<div className="flex flex-row gap-3">
				<FlowbiteSpinner {...rest} aria-label="Default status example" />
				<FlowbiteButton className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover dark:bg-surface-button dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed border-2 border-transparent focus:ring">
					<FlowbiteSpinner aria-label="Spinner button example" {...rest} />
					<span className="pl-3">{children ?? "Loading..."}</span>
				</FlowbiteButton>
				<FlowbiteButton color="gray">
					<FlowbiteSpinner aria-label="Alternate spinner button example" {...rest} />
					<span className="pl-3">{children ?? "Loading..."}</span>
				</FlowbiteButton>
			</div>
		);
	}
}
