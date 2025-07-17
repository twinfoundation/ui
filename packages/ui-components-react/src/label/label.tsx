// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Label as FlowbiteLabel } from "flowbite-react";
import { memo, type JSX } from "react";
import type { LabelProps } from "./labelProps";

/**
 * Label component.
 */
export const Label = memo(({ children, ...rest }: LabelProps): JSX.Element => (
	<FlowbiteLabel {...rest}>{children}</FlowbiteLabel>
));

Label.displayName = "Label";
