// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Select as FlowbiteSelect } from "flowbite-react";
import React, { type ReactNode } from "react";
import { SelectPropTypes, type SelectProps } from "./selectProps";

/**
 * Select component.
 */
export class Select extends React.Component<SelectProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = SelectPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: SelectProps;

	/**
	 * Create a new instance of Select.
	 * @param props The props of the component.
	 */
	constructor(props: SelectProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { options, ...rest } = this._props;
		return (
			<FlowbiteSelect {...rest}>
				{options?.map((option, index) => (
					<option
						key={index}
						value={option?.value ?? undefined}
						selected={option?.selected ?? false}
					>
						{option?.label}
					</option>
				))}
			</FlowbiteSelect>
		);
	}
}
