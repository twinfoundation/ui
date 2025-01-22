// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DrawerProps as FlowbiteDrawerProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { DrawerPositions } from "./drawerPositions";

export const DrawerPropTypes = {
	title: PropTypes.string.isRequired,
	bodyScrolling: PropTypes.bool,
	backdrop: PropTypes.bool,
	edge: PropTypes.bool,
	position: PropTypes.oneOf(Object.values(DrawerPositions)),
	items: PropTypes.arrayOf(PropTypes.node)
};

/**
 * Drawer props.
 */
export type DrawerProps = PropsWithChildren<
	InferProps<typeof DrawerPropTypes> & Omit<FlowbiteDrawerProps, "color" | "label">
>;
