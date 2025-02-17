// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DatepickerProps as FlowbiteDatepickerProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const DatepickerPropTypes = {
	weekStart: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
	localization: PropTypes.shape({
		language: PropTypes.string,
		labelTodayButton: PropTypes.string,
		labelClearButton: PropTypes.string
	}),
	minDate: PropTypes.instanceOf(Date),
	maxDate: PropTypes.instanceOf(Date),
	autoHide: PropTypes.bool,
	title: PropTypes.string,
	inline: PropTypes.bool
};

/**
 * Datepicker props.
 */
export type DatepickerProps = PropsWithChildren<
	InferProps<typeof DatepickerPropTypes> & Omit<FlowbiteDatepickerProps, "color" | "label">
>;
