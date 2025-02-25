// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ReactNode } from "react";
import type { ButtonColors } from "../button/buttonColors";

/**
 * The prop types for the CardImage component.
 */
export interface CardImage {
	/**
	 * The source of the image.
	 */
	imgSrc: string;
	/**
	 * The alternative text for the image.
	 */
	imgAlt: string;
}

/**
 * The prop types for the CardButton component.
 */
export interface CardButton {
	/**
	 * The label for the button.
	 */
	label: string;
	/**
	 * The SVG icon for the button.
	 */
	svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	/**
	 * The color of the button.
	 */
	color?: ButtonColors;
}

/**
 * The props for the Card component.
 */
export interface CardProps {
	/**
	 * The children elements to display in the card.
	 */
	children?: ReactNode;

	/**
	 * The content to display in the card.
	 */
	content?: string;

	/**
	 * The href for the card if it should be clickable.
	 */
	href?: string;

	/**
	 * Display the card horizontally.
	 */
	horizontal?: boolean;

	/**
	 * The image to display in the card.
	 */
	image?: CardImage;

	/**
	 * The buttons to display in the card.
	 */
	buttons?: CardButton[];
}
