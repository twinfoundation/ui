// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ModalProps as FlowbiteModalProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { ModalPositions } from "./modalPositions";
import { ModalSizes } from "./modalSizes";

export const ModalPropTypes = {
	position: PropTypes.oneOf(Object.values(ModalPositions)),
	size: PropTypes.oneOf(Object.values(ModalSizes)),
	dismissible: PropTypes.bool,
	popup: PropTypes.bool,
	initialFocus: PropTypes.bool,
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
export type ModalProps = PropsWithChildren<
	InferProps<typeof ModalPropTypes> & Omit<FlowbiteModalProps, "color" | "label">
>;
