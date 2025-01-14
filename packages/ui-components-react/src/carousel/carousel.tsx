// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Carousel as FlowbiteCarousel } from "flowbite-react";
import React, { type ReactNode } from "react";
import { CarouselPropTypes, type CarouselProps } from "./carouselProps";

/**
 * Carousel component.
 */
export class Carousel extends React.Component<CarouselProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = CarouselPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: CarouselProps;

	/**
	 * Create a new instance of Carousel.
	 * @param props The props of the component.
	 */
	constructor(props: CarouselProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, ...rest } = this._props;
		return (
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
				<FlowbiteCarousel {...rest} onSlideChange={index => this.handleOnChange(index)}>
					<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
						{children}
					</div>
					<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
				</FlowbiteCarousel>
			</div>
		);
	}

	/**
	 * Handle the onChange action.
	 */
	// eslint-disable-next-line no-restricted-syntax
	private readonly handleOnChange = (index: number): void => {
		// Custom onChange logic here
	};
}
