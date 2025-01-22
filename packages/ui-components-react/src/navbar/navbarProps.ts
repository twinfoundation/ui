// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const NavbarPropTypes = {
	content: PropTypes.node,
	brand: PropTypes.shape({
		content: PropTypes.node.isRequired,
		href: PropTypes.string
	}).isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
			active: PropTypes.bool
		})
	),
	fluid: PropTypes.bool,
	rounded: PropTypes.bool
};

/**
 * Navbar props.
 */
export type NavbarProps = PropsWithChildren<InferProps<typeof NavbarPropTypes>>;
