// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Select as FlowbiteSelect } from "flowbite-react";
import { memo, type FC } from "react";
import type { SelectProps } from "./selectProps";

/**
 * Select component.
 */
const Select: FC<SelectProps> = memo(({ options, ...rest }) => (
	<FlowbiteSelect {...rest}>
		{options?.map((option, index) => (
			<option key={index} value={option?.value}>
				{option?.label}
			</option>
		))}
	</FlowbiteSelect>
));

Select.displayName = "Select";

export { Select };
