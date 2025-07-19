// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import { Popover as FlowbitePopover } from "flowbite-react";
import type { PopoverProps } from "./popoverProps";

/**
 * Popover component.
 */
export const Popover = React.memo(
	({ children, customTrigger, ariaLabel, ariaDescription, ...rest }: PopoverProps): React.JSX.Element => {
		const trigger = React.useMemo(
			() => customTrigger ?? <button>{children}</button>,
			[children, customTrigger]
		);

		const ariaProps = React.useMemo(() => {
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
