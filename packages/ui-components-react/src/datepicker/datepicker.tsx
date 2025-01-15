// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Datepicker as FlowbiteDatepicker } from "flowbite-react";
import React, { type ReactNode } from "react";
import { DatepickerPropTypes, type DatepickerProps } from "./datepickerProps";
import * as datepickerTheme from "./datepickerTheme.json";

/**
 * Datepicker component.
 */
export class Datepicker extends React.Component<DatepickerProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = DatepickerPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: DatepickerProps;

	/**
	 * Create a new instance of Datepicker.
	 * @param props The props of the component.
	 */
	constructor(props: DatepickerProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { localization, ...rest } = this._props;
		return (
			<FlowbiteDatepicker
				{...rest}
				theme={datepickerTheme}
				language={localization?.language ?? undefined}
				labelTodayButton={localization?.labelTodayButton ?? undefined}
				labelClearButton={localization?.labelClearButton ?? undefined}
			/>
		);
	}
}
