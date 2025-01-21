// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { RangeSlider as FlowbiteRangeSlider } from "flowbite-react";
import React, { type ReactNode } from "react";
import { RangeSliderPropTypes, type RangeSliderProps } from "./rangeSliderProps";

/**
 * RangeSlider component.
 */
export class RangeSlider extends React.Component<RangeSliderProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = RangeSliderPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: RangeSliderProps;

	/**
	 * Create a new instance of RangeSlider.
	 * @param props The props of the component.
	 */
	constructor(props: RangeSliderProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteRangeSlider {...rest} />;
	}
}
