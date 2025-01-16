// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { FormSizes } from "./formSizes";

export const FormPropTypes = {
	size: PropTypes.oneOf(Object.values(FormSizes)),
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	readOnly: PropTypes.bool
};

/**
 * Form props.
 */
export type FormProps = PropsWithChildren<InferProps<typeof FormPropTypes>>;
