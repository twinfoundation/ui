// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ToggleSwitch as FlowbiteToggleSwitch } from "flowbite-react";
import React, { useState } from "react";
import { ToggleSwitchPropTypes, type ToggleSwitchProps } from "./toggleSwitchProps";
import * as toggleSwitchTheme from "./toggleSwitchTheme.json";

/**
 * ToggleSwitch component.
 */
export const ToggleSwitch: React.FC<ToggleSwitchProps> = props => {
	/**
	 * The prop types of the component.
	 */
	ToggleSwitch.propTypes = ToggleSwitchPropTypes;

	const { checked, color, ...rest } = props;

	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = (): void => {
		setIsChecked(!isChecked);
	};

	return (
		<FlowbiteToggleSwitch
			checked={isChecked}
			onChange={handleChange}
			theme={toggleSwitchTheme}
			color={color ?? "primary"}
			{...rest}
		/>
	);
};
