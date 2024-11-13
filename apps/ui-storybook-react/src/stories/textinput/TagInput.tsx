import React, { useState } from "react";
import {  HiX } from "react-icons/hi";

interface TagInputProps {
  label?: string;
  placeholder?: string;
  note?: string;
}

export const TagInput: React.FC<TagInputProps> = ({ label, placeholder = "Add a tag...", note }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setTags((prevTags) => [...prevTags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="max-w-md">
      {label && <label className="block mb-2 font-semibold text-gray-700">{label}</label>}
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 p-2 rounded-md ">
        {tags.map((tag) => (
          <div key={tag} className="flex items-center bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
            {tag}
            <HiX
              onClick={() => removeTag(tag)}
              className="ml-1 h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700"
            />
          </div>
        ))}
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addTag}
          className="border-none border-0 outline-none focus:ring-0 flex-grow text-sm "
        />
      </div>
      {note && <p className="mt-1 text-sm text-gray-500">{note}</p>}
    </div>
  );
};
