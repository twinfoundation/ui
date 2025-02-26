// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { CarouselProps as FlowbiteCarouselProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Carousel props.
 */
export interface CarouselProps extends Omit<FlowbiteCarouselProps, "color" | "label"> {
	/**
	 * Whether to slide the carousel items.
	 */
	slide?: boolean;

	/**
	 * Interval in milliseconds between each slide.
	 */
	slideInterval?: number;

	/**
	 * Custom left control.
	 */
	leftControl?: ReactNode;

	/**
	 * Custom right control.
	 */
	rightControl?: ReactNode;

	/**
	 * Whether to show indicators.
	 */
	indicators?: boolean;

	/**
	 * Whether to pause the carousel on hover.
	 */
	pauseOnHover?: boolean;

	/**
	 * Collection of items to display in the carousel.
	 */
	items?: ReactNode[];

	/**
	 * Custom CSS classes to apply to the carousel.
	 */
	className?: string;

	/**
	 * Callback function to be called when the slide changes.
	 */
	onSlideChange?: (index: number) => void;
}
