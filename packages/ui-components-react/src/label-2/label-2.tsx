// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { type FC, memo, type PropsWithChildren } from "react";

import * as styles from "./label-2.css";

/**
 *
 */
export type Label2Props = PropsWithChildren<{
	htmlFor?: string;
	className?: string;
	value?: string;
	visuallyHidden?: boolean;
}>;

export const Label: FC<Label2Props> = memo(
	({ children, value, htmlFor, className, visuallyHidden }) => (
		<label
			htmlFor={htmlFor}
			className={[styles.label, visuallyHidden ? styles.visuallyHidden : "", className || ""]
				.filter(Boolean)
				.join(" ")}
		>
			{value ?? children ?? ""}
		</label>
	)
);

Label.displayName = "Label2";
