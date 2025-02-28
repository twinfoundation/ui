// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { memo, type JSX } from "react";
import type { FormProps } from "./formProps";

/**
 * Form component.
 */
export const Form = memo(
	({ className, content }: FormProps): JSX.Element => (
		<form className={className ?? ""}>{content}</form>
	)
);

Form.displayName = "Form";
