// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TextareaProps as FlowbiteTextareaProps } from "flowbite-react";
import type { PropsWithChildren } from "react";

/**
 * Textarea props.
 */
export interface TextareaProps extends PropsWithChildren<FlowbiteTextareaProps> {
	/**
	 * The textarea id.
	 */
	id?: string;
	/**
	 * The textarea name.
	 */
	disabled?: boolean;
	/**
	 * The textarea value.
	 */
	required?: boolean;
	/**
	 * The textarea read only state.
	 */
	readOnly?: boolean;
	/**
	 * The textarea name.
	 */
	name?: string;
	/**
	 * The textarea placeholder.
	 */
	placeholder?: string;
	/**
	 * The textarea value.
	 */
	value?: string;
	/**
	 * The textarea change event.
	 */
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	/**
	 * The textarea rows.
	 */
	rows?: number;
	/**
	 * The textarea columns.
	 */
	cols?: number;
	/**
	 * The textarea class name.
	 */
	className?: string;
}
