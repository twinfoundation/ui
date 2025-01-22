// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const FormPropTypes = {
	content: PropTypes.node.isRequired,
	className: PropTypes.string
};

/**
 * Form props.
 */
export type FormProps = PropsWithChildren<InferProps<typeof FormPropTypes>>;
