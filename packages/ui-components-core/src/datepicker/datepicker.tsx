// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Datepicker as FlowbiteDatepicker } from "flowbite-react";
import { memo, type JSX } from "react";
import type { DatepickerProps } from "./datepickerProps";
import * as datepickerTheme from "./datepickerTheme.json";

/**
 * Datepicker component.
 */
export const Datepicker = memo(
	({ localization, ...rest }: DatepickerProps): JSX.Element => (
		<FlowbiteDatepicker
			{...rest}
			theme={datepickerTheme}
			language={localization?.language}
			labelTodayButton={localization?.labelTodayButton}
			labelClearButton={localization?.labelClearButton}
		/>
	)
);

Datepicker.displayName = "Datepicker";
