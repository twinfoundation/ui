// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { FileInputProps as FlowbiteFileInputProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { FileInputSize } from "./fileInputSizes";

/**
 * FileInput props.
 */
export interface FileInputProps extends Omit<FlowbiteFileInputProps, "color" | "label"> {
	/**
	 * The size of the file input
	 */
	sizing?: FileInputSize;

	/**
	 * Whether the file input is disabled
	 */
	disabled?: boolean;

	/**
	 * Whether the file input is required
	 */
	required?: boolean;

	/**
	 * The id of the file input
	 */
	id?: string;

	/**
	 * The name of the file input
	 */
	name?: string;

	/**
	 * Helper text to display below the file input
	 */
	helperText?: ReactNode;
}
