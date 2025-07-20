// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Label as FlowbiteLabel } from "flowbite-react";
import { memo, type JSX } from "react";
import { checkComponentLicense } from "../utils/packageLicenseGuard";
import type { LabelProps } from "./labelProps";

/**
 * Label component.
 */
export const Label = memo(
	({ children, value, ...rest }: LabelProps): JSX.Element => {
		// Check license when component is actually used
		checkComponentLicense("Label");

		return (
			<FlowbiteLabel value={value} {...rest}>
				{value ?? children ?? ""}
			</FlowbiteLabel>
		);
	}
);

Label.displayName = "Label";
