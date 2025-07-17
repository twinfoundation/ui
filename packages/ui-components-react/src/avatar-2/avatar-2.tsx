// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React, { type FC, memo } from "react";
import * as styles from "./avatar-2.css";
import type { AvatarProps } from "./avatarProps";

/**
 * Avatar component.
 *
 * A component for displaying user profile pictures with optional status indicators.
 * 
 * Extends custom Avatar props with various options.
 */
export const Avatar2: FC<AvatarProps> = memo(
	({
		img,
		alt,
		size = "md",
		rounded = true,
		bordered = false,
		stacked = false,
		status,
		statusPosition = "bottom-right",
		className = "",
		...rest
	}: AvatarProps) => {
		const getSizeClass = () => {
			switch (size) {
				case "xs": return styles.xs;
				case "sm": return styles.small;
				case "lg": return styles.large;
				case "xl": return styles.xlarge;
				default: return styles.medium;
			}
		};

		const sizeClass = getSizeClass();
		const roundedClass = rounded ? styles.rounded : styles.roundedBase;
		const borderedClass = bordered ? styles.bordered : "";
		const stackedClass = stacked ? styles.stacked : "";

		const statusClasses = [
			styles.statusBase,
			status ? styles.status[status] : "",
			styles.statusPosition[statusPosition]
		].filter(Boolean).join(" ");

		return (
			<div className={`${styles.avatar} ${roundedClass} ${className}`} {...rest}>
				<div style={{ position: "relative" }}>
					<img
						src={img}
						alt={alt}
						className={`${styles.image} ${sizeClass} ${borderedClass} ${stackedClass}`}
					/>
					{status && (
						<span
							className={statusClasses}
							data-testid="avatar-status"
							aria-label={`Status: ${status}`}
						/>
					)}
				</div>
			</div>
		);
	}
);
