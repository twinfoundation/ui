// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { useListItem, useMergeRefs } from "@floating-ui/react";
import {
	forwardRef,
	type JSX,
	type ComponentProps,
	type ElementType,
	type FC,
	type RefCallback
} from "react";

import * as styles from "./dropdown-2.css";
import { useDropdownContext } from "./dropdownContext";

import type { PolymorphicComponentPropWithRef, PolymorphicRef } from "../types/generic-as-prop";

/**
 * Props for DropdownItem component.
 */
export type DropdownItemProps<T extends ElementType = "button"> = PolymorphicComponentPropWithRef<
	T,
	{
		href?: string;
		icon?: FC<ComponentProps<"svg">>;
		onClick?: () => void;
	}
>;

/**
 * Individual dropdown item component.
 */
type DropdownItemType = (<C extends ElementType = "button">(
	props: DropdownItemProps<C>
) => JSX.Element) & {
	displayName?: string;
};

export const DropdownItem = forwardRef(
	// @ts-expect-error: FIXME please
	<T extends ElementType = "button">(
		{ children, className, icon: Icon, onClick, ...props }: DropdownItemProps<T>,
		forwardedRef: PolymorphicRef<T>
	) => {
		const { ref: listItemRef, index } = useListItem({
			label: typeof children === "string" ? children : undefined
		});
		const ref = useMergeRefs([forwardedRef, listItemRef]);
		const { activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
		const isActive = activeIndex === index;

		// const theirProps = props as ButtonProps<T>;

		return (
			<li role="menuitem" className={styles.container}>
				<button
					ref={ref as RefCallback<T>}
					className={[styles.itemBase, className].filter(Boolean).join(" ")}
					{...props}
					{...getItemProps({
						onClick: () => {
							onClick?.();
							// eslint-disable-next-line @typescript-eslint/no-unused-expressions
							dismissOnClick && handleSelect(null);
						}
					})}
					tabIndex={isActive ? 0 : -1}
				>
					{Icon && <Icon className={styles.itemIcon} />}
					{children}
				</button>
			</li>
		);
	}
) as DropdownItemType;

DropdownItem.displayName = "DropdownItem";
