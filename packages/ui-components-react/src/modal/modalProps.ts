// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ModalProps as FlowbiteModalProps } from "flowbite-react";
import PropTypes from "prop-types";
import type { RefObject, ReactNode } from "react";
import { ModalPositions } from "./modalPositions";
import { ModalSizes } from "./modalSizes";

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
	 * Optional CSS class name(s) to apply to the button.
	 * Use this to customize the button's appearance.
	 */
	className?: string;
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

export const ModalPropTypes = {
	position: PropTypes.oneOf(Object.values(ModalPositions)),
	size: PropTypes.oneOf(Object.values(ModalSizes)),
	dismissible: PropTypes.bool,
	popup: PropTypes.bool,
	initialFocus: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			current: PropTypes.object
		})
	]),
	show: PropTypes.bool,
	onClose: PropTypes.func,
	header: PropTypes.node,
	body: PropTypes.node,
	footerButtons: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			className: PropTypes.string,
			onClick: PropTypes.func
		})
	)
};

/**
 * Modal props.
 */
export interface ModalProps extends Pick<FlowbiteModalProps, "theme" | "className" | "root"> {
	/**
	 * Position of the modal
	 */
	position?: ModalPositions;
	/**
	 * Size of the modal
	 */
	size?: ModalSizes;
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
