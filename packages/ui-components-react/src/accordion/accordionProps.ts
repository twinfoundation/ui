// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AccordionProps as FlowbiteAccordionProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const AccordionPropTypes = {
	alwaysOpen: PropTypes.bool,
	flush: PropTypes.bool,
	collapseAll: PropTypes.bool,
	content: PropTypes.node,
	accordions: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.string
		})
	)
};

/**
 * Accordion props.
 */
export type AccordionProps = PropsWithChildren<
	InferProps<typeof AccordionPropTypes> & Omit<FlowbiteAccordionProps, "color" | "label">
>;
