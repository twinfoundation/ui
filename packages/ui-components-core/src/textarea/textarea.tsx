// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Textarea as FlowbiteTextarea } from "flowbite-react";
import { memo, useCallback, type JSX } from "react";
import type { TextareaProps } from "./textareaProps";

/**
 * Textarea component.
 */
export const Textarea = memo(({ onChange, ...rest }: TextareaProps): JSX.Element => {
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			if (onChange) {
				onChange(event);
			}
		},
		[onChange]
	);

	return <FlowbiteTextarea {...rest} onChange={handleChange} />;
});

Textarea.displayName = "Textarea";
