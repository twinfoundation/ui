// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { FileInput as FlowbiteFileInput } from "flowbite-react";
import { memo, type JSX } from "react";
import type { FileInputProps } from "./fileInputProps";

/**
 * FileInput component.
 */
export const FileInput = memo(
	({ ...props }: FileInputProps): JSX.Element => <FlowbiteFileInput {...props} />
);

FileInput.displayName = "FileInput";
