// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { TextInput as FlowbiteTextInput } from "flowbite-react";
import { memo, useCallback, type JSX } from "react";
import type { TextInputProps } from "./textInputProps";

/**
 * TextInput component.
 */
export const TextInput = memo(({ type, onChange, ...rest }: TextInputProps): JSX.Element => {
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(event);
			}
		},
		[onChange]
	);

	return <FlowbiteTextInput type={type ?? "text"} onChange={handleChange} {...rest} />;
});

TextInput.displayName = "TextInput";
