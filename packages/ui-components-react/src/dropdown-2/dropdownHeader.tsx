// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { ComponentProps, FC } from "react";

import * as styles from "./dropdown-2.css";
import { DropdownDivider } from "./dropdownDivider";

/**
 *
 */
export type DropdownHeaderProps = ComponentProps<"div">;

export const DropdownHeader: FC<DropdownHeaderProps> = ({ children, className, ...props }) => (
	<>
		<div className={[styles.header, className].filter(Boolean).join(" ")} {...props}>
			{children}
		</div>
		<DropdownDivider />
	</>
);
