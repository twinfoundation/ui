// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BadgeProps as FlowbiteBadgeProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { BadgeColors } from "./badgeColors";
import { BadgeSizes } from "./badgeSizes";

export const BadgePropTypes = {
	color: PropTypes.oneOf(Object.values(BadgeColors)),
	size: PropTypes.oneOf(Object.values(BadgeSizes)),
	dismiss: PropTypes.bool,
	onlyIcon: PropTypes.bool
};

/**
 * Badge props.
 */
export type BadgeProps = PropsWithChildren<
	InferProps<typeof BadgePropTypes> & Omit<FlowbiteBadgeProps, "color" | "label">
>;
