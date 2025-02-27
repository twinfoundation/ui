// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Select as FlowbiteSelect } from "flowbite-react";
import { memo, type JSX } from "react";
import type { SelectProps } from "./selectProps";

/**
 * Select component.
 */
export const Select = memo(({ options, ...rest }: SelectProps): JSX.Element => (
	<FlowbiteSelect {...rest}>
		{options?.map((option, index) => (
			<option key={index} value={option?.value}>
				{option?.label}
			</option>
		))}
	</FlowbiteSelect>
));

Select.displayName = "Select";
