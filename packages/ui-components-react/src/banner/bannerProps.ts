// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BannerComponentProps as FlowbiteBannerProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const BannerPropTypes = {
	bottom: PropTypes.bool
};

/**
 * Banner props.
 */
export type BannerProps = PropsWithChildren<
	InferProps<typeof BannerPropTypes> & Omit<FlowbiteBannerProps, "color" | "label">
>;
