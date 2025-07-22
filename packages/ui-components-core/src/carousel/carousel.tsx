// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { memo, type JSX } from "react";
import type { CarouselProps } from "./carouselProps";

/**
 * Carousel component.
 */
export const Carousel = memo(
	({ items, className, ...rest }: CarouselProps): JSX.Element => (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
			<FlowbiteCarousel {...rest}>
				{items && items?.length > 0 ? (
					items.map((item, index) => (
						<div
							key={index}
							className={`flex h-full items-center justify-center ${className ?? "bg-gray-400 dark:bg-gray-700 dark:text-white"}`}
						>
							{item}
						</div>
					))
				) : (
					<></>
				)}
			</FlowbiteCarousel>
		</div>
	)
);

Carousel.displayName = "Carousel";
