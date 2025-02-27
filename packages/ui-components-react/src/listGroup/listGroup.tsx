// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ListGroup as FlowbiteListGroup } from "flowbite-react";
import { memo, type JSX } from "react";
import type { ListGroupProps } from "./listGroupProps";

/**
 * ListGroup component.
 */
export const ListGroup = memo(
	({ items, className }: ListGroupProps): JSX.Element => (
		<FlowbiteListGroup className={className}>
			{items.map((item, index) => (
				<FlowbiteListGroup.Item
					key={`${item.title}-${index}`}
					icon={item.icon}
					disabled={item.disabled}
					active={item.active}
					href={item.href}
				>
					{item.title}
				</FlowbiteListGroup.Item>
			))}
		</FlowbiteListGroup>
	)
);

ListGroup.displayName = "ListGroup";
