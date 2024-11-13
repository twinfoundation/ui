import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { HiUser } from "react-icons/hi";

interface TextInputWithLabelProps {
	color: string;
	label: string;
	placeholder: string;
	borderColor: string;
	size: string;
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
	color,
	label,
	placeholder,
	size
}) => {
	const [value, setValue] = useState("");

	return (
		<div className="flex max-w-md flex-col gap-2">
			<div>
				<Label htmlFor={`input-${color}`} value={label} className="mb-2 block" />
				<TextInput
					id={`input-${color}`}
					placeholder={placeholder}
					required
					icon={HiUser}
					color={color}
					value={value}
					onChange={e => setValue(e.target.value)}
					sizing={size}
				/>
		    <HiUser className="absolute right-[43.5rem] top-[47%] -translate-y-1/2 text-gray-400" />
			</div>
			<p className="text-sm text-gray-500">
				We’ll never share your details. See our{" "}
				<a href="/privacy-policy" className="text-blue-500 underline">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	);
};

export default TextInputWithLabel;
