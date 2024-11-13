import React, { useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";

interface SearchInputProps {
	placeholder?: string;
	borderColor?: string;
	errorMessage?: string;
	onClear?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder = "Search...",
	borderColor = "border-gray-300",
	errorMessage,
	onClear
}) => {
	const [value, setValue] = useState("");

	const handleClear = () => {
		setValue("");
		if (onClear) onClear();
	};

	return (
		<div className="flex max-w-md flex-col">
			<div className={`relative flex items-center border-b ${borderColor} py-2`}>
				<HiSearch className="ml-2 text-gray-500" />

				<input
					type="text"
					placeholder={!value ? placeholder : ""}
					value={value}
					onChange={e => setValue(e.target.value)}
					className={`flex-1 border-0 border-none bg-transparent px-2 text-gray-700 placeholder-transparent focus:ring-0`}
				/>

				<HiX onClick={handleClear} className="mr-2 cursor-pointer text-gray-500" />

				<label
					className={` ${
						value
							? "text-md absolute left-8 top-0 text-xs text-gray-500 transition-all duration-200"
							: "hidden"
					}`}
				>
					{placeholder}
				</label>
			</div>

			{errorMessage && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
		</div>
	);
};

export default SearchInput;
