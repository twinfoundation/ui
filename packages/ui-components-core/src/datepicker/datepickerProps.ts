// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DatepickerProps as FlowbiteDatepickerProps } from "flowbite-react";

/**
 * Localization settings for internationalization
 */
export interface DatepickerLocalization {
	/**
	 * BCP 47 language tag for localization
	 * @example 'en-US', 'fr-FR'
	 */
	language?: string;

	/**
	 * Accessible label for the "Today" selection button
	 * @default 'Today'
	 */
	labelTodayButton?: string;

	/**
	 * Accessible label for the date clear button
	 * @default 'Clear'
	 */
	labelClearButton?: string;
}

/**
 * Day of the week (0-6)
 * 0 = Sunday, 1 = Monday, etc.
 */
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Datepicker props.
 */
export interface DatepickerProps extends Omit<FlowbiteDatepickerProps, "color" | "label"> {
	/**
	 * The first day of the week
	 * @default 0 (Sunday)
	 * @example 1 for Monday-first calendar grids
	 */
	weekStart?: WeekDay;

	/**
	 * Localization settings for internationalization
	 */
	localization?: DatepickerLocalization;

	/**
	 * Earliest selectable date in the calendar
	 * @default undefined (no minimum constraint)
	 */
	minDate?: Date;

	/**
	 * Latest selectable date in the calendar
	 * @default undefined (no maximum constraint)
	 */
	maxDate?: Date;

	/**
	 * Automatically hide the calendar after date selection
	 * @default true
	 */
	autoHide?: boolean;

	/**
	 * Header text displayed above the calendar
	 * @default 'Select date'
	 */
	title?: string;

	/**
	 * Display the calendar inline instead of as a popover
	 * @default false
	 */
	inline?: boolean;
}
