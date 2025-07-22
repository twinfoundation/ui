// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ModalProps as FlowbiteModalProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Modal button variant options.
 */
export type ModalButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info";

/**
 * Modal button props.
 */
export interface ModalButton {
	/**
	 * The label for the button.
	 */
	label: string;

	/**
	 * The variant/color of the button.
	 */
	variant?: ModalButtonVariant;

	/**
	 * Click handler for the button.
	 */
	onClick?: () => void;

	/**
	 * Whether the button is disabled.
	 */
	disabled?: boolean;

	/**
	 * Additional CSS classes for the button.
	 */
	className?: string;
}

/**
 * The props for the Modal component.
 */
export interface ModalProps extends Omit<FlowbiteModalProps, "color" | "label"> {
	/**
	 * The header content of the modal.
	 */
	header?: ReactNode;

	/**
	 * The body content of the modal.
	 */
	body?: ReactNode;

	/**
	 * The footer buttons of the modal.
	 */
	footerButtons?: ModalButton[];
}
