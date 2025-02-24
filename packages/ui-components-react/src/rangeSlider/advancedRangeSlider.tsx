// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React, { type ReactNode } from "react";
import {
	AdvancedRangeSliderPropTypes,
	type AdvancedRangeSliderProps
} from "./advancedRangeSliderProps";
import { Tooltip } from "../tooltip/tooltip";
import { TooltipPlacements } from "../tooltip/tooltipPlacements";

/**
 * AdvancedRangeSlider component.
 */
export class AdvancedRangeSlider extends React.Component<AdvancedRangeSliderProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = AdvancedRangeSliderPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: AdvancedRangeSliderProps;

	/**
	 * Create a new instance of AdvancedRangeSlider.
	 * @param props The props of the component.
	 */
	constructor(props: AdvancedRangeSliderProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const {
			showTooltip,
			tooltipPlacement,
			isDualHandle,
			startValue,
			endValue,
			showIcons,
			leftIcon: LeftIcon,
			rightIcon: RightIcon,
			onLeftIconClick,
			onRightIconClick
		} = this._props;

		const sliderContent = this.renderSliderContent();
		const currentStartValue = typeof startValue === "string" ? Number.parseInt(startValue, 10) : 0;
		const currentEndValue =
			isDualHandle && typeof endValue === "string"
				? Number.parseInt(endValue, 10)
				: currentStartValue;

		const wrappedContent = showTooltip ? (
			isDualHandle ? (
				<div className="relative">
					<Tooltip
						content={this.formatTooltipValue(currentStartValue)}
						placement={tooltipPlacement ?? TooltipPlacements.Top}
						trigger="hover"
					>
						<div className="absolute left-0 top-0 h-full w-1/2">{sliderContent}</div>
					</Tooltip>
					<Tooltip
						content={this.formatTooltipValue(currentEndValue)}
						placement={tooltipPlacement ?? TooltipPlacements.Top}
						trigger="hover"
					>
						<div className="absolute right-0 top-0 h-full w-1/2">{sliderContent}</div>
					</Tooltip>
				</div>
			) : (
				<Tooltip
					content={this.formatTooltipValue(currentStartValue)}
					placement={tooltipPlacement ?? TooltipPlacements.Top}
					trigger="hover"
				>
					{sliderContent}
				</Tooltip>
			)
		) : (
			sliderContent
		);

		if (showIcons) {
			return (
				<div className="flex items-center gap-4">
					{LeftIcon && (
						<button
							type="button"
							onClick={onLeftIconClick}
							className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
						>
							<LeftIcon className="h-5 w-5" />
						</button>
					)}
					{wrappedContent}
					{RightIcon && (
						<button
							type="button"
							onClick={onRightIconClick}
							className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
						>
							<RightIcon className="h-5 w-5" />
						</button>
					)}
				</div>
			);
		}

		return wrappedContent;
	}

	/**
	 * Render the slider content.
	 * @returns The slider content to render.
	 */
	private renderSliderContent(): ReactNode {
		const { isDualHandle, startValue, endValue, onRangeChange, min, max, ...rest } = this._props;

		if (isDualHandle) {
			const currentStartValue =
				typeof startValue === "string" ? Number.parseInt(startValue, 10) : (min ?? 0);
			const currentEndValue =
				typeof endValue === "string" ? Number.parseInt(endValue, 10) : (max ?? 100);

			const startSlider = (
				<input
					type="range"
					value={startValue}
					max={currentEndValue}
					min={min}
					{...rest}
					onChange={e => {
						const newStartValue = Number.parseInt(e.target.value, 10);
						if (onRangeChange) {
							onRangeChange(newStartValue, currentEndValue);
						}
					}}
					className="absolute h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
				/>
			);

			const endSlider = (
				<input
					type="range"
					value={endValue}
					min={currentStartValue}
					max={max}
					{...rest}
					onChange={e => {
						const newEndValue = Number.parseInt(e.target.value, 10);
						if (onRangeChange) {
							onRangeChange(currentStartValue, newEndValue);
						}
					}}
					className="absolute h-2 w-full cursor-pointer appearance-none rounded-lg bg-transparent"
				/>
			);

			return (
				<div className="relative h-2">
					{startSlider}
					{endSlider}
				</div>
			);
		}

		return (
			<input
				type="range"
				value={startValue}
				{...rest}
				className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
			/>
		);
	}

	/**
	 * Format the tooltip value.
	 * @param value The value to format.
	 * @returns The formatted value.
	 */
	private formatTooltipValue(value: number): string {
		const { formatTooltip } = this._props;
		return formatTooltip ? formatTooltip(value) : value.toString();
	}
}
