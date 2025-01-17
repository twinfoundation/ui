// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { CarouselProps as FlowbiteCarouselProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const CarouselPropTypes = {
	slide: PropTypes.bool,
	slideInterval: PropTypes.number,
	leftControl: PropTypes.node,
	rightControl: PropTypes.node,
	indicators: PropTypes.bool,
	pauseOnHover: PropTypes.bool,
	content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])).isRequired,
	className: PropTypes.string,
	onSlideChange: PropTypes.func
};

/**
 * Carousel props.
 */
export type CarouselProps = PropsWithChildren<
	InferProps<typeof CarouselPropTypes> & Omit<FlowbiteCarouselProps, "color" | "label">
>;
