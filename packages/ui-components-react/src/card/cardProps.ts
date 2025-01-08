// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { CardProps as FlowbiteCardProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { ButtonColors } from "./../button/buttonColors";
import { CardTypes } from "./cardTypes";

export const CardPropTypes = {
	button: PropTypes.shape({
		href: PropTypes.string,
		label: PropTypes.string.isRequired,
		icon: PropTypes.func,
		color: PropTypes.oneOf(Object.values(ButtonColors))
	}),
	image: PropTypes.shape({
		imgAlt: PropTypes.string,
		imgSrc: PropTypes.string.isRequired
	}),
	type: PropTypes.oneOf(Object.values(CardTypes)),
	profile: PropTypes.shape({
		name: PropTypes.string.isRequired,
		position: PropTypes.string,
		image: PropTypes.shape({
			alt: PropTypes.string,
			src: PropTypes.string.isRequired,
			width: PropTypes.number,
			height: PropTypes.number
		}),
		actions: PropTypes.arrayOf(
			PropTypes.shape({
				href: PropTypes.string,
				label: PropTypes.string.isRequired,
				icon: PropTypes.func,
				color: PropTypes.string
			})
		),
		buttons: PropTypes.arrayOf(
			PropTypes.shape({
				href: PropTypes.string,
				label: PropTypes.string.isRequired,
				icon: PropTypes.func,
				color: PropTypes.oneOf(Object.values(ButtonColors))
			})
		)
	}),
	eCommerce: PropTypes.shape({
		stars: PropTypes.number.isRequired,
		price: PropTypes.string.isRequired,
		buttons: PropTypes.arrayOf(
			PropTypes.shape({
				href: PropTypes.string,
				label: PropTypes.string.isRequired,
				icon: PropTypes.func,
				color: PropTypes.oneOf(Object.values(ButtonColors))
			})
		)
	}),
	content: PropTypes.string,
	href: PropTypes.string,
	horizontal: PropTypes.bool
};

/**
 * Card props.
 */
export type CardProps = PropsWithChildren<
	InferProps<typeof CardPropTypes> & Omit<FlowbiteCardProps, "color" | "label">
>;
