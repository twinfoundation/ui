import React from "react";
import { Checkbox, Label } from "flowbite-react";

interface CheckboxOption {
	id: string;
	label: string;
	link?: { href: string; text: string };
	defaultChecked?: boolean;
	disabled?: boolean;
	description?: string;
}

interface CheckboxGroupProps {
	checkboxes: CheckboxOption[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ checkboxes }) => {
	return (
		<div className="flex max-w-md flex-col gap-4" id="checkbox">
			{checkboxes.map(({ id, label, link, defaultChecked, disabled, description }) => (
				<div className="flex items-center gap-2" key={id}>
					<Checkbox id={id} defaultChecked={defaultChecked} disabled={disabled} />
					<Label htmlFor={id} className="flex">
						{label}&nbsp;
						{link && (
							<a href={link.href} className="text-cyan-600 hover:underline dark:text-cyan-500">
								{link.text}
							</a>
						)}
					</Label>
					{description && (
						<div className="text-gray-500 dark:text-gray-300">
							<span className="text-xs font-normal">{description}</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
