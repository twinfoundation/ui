import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface AutoCompleteProps {
	suggestions: string[];
	placeholder?: string;
	onClear: () => void;
	onSearch: (query: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
	suggestions,
	placeholder = "Search...",
	onClear,
	onSearch
}) => {
	const [query, setQuery] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setQuery(value);

		if (value) {
			setFilteredSuggestions(
				suggestions.filter(item => item.toLowerCase().includes(value.toLowerCase()))
			);
		} else {
			setFilteredSuggestions([]);
		}
	};

	const handleSuggestionClick = (suggestion: string) => {
		setQuery(suggestion);
		setFilteredSuggestions([]);
		onSearch(suggestion);
	};

	const handleClear = () => {
		setQuery("");
		setFilteredSuggestions([]);
		onClear();
	};

	return (
		<div className="relative mx-auto w-full max-w-sm">
			<div className="flex items-center rounded-md border border-gray-300 bg-white px-2 focus-within:ring-2 focus-within:ring-blue-500">
				<FiSearch className="text-gray-500" />
				<input
					type="text"
					className="flex-1 border-none p-2 text-sm focus:outline-none focus:ring-0"
					placeholder={placeholder}
					value={query}
					onChange={handleInputChange}
				/>
				{query && <FiX className="cursor-pointer text-gray-500" onClick={handleClear} />}
			</div>
			{filteredSuggestions.length > 0 && (
				<ul className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
					{filteredSuggestions.map((suggestion, index) => (
						<li
							key={index}
							className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							onClick={() => handleSuggestionClick(suggestion)}
						>
							{suggestion}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutoComplete;
