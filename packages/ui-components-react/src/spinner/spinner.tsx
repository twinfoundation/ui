// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Spinner as FlowbiteSpinner } from "flowbite-react";
import { type JSX, memo, useMemo } from "react";
import type { SpinnerProps } from "./spinnerProps";

const customTheme = {
	color: {
		primary: "fill-surface-brand-secondary-1",
		success: "fill-success",
		warning: "fill-warning",
		error: "fill-error",
		information: "fill-information"
	}
};

/**
 * Spinner component.
 */
export const Spinner = memo(({ color = "primary", ...rest }: SpinnerProps): JSX.Element => {
	const theme = useMemo(() => customTheme, []);
	return <FlowbiteSpinner {...rest} theme={theme} color={color} aria-label="Loading spinner" />;
});

Spinner.displayName = "Spinner";
