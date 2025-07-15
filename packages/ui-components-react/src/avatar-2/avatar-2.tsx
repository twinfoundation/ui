// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React, { type ReactNode, type ComponentProps, useMemo } from "react";
import * as styles from "./avatar-2.css";
import type { BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT } from "../constants/positions";
import type { DynamicStringEnumKeysOf } from "../types/utils";

/**
 * Avatar colors interface.
 */
export interface AvatarColors {
	[key: string]: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	info: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	failure: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	success: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	warning: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	gray: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	pink: string;
	// eslint-disable-next-line jsdoc/require-jsdoc
	purple: string;
}

/**
 * Props for the Avatar component.
 * Extends Flowbite's Avatar props with custom options.
 */
export interface Avatar2Props extends Omit<ComponentProps<"div">, "color"> {
	/**
	 * The content to display inside the avatar
	 */
	children?: ReactNode;

	/**
	 * The URL of the image to display
	 */
	img?: string;

	/**
	 * Additional CSS classes to apply
	 */
	className?: string;

	/**
	 * Alt text for the avatar image
	 */
	alt?: string;

	/**
	 * Whether to show a border around the avatar
	 */
	bordered?: boolean;

	/**
	 * The size of the avatar
	 */
	size?: "xs" | "sm" | "md" | "lg" | "xl";

	/**
	 * Whether the avatar should be rounded
	 */
	rounded?: boolean;

	/**
	 * Status indicator for the avatar
	 */
	status?: "online" | "offline" | "away" | "busy";

	/**
	 * Position of the status indicator
	 */
	statusPosition?: typeof TOP_LEFT | typeof TOP_RIGHT | typeof BOTTOM_LEFT | typeof BOTTOM_RIGHT;

	/**
	 * Whether the avatar is part of a stacked group
	 */
	stacked?: boolean;

	/**
	 * Color of the avatar
	 */
	color?: DynamicStringEnumKeysOf<AvatarColors>;

	/**
	 * Placeholder initials to display when no image is provided
	 */
	placeholderInitials?: string;
}

export const Avatar2: React.FC<Avatar2Props> = ({
	children,
	img,
	alt,
	bordered = false,
	size = "md",
	rounded = true,
	status,
	statusPosition = "bottom-right",
	placeholderInitials,
	stacked = false,
	color = "light",
	className = "",
	...rest
}) => {
	const getSizeClass = (): string => {
		switch (size) {
			case "xs":
				return styles.xs;
			case "sm":
				return styles.small;
			case "lg":
				return styles.large;
			case "xl":
				return styles.xlarge;
			default:
				return styles.medium;
		}
	};

	const getShapeClass = (): string => (rounded ? styles.roundedBase : styles.circular);

	const sanitizedAlt = useMemo(() => alt?.replace(/[<>]/g, ""), [alt]);

	const imgClassNames = [
		styles.imgBase,
		bordered && styles.bordered,
		bordered && styles.color[color as keyof typeof styles.color],
		rounded && styles.rounded,
		stacked && styles.stacked,
		getSizeClass()
	];

	return (
		<div className={`${styles.avatar} ${getShapeClass()} ${className}`} {...rest}>
			<div style={{ position: "relative" }}>
				{img ? (
					<img src={img} alt={sanitizedAlt} className={imgClassNames.filter(Boolean).join(" ")} />
				) : // eslint-disable-next-line unicorn/no-nested-ternary
				placeholderInitials ? (
					<div
						className={[
							styles.imgOff,
							styles.initialsBase,
							stacked && styles.stacked,
							bordered && styles.bordered,
							bordered && styles.color[color as keyof typeof styles.color],
							getSizeClass(),
							rounded && styles.rounded
						]
							.filter(Boolean)
							.join(" ")}
						data-testid="twin-avatar-initials-placeholder"
					>
						<span
							className={styles.initialsText}
							data-testid="twin-avatar-initials-placeholder-text"
						>
							{placeholderInitials}
						</span>
					</div>
				) : (
					<div
						className={[...imgClassNames, styles.imgOff].filter(Boolean).join(" ")}
						data-testid="twin-avatar-img"
					>
						<svg
							className={styles.imgPlaceholder}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				)}
				{status && (
					<span
						data-testid="flowbite-avatar-status"
						className={[
							styles.statusBase,
							styles.status[status as keyof typeof styles.status],
							styles.statusPosition[statusPosition as keyof typeof styles.statusPosition]
						]
							.filter(Boolean)
							.join(" ")}
					/>
				)}
			</div>
		</div>
	);
};
