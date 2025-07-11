// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import * as styles from "./spinner-2.css";
import type { SpinnerProps, SpinnerColor } from "../spinner/spinnerProps";
// import { EXTRA_SMALL, SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "../constants/sizes";

const sizeMap = {
	xs: styles.xs,
	sm: styles.sm,
	md: styles.md,
	lg: styles.lg,
	xl: styles.xl
};

const colorMap: Record<SpinnerColor, string> = {
	primary: styles.primary,
	success: styles.success,
	warning: styles.warning,
	error: styles.error,
	information: styles.information
};

export const Spinner2: React.FC<SpinnerProps> = ({
	size = "md",
	color = "primary",
	className,
	...rest
}) => (
	<span
		className={[styles.spinner, sizeMap[size], colorMap[color], className || ""]
			.filter(Boolean)
			.join(" ")}
		role="status"
		aria-label="Loading spinner"
		{...rest}
	>
		<svg className={styles.svg} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle
				className={styles.track}
				cx="25"
				cy="25"
				r="20"
				stroke="currentColor"
				strokeWidth="5"
				opacity="0.2"
			/>
			<circle
				className={styles.arc}
				cx="25"
				cy="25"
				r="20"
				stroke="currentColor"
				strokeWidth="5"
				strokeLinecap="round"
				strokeDasharray="31.4 94.2"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 25 25"
					to="360 25 25"
					dur="1s"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	</span>
);
