// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ListGroup as FlowbiteListGroup } from "flowbite-react";
import React, { type ReactNode } from "react";
import type { ListGroupProps } from "./listGroupProps";

/**
 * ListGroup component.
 */
export class ListGroup extends React.Component<ListGroupProps> {
	/**
	 * The props of the component.
	 */
	private readonly _props: ListGroupProps;

	/**
	 * Create a new instance of ListGroup.
	 * @param props The props of the component.
	 */
	constructor(props: ListGroupProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { items, className } = this._props;

		return (
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
		);
	}
}
