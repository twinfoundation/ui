// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Checkbox as FlowbiteCheckbox } from "flowbite-react";
import { memo } from "react";
import type { CheckboxProps } from "./checkboxProps";

export const Checkbox = memo((props: CheckboxProps) => <FlowbiteCheckbox {...props} />);

Checkbox.displayName = "Checkbox";
