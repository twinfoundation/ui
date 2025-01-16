// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ListGroup as FlowbiteListGroup } from "flowbite-react";
import { Inbox, User } from "flowbite-react-icons/outline";
import React, { type ReactNode } from "react";
import { ListGroupPropTypes, type ListGroupProps } from "./listGroupProps";

/**
 * ListGroup component.
 */
export class ListGroup extends React.Component<ListGroupProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ListGroupPropTypes;

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
		return (
			<div className="flex justify-center">
				<FlowbiteListGroup className="w-48">
					<FlowbiteListGroup.Item icon={User}>Profile</FlowbiteListGroup.Item>
					<FlowbiteListGroup.Item>Settings</FlowbiteListGroup.Item>
					<FlowbiteListGroup.Item icon={Inbox} active>
						Messages
					</FlowbiteListGroup.Item>
					<FlowbiteListGroup.Item disabled>Download</FlowbiteListGroup.Item>
				</FlowbiteListGroup>
			</div>
		);
	}
}
