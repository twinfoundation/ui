// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ToggleSwitch as FlowbiteToggleSwitch } from "flowbite-react";
import { memo, useCallback, useState, type JSX } from "react";
import type { ToggleSwitchProps } from "./toggleSwitchProps";
import * as toggleSwitchTheme from "./toggleSwitchTheme.json";

/**
 * ToggleSwitch component.
 */
export const ToggleSwitch = memo(
	({ checked, color, onChange, ...rest }: ToggleSwitchProps): JSX.Element => {
		const [isChecked, setIsChecked] = useState<boolean>(checked);

		const handleChange = useCallback((): void => {
			const newValue = !isChecked;
			setIsChecked(newValue);

			if (onChange) {
				onChange();
			}
		}, [isChecked, onChange]);

		return (
			<FlowbiteToggleSwitch
				checked={isChecked}
				onChange={handleChange}
				theme={toggleSwitchTheme}
				color={color ?? "primary"}
				{...rest}
			/>
		);
	}
);

ToggleSwitch.displayName = "ToggleSwitch";
