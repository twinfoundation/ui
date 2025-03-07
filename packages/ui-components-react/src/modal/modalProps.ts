// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ModalProps as FlowbiteModalProps } from "flowbite-react";
import type { RefObject, ReactNode } from "react";
import { ModalPositions } from "./modalPositions";
import type { ModalPosition } from "./modalPositions";
import { ModalSizes } from "./modalSizes";
import type { ModalSize } from "./modalSizes";
import type { ButtonColor } from "../button/buttonColors";

/**
 *
 */
export interface FooterButton {
	/**
	 * The text to display on the button.
	 * This will be rendered as the button's content.
	 */
	label: string;
	/**
	 * Optional variant for the button's style.
	 * Uses the design system's button variants.
	 * @default "primary"
	 */
	variant?: ButtonColor;
	/**
	 * Optional callback function triggered when the button is clicked.
	 * The function takes no parameters and returns void.
	 */
	onClick?: () => void;
}

export const ModalDefaultProps = {
	show: false,
	dismissible: true,
	popup: false,
	position: ModalPositions.Center,
	size: ModalSizes.Medium
};

/**
 * Modal props.
 */
export interface ModalProps extends Pick<FlowbiteModalProps, "theme" | "className" | "root"> {
	/**
	 * Position of the modal
	 */
	position?: ModalPosition;
	/**
	 * Size of the modal
	 */
	size?: ModalSize;
	/**
	 * Whether the modal can be dismissed
	 * @default true
	 */
	dismissible?: boolean;
	/**
	 * Whether the modal is in popup style
	 * @default false
	 */
	popup?: boolean;
	/**
	 * Initial focus element
	 */
	initialFocus?: number | RefObject<HTMLElement>;
	/**
	 * Whether the modal is visible
	 * @default false
	 */
	show?: boolean;
	/**
	 * Callback when modal is closed
	 */
	onClose?: () => void;
	/**
	 * Modal header content
	 */
	header?: ReactNode;
	/**
	 * Modal body content
	 */
	body?: ReactNode;
	/**
	 * Footer buttons configuration
	 */
	footerButtons?: FooterButton[];
	/**
	 * Children content
	 */
	children?: ReactNode;
}
