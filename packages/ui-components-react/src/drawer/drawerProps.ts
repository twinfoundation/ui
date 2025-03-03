// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DrawerProps as FlowbiteDrawerProps } from "flowbite-react";
import type { ElementType, ReactNode } from "react";
import type { DrawerPositions } from "./drawerPositions";
import type { ButtonColors } from "../button/buttonColors";
import type { ButtonProps } from "../button/buttonProps";

/**
 * Drawer props.
 */
export interface DrawerProps extends Omit<FlowbiteDrawerProps, "color" | "label"> {
	/**
	 * The title of the drawer.
	 */
	title: string;

	/**
	 * Whether the body should scroll when the drawer is open.
	 */
	bodyScrolling?: boolean;

	/**
	 * Whether to show a backdrop when the drawer is open.
	 */
	backdrop?: boolean;

	/**
	 * Whether the drawer should be positioned at the edge of the screen.
	 */
	edge?: boolean;

	/**
	 * The position of the drawer.
	 */
	position?: DrawerPositions;

	/**
	 * The items to display in the drawer.
	 */
	items?: ReactNode[];

	/**
	 * The text to display on the button that opens the drawer.
	 */
	buttonText?: string;

	/**
	 * The color variant of the button.
	 */
	buttonColor?: ButtonColors;

	/**
	 * Whether to show the trigger button.
	 * If false, the drawer can only be controlled programmatically.
	 */
	showButton?: boolean;

	/**
	 * Whether the drawer should be open by default.
	 */
	defaultOpen?: boolean;

	/**
	 * Additional props to pass to the button component.
	 * This allows for complete customization of the button.
	 */
	buttonProps?: Omit<ButtonProps, "buttonText" | "color" | "onClick">;

	/**
	 * Custom icon to use for the button.
	 */
	buttonIcon?: ElementType;

	/**
	 * Callback fired when the drawer open state changes.
	 */
	onOpenChange?: (isOpen: boolean) => void;
}
