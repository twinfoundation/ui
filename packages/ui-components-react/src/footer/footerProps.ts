// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const FooterPropTypes = {
	disabled: PropTypes.bool
};

/**
 * Footer props.
 */
export type FooterProps = PropsWithChildren<InferProps<typeof FooterPropTypes>>;
