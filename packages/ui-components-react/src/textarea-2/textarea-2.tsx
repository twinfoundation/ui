// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React, { type ReactNode, type ComponentProps, forwardRef } from "react";
import * as styles from "./textarea-2.css";
import type { DynamicStringEnumKeysOf } from "../types/utils";

// eslint-disable-next-line jsdoc/require-jsdoc
export interface TextareaColors {
	[key: string]: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	gray: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	info: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	failure: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	warning: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	success: string;
}
export const textareaColorsValues = ["gray", "info", "failure", "warning", "success"] as const;

/**
 *
 */
export type textareaColors = (typeof textareaColorsValues)[number];

/**
 * Textarea props.
 */
export interface Textarea2Props extends Omit<ComponentProps<"textarea">, "color" | "ref"> {
	/**
	 * The textarea id.
	 */
	id?: string;
	/**
	 * The textarea name.
	 */
	disabled?: boolean;
	/**
	 * The textarea value.
	 */
	required?: boolean;
	/**
	 * The textarea read only state.
	 */
	readOnly?: boolean;
	/**
	 * The textarea name.
	 */
	name?: string;
	/**
	 * The textarea placeholder.
	 */
	placeholder?: string;
	/**
	 * The textarea value.
	 */
	value?: string;
	/**
	 * The textarea change event.
	 */
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	/**
	 * The textarea rows.
	 */
	rows?: number;
	/**
	 * The textarea columns.
	 */
	cols?: number;
	/**
	 * The textarea class name.
	 */
	className?: string;

	/**
	 * color
	 */
	color?: DynamicStringEnumKeysOf<TextareaColors>;

	/**
	 * helper text
	 */
	helperText?: ReactNode;

	/**
	 * wether to show a shadow
	 */
	shadow?: boolean;
}

export const Textarea2 = forwardRef<HTMLTextAreaElement, Textarea2Props>((props, ref) => {
	const { className, color = "gray", shadow, ...restProps } = props;

	return (
		<textarea
			ref={ref}
			className={[
				styles.textarea,
				styles.colorsVariants[color as keyof typeof styles.colorsVariants],
				styles.withShadow[shadow ? "on" : "off"],
				className
			]
				.filter(Boolean)
				.join(" ")}
			{...restProps}
		/>
	);
});

Textarea2.displayName = "Textarea";
