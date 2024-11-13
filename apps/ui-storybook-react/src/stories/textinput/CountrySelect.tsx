import React from "react";
import { Label, Select } from "flowbite-react";

interface CountrySelectProps {
	label?: string;
	options: string[];
	placeholder?: string;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
	label = "Select your country",
	options,
	placeholder
}) => {
	return (
		<div className="max-w-md">
			<div className="mb-2 block">{label && <Label htmlFor="country-select" value={label} />}</div>
			<Select id="country-select" required>
				{placeholder && (
					<option disabled selected>
						{placeholder}
					</option>
				)}
				{options.map((country, index) => (
					<option key={index} value={country}>
						{country}
					</option>
				))}
			</Select>
		</div>
	);
};
