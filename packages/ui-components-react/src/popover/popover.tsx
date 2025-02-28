// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Popover as FlowbitePopover } from "flowbite-react";
import { memo, useMemo, type JSX } from "react";
import type { PopoverProps } from "./popoverProps";
import { Button } from "../button/button";

/**
 * Popover component.
 */
export const Popover = memo(
	({ children, customTrigger, ariaLabel, ariaDescription, ...rest }: PopoverProps): JSX.Element => {
		const trigger = useMemo(
			() => customTrigger ?? <Button color="primary">{children}</Button>,
			[children, customTrigger]
		);

		const ariaProps = useMemo(() => {
			const props: { [key: string]: string } = {};
			if (ariaLabel) {
				props["aria-label"] = ariaLabel;
			}
			if (ariaDescription) {
				props["aria-describedby"] = ariaDescription;
			}
			return props;
		}, [ariaLabel, ariaDescription]);

		return (
			<FlowbitePopover {...ariaProps} {...rest}>
				{trigger}
			</FlowbitePopover>
		);
	}
);

Popover.displayName = "Popover";
