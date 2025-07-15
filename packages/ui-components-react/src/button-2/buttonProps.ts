// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ComponentProps, ElementType, ReactNode } from "react";
import type { ButtonColor } from "./buttonColors";
import type { ButtonSize } from "./buttonSizes";

/**
 * Button component props interface
 */
export interface ButtonProps extends Omit<ComponentProps<"button">, "color" | "label"> {
	/**
	 * Children elements
	 */
	children?: ReactNode;

	/**
	 * The color variant of the button
	 */
	color?: ButtonColor;

	/**
	 * The size variant of the button
	 */
	size?: ButtonSize;

	/**
	 * Whether to show the button in outline style
	 */
	outline?: boolean;

	/**
	 * Whether to show only the icon without text
	 */
	iconOnly?: boolean;

	/**
	 * Whether to show the button text
	 */
	showButtonText?: boolean;

	/**
	 * The text content of the button
	 */
	buttonText?: string;

	/**
	 * Whether to show the left icon
	 */
	showLeftIcon?: boolean;

	/**
	 * The component type for the left icon
	 */
	leftIcon?: ElementType;

	/**
	 * The component type for the right icon
	 */
	rightIcon?: ElementType;

	/**
	 * Whether to show the right icon
	 */
	showRightIcon?: boolean;

	/**
	 * The component type for the icon (when using iconOnly)
	 */
	icon?: ElementType;

	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;

	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Whether the button should take up the full width of its container
	 */
	fullSized?: boolean;
}
