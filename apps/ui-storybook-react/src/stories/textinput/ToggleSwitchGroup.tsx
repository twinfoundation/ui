import React, { useState } from "react";
import { ToggleSwitch } from "flowbite-react";

interface ToggleProps {
	label?: string;
	initialChecked?: boolean;
	disabled?: boolean;
}

interface ToggleSwitchGroupProps {
	toggles: ToggleProps[];
}

export const ToggleSwitchGroup: React.FC<ToggleSwitchGroupProps> = ({ toggles }) => {
	const [toggleStates, setToggleStates] = useState(
		toggles.map(toggle => toggle.initialChecked || false)
	);

	const handleToggle = (index: number, checked: boolean) => {
		const newStates = [...toggleStates];
		newStates[index] = checked;
		setToggleStates(newStates);
	};

	return (
		<div className="flex max-w-md flex-col items-start gap-4">
			{toggles.map(({ label, disabled }, index) => (
				<ToggleSwitch
					key={index}
					checked={toggleStates[index]}
					label={label}
					onChange={checked => handleToggle(index, checked)}
					disabled={disabled}
				/>
			))}
		</div>
	);
};
