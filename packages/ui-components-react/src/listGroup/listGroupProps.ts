// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import PropTypes from "prop-types";
import type { FC, SVGProps } from "react";

export const ListGroupPropTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			icon: PropTypes.func,
			active: PropTypes.bool,
			disabled: PropTypes.bool,
			href: PropTypes.string
		})
	).isRequired,
	className: PropTypes.string
};

/**
 * Props for a single list group item
 */
export interface ListGroupItem {
	/**
	 * The title text of the list item
	 */
	title: string;
	/**
	 * Optional icon component to display
	 */
	icon?: FC<SVGProps<SVGSVGElement>>;
	/**
	 * Whether the item is active
	 */
	active?: boolean;
	/**
	 * Whether the item is disabled
	 */
	disabled?: boolean;
	/**
	 * Optional href for the item
	 */
	href?: string;
}

/**
 * Props for the ListGroup component
 */
export interface ListGroupProps {
	/**
	 * Array of list items to display
	 */
	items: ListGroupItem[];
	/**
	 * Additional CSS classes
	 */
	className?: string;
}
