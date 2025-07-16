// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { ComponentProps, FC } from "react";

import * as styles from "./dropdown-2.css";
/**
 * Props for DropdownDivider component.
 */
export interface DropdownDividerProps extends ComponentProps<"div"> {
	/**
	 * Additional CSS classes.
	 */
	className?: string;
}

/**
 * Dropdown divider component.
 */
export const DropdownDivider: FC<DropdownDividerProps> = ({ className = "", ...props }) => (
	<div className={`${styles.divider} ${className}`} {...props} />
);

DropdownDivider.displayName = "DropdownDivider";
