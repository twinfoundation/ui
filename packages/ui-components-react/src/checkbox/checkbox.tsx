// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Checkbox as FlowbiteCheckbox } from "flowbite-react";
import { memo, type JSX } from "react";
import type { CheckboxProps } from "./checkboxProps";

/**
 * Checkbox component.
 */
export const Checkbox = memo(
	(props: CheckboxProps): JSX.Element => <FlowbiteCheckbox {...props} />
);

Checkbox.displayName = "Checkbox";
