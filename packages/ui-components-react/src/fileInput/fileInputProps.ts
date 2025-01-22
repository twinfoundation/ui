// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { FileInputProps as FlowbiteFileInputProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { FileInputSizes } from "./fileInputSizes";

export const FileInputPropTypes = {
	sizing: PropTypes.oneOf(Object.values(FileInputSizes)),
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	helperText: PropTypes.node
};

/**
 * FileInput props.
 */
export type FileInputProps = PropsWithChildren<
	InferProps<typeof FileInputPropTypes> & Omit<FlowbiteFileInputProps, "color" | "label">
>;
