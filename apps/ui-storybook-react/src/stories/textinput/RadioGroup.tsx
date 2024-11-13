import React from "react";
import { Radio, Label } from "flowbite-react";

interface RadioOption {
	id: string;
	label: string;
	value: string;
	disabled?: boolean;
	defaultChecked?: boolean;
}

interface RadioGroupProps {
	legend: string;
	name: string;
	options: RadioOption[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ legend, name, options }) => {
	return (
		<fieldset className="flex max-w-md flex-col gap-4">
			<legend className="mb-4">{legend}</legend>
			{options.map(({ id, label, value, disabled, defaultChecked }) => (
				<div className="flex items-center gap-2" key={id}>
					<Radio
						id={id}
						name={name}
						value={value}
						disabled={disabled}
						defaultChecked={defaultChecked}
					/>
					<Label htmlFor={id} disabled={disabled}>
						{label}
					</Label>
				</div>
			))}
		</fieldset>
	);
};
