// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Radio as FlowbiteRadio } from "flowbite-react";
import { useCallback, memo, type JSX } from "react";
import type { RadioProps } from "./radioProps";

/**
 * Radio component.
 */
export const Radio = memo(({ onChange, ...rest }: RadioProps): JSX.Element => {
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(event);
			}
		},
		[onChange]
	);

	return <FlowbiteRadio {...rest} onChange={handleChange} />;
});

Radio.displayName = "Radio";
