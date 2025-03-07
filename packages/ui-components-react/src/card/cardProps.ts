// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ReactNode } from "react";
import type { BadgeProps } from "../badge/badgeProps";
import type { ButtonProps } from "../button/buttonProps";
import type { IconComponent } from "../types/iconTypes";
import { SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "../constants/sizes";
import { 
  TOP, 
  LEFT, 
  TOP_RIGHT, 
  TOP_LEFT, 
  BOTTOM_RIGHT, 
  BOTTOM_LEFT 
} from "../constants/positions";

/**
 * Icon size options for the card icon.
 */
type CardIconSize = typeof SMALL | typeof MEDIUM | typeof LARGE | typeof EXTRA_LARGE;

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
 * The prop types for the CardIcon component.
 */
export interface CardIcon {
	/**
	 * The icon component to display.
	 */
	component: IconComponent;

	/**
	 * The size of the icon.
	 */
	size?: CardIconSize;

	/**
	 * Optional CSS class name for the icon.
	 */
	className?: string;
}

/**
 * The prop types for the CardButton component.
 */
export interface CardButton extends Omit<ButtonProps, "buttonText"> {
	/**
	 * The label for the button.
	 */
	label: string;
}

/**
 * Badge position options.
 */
export type BadgePosition = typeof TOP_RIGHT | typeof TOP_LEFT | typeof BOTTOM_RIGHT | typeof BOTTOM_LEFT | "inline";

/**
 * Icon position options.
 */
export type IconPosition = typeof TOP | typeof LEFT | "top-absolute";

/**
 * The props for the Card component.
 */
export interface CardProps {
	/**
	 * The children elements to display in the card.
	 * If title is not provided, children will be used as the title.
	 */
	children?: ReactNode;

	/**
	 * The title to display in the card.
	 * This takes precedence over children for the title content.
	 */
	title?: string;

	/**
	 * The content to display in the card.
	 * Can be plain text or rich React nodes.
	 */
	content?: ReactNode;

	/**
	 * The href for the card if it should be clickable.
	 */
	href?: string;

	/**
	 * Display the card horizontally.
	 * When true, the image (if provided) will appear on the left.
	 */
	horizontal?: boolean;

	/**
	 * The image to display in the card.
	 */
	image?: CardImage;

	/**
	 * The icon to display in the card.
	 * Position is controlled by the iconPosition prop.
	 */
	icon?: CardIcon;

	/**
	 * The badge to display in the card.
	 * Position is controlled by the badgePosition prop.
	 */
	badge?: BadgeProps;

	/**
	 * The position of the badge in the card.
	 * @default "top-right"
	 */
	badgePosition?: BadgePosition;

	/**
	 * The position of the icon in the card.
	 * - "top": Icon appears above the title
	 * - "left": Icon appears to the left of the title
	 * - "top-absolute": Icon appears in absolute position at the top left corner
	 * @default "top"
	 */
	iconPosition?: IconPosition;

	/**
	 * The buttons to display in the card.
	 */
	buttons?: CardButton[];
}
