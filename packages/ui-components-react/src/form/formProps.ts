// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ReactNode } from "react";

/**
 * Form props.
 */
export interface FormProps {
	/**
	 * The content of the form
	 */
	content: ReactNode;

	/**
	 * The CSS class name for the form
	 */
	className?: string;
}
